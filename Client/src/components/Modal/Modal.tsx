import React from 'react'
import '../Modal/Modal.scss'
import { RiCloseLine } from "react-icons/ri";

const Modal = () => {
  return (
    <>
      <div className='darkBG'/>
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>Dialog</h5>
          </div>
          <button className='closeBtn'>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
            Are you sure you want to delete the item?
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='deleteBtn'>
                Delete
              </button>
              <button
                className='cancelBtn'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;