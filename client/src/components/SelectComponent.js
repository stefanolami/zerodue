import React, { useState, useEffect } from 'react';
import WithClickOutside from './WithClickOutside';

const SelectComponent = React.forwardRef( ({
    options,
    placeholder = "",
    onChange,
    selectedKey,
    open,
    setOpen
}, ref) => {

    const [inputValue, setInputValue] = useState("");

    /* useEffect = (() => {
        if (selectedKey) {
            setInputValue(Object.keys(options.italia).find((opt, index) => index === selectedKey))
        }
    }, [selectedKey]) */

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
                <div className="dropdown-div" ref={ref}>
                    <div className="input-div" onClick={onInputClick}>
                        <input
                            type="text"
                            value={inputValue}
                            placeholder={placeholder}
                            onChange={onInputChange}
                        />
                        <div className="input-arrow-div">
                            <i className="input-arrow" />
                        </div>
                        {selectedKey || inputValue ? <div onClick={clearDropdown} className="input-clear-div">
                            x
                        </div> : null}
                    </div>
                    <div className={`dropdown ${open ? "visible" : ""}`}>
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
                        {/* {Object.keys(options).map((opt, index) => {
                            return (
                                <div 
                                    key={index}
                                    onClick={() => onItemSelected(opt, index)}
                                    className="dropdown-option"
                                >
                                    {opt}
                                </div>
                            )
                        })} */}
                    </div>
                </div>
            ) : (null)}
        </React.Fragment>
        
    )
}
);

export default WithClickOutside(SelectComponent);