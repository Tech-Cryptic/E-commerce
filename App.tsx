import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home.tsx';
import ProductListing from './src/pages/ProductListing.tsx';
import ProductDetail from './src/pages/ProductDetail.tsx';
import Cart from './src/pages/Cart.tsx';
import Login from './src/pages/Login.tsx';
import Signup from './src/pages/Signup.tsx';
import Checkout from './src/pages/Checkout.tsx';
import Account from './src/pages/Account.tsx';
import Comparison from './src/pages/Comparison.tsx';
import OrderConfirmation from './src/pages/OrderConfirmation.tsx';
import NotFound from './src/pages/NotFound.tsx';
import ScrollToTop from './src/components/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <Theme appearance="light" radius="large" scaling="100%">
      <Router>
        <ScrollToTop />
        <main className="min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/compare" element={<Comparison />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
      </Router>
    </Theme>
  );
}

export default App;