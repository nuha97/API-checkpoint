import React from 'react'
import User from './User'

const UserList = ({userData})=>{
   
return(
    
  
    userData.map(user=><User user={user} /> )
  
    
)
}
export default UserList
