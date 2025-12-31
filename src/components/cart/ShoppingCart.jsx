import React, { useState } from "react";
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiChevronRight, FiArrowLeft, FiCreditCard, FiPackage, FiTruck, FiCheckCircle, FiUser } from "react-icons/fi";
import { useCart } from "../cart/CartContext";

const ShoppingCart = () => {
  const { cart: cartItems, updateQuantity, removeFromCart, clearCart, cartTotal: subtotal, cartCount } = useCart();
  const [shipping, setShipping] = useState({ name: "", email: "", phone: "", address: "", city: "", zip: "", country: "US" });
  const [step, setStep] = useState("cart");
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [shipMethod, setShipMethod] = useState("standard");
  const [payMethod, setPayMethod] = useState("card");

  const shipCost = shipMethod === "standard" ? 15 : 25;
  const tax = subtotal * 0.08;
  const discount = applied ? subtotal * 0.1 : 0;
  const total = subtotal + shipCost + tax - discount;

  const updateQty = (id, qty) => updateQuantity(id, qty);
  const remove = (id) => removeFromCart(id);
  
  const applyCoupon = () => coupon.toUpperCase() === "SAVE10" ? (setApplied({ code: "SAVE10" }), setCoupon("")) : alert("Invalid");
  const checkout = () => cartCount > 0 ? setStep("shipping") : alert("Cart empty");
  const shipSubmit = () => shipping.name && shipping.email && shipping.address ? setStep("payment") : alert("Fill fields");
  const placeOrder = () => { 
    alert(`Order #${Math.floor(100000 + Math.random() * 900000)} placed!`); 
    clearCart();
  };

  const StepIcon = ({ num, active }) => (
    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 text-sm md:text-base ${active ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}>
      {num}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 md:py-8">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-soft p-4 md:p-8 mb-6 md:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl">
                <FiShoppingCart className="text-xl md:text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Shopping Cart</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Review and checkout your items</p>
              </div>
            </div>
            
            {/* Progress Steps - Mobile Vertical / Desktop Horizontal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 mt-4 sm:mt-0">
              {[1,2,3,4].map(num => (
                <div key={num} className="flex items-center gap-2 md:gap-3">
                  <StepIcon num={num} active={step === (num===1?"cart":num===2?"shipping":num===3?"payment":"confirmation")} />
                  <span className={`font-medium text-sm md:text-base ${step === (num===1?"cart":num===2?"shipping":num===3?"payment":"confirmation") ? "text-blue-700" : "text-gray-500"}`}>
                    {num===1?"Cart":num===2?"Shipping":num===3?"Payment":"Confirm"}
                  </span>
                  {num !== 4 && <FiChevronRight className="text-gray-300 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {step === "cart" ? (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Column - Cart Items */}
            <div className="lg:w-2/3 space-y-6 md:space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-soft p-4 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                  <h2 className="text-lg md:text-2xl font-bold flex items-center gap-2 md:gap-3 text-gray-900">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl">
                      <FiShoppingCart className="text-blue-600 text-lg md:text-xl" />
                    </div>
                    Your Shopping Cart <span className="text-blue-600">({cartCount})</span>
                  </h2>
                  <div className="text-left sm:text-right">
                    <div className="text-xs md:text-sm text-gray-500">Cart Total</div>
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">${subtotal.toFixed(2)}</div>
                  </div>
                </div>
                
                {cartCount === 0 ? (
                  <div className="text-center py-8 md:py-16">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                      <FiShoppingCart className="text-3xl md:text-5xl text-gray-400" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Your cart is empty</h3>
                    <button onClick={() => window.history.back()} className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl md:rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base">
                      <FiArrowLeft className="inline mr-2" /> Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 md:space-y-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 p-4 md:p-6 bg-gradient-to-r from-white to-blue-50/30 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                        {/* Product Image */}
                        <div className="relative overflow-hidden rounded-lg md:rounded-xl w-full sm:w-24 md:w-32 h-48 sm:h-24 md:h-32 flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                            <div className="flex-1">
                              <h3 className="text-base md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{item.title}</h3>
                              <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                                {item.material && (
                                  <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-gray-100 rounded-full text-gray-700">{item.material}</span>
                                )}
                                {item.type && (
                                  <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-gray-100 rounded-full text-gray-700">{item.type}</span>
                                )}
                              </div>
                            </div>
                            <button onClick={() => remove(item.id)} className="p-1 md:p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors self-start sm:self-center">
                              <FiTrash2 size={18} />
                            </button>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 md:mt-6 gap-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
                              <div className="flex items-center bg-gray-50 rounded-lg md:rounded-xl overflow-hidden shadow-inner w-full sm:w-auto">
                                <button onClick={() => updateQty(item.id, item.quantity - 1)} className="px-3 py-1 md:px-4 md:py-2 hover:bg-gray-200 transition-colors">
                                  <FiMinus size={14} />
                                </button>
                                <span className="px-3 md:px-4 py-1 md:py-2 min-w-[40px] md:min-w-[60px] text-center font-bold text-gray-900 text-sm md:text-base">{item.quantity}</span>
                                <button onClick={() => updateQty(item.id, item.quantity + 1)} className="px-3 py-1 md:px-4 md:py-2 hover:bg-gray-200 transition-colors">
                                  <FiPlus size={14} />
                                </button>
                              </div>
                              <div className="text-gray-600 text-sm md:text-base">
                                <span className="font-medium">${item.price.toFixed(2)}</span>
                                <span className="text-xs md:text-sm ml-1">each</span>
                              </div>
                            </div>
                            <div className="text-right w-full sm:w-auto">
                              <div className="text-xs md:text-sm text-gray-500">Total</div>
                              <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
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
                <div className="bg-gradient-to-r from-white to-blue-50/30 rounded-2xl md:rounded-3xl shadow-soft p-4 md:p-6 lg:p-8">
                  <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Apply Coupon</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="text" 
                      placeholder="Enter coupon code" 
                      className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white rounded-xl md:rounded-2xl shadow-inner focus:outline-none text-base md:text-lg" 
                      value={coupon} 
                      onChange={e => setCoupon(e.target.value)} 
                    />
                    <button 
                      onClick={applyCoupon} 
                      className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl md:rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base"
                    >
                      Apply Code
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:w-1/3">
              <div className="sticky top-4 md:top-8">
                <div className="bg-gradient-to-b from-white via-white to-blue-50/30 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8 backdrop-blur-sm">
                  <h2 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3 text-gray-900">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-1.5 md:p-2 rounded-lg">
                      <FiCreditCard className="text-blue-600 text-lg md:text-xl" />
                    </div>
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex justify-between items-center py-2 md:py-3">
                      <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
                      <span className="text-lg md:text-xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {applied && (
                      <div className="flex justify-between items-center py-2 md:py-3 bg-gradient-to-r from-emerald-50 to-green-50/30 rounded-lg md:rounded-xl px-3 md:px-4">
                        <span className="text-emerald-700 font-medium text-sm md:text-base">Discount</span>
                        <span className="text-lg md:text-xl font-bold text-emerald-700">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 md:py-3 gap-2">
                      <span className="text-gray-600 text-sm md:text-base">Shipping</span>
                      <select 
                        className="bg-white px-3 md:px-4 py-2 rounded-lg md:rounded-xl shadow-inner focus:outline-none text-sm md:text-base w-full sm:w-auto"
                        value={shipMethod} 
                        onChange={e => setShipMethod(e.target.value)}
                      >
                        <option value="standard">Standard: $15.00</option>
                        <option value="express">Express: $25.00</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 md:py-3">
                      <span className="text-gray-600 text-sm md:text-base">Tax</span>
                      <span className="font-medium text-gray-900 text-sm md:text-base">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="pt-4 md:pt-6 mt-2 md:mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg md:text-xl font-bold text-gray-900">Total Amount</span>
                        <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={checkout} 
                    disabled={cartCount === 0} 
                    className={`w-full py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 ${cartCount > 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-xl md:hover:shadow-2xl hover:scale-105' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiPackage className="text-blue-600 text-sm md:text-base" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Free returns</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiTruck className="text-emerald-600 text-sm md:text-base" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Worldwide shipping</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <FiCreditCard className="text-amber-600 text-sm md:text-base" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">Secure payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : step === "shipping" ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3 text-gray-900">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl">
                  <FiUser className="text-blue-600 text-lg md:text-xl" />
                </div>
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                {["Name *", "Email *", "Phone *", "Country", "Address *", "City", "ZIP Code"].map((label, i) => (
                  <div key={i} className={label.includes("Address") ? "md:col-span-2" : ""}>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">{label}</label>
                    {label === "Country" ? (
                      <select 
                        className="w-full px-3 md:px-5 py-2.5 md:py-4 bg-white rounded-lg md:rounded-2xl shadow-inner focus:outline-none text-sm md:text-base" 
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
                        className="w-full px-3 md:px-5 py-2.5 md:py-4 bg-white rounded-lg md:rounded-2xl shadow-inner focus:outline-none placeholder-gray-400 text-sm md:text-base" 
                        placeholder={label} 
                        value={shipping[label.toLowerCase().replace("*", "").replace(" ", "")] || ""} 
                        onChange={e => setShipping({...shipping, [label.toLowerCase().replace("*", "").replace(" ", "")]: e.target.value})} 
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button 
                  onClick={() => setStep("cart")} 
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl md:rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  <FiArrowLeft className="inline mr-2" /> Back to Cart
                </button>
                <button 
                  onClick={shipSubmit} 
                  className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl md:rounded-2xl hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        ) : step === "payment" ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3 text-gray-900">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl">
                  <FiCreditCard className="text-blue-600 text-lg md:text-xl" />
                </div>
                Payment Method
              </h2>
              
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {["card", "paypal", "bank"].map(method => (
                  <div 
                    key={method} 
                    onClick={() => setPayMethod(method)} 
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${payMethod === method ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-lg' : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'}`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${payMethod === method ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gray-100'}`}>
                        {payMethod === method && <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></div>}
                      </div>
                      <div className="font-bold text-gray-900 text-base md:text-lg">
                        {method === "card" ? "Credit Card" : method === "paypal" ? "PayPal" : "Bank Transfer"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button 
                  onClick={() => setStep("shipping")} 
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl md:rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  <FiArrowLeft className="inline mr-2" /> Back
                </button>
                <button 
                  onClick={() => setStep("confirmation")} 
                  className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl md:rounded-2xl hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
                >
                  Review Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-white via-white to-emerald-50/30 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8 backdrop-blur-sm">
              <div className="text-center mb-8 md:mb-12">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6 md:p-8 rounded-full inline-flex items-center justify-center mb-6 md:mb-8 shadow-2xl">
                  <FiCheckCircle className="text-3xl md:text-4xl text-white" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent mb-3 md:mb-4">Order Confirmation</h2>
                <p className="text-gray-600 text-sm md:text-lg">Review your order details before finalizing</p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 md:mb-10 shadow-inner">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Order Summary</h3>
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 md:py-3 gap-2">
                      <div>
                        <div className="font-medium text-gray-900 text-sm md:text-base">{item.title}</div>
                        <div className="text-xs md:text-sm text-gray-500">Qty: {item.quantity} × ${item.price.toFixed(2)}</div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 md:space-y-3 pt-4 md:pt-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
                    <span className="font-medium text-sm md:text-base">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Shipping</span>
                    <span className="font-medium text-sm md:text-base">${shipCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Tax</span>
                    <span className="font-medium text-sm md:text-base">${tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span className="text-sm md:text-base">Discount</span>
                      <span className="font-bold text-sm md:text-base">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg md:text-2xl font-bold pt-3 md:pt-4">
                    <span>Total Amount</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button 
                  onClick={() => setStep("payment")} 
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl md:rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  <FiArrowLeft className="inline mr-2" /> Back
                </button>
                <button 
                  onClick={placeOrder} 
                  className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-xl md:rounded-2xl hover:shadow-xl md:hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
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