import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    // !! converts to 'true boolean values', meaning a valid string is converted
    // to 'true' and undefined is converted to 'false' (flips it twice)
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Randomly selected:</h3>
        {/* error below */}
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button"onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;