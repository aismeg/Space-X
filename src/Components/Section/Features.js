import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import './features.css';

const vehicles = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship',
    'other': ''
}

export const Feautres = ({ features, db }) => (
    <section className="features">
        <h2 className="features-title">
            {features.name}<br />Sijt
        </h2>
        <div className="overview">
            <table className="table">
                <caption className="table-title">
                    Stœrd
                </caption>
                <thead>
                    <tr>
                        <td className="table-column">HEEJT</td>
                        <td className="table-column">{features.height.meters} m / ${features.height.feet} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">{features.diameter.meters} m / ${features.diameter.feet} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASSA</td>
                        <td className="table-column">{features.mass.kg} kg / ${features.mass.lb} lb</td>
                    </tr>
                    {features.payload_weights.map((item, i) =>
                        <tr key={i}>
                            <td className="table-column">LADDINN TE ${item.id.toUpperCase()}</td>
                            <td className="table-column">{item.kg} kg / ${item.lb} lb</td>
                        </tr>
                    )}
                </thead>
            </table>
            <RellaxWrapper speed={14}>
                <img src={`./img/vehicles/${vehicles.hasOwnProperty(features.name) ?
                    vehicles[features.name] : features.other}.png`} alt="rocket" className="rocket" />
            </RellaxWrapper>
            <article>
                <h3 className="features-subtitle">BESKREIVINN</h3>
                <p className="features-text">
                    {db.hasOwnProperty(features.name) ? db[features.name] : db.none}
                </p>
            </article>
        </div>
    </section>
);