import React from 'react'
import './Search.css'


function Search() {
    return (
        <div>
            <div className='cont search'>
                <form className='search-form'>
                    <div className='search-form-row'>
                        <h1>Search</h1>
                    </div>
                    <div className='search-form-row'>
                        <label>Prix Maximale</label>
                        <input type="text" />

                    </div>
                    <div className='search-form-row'>
                        <label>Noms Parkings</label>
                        <select>
                            <option>parking1</option>
                            
                        </select>
                    </div>
                    <div className='search-form-row'>
                    <a className='btn btn-submit-search' href='#'>Submit</a>
                </div>

                </form>
            </div>
        </div>
    )
}

export default Search