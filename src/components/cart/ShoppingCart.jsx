// ShoppingCart.jsx
import React, { useState } from "react";
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiChevronRight, FiArrowLeft, FiCreditCard, FiPackage, FiTruck, FiCheckCircle, FiUser } from "react-icons/fi";
import { useCart } from "../cart/CartContext"; // IMPORT CARTCONTEXT

const ShoppingCart = () => {
  // USE CARTCONTEXT INSTEAD OF LOCAL STATE
  const { cart: cartItems, updateQuantity, removeFromCart, clearCart, cartTotal: subtotal, cartCount } = useCart();

  const [shipping, setShipping] = useState({ name: "", email: "", phone: "", address: "", city: "", zip: "", country: "US" });
  const [step, setStep] = useState("cart");
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [shipMethod, setShipMethod] = useState("standard");
  const [payMethod, setPayMethod] = useState("card");

  // USE CALCULATIONS BASED ON CART CONTEXT
  const shipCost = shipMethod === "standard" ? 15 : 25;
  const tax = subtotal * 0.08;
  const discount = applied ? subtotal * 0.1 : 0;
  const total = subtotal + shipCost + tax - discount;

  // UPDATE FUNCTIONS TO USE CONTEXT
  const updateQty = (id, qty) => updateQuantity(id, qty);
  const remove = (id) => removeFromCart(id);
  
  const applyCoupon = () => coupon.toUpperCase() === "SAVE10" ? (setApplied({ code: "SAVE10" }), setCoupon("")) : alert("Invalid");
  const checkout = () => cartCount > 0 ? setStep("shipping") : alert("Cart empty");
  const shipSubmit = () => shipping.name && shipping.email && shipping.address ? setStep("payment") : alert("Fill fields");
  const placeOrder = () => { 
    alert(`Order #${Math.floor(100000 + Math.random() * 900000)} placed!`); 
    clearCart(); // CLEAR CART USING CONTEXT
  };

  const StepIcon = ({ num, active }) => (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${active ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}>
      {num}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-xl">
                <FiShoppingCart className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Shopping Cart</h1>
                <p className="text-gray-600 mt-2">Review and checkout your items</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {[1,2,3,4].map(num => (
                <div key={num} className="flex items-center gap-3">
                  <StepIcon num={num} active={step === (num===1?"cart":num===2?"shipping":num===3?"payment":"confirmation")} />
                  <span className={`font-medium ${step === (num===1?"cart":num===2?"shipping":num===3?"payment":"confirmation") ? "text-blue-700" : "text-gray-500"}`}>
                    {num===1?"Cart":num===2?"Shipping":num===3?"Payment":"Confirm"}
                  </span>
                  {num !== 4 && <FiChevronRight className="text-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {step === "cart" ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-900">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl">
                      <FiShoppingCart className="text-blue-600" />
                    </div>
                    Your Shopping Cart <span className="text-blue-600">({cartCount})</span>
                  </h2>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Cart Total</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">${subtotal.toFixed(2)}</div>
                  </div>
                </div>
                
                {cartCount === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
                      <FiShoppingCart className="text-5xl text-gray-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
                    <button onClick={() => window.history.back()} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <FiArrowLeft className="inline mr-2" /> Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center gap-6 p-6 bg-gradient-to-r from-white to-blue-50/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="relative overflow-hidden rounded-xl w-32 h-32">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{item.title}</h3>
                              <div className="flex items-center gap-2 mt-2">
                                {item.material && (
                                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">{item.material}</span>
                                )}
                                {item.type && (
                                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">{item.type}</span>
                                )}
                              </div>
                            </div>
                            <button onClick={() => remove(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                              <FiTrash2 size={20} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center bg-gray-50 rounded-xl overflow-hidden shadow-inner">
                                <button onClick={() => updateQty(item.id, item.quantity - 1)} className="px-4 py-2 hover:bg-gray-200 transition-colors">
                                  <FiMinus size={16} />
                                </button>
                                <span className="px-4 py-2 min-w-[60px] text-center font-bold text-gray-900">{item.quantity}</span>
                                <button onClick={() => updateQty(item.id, item.quantity + 1)} className="px-4 py-2 hover:bg-gray-200 transition-colors">
                                  <FiPlus size={16} />
                                </button>
                              </div>
                              <div className="text-gray-600">
                                <span className="font-medium">${item.price}</span>
                                <span className="text-sm ml-1">each</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Total</div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartCount > 0 && (
                <div className="bg-gradient-to-r from-white to-blue-50/30 rounded-3xl shadow-soft p-8">
                  <h3 className="font-bold text-xl mb-6">Apply Coupon</h3>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="Enter coupon code" 
                      className="flex-1 px-6 py-4 bg-white rounded-2xl shadow-inner focus:outline-none text-lg" 
                      value={coupon} 
                      onChange={e => setCoupon(e.target.value)} 
                    />
                    <button 
                      onClick={applyCoupon} 
                      className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
                    >
                      Apply Code
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="bg-gradient-to-b from-white via-white to-blue-50/30 rounded-3xl shadow-xl p-8 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-2 rounded-lg">
                      <FiCreditCard className="text-blue-600" />
                    </div>
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {applied && (
                      <div className="flex justify-between items-center py-3 bg-gradient-to-r from-emerald-50 to-green-50/30 rounded-xl px-4">
                        <span className="text-emerald-700 font-medium">Discount</span>
                        <span className="text-xl font-bold text-emerald-700">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Shipping</span>
                      <select 
                        className="bg-white px-4 py-2 rounded-xl shadow-inner focus:outline-none" 
                        value={shipMethod} 
                        onChange={e => setShipMethod(e.target.value)}
                      >
                        <option value="standard">Standard: $15.00</option>
                        <option value="express">Express: $25.00</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="pt-6 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={checkout} 
                    disabled={cartCount === 0} 
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${cartCount > 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-2xl hover:scale-105' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="mt-10 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiPackage className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Free returns</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiTruck className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Worldwide shipping</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiCreditCard className="text-amber-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Secure payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : step === "shipping" ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl">
                  <FiUser className="text-blue-600" />
                </div>
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {["Name *", "Email *", "Phone *", "Country", "Address *", "City", "ZIP Code"].map((label, i) => (
                  <div key={i} className={label.includes("Address") ? "md:col-span-2" : ""}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                    {label === "Country" ? (
                      <select 
                        className="w-full px-5 py-4 bg-white rounded-2xl shadow-inner focus:outline-none" 
                        value={shipping.country} 
                        onChange={e => setShipping({...shipping, country: e.target.value})}
                      >
                        <option value="US">US</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                      </select>
                    ) : (
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 bg-white rounded-2xl shadow-inner focus:outline-none placeholder-gray-400" 
                        placeholder={label} 
                        value={shipping[label.toLowerCase().replace("*", "").replace(" ", "")] || ""} 
                        onChange={e => setShipping({...shipping, [label.toLowerCase().replace("*", "").replace(" ", "")]: e.target.value})} 
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setStep("cart")} 
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FiArrowLeft className="inline mr-2" /> Back to Cart
                </button>
                <button 
                  onClick={shipSubmit} 
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        ) : step === "payment" ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl">
                  <FiCreditCard className="text-blue-600" />
                </div>
                Payment Method
              </h2>
              
              <div className="space-y-4 mb-10">
                {["card", "paypal", "bank"].map(method => (
                  <div 
                    key={method} 
                    onClick={() => setPayMethod(method)} 
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${payMethod === method ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-lg' : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${payMethod === method ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gray-100'}`}>
                        {payMethod === method && <div className="w-3 h-3 rounded-full bg-white"></div>}
                      </div>
                      <div className="font-bold text-gray-900 text-lg">
                        {method === "card" ? "Credit Card" : method === "paypal" ? "PayPal" : "Bank Transfer"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setStep("shipping")} 
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FiArrowLeft className="inline mr-2" /> Back
                </button>
                <button 
                  onClick={() => setStep("confirmation")} 
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
                >
                  Review Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-white via-white to-emerald-50/30 rounded-3xl shadow-xl p-8 backdrop-blur-sm">
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8 rounded-full inline-flex items-center justify-center mb-8 shadow-2xl">
                  <FiCheckCircle className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent mb-4">Order Confirmation</h2>
                <p className="text-gray-600 text-lg">Review your order details before finalizing</p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 mb-10 shadow-inner">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center py-3">
                      <div>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity} × ${item.price}</div>
                      </div>
                      <div className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 pt-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount</span>
                      <span className="font-bold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-2xl font-bold pt-4">
                    <span>Total Amount</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setStep("payment")} 
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FiArrowLeft className="inline mr-2" /> Back
                </button>
                <button 
                  onClick={placeOrder} 
                  className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
                >
                  <FiCheckCircle className="inline mr-2" /> Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;