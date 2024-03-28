import React, { useContext } from 'react';
import style from "./style.module.sass";
import { Context } from '../../context';


export default function BasketItem({ id, title, price, brand, images, count }) {
    const { detelFromBasket, addCount } = useContext(Context);

    return (
        <div className={style.container}>
            <img src={images[0]} alt="" />
            <div className={style.infos}>
                <h1>{price * count}$</h1>
                <p>{brand}</p>
            </div>
            <div className={style.count}>
                Anzahl: {count}
            </div>
            <div className={style.buttons}>
                <button className={style.button} onClick={() => addCount(id)}>+</button>
                <button className={style.button} onClick={() => detelFromBasket(id)}>-</button>
            </div>

        </div>
    )
}
