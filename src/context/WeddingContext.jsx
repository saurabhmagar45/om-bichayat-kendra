import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_RENTAL_CART, INITIAL_USER_BOOKINGS } from '../data/weddingData';

const WeddingContext = createContext();

export function WeddingProvider({ children }) {
  // Rental Cart State
  const [rentalCart, setRentalCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ombichayat_rental_cart') || localStorage.getItem('aarambh_rental_cart');
      return saved ? JSON.parse(saved) : INITIAL_RENTAL_CART;
    } catch {
      return INITIAL_RENTAL_CART;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('ombichayat_wishlist') || localStorage.getItem('aarambh_wishlist');
      return saved ? JSON.parse(saved) : ["rent-01", "gal-01", "cat-01", "pkg-premium"];
    } catch {
      return ["rent-01", "gal-01", "cat-01", "pkg-premium"];
    }
  });

  // User Bookings State
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('ombichayat_bookings') || localStorage.getItem('aarambh_bookings');
      return saved ? JSON.parse(saved) : INITIAL_USER_BOOKINGS;
    } catch {
      return INITIAL_USER_BOOKINGS;
    }
  });

  // Modals
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeMenuPackage, setActiveMenuPackage] = useState(null);
  const [activeServiceDetail, setActiveServiceDetail] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledBookingPackage, setPrefilledBookingPackage] = useState(null);

  // Toasts
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ombichayat_rental_cart', JSON.stringify(rentalCart));
    } catch {}
  }, [rentalCart]);

  useEffect(() => {
    try {
      localStorage.setItem('ombichayat_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('ombichayat_bookings', JSON.stringify(bookings));
    } catch {}
  }, [bookings]);

  // Cart operations
  const addToRentalCart = (product, qty = 1) => {
    const effectiveQty = Math.max(qty, product.minOrder || 1);
    setRentalCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + effectiveQty
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity: effectiveQty }];
      }
    });
    addToast(`Added "${product.name.slice(0, 32)}..." to Rental Cart`, 'success');
  };

  const updateRentalCartQty = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromRentalCart(productId);
      return;
    }
    setRentalCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromRentalCart = (productId) => {
    setRentalCart((prev) => prev.filter((item) => item.id !== productId));
    addToast('Item removed from Rental Cart', 'info');
  };

  const clearRentalCart = () => {
    setRentalCart([]);
    addToast('Rental cart cleared', 'info');
  };

  const cartTotalItems = rentalCart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = rentalCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartDeposit = Math.round(cartSubtotal * 0.25); // 25% refundable security deposit
  const cartGrandTotal = cartSubtotal + cartDeposit;

  // Wishlist operations
  const toggleWishlist = (item) => {
    const itemId = typeof item === 'string' ? item : item.id;
    const title = typeof item === 'object' ? item.name || item.title : 'Item';

    setWishlist((prev) => {
      const exists = prev.includes(itemId);
      if (exists) {
        addToast(`Removed "${title.slice(0, 24)}..." from Wishlist`, 'info');
        return prev.filter((id) => id !== itemId);
      } else {
        addToast(`Saved "${title.slice(0, 24)}..." to Wishlist`, 'success');
        return [...prev, itemId];
      }
    });
  };

  const isWishlisted = (id) => wishlist.includes(id);

  // Booking operations
  const submitBooking = (bookingData) => {
    const newId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: newId,
      ...bookingData,
      status: 'Confirmed',
      createdDate: new Date().toISOString().split('T')[0],
      paidAmount: 25000 // simulated booking token
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Celebrate with confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#701F35', '#C6A15B', '#DFBF7E', '#FFFDF9']
      });
    } catch {}

    addToast(`🎉 Booking request ${newId} submitted successfully!`, 'success');
    return newBooking;
  };

  const openBookingModalWithPackage = (pkg) => {
    setPrefilledBookingPackage(pkg);
    setIsBookingModalOpen(true);
  };

  return (
    <WeddingContext.Provider
      value={{
        rentalCart,
        addToRentalCart,
        updateRentalCartQty,
        removeFromRentalCart,
        clearRentalCart,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        cartTotalItems,
        cartSubtotal,
        cartDeposit,
        cartGrandTotal,

        wishlist,
        toggleWishlist,
        isWishlisted,

        bookings,
        submitBooking,

        activeLightboxImage,
        setActiveLightboxImage,
        activeMenuPackage,
        setActiveMenuPackage,
        activeServiceDetail,
        setActiveServiceDetail,
        isBookingModalOpen,
        setIsBookingModalOpen,
        prefilledBookingPackage,
        openBookingModalWithPackage,

        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
}
