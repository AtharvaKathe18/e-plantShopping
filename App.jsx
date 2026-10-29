
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <Navbar />

        <section className="hero">
          <p className="eyebrow">BRING NATURE HOME</p>

          <h1>Paradise Nursery</h1>

          <h2>Find Your Little Piece of Paradise</h2>

          <p>
            Discover beautiful houseplants that make your space
            greener, calmer, and more inviting. Find the perfect
            plant to bring nature into your home.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" to="/plants">
              Get Started
            </Link>

            <Link className="secondary-button" to="/about">
              About Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <AboutUs />
          </>
        }
      />

      <Route
        path="/plants"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />

      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
}
