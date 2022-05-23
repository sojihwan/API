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
          'http://library.me.go.kr/pyxis-api/2/collections/2/search?all=k|a|library'
        );
        setUsers(reponse.data)
        console.log(reponse.data)
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
    {usersuser.data.list.map(user => (
      <li key={user.data.list.id}>
        {user.message},{user.code}
      </li>
    ))}
  </ul>
)
}

export default Users