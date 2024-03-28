import React, { useContext } from 'react';
import { Context } from '../../context';
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./style.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';


export default function Navigation() {
    const { basket } = useContext(Context);
    const countSumm = (basket.reduce((item, { count }) => item + count, 0))
    const check_active = ({ isActive }) => isActive ? "active" : " ";
    return (
        <Fragment>
            <nav className="nav">
                <NavLink to="/" className={check_active}><img src={logo} alt="nav_img" className="imgs" /></NavLink>
                <ul className="ulInfos">
                    <NavLink to="categories" className={check_active}><li>Categories</li></NavLink>
                    <NavLink to="contact" className={check_active}><li>Contacts</li></NavLink>
                    <NavLink to="basket" className={check_active}><li>
                        <p className='icon' >  <FontAwesomeIcon icon={faBasketShopping} />  </p>
                        <p className="count">{countSumm}</p></li>
                    </NavLink>
                </ul>
            </nav>
        </Fragment>
    )
}
