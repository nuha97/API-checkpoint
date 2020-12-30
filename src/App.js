import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserList from './UserList';

function App() {
  const [listOfUserState,setUserList] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(userList => setUserList(userList.data))
  },[])
  return (
    <div className="App">
     <h1>FETCHING USERS DATA </h1>
    <table>
        <thead>
        <th>ID</th>
        <th>Full Name</th>
        <th>username</th>
        <th>Email</th>
        <th>phone</th>
        <th>website</th>
        <th>company</th>
        <th>city</th>
        </thead>

        <tbody>
      
        <UserList userData = {listOfUserState} />
        
        </tbody>
  </table>
</div>
  );
}

export default App;
