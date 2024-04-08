import  ReactDOM  from "react-dom";
import Modal from './Modal.js'

export const Backdrop = ({closeModal}) => {
    const handleClick = () => {
        closeModal();
    }
    return (
        <div onClick={handleClick} className="loader-overlay">

        </div>
    )
}

const Loader = () => {
  return(
      ReactDOM.createPortal(
      <>
            <Backdrop/>

          <div className="loader-overlay"></div>
          <div className="loading-dots">
              <div>Loading</div>
              <div className="loading-dots--dot">.</div>            
              <div className="loading-dots--dot">.</div>            
              <div className="loading-dots--dot">.</div>
          </div>
      </>,document.getElementById("loader-root")
      )
  )
}

export default Loader;