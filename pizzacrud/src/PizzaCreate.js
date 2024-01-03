import {useNavigate} from 'react-router-dom'
export function PizzaCreate()
{
    const navigate = useNavigate();
    return (
        <div className='p5 content bg-whitesmoke text-center'>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://pizza.kando-dev.eu/Pizza`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: e.target.elements.name.value,
                        isGlutenFree: e.target.elements.isGlutenFree.value,
                        kepURL: e.target.elements.kepURL.value,
                    }),
            })
            .then(() => {
                navigate(`/`);
            })
            .catch(console.log)
            }}>
                <div className='form-group row pb-3'>
                    <label className='col-form-label'> Név: </label>
                        <div>
                            <input type='text' name='name' className='form-control'></input>
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> Gluténmentes?: </label>
                        <div>
                            <label className='col-sm-3 col-form-label'>Igen</label>
                            <input type ="radio" name="isGlutenFree" className='form-check-input' value="1" />
                            <br></br>
                            <label className='col-sm-3 col-form-label'>Nem</label>
                            <input type ="radio" name="isGlutenFree" className='form-check-input' value="0" />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> KépUrl: </label>
                        <div>
                            <input type='text' name='kepURL' className='form-control'/>
                        </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
} 