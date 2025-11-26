import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import MessageContainer from '../../components/message/message-container'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white shadow-lg border border-gray-200'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home