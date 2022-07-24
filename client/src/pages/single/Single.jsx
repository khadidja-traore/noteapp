import React from 'react'
import SingleNote from '../../components/singlenote/SingleNote'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Single() {
  return (
    <>
            <Topbar/>
            <Header />
            <div className='home'>
                
                <Sidebar />
                <SingleNote />

            </div>
        </>
  )
}
