import React from 'react';
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer"
import s from "./style.module.scss";

export default function Layout() {
    return (
        <div>
            <Navigation />
            <div className={s.outlet} >
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}
