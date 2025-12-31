// AuthPage.jsx
import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiHome, FiShoppingCart, FiCheck, FiArrowRight, FiPackage, FiShield, FiTruck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    newsletter: true
  });
  const { cartCount } = useCart();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (isLogin) {
      console.log("Login attempt:", { email: formData.email, password: formData.password });
      alert("Login successful! Redirecting to homepage...");
      // In real app: API call, then redirect
    } else {
      console.log("Signup attempt:", formData);
      alert("Account created successfully! Welcome to Porcelanosa.");
      // In real app: API call, then redirect
    }
  };

  const socialLogins = [
    { name: "Google", color: "bg-red-500 hover:bg-red-600", icon: "G" },
    { name: "Facebook", color: "bg-blue-600 hover:bg-blue-700", icon: "f" },
    { name: "Apple", color: "bg-gray-800 hover:bg-gray-900", icon: "A" }
  ];

  const benefits = [
    { icon: <FiShoppingCart />, title: "Fast Checkout", desc: "Save your details for quicker purchases" },
    { icon: <FiPackage />, title: "Order Tracking", desc: "Track all your orders in one place" },
    { icon: <FiShield />, title: "Secure Account", desc: "Your data is protected and private" },
    { icon: <FiTruck />, title: "Free Shipping", desc: "On orders over $500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Floating Cart & Home Buttons */}
      <div className="fixed top-6 right-6 z-40 flex gap-3">
        <Link to="/" className="bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <FiHome className="text-gray-900 text-xl" />
        </Link>
        <Link to="/cart" className="relative">
          <button className="bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <FiShoppingCart className="text-gray-900 text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo/Brand Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-2xl shadow-xl">
                  <FiPackage className="text-white text-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Porcelanosa
                </h1>
              </div>
            </Link>
            <p className="text-gray-600 text-lg">Premium building materials & solutions</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Benefits & Info */}
            <div className="lg:w-2/5">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-soft p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isLogin ? "Welcome Back!" : "Join Our Community"}
                </h2>
                
                <div className="space-y-6 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl hover:bg-white transition-colors">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl">
                        <div className="text-blue-600 text-xl">{benefit.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonials */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 flex items-center justify-center">
                      <FiUser className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">Architect & Premium Member</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Porcelanosa's premium materials transformed my projects. The account features make procurement seamless!"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Auth Form */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                {/* Toggle Switch */}
                <div className="flex items-center justify-center mb-10">
                  <div className="relative bg-gray-100 p-1 rounded-2xl inline-flex">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${isLogin ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${!isLogin ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                {/* Form Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {isLogin ? "Sign in to your account" : "Create new account"}
                  </h3>
                  <p className="text-gray-600">
                    {isLogin ? "Enter your credentials to continue" : "Fill in your details to get started"}
                  </p>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {socialLogins.map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg`}
                    >
                      <span className="font-bold">{social.icon}</span>
                      {social.name}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-gray-500 text-sm">Or continue with email</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Auth Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            📱
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          🏢
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiMail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiLock />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                        className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    {!isLogin && (
                      <p className="mt-2 text-xs text-gray-500">
                        Must be at least 6 characters with letters and numbers
                      </p>
                    )}
                  </div>

                  {/* Confirm Password (Signup only) */}
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FiLock />
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Newsletter Checkbox (Signup only) */}
                  {!isLogin && (
                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl">
                      <div className="flex items-center h-5">
                        <input
                          id="newsletter"
                          name="newsletter"
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <label htmlFor="newsletter" className="text-sm text-gray-700">
                        <span className="font-medium">Subscribe to newsletter</span>
                        <p className="text-gray-500 text-xs">Get updates on new products and exclusive offers</p>
                      </label>
                    </div>
                  )}

                  {/* Terms & Conditions (Signup only) */}
                  {!isLogin && (
                    <div className="text-xs text-gray-500">
                      By creating an account, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLogin ? "Sign In to Account" : "Create Account"}
                    <FiArrowRight />
                  </button>

                  {/* Forgot Password (Login only) */}
                  {isLogin && (
                    <div className="text-center">
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Forgot your password?
                      </a>
                    </div>
                  )}

                  {/* Switch Auth Mode */}
                  <div className="text-center text-gray-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-600 hover:text-blue-800 font-bold"
                    >
                      {isLogin ? "Sign up here" : "Sign in here"}
                    </button>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">✓</div>
                      <div className="text-xs font-medium text-gray-700">SSL Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">🛡️</div>
                      <div className="text-xs font-medium text-gray-700">Data Protected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                      <div className="text-xs font-medium text-gray-700">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">5★</div>
                      <div className="text-xs font-medium text-gray-700">Trusted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p className="mb-4">
              Need help?{" "}
              <a href="mailto:support@porcelanosa.com" className="text-blue-600 hover:text-blue-800 font-medium">
                support@porcelanosa.com
              </a>{" "}
              • Call us:{" "}
              <a href="tel:+18005551234" className="text-blue-600 hover:text-blue-800 font-medium">
                +1 (800) 555-1234
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              <a href="#" className="hover:text-gray-900">Contact Us</a>
              <a href="#" className="hover:text-gray-900">About Porcelanosa</a>
            </div>
            <p className="mt-6">© {new Date().getFullYear()} Porcelanosa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;