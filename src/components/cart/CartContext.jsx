import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }, [cart]);

  const addToCart = useCallback((product) => {
    if (!product?.id) {
      console.error('Invalid product data:', product);
      return;
    }
    
    console.log('Adding product to cart:', product); // Debug log
    
    // Handle price conversion for different formats
    let price;
    if (typeof product.price === 'string') {
      // Handle "$80/m²" format
      price = parseFloat(product.price.replace('$', '').replace('/m²', ''));
    } else if (typeof product.price === 'number') {
      price = product.price;
    } else {
      console.error('Invalid price format:', product.price);
      price = 0;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // FIXED: Correct property mapping for both PorcelainTiles and Facades
        const cartItem = {
          id: product.id,
          title: product.title || product.name || 'Unnamed Product',
          price: price,
          image: product.image || product.images?.[0] || '',
          material: product.material || product.series || '',
          type: product.type || product.finish || '',
          quantity: 1,
          sku: product.sku || '',
          unit: product.unit || '/m²'
        };
        
        console.log('Created cart item:', cartItem); // Debug log
        return [...prevCart, cartItem];
      }
    });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) {
      setCart(prev => prev.filter(item => item.id !== id));
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};