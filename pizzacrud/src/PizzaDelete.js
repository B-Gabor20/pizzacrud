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
        const res = await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`)
        const pizza2 = await res.json();
        setPizza(pizza2);
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
                fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
                    method: "DELETE",
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
                <button type="submit" class="btn btn-danger">Törlés</button>
                <NavLink to={`/pizza/${pizza.id}`}>
                    <button className="btn btn-secondary">Vissza</button>
                </NavLink>
            </div>
            </form>
    </div>
);
}