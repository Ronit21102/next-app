import React from 'react'

interface Props{
    params:{slugs:string[]},
    searchParams:{ sortOrder: string}
}
const page = ({params:{slugs} , searchParams:{sortOrder}}:Props) => {
  return (
    <div>{sortOrder}</div>
  )
}

export default page