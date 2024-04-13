'use client';
import { useState } from 'react';
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";
import "../src/app/globals.css";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isHovered, setIsHovered] = useState(false);

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", (session?.user?.email)!, "chats"),
      {
        userId: (session?.user?.email)!,
        createdAt: serverTimestamp()
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      onClick={createNewChat}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden cursor-pointer"
    >
      <div
        className={`border border-gray-400 rounded-xl p-4 flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-gray-200' : 'bg-transparent'}`}
        style={{ padding: '15px' }}
      >
        <PlusIcon
          className={`h-6 w-6 ${isHovered ? 'text-gray-600' : 'text-white'}`}
        />
        <span className={`ml-2 ${isHovered ? 'text-green-500' : 'text-white'}`}>
          New Chat
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute inset-0 bg-gray-200 opacity-30 rounded-xl"
          style={{
            animation: 'pulse 1s infinite',
          }}
        ></div>
      )}
    </div>
  );
}

export default NewChat;