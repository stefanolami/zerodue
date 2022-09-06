import React, { useState, useEffect } from 'react';
import WithClickOutside from './WithClickOutside';

import sortIcon from '../images/icon-sort.jpg';

const SelectComponent = React.forwardRef( ({
    options,
    onChange,
    open,
    setOpen,
    value,
    label
}, ref) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onItemSelected = (opt, index) => {
        onChange !== undefined && onChange(opt);
        onChange !== undefined && setInputValue(opt);
        setOpen(false);
    }

    const clearDropdown = () => {
        setInputValue("");
        onChange("");
    }

    const onInputClick = () => {
        setOpen(prevValue => !prevValue);
        console.log(options)
        console.log(Array.isArray(options))
    }



    return (
        <React.Fragment>
            { options ? (
                <div className="dropdown-div" ref={ref} spellCheck={false}>
                    <div className="input-div" onClick={onInputClick}>
                        <label>&nbsp;{label}
                            <input
                                type="text"
                                value={value}
                                onChange={onInputChange}
                            />
                        </label>
                        
                        <div className="input-arrow-div">
                            <i className="input-arrow" />
                        </div>
                        {
                            inputValue ? <div onClick={clearDropdown} className="input-clear-div">x</div> : null
                        }
                        {/* {
                            filter ? (<div className="clients-list-sort">
                                        <img src={sortIcon} alt="sort icon" onClick={() => direction === "ASC" ? setDirection("DESC") : setDirection("ASC")} />
                                    </div>) : null
                        } */}
                    </div>
                    <div className={`dropdown ${open ? "visible" : ""}`} id="dropdown" >
                        {
                            Array.isArray(options) ? (
                                options.map((opt, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            onClick={() => onItemSelected(opt, index)}
                                            className="dropdown-option"
                                        >
                                            {opt}
                                        </div>
                                    )
                                })
                            ) : (
                                Object.keys(options).map((opt, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            onClick={() => onItemSelected(opt, index)}
                                            className="dropdown-option"
                                        >
                                            {opt}
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            ) : (null)}
        </React.Fragment>
        
    )
}
);

export default WithClickOutside(SelectComponent);