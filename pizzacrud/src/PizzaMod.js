import React, {useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

export function PizzaMod(props) {

    const param = useParams();
    const id = param.pizzaId;

    const navigate = useNavigate();
    const [pizza, setPizza] = useState([]);
    const [Modname, setModname] = useState('');
    const [ModisGlutenFree, setModisGlutenFree] = useState('');
    const [Modimageurl, setModimageurl] = useState('');
    

    useEffect(() => {
        (async() => {
            try{
            const res = await fetch(`https://pizza.kando-dev.eu/Pizza${id}`, {credentials: 'include'});
            const pizza = await res.json();
            setPizza(pizza);
            setModname(pizza.name);
            setModisGlutenFree(pizza.ModisGlutenFree);
            setModimageurl(pizza.imageURL);
        } 
        catch(error){
            console.log(error);
        }
        })();
    },[id, ModisGlutenFree, Modname, Modimageurl, Modimageurl]);

    const modname = event =>{
        setModname(event.target.value);
    }
    const modisGlutenFree = event =>{
        setModisGlutenFree(event.target.value);
    }
    
    const modimageurl = event =>{
        setModimageurl(event.target.value);
    }
    return(
        <div className='p5 content bg-whitesmoke text-center'>
            <h2>Pizza módosítás</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch(`https://pizza.kando-dev.eu/Pizza${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: e.target.elements.name.value,
                    isGlutenFree: e.target.elements.brand.value,
                    kepURL: e.target.elements.price.value,
                }),
        })
        .then(() => {
            navigate(`/`);
        })
        .catch(console.log)
        }}>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type='text' name='name' className='form-control' defaultValue={pizza.name} onChange={modname}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> KépUrl: </label>
                    <div>
                        <input type='text' name='kepURL' className='form-control' defaultValue={pizza.kepURL} onChange={modimageurl}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Gluténmentes? </label>
                <div>
                <input type ="radio" name="isGlutenFree" className='form-check-input' value="True" defaultValue={pizza.isGlutenFree} onChange={modisGlutenFree}/>
                <br></br>
                <input type ="radio" name="isGlutenFree" className='form-check-input' value="False" defaultValue={pizza.isGlutenFree} onChange={modisGlutenFree}/>
                </div>

            </div>
            <button type='submit' className='btn btn-success'>
                Kuldes
            </button>
        </form>
    </div>
    )
    
}