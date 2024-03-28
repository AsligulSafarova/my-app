import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Context } from "../../context";
import { products } from "../../Fetchs/produtcs.js";
import { categories } from "../../Fetchs/categories.js";
import Home from "../../Pages/Home/index.jsx";
import Categories from "../../Pages/Categories/index.jsx";
import Contact from "../Contact/index.jsx";
import Basket from "../../Pages/Basket"
import SingleCategory from "../../Pages/SingleCategory/index.jsx";
import Description from "../../Pages/Description/index.jsx";
import Layout from "../Layout/index.jsx";


function App() {
  const [prod, setProd] = useState([]);
  const [category, setCategory] = useState([]);
  const [basket, setBasket] = useState([]);


  useEffect(() => {
    products(setProd)
  }, []);

  useEffect(() => {
    categories(setCategory)
  }, []);

  const addToBasket = (title, price, brand, images) => {
    const target = basket.find(card => card.title === title);
    if (target) {
      target.count++;
      setBasket([...basket])
    } else {
      setBasket([...basket, {
        id: Date.now(),
        title,
        price,
        brand,
        images,
        count: 1
      }])
    }
  };

  const addCount = id => {
    const target = basket.find(el => el.id === id);
    if (target) {
      target.count++;
      setBasket([...basket])
    } else {
      setBasket([...basket])
    }
  };

  const detelFromBasket = (id) => {
    const target = basket.find(el => el.id === id);
    if (target.count === 1) {
      setBasket(basket.filter((el) => el !== target))
    } else {
      target.count--;
      setBasket([...basket])
    }
  }

  useEffect(() => {
    setBasket(prod)
  }, [])

  return (
    <Context.Provider value={{ prod, category, basket, addToBasket, setBasket, addCount, detelFromBasket }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="singleCategory/:title" element={<SingleCategory />} />
          <Route path="descr/:id" element={<Description />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
export default App;
