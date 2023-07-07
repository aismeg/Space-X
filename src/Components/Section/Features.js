import React from "react";
import img from '../../img/falcon-1.png';
import './features.css';

export const Feautres = () => (
    <section className="features">
        <h2 className="features-title">
            Falcon 1 <br />Sijt
        </h2>
        <div className="overview">

            <table className="table">
                <caption className="table-title">
                    Size
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
                        <td className="table-column">LADDIN TE LEO</td>
                        <td className="table-column">450 kg / 992 lb</td>
                    </tr>
                </thead>
            </table>
            <img src={img} alt="rocket" className="rocket" data-rellax-speed="14" />
            <article>
                <h3 className="features-subtitle">BESKREIVINN</h3>
                <p className="features-text">
                    De Falcon 1 vas ein forbrœkbeer startsystem privat entveikd en forstelled av SpaceX in
                    2006-2009. Aa 28 September 2008, Falcon 1 blev de fjorst privat-entveikd startkeertjoj ved fljotinn brandstov
                    te gaa in de erdbaan.
                </p>
            </article>
        </div>
    </section>
);