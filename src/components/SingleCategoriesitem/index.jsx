import React from 'react';
import s from "./style.module.sass";
import { Link } from 'react-router-dom';

export default function SingleCategoriesitem({ id, title, description, price, brand, discountPercentage, images, addToBasket }) {
    const link = `/descr/${id}`
    return (
        <div className={s.container}>
            <Link to={link} className={s.link}>
                <p>{brand}</p>
                <h3>{description}</h3>
                <h4>{price}$</h4>
                <p className={s.disc}>{discountPercentage}%</p>
                <img src={images[0]} alt="" className={s.imgs} />
            </Link>
            <button onClick={() => addToBasket(
                title,
                price,
                brand,
                images,)} className={s.button}>In den Warenkorb</button>
        </div>
    )
}
