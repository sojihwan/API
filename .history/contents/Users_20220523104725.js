import React,{useState,useEffect} from "react";
import axios from "axios";

function Users(){
  const [users,setUsers] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        setUsers(null);
        setError(null);
        setLoading(true);
        const reponse = await axios.get(
          'http://www.namdoskyview.or.kr/openapi/100/?kubun0=&kubun1=&group1=movie'
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
  <ul>
    {users.p}
  </ul>
)
}

export default Users