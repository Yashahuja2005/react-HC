// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Yashahuja2005')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])


    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center justify-center'>
        Github followers: {data.followers}
        <img className='rounded-full mt-4' src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Yashahuja2005')
    return response.json() 
}