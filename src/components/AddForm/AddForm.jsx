import React ,{useRef} from 'react'
import './AddForm.css'

function AddForm() {

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
    };
    
    return (
        <div className='cont add'>
            <form nSubmit={handleSubmit} ref={formRef} className='add-form'>
                <div className='add-form-row'>
                    <h1>Add station</h1>
                </div>
                <div className='add-form-row'>
                    <label>l’identifiant de l’utilisateur</label>
                    <input type="date" />
                </div>
                <div className='add-form-row'>
                    <label>l’identifiant de parking</label>
                    <input type="text" />
                </div>
                <div className='add-form-row'>
                    <label>Date Stationnement</label>
                    <input type="text" />
                </div>
                <div className='add-form-row'>
                    <label>Date Stationnement</label>
                    <input type="text" />
                </div>
                <div className='add-form-row'>
                    <a className='btn btn-submit-add' href='#'>Submit</a>
                </div>
            </form>
        </div>
    )
}

export default AddForm