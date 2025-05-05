import axios from 'axios'
import React, { useEffect } from 'react'

const AdminUsers = () => {
    const FetchUserData = async()=>{
        try{
             const data = await axios.get("http://localhost:5000/api/admin/users")
        }
        catch(err){
             console.log("data note get ");
        }
    }
      useEffect(()=>{ FetchUserData()},[])

  return (
    <>
      
    </>
  )
}

export default AdminUsers
