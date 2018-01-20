import React from 'react';
// need react b/c these elements get converted to react jsx through babel
// would fail if react not imported

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.optionText}</p>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
        Remove
        </button>
    </div>
);


export default Option;