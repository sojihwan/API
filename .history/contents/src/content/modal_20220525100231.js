/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from "react";
import "../css/Modal.css"

function Modal(props){
  function Close(){
    const modal = document.getElementById("modal");
    const closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
  })
  }
  function overlay_Close(){
    const modal = document.getElementById("modal");
    modal.addEventListener("click", e => {
      const evTarget = e.target
      if(evTarget.classList.contains("modal-overlay")) {
          modal.style.display = "none"
      }
  })
  }
  return(
    <div>
      <div id="container">
        <div id="lorem-ipsum"></div>
      </div>
      <div id="modal" className="modal-overlay" onClick={overlay_Close}>
        <div className="modal-window">
          <div className="title">
            <h2>{props.id.titleStatement}</h2>
          </div>
          <div className="close-area" onClick={Close}>X</div>
          
          <div className="content">
            <img id="ModalImg" src={props.id.thumbnailUrl !=null? props.id.thumbnailUrl:'img/null.jpg'}/>
            <b id="author" className="ModalText1">가나다라마바사</b>
            <b id="" className="ModalText2">가나다라마바사</b>
            <b id="author" className="ModalText3">가나다라마바사</b>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal