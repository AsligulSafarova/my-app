import React from 'react';
import s from "./style.module.sass";
import { Link } from "react-router-dom";

export default function CategoriesItem({ title }) {
    const link = `/singleCategory/${title}`
    return (
        <div className={s.container}>
            <Link to={link}>
                <h1>{title}</h1>
            </Link>
        </div>
    )
}
