import React from 'react'
import { JsxAttribute } from 'typescript';
import '../Modal/Modal.scss'

interface ModalProps {
  children?: JSX.Element,
}

const Modal = ({children}: ModalProps) => {
  return (
    <>
      <div className='darkBG'/>
      <div className='centered'>
        <div className='modal'>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;