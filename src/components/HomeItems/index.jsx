import React from 'react';
import s from "./style.module.sass";
import { Link } from 'react-router-dom';


export default function HomeItems({ id, images, price, title, description, brand, addToBasket }) {
    const link = `/descr/${id}`;
    return (
        <div className={s.container} >

            <Link to={link} className={s.link}>
                <p>{title}</p>
                <p className={s.price}>{price}$</p>
                <img src={images[0]} alt="home_images" />
                <p>{description}</p>
            </Link>
            <button onClick={() => addToBasket(title, price, brand, images)} className={s.button}>In den Warenkorb</button>
        </div>
    )
}
