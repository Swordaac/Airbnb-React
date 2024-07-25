import React from "react"

const logoSrc = new URL('../images/airbnb-logo.png', import.meta.url).href;

export default function Navbar() {
    return (
        <nav>
            <img src={logoSrc} className="nav--logo" />
        </nav>
    )
}