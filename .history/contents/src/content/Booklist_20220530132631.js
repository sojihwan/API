/* eslint-disable no-cond-assign */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/Booklist.css"
import Modal from "./Modal.js";

function Select(){
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id,setId] = useState({})
  const [page , setPage] = useState(1)
  useEffect(() => {
    const fetchapi = async () => {
      try{
        setApi(null);
        setError(null);
        setLoading(true);
        const reponse = await axios.get(
          `http://library.me.go.kr/pyxis-api/1/collections/1/search?all=k|a|library`
        );
        setApi(reponse.data)
      }catch (e){
         setError(e)
      }
      setLoading(false)
    };
    fetchapi();
  },[])
  
  if (loading) return <div>로딩중..</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!api) return null

  function model(){

    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
  const onBef = async () => {
    const modal = document.getElementById("modal");
    if(modal.style.display === "flex"){
      alert("모달장을 닫아주세요");
    }
    if(page <= 1 ){
      setPage(1)
      console.log(page)
      const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );
    setApi(reponse.data)
      alert("첫패이지 입니다");
      return 0;
    }
    setPage(page-1)
    console.log(page)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );
    setApi(reponse.data)
  }
  const onNaxt = async () => {
    const modal = document.getElementById("modal");
    if(modal.style.display === "flex"){
      alert("모달장을 닫아주세요");
    }
    if(page===9){
      alert("마지막 페이지 입니다.")
      return 0
    }
    console.log(page)
    setPage(page+1)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
      );
    setApi(reponse.data);
  }
  function idgive(key){
    setId(key)
  }
  return (
    <div className="taxt">
    {
            api.data.list.map((item,index) => {
            return(
              // api.data.list[index].thumbnailUrl:
              <div key={item.id} className="img" onClick={() => {idgive(api.data.list[index])}}>
              <img className="bookimg" onClick={model} src={
                api.data.list[index].thumbnailUrl != null? 
                api.data.list[index].thumbnailUrl:
                'img/ddd.jpg'
              }
              /><br/>
              <div className="Hidden">
              <b className="booktitle">{api.data.list[index].titleStatement}</b>
              </div>
            </div>
          )
        }
      )
    }
    <Modal id={id}/>
    <button id="B" className="w-btn w-btn-green" onClick={onBef} type="button">이전</button>
    <button id="N" className="w-btn w-btn-green" onClick={onNaxt} type="button">다음</button>    
  </div>
)
}

export default Select