import React from 'react';

const Input =({title, state, name}, onChange,index) => {
    return (
        <div key= {index} className = "input">
           <label className={`input_number ${state == '' ? 'grey': 'green'}`}>{index +1}</label>
           <input placeholder={title}name={name} value={state} onChange={onChange}/>
           <label className="input_title">{title}</label>
        </div>
    )
}

export default Input;