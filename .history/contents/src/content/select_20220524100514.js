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
  useEffect((p) => {
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
                  <img className="bookimg" src={users.data.list[index].thumbnailUrl}/><br/>
                  <div className="Hidden">
                  <b className="booktitle">{users.data.list[index].titleStatement}</b>
                  </div>
                </div>
              );
            }
            )
          }
    <div class="back">
      <div class="button_base b05_3d_roll">
        <div>이전으로</div>
        <div onClick={onBef}>←</div>
      </div>
    </div>
    <div class="back">
      <div class="button_base b05_3d_roll">
        <div>다음으로</div>
        <div onClick={onNaxt}>→</div>
      </div>
    </div>
  </div>
)
}

export default Select