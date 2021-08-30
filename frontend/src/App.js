import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './componets/Header';
import Footer from './componets/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} exact />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/login" component={LoginPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
