import  ReactDOM  from "react-dom";
import Backdrop from './Loader.js'
import { Children } from "react";
const Modal = ({closeModal, children}) => {
    return (
        ReactDOM.createPortal(
            <>
                <Backdrop closeModal={closeModal} />
                <div className="modal"> 
                    <span><button type="close"  onClick={closeModal}> X </button></span>
                    <div className="content">{children}</div>
                </div>
            </>,document.getElementById("modal-root")
            )
    )
}

export default Modal;