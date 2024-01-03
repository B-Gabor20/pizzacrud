import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function PizzaDelete(props) {

    const params = useParams();
    const id = params.pizzaId;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        (async() => {
            try {
        const res = await fetch(`https://pizza.kando-dev.eu/Pizza${id}`, {credentials: "include"})
        const ppizza = await res.json();
        setPizza(ppizza);
            } catch(error) {
                console.log(error);
            }
    })();
}, [id]);
return (
    <div className="p-5 text-center content bg-whitesmoke">
            <h2>Pizza módosítása</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://pizza.kando-dev.eu/Pizza${id}`, {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
            >
            <div>
                <NavLink to="/">
                    <button type="button" className="btn btn-primary">Vissza</button>
                </NavLink>
                <button type="submit" className="btn btn-success">Küldés</button>
            </div>
            </form>
    </div>
);
}