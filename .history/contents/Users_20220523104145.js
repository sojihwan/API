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
        setLoading(true)
      }catch (e){
         
      }
    }
  },[])
  
return (
    <div>

    </div>
  );
}

export default Users