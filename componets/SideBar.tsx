/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable @next/next/no-img-element */
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import "../src/app/globals.css";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen relative">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>
            {/* ModelSelection */}
          </div>
          {/* Map through the Chatbots */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="inline-block" style={{ padding: "15px" }}>
            <img
              onClick={() => signOut()}
              src={session.user?.image!}
              alt="Profile picture"
              className="h-10 w-10 rounded-full cursor-pointer hover:opacity-50"
              style={{
                width: "50px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                borderRadius: "50%", // Make it round
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
