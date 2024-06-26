import Chat from '../../../../componets/Chat'
import ChatInput from '../../../../componets/ChatInput'

type Props={
  params: {
    id:string
  }
}
function Chatpage({params:{ id } }:Props ) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Chat chatId={id}/>
      <ChatInput chatId ={id}/>
    </div>
  )
}

export default Chatpage