import React from 'react'

interface Props{
    params: {
      photoId:number,
      id:number,

    }
}
const user = ({params}:Props) => {
  return (
    <div>UserDetailPage =={params.id} and the photo id is  {params.photoId}</div>
  )
}

export default user;