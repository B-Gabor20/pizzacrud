import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function PizzaSingleElement() {
    const param = useParams();
    const id = param.pizzaId;
    const [pizza, setPizza] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
            const res = await fetch(`https://pizza.kando-dev.eu/Pizza${pizza.id}`);
            const pizza2 = await res.json();
            setPizza(pizza2);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending || !pizza.id ? (<div className="spinner-border"></div>) : (
                    <div className="card p-3">
                        <div className="card-body">
                            <h5 className="card-title">{pizza.name}</h5>
                            <p>Gluténmentes?: {pizza.isGlutenFree ? "true" : "false"}</p>
                            <NavLink to={`/`}>
                            <img className="img-fluid" style={{maxHeight: 200}} src={pizza.kepURL ? pizza.kepURL : 'https://via.placeholder.com/400x800'}/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={`/`}>
                                <button className="bi bi-backspace rounded">Vissza</button>
                            </NavLink>
                            <NavLink key="mod" to={`/mod-pizza/` + pizza.id}>
                                <button className="bi bi-pencil rounded">Törlés</button>
                            </NavLink>
                        </div>
                    </div>)}
        </div>
    );
}