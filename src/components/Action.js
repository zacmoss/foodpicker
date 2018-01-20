import React from 'react';

const Action = (props) => {
    return (
        <div>
            {/* Not calling handlePick here, just referencing it, hence no () */}
            <button 
                className="big-button"
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
                What should I eat?
            </button>
        </div>
    );
};

export default Action;