
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import plants from "./data/plants";

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Group plants by category
  const categories = [
    ...new Set(plants.map((plant) => plant.category))
  ];

  return (
    <main className="content-page">
      <section className="page-heading">
        <p className="eyebrow">BRING NATURE HOME</p>
        <h1>Our Houseplants</h1>
        <p>
          Discover the perfect plants to brighten your home
          and create your own green paradise.
        </p>
      </section>

      {categories.map((category) => (
        <section
          className="plant-category"
          key={category}
        >
          <h2>{category} Plants</h2>

          <div className="plant-grid">
            {plants
              .filter(
                (plant) => plant.category === category
              )
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article
                    className="plant-card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="plant-description">
                        {plant.description}
                      </p>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="primary-button add-button"
                        disabled={isAdded}
                        onClick={() =>
                          dispatch(addToCart(plant))
                        }
                      >
                        {isAdded
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}
