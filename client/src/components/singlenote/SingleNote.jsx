import React from 'react'
import './singlenote.css'



export default function SingleNote() {
  return (
    <div className="single-note">
        <div className="single-note-edit">
            {/* <button> Modifier </button>
            <button> Supprimer </button> */}
            <i class="fas fa-times single-note-icon"></i>
            <i class="fas fa-times single-note-icon"></i>

        </div> 
        <div className="single-note-container">

            <h5 className='note-title'> Post title </h5>
            <p className='note-category'> category </p>
          <p className='note-description'> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor temporibus minus pariatur doloremque ducimus dolores eveniet? Nisi sit eveniet culpa perspiciatis similique aperiam expedita, voluptatum sunt doloremque unde. Nostrum, id! 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor temporibus minus pariatur doloremque ducimus dolores eveniet? Nisi sit eveniet culpa perspiciatis similique aperiam expedita, voluptatum sunt doloremque unde. Nostrum, id! 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor temporibus minus pariatur doloremque ducimus dolores eveniet? Nisi sit eveniet culpa perspiciatis similique aperiam expedita, voluptatum sunt doloremque unde. Nostrum, id! 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor temporibus minus pariatur doloremque ducimus dolores eveniet? Nisi sit eveniet culpa perspiciatis similique aperiam expedita, voluptatum sunt doloremque unde. Nostrum, id! 
          <img className='note-image'src="https://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png" alt=""></img>
          </p>

            
            
        </div>      

    </div>
  )
}
