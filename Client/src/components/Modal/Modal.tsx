import React from 'react'
import { JsxAttribute } from 'typescript';
import '../Modal/Modal.scss'

interface ModalProps {
  children?: JSX.Element,
  overlay?: boolean,
  width: string,
  height: string
}

const Modal = ({children, overlay, width, height}: ModalProps) => {
  return (
    <div className='modal'>
      <div className={overlay ? 'modal-overlay' : ''} />
        <div className='modal-content' style={{width: width, height: height}}>
          {children}
        </div>
    </div>
  );
};

Modal.defaultProps = {
  with: '1000px',
  height: '680px'
};

export default Modal;