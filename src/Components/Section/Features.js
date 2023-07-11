import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import img from '../../img/falcon-1.png';
import './features.css';

export const Feautres = ({ rocket, db }) => (
    <section className="features">
        <h2 className="features-title">
            {rocket}<br />Sijt
        </h2>
        <div className="overview">
            <table className="table">
                <caption className="table-title">
                    Stœrd
                </caption>
                <thead>
                    <tr>
                        <td className="table-column">HEEJT</td>
                        <td className="table-column">22.25 m / 73 ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">1.68 m / 5.5 ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASSA</td>
                        <td className="table-column">30,146 kg / 66,460 lb</td>
                    </tr>
                    <tr>
                        <td className="table-column">LADDINN TE LEO</td>
                        <td className="table-column">450 kg / 992 lb</td>
                    </tr>
                </thead>
            </table>
            <RellaxWrapper speed={14}>
                <img src={img} alt="rocket" className="rocket" />
            </RellaxWrapper>
            <article>
                <h3 className="features-subtitle">BESKREIVINN</h3>
                <p className="features-text">
                    {db.hasOwnProperty(rocket) ? db[rocket] : db.other}
                </p>
            </article>
        </div>
    </section>
);