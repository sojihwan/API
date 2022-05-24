import React from "react";
import "../css/Modal.css"

function Modal(){
  function Close(){
    const modal = document.getElementById("modal");
    const closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
  })
  }
  return(
    <div>
      <div id="container">
        <div id="lorem-ipsum"></div>
      </div>
      <div id="modal" className="modal-overlay" onClick={Cl}>
        <div className="modal-window">
          <div className="title">
            <h2>모달</h2>
          </div>
          <div className="close-area" onClick={Close}>X</div>
          
          <div className="content">
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal