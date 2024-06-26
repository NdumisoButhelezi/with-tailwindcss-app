'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { Message } from "postcss";
import { FormEvent, useState } from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";

type Props = {
    chatId: string;
};

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();

    //TO:DO use SWR to get model
    const model = "text-davinci-003";
    
    const sendMessages = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            },
            type: ""
        };

        await addDoc(
            collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), 
            message
        );

        // TOAST NOTIFICATION TO SAY LOADING
        const notification = toast.loading('pl-09-ai is cooking...');

        await fetch('api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session, 
            }),
        }).then(() => {
            // TOAST NOTIFICATION TO SAY SUCCESSFUL
            toast.success('pl-09-ai has responded!', {
                id: notification,
            });
        });
    };

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm flex items-center">
        <form onSubmit={sendMessages} className="p-5 space-x-5 flex-1 flex items-center">
            <input
                className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                disabled={!session}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                placeholder="Type your message here....."
            />
            <button 
                disabled={!prompt || !session}
                type="submit"
                className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
                <PaperAirplaneIcon className="h-6 w-6 transform rotate-45 text-gray-900" />
            </button>
        </form>
        {/* Model Selection */}
    </div>
    
    
    );
}

export default ChatInput;


