import React from 'react'
import './main.css'
type Props = {}

const AddCourse = (props: Props) => {
    return (
        <div>
            <h1>Create New Course</h1>
            <form className='form-addcourse'>
                <div className='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input type='text' className='form-control' placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <label for='exampleFormControlSelect1'>Example select</label>
                    <select className='form-control' id='exampleFormControlSelect1'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='form-group form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                    <label className='form-check-label' for='exampleCheck1'>
                        Check me out
                    </label>
                </div>
                <div className='form-group '>
                    <button className='btn btn-primary'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default AddCourse
