import React from 'react'
import CreateNote from '../../components/createNote/CreateNote';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import './createNotePage.css';

export default function createNotePage() {
  return (
    
        <>
                <Topbar/>
                <Header />
                <div className='main'>
                    
                    <Sidebar />
                    <CreateNote />

                </div>
        </>
  )
}
