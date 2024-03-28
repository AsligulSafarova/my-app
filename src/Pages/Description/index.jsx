import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import { useParams } from 'react-router-dom';
import s from "./style.module.sass";
import { Rate } from 'antd';
import { EyeOutlined } from "@ant-design/icons";


export default function Description() {
    const [descr, setDescr] = useState([]);
    const { id } = useParams()
    const { addToBasket, setBasket } = useContext(Context)
    const { title, images, description, price, brand, discountPercentage, rating, thumbnail, stock } = descr;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDescr(data));

    }, []);

    useEffect(() => {
        setBasket(descr)
    }, [])
    return (
        <div className={s.container}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{brand}</p>
            <p className={s.price}>{price}$</p>
            <p>{discountPercentage}%</p>
            <img src={thumbnail} alt="imgs_descr" />
            <div>
                <p> <EyeOutlined />{stock}  </p>
                <Rate allowHalf defaultValue={rating} />
                ({rating})
            </div>
            <button onClick={() => addToBasket(title, price, description, images)} className={s.button}>In den Warenkorb</button>
        </div>
    )
}
