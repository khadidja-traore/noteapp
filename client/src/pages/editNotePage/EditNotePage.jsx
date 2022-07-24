import React from 'react'
import EditNote from '../../components/editNote/EditNote';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import './editNotePage.css'

export default function EditNotePage() {
  return (
    <>
                <Topbar/>
                <Header />
                <div className='main'>
                    
                    <Sidebar />
                    <EditNote />

                </div>
        </>
  )
}
