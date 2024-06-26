import React, { use } from 'react'

interface Users{
    id:number;
    name:string;
}
const User = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users:Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
         {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
    </>
   
  )
}

export default User
