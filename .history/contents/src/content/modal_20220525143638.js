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
  console.log(props.id)
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
            <b id="author" className="ModalText">{props.id.author}</b>
            <b id="publication" className="ModalText">{props.id.publication}</b>
            {/* <b id="similars" className="ModalText">{props.id.similars[0].titleStatement!=null ? props.id.similars[0].titleStatement : "?왜 값이 없지"}
            <br/><br/>
            {props.id.similars[1].titleStatement!=null ? props.id.similars[1].titleStatement : "?왜 값이 없지"}
            <br/><br/>
            {props.id.similars[2].titleStatement!=null ? props.id.similars[2].titleStatement : "?왜 값이 없지"} */}
            </b> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal