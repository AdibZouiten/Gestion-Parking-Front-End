import React ,{useRef} from 'react'
import axios from 'axios';

import './AddForm.css'

function AddForm() {

    const idURef = useRef(null);
    const idParkRef = useRef(null);
    const nomTypeRef = useRef(null);


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const idU = idURef.current.value;
        const idPark = idParkRef.current.value;
        const nomType = nomTypeRef.current.value;


        if(!idU || isNaN(idU)) {

            console.error('ID utilisateur est invalid');
            return;
        }
        
        if(!idPark || isNaN(idPark)) {

            console.error('ID parking est invalid');
            return;
        }
        if(!nomType) {

            console.error('Type Tarif est invalid');
            return;
        }
        

        const form_data = {
            idU: idU,
            idPark: idPark,
            nomType: nomType
        };

        axios.post('/api/form', {
            form_data
          })
          .then(response => {
            console.log(response.data);
            // Do something with the response data
          })
          .catch(error => {
            console.error(error);
            // Do something with the error
          });

        console.log(form_data);
    
        
    };

    
    
    return (
        <div className='cont add'>
            <form onSubmit={handleSubmit}  className='add-form'>
                <div className='add-form-row'>
                    <h1>Add station</h1>
                </div>
                <div className='add-form-row'>
                    <label>l'identifiant de l'utilisateur</label>
                    <input type="text" name='idU' ref={idURef} />
                </div>
                <div className='add-form-row'>
                    <label>l'identifiant de parking</label>
                    <input type="text" name='idPark' ref={idParkRef} />
                </div>
                <div className='add-form-row'>
                    <label>Type Tarif</label>
                    <select name="nomType" ref={nomTypeRef} >
                        <option value="card">card</option>
                        <option value="card ">card</option>
                        <option value="card">card</option>
                        <option value="card">card</option>
                    </select>
                </div>

                <div className='add-form-row'>
                    <button className='btn btn-submit-add' type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm