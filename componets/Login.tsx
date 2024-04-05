'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
    return ( 
    <div style={{ backgroundColor: '#11A37F' }} className="h-screen flex flex-col items-center justify-center text-center">
        <Image
            src="https://links.papareact.com/2i6"
            width={300}
            height={300}
            alt="logo" 
        />
        <button onClick={() => signIn('google')} className="text-white font-bold text-3xl animate-pulse">
        Sign In to use PLanet 09 Python GPT
        </button>       
    </div>
    )
}

export default Login