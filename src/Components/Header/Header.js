import React from "react";
import './header.css';
import logo from '../../img/logo.svg';

export const Header = (rockets) => (
    <header className="header">
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
        />
        <nav className="main-nav nav">
            <ul className="list">
                {rockets.rockets.map((item, i) => (
                    <li key={i} className="item">
                        <a href="/" onClick={e => {
                            e.preventDefault();
                            rockets.changeRocket(item);
                        }} className="item-link">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="secondary-nav">
            <ul className="list">
                <li className="item">
                    <a href="/" className="item-link">Heim</a>
                </li>
                <li className="item">
                    <a href="calendar.html" className="item-link">Kalender</a>
                </li>
            </ul>
        </nav>
    </header>
);