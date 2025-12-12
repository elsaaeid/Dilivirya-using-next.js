

import React from 'react';


export const MultiCardsOverview = ({ cards, active, setActive }) => {

    return (
        <section className="content-overview w-100">
            <div className="overview-wrapper mb-2">
                <div className="row">
                    {cards.map(card => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={card.id}>
                            <div
                                className={`subCard overview${active === card.id ? ' active' : ''}`}
                                id={card.id}
                                onClick={() => setActive(card.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="card-body flex flex-col justify-center items-center p-2">
                                    <h5 className="card-title d-flex justify-content-start align-items-center">
                                        {card.icon} <span>{card.title}</span>
                                    </h5>
                                    <p className="card-text">{card.text}</p>
                                    <span> {card.last}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}