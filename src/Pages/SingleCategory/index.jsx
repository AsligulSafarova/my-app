import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SingleCategoriesitem from '../../components/SingleCategoriesitem';
import { Context } from '../../context';
import s from "./style.module.sass";

export default function SingleCategory() {
    const [singleCategory, setSinglecategory] = useState([]);
    const { title } = useParams();
    const { addToBasket, setBasket } = useContext(Context);
    const titles = singleCategory.map(el => <p>{el.category}</p>)

    console.log("SingleCategory", singleCategory);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${title}`)
            .then(res => res.json())
            .then(data => setSinglecategory(data.products));
    }, []);



    useEffect(() => {
        setBasket(singleCategory)
    }, [])

    return (
        <div className={s.wrapper}>
            <h1 className={s.titles}>{titles[0]}</h1>
            <div className={s.container}>

                {singleCategory.map(el => (<SingleCategoriesitem key={el.id} {...el} addToBasket={addToBasket} />))}
            </div>
        </div>
    )
}
