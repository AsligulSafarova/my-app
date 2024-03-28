import React from 'react';
import { useContext } from 'react';
import { Context } from "../../context";
import HomeItems from '../../components/HomeItems';
import s from "./style.module.sass";

export default function Home() {
    const { prod } = useContext(Context);
    const { addToBasket } = useContext(Context);
    return (

        <div className={s.container}>
            {
                prod.map(el => (<HomeItems key={el.id} {...el} addToBasket={addToBasket} />))
            }
        </div>


    )
}
