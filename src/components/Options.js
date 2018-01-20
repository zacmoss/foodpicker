import React from 'react';
import Option from './Option.js';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option.</p>}
            {
                //this is accessing the array of options, looping through
                // with the .map() and using each individual option
                // as the key and printing it to the ordered list
                props.options.map((option, index) => {
                    return <Option 
                        key={option} 
                        optionText={option}
                        //count={index +1}
                        handleDeleteOption={props.handleDeleteOption}
                    />;
                })
            }
        </div>
    );
};

export default Options;