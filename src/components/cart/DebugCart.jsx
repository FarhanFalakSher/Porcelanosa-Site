// // DebugCart.jsx - Create this file to test
// import React from 'react';
// import { useCart } from './cart/CartContext';

// const DebugCart = () => {
//   const { cart, cartCount } = useCart();
  
//   return (
//     <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: 'white', padding: '10px', border: '1px solid #ccc', zIndex: 1000 }}>
//       <h3>Cart Debug</h3>
//       <p>Cart Count: {cartCount}</p>
//       <p>Cart Items: {cart.length}</p>
//       <div>
//         {cart.map(item => (
//           <div key={item.id}>
//             {item.title} - Qty: {item.quantity}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DebugCart;