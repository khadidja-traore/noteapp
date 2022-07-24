import React from 'react'
import './posts.css'
import Note from '../note/Note';

export default function Posts() {

  const tab = [1, 2, 3]; 

  return (
    <div className='posts'>

        <div className="posts-header">
          <h4> Voyages </h4>

          <form action="">
              <input type="search" name="" id="" />
          </form>

        </div>


        <div className="posts-body">

        {tab.map(t => {
          return <Note />
        })}
        </div>



        


    </div>
  )
}
