"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
const Profile = () => {
    const {data: session} = useSession()
if(!session){
    return redirect('/login')
}



  return (
    <div>
      
    </div>
  )
}

export default Profile
