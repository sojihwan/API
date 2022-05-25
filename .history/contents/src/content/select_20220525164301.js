/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/Select.css"
import Modal from "../content/Modal.js";

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
    if(page === 1 ){
      alert("첫패이지 입니다");
      return 0;
    }
    setPage(page-1)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );
    setApi(reponse.data)
  }
  const onNaxt = async () => {
    console.log(page)
    setPage(page+1)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );
    if(reponse.)
    setApi(reponse.data);
  }
  function idgive(key){
    setId(key)
  }
  return (
    <div>
    {
            api.data.list.map((item,index) => {
              return(
                <div className="img" key={index} onClick={() => {idgive(api.data.list[index])}}>
                  <img className="bookimg" onClick={model} src={(api.data.list[index].thumbnailUrl != null)?api.data.list[index].thumbnailUrl:'img/ddd.jpg'}
                  /><br/>
                  <div className="Hidden">
                  <b className="booktitle">{api.data.list[index].titleStatement}</b>
                  </div>
                </div>
              );
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