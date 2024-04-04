import NewChat from "./NewChat"

function SideBar() {
  { /* const {data: session } = useSession(); */ }
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat/> 

                <div>
                    {/*ModelSelection*/}
                </div>
            </div>
            {/* session && <img src={session.user?.image!} alt="Profile picture"
              className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hpver:opacity-50" /> */ }
        </div>


        {/*Map through the Chatbots */}

    </div>
  )
}

export default SideBar 