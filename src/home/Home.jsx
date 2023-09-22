import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   
    return (
        <div className="home-">
            <h1 className="h1-home">MUNDO DO ANABOLIZANTE</h1>
            <Link className="link-home" to="/todo">Ir para Fake Natty</Link>
        </div>
    );
}