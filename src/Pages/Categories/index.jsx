import React, { useContext } from 'react';
import CategoriesItem from '../../components/CategoriesItem';
import { Context } from '../../context';
import s from "./style.module.sass";

export default function Categories() {
    const { category } = useContext(Context);
    return (
        <div className={s.container}>
            {
                category.map(el => (<CategoriesItem key={el} title={el} />))
            }
        </div>
    )
}
