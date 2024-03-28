import React, { useContext } from 'react';
import { Context } from '../../context';
import BasketItem from '../../components/BasketItem';
import s from "./style.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'

export default function Basket() {
    const { basket } = useContext(Context);
    const tottal = basket.reduce((prev, { price, count }) => prev + (price * count), 0);

    return (
        <div className={s.cont}>
            <div>
                {
                    basket.length !== 0 ?
                        <>
                            {
                                basket.map(el => (<BasketItem key={el.id} {...el} />))
                            }
                            <div className={s.tottal}>
                                <h1>Gesamtsumme:<span>{tottal}$</span></h1>
                                <button className={s.kasse}>Zur Kasse</button>
                                <div className={s.fonts}>
                                    <p><FontAwesomeIcon icon={faCcMastercard} /></p>
                                    <p><FontAwesomeIcon icon={faCcPaypal} /></p>
                                    <p><FontAwesomeIcon icon={faCcVisa} /></p>
                                </div>
                            </div></> :
                        <p className={s.leer}>Dein Warenkorb ist leer</p>
                }
            </div>
        </div>
    )
}
