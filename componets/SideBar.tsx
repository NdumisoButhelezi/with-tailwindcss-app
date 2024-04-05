/* eslint-disable @next/next/no-img-element */
'use client'

import NewChat from "./NewChat"
import { useSession,signOut } from "next-auth/react";

function SideBar() {
  const {data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat/> 
                <div>
                    {/*ModelSelection*/}
                </div>
                {/*Map through the Chatbots */}
            </div>
        </div>
        {session && (
    <img
        onClick={() => signOut()}
        src={session.user?.image!} 
        alt="Profile picture"
        style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'scale-down'}} 
        className="h-10 w-10 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
    /> 
)}
    </div>
  )
}

export default SideBar 