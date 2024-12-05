import React from "react";

function Kart({ kart_rengi }) {
    return (
        <div
            style={{
                border: "1px solid",
                padding: "20px",
                borderRadius: "5px",
                background: "linear-gradient(to bottom,#289bd0,#f1f1f1)"
            }}
        >
            {kart_rengi}
            <h3>renk karti</h3>
        </div>
    );
}

function Sayi_ulan() {
    return (
        <div>
            <input type="password" placeholder="ŞİFRE GİRİNİZ" />
            <input type="submit" />
        </div>
    );
}

// Named exports
export { Kart, Sayi_ulan };


