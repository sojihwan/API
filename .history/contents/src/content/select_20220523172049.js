/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/Select.css"

function Select(){
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        setUsers(null);
        setError(null);
        setLoading(true);
        const reponse = await axios.get(
          'http://library.me.go.kr/pyxis-api/2/collections/2/search?all=k|a|library'
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

  let like = users.data.list[0].thumbnailUrl
  function model(){

  }
return (
  <div>
    {
            users.data.list.map((item,index) => {
              return(
                <tr key={index}>
                  <td> 
                    <Link to="/View" className="Link">
                      <b onClick={() =>{if(item != null){props.setValue(item.like)}}}>
                       {item===null ? '업로드를 해주세요' : item.title }
                      </b>
                    </Link>
                  </td>
                  <td><button className='btn btn-default' style={{color:'#FFFFFF',width:'60px'}} onClick={()=>{if(item !== null){onRemomve(item.like)}}}>삭제</button></td>
                </tr>
              );
            }
            )
          }
      <div className="img" onClick={model}>
      <img className="bookimg" src={like}/><br/>
      <b className="booktitle">{users.data.list[0].titleStatement}</b>
    </div>
  </div>
)
}

export default Select