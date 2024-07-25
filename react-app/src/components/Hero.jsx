import React from "react";

const hero = new URL(`../images/photo-grid.png`, import.meta.url).href;

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} className="hero--photo" alt="Hero" />
            <div className="hero--content">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}
