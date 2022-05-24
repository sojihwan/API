/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/Select.css"

function Select(){
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let lib =1;
  let page =1;
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
  },[])
  
  if (loading) return <div>로딩중..</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!users) return null

  function model(){
    const modal = document.getElementById("modal")
    const btnModal = document.getElementById("btn-modal")
      btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
})
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
return (
  <div>
    {
            users.data.list.map((item,index) => {
              return(
                <div className="img" onClick={model} key={index}>
                  <img className="bookimg" src={(users.data.list[index].thumbnailUrl != null)?users.data.list[index].thumbnailUrl:'img/ddd.jpg'}
                  /><br/>
                  <div className="Hidden">
                  <b className="booktitle">{users.data.list[index].titleStatement}</b>
                  </div>
                </div>
              );
            }
            )
          }
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
                <p>가나다라마바사 아자차카타파하</p>
                
            </div>
        </div>
    </div>
        <button className="B" onClick={onBef}>이전</button>
        <button className="N" onClick={onNaxt}>다음</button>
        
  </div>
)
}

export default Select