import React from "react";
import "../css/Modal.css"

function Modal(){
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close-area")
  closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
  })
  function dd(){

  }
  return(
    <div>
      <div id="container">
        <h2>Lorem Ipsum</h2>
        <div id="lorem-ipsum"></div>
      </div>
      <div id="modal" className="modal-overlay">
        <div className="modal-window">
          <div className="title">
            <h2>모달</h2>
          </div>
          <div className="close-area">X</div>
          
          <div className="content">
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <a onClick={}>가나다라마바사 아자차카타파하</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal