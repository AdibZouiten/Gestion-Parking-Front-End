import React from 'react'
import './AddForm.css'

function AddForm() {
    return (
        <div className='cont add'>
            <form className='add-form'>
                <div className='add-form-row'>
                    <h1>Add station</h1>
                </div>
                <div className='add-form-row'>
                    <label>Date Stationnement</label>
                    <input type="date" />
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