import React,{useState,useEffect} from "react";
import axios from "axios";

function select(){
  
  (() => {
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


return (
  <div>
    {users.message}
    {users.data.list[1].id}
  </div>
)
}

export default select