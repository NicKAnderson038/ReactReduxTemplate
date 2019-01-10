import React from 'react'
import * as classes from './Input.module.css'

const input  = (props) => {
    
    // generic input wrapper    
    let inputElement = null;

    switch(props.inputElement){
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props}/>
            break
        case('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props}/>
            break
        default:
            inputElement = <input className={classes.InputElement} {...props}/>
    }


    return(
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
    )
}

export default input