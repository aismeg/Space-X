import React from "react";
import './header.css';

export const Header = ({ rockets, changeRocket }) => (
    <header className="header">
        <img
            src={'./img/logo.svg'}
            alt="Logo Space X"
            className="logo"
        />
        <nav className="main-nav nav">
            <ul className="list">
                {rockets.map((item, i) => (
                    <li key={i} className="item">
                        <a href="/" onClick={e => {
                            e.preventDefault();
                            changeRocket(item);
                        }} className="item-link">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="secondary-nav">
            <ul className="list">
                <li className="item">
                    <a href="/" className="item-link">Haam</a>
                </li>
                <li className="item">
                    <a href="calendar.html" className="item-link">Kalender</a>
                </li>
            </ul>
        </nav>
    </header>
);