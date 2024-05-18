"use client";
import React, { useContext } from 'react'
import useUser from '../customHook/useUser'
import { useRouter } from 'next/navigation';

function profile() {
 
  const { getToken, logout } = useUser();
  const router = useRouter();

  return (
    <div>
      <h1>Profile Page</h1>

      {!getToken && <button onClick={() => {
        router.push("/login");
      }}>Login</button>}
      {getToken && <button onClick={() => {
        logout();
        router.push("/");
      }}>Logout</button>}
      
    </div>
  )
}

export default profile
