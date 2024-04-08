import  ReactDOM  from "react-dom";
import Backdrop from './Loader.js'
const Modal = ({closeModal}) => {
    return (
        ReactDOM.createPortal(
            <>
                <Backdrop closeModal={closeModal} />
                <div className="modal"> 
                    Modal Content
                    <span><button onClick={closeModal}> X </button></span>
                </div>
            </>,document.getElementById("modal-root")
            )
    )
}

export default Modal;