/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/Select.css"
import "../css/Modal.css"
import Modal from "../content/Modal.js";

function Select(){
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let page =1;
  let idgit = 0;
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        setUsers(null);
        setError(null);
        setLoading(true);
        const reponse = await axios.get(
          `http://library.me.go.kr/pyxis-api/3/collections/${page}/search?all=k|a|library`
        );
        setUsers(reponse.data)
      }catch (e){
         setError(e)
      }
      setLoading(false)
    };
    fetchUsers();
  },[page])
  
  if (loading) return <div>로딩중..</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!users) return null
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
  function model(){
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
  function onNaxt(){
    page = page+ 1;
    console.log(page)
  }
  function onBef(){
    if(page === 1){
      alert("현재 페이지는 첫 페이지 입니다")
      return 0;
    }
    page = page- 1;
  }
  function idgive(key){
    idgit = key;
    console.log(idgit);
  }
  return (
    <div>
    {
            users.data.list.map((item,index) => {
              return(
                <div className="img" onClick={model()} key={index}>
                  <img className="bookimg" onClick={idgive(users.data.list[index]users.data.list[index])} src={(users.data.list[index].thumbnailUrl != null)?users.data.list[index].thumbnailUrl:'img/ddd.jpg'}
                  /><br/>
                  <div className="Hidden">
                  <b className="booktitle">{users.data.list[index].titleStatement}</b>
                  </div>
                </div>
              );
            }
            )
          }
          <div>
      <div id="container">
        <div id="lorem-ipsum"></div>
      </div>
      <div id="modal" className="modal-overlay" onClick={overlay_Close}>
        <div className="modal-window">
          <div className="title">
            <h2>{users.data.list[index].titleStatement}</h2>
          </div>
          <div className="close-area" onClick={Close}>X</div>
          
          <div className="content">
            <img id="ModalImg" src={props.id.thumbnailUrl !=null? props.id.thumbnailUrl:'img/null.jpg'}/>
            <b id="author" className="ModalText">{props.id.author}</b>
            <b id="publication" className="ModalText">{props.id.publication}</b>
            <b id="similars" className="ModalText">{props.id.similars[0].titleStatement}<br/><br/>{props.id.similars[1].titleStatement}<br/><br/>{props.id.similars[2].titleStatement}</b>
          </div>
        </div>
      </div>
    </div>
        <button id="B" className="w-btn w-btn-green" onClick={onBef} type="button">이전</button>
        <button id="N" className="w-btn w-btn-green" onClick={onNaxt} type="button">다음</button>
        
  </div>
)
}

export default Select