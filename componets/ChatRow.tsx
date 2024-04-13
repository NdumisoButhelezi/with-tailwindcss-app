'use client'

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import "../src/app/globals.css";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [id, pathname]);

  const removeChat = async () => {
    try {
      await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
      // If the deletion is successful, you may want to handle any UI updates or navigations here
    } catch (error) {
      console.error("Error deleting chat:", error);
      // Handle any errors, such as displaying an error message to the user
    }
  };
  const [isTrashIconHovered, setIsTrashIconHovered] = useState(false); 

  return (
    <Link href={`/chat/${id}`} className={`chatRow flex items-center justify-center ${active ? 'bg-white' : ''}`}>
  <ChatBubbleLeftIcon
    className="h-6 w-6 mr-2 text-green-500" // Adjust icon size
    style={{ marginRight: "0.5rem" }} // Adjust icon spacing
  />
  <p className="flex-1 truncate text-sm text-green-500" style={{ transition: 'color 0.8s ease' }}>
    {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
  </p>
  <TrashIcon
    onClick={removeChat}
    className={`h-6 w-6 text-gray-500 cursor-pointer ${isTrashIconHovered ? 'hover:text-red-500' : ''}`}
    style={{ marginLeft: "0.5rem" }}
    onMouseEnter={() => setIsTrashIconHovered(true)}
    onMouseLeave={() => setIsTrashIconHovered(false)}
  />
</Link>

  );
}

export default ChatRow;
