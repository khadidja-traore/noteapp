
import './sidebar.css'

export default function Sidebar() {

  
  return (
    
  <div class="sidebar">

    <button class='sidebar-toggle'> <i class="fas fa-times"></i> </button>
    

    <ul className='sidebar-list'>

      <h3 className='sidebar-title'> Notes </h3>
      <hr />
        <li className='list-item'> Voyages Voyages Voyages</li>
        <hr />
        <li className='list-item'> Voyages </li>
        <hr />
        <li className='list-item'> Voyages </li>
        <hr />
   
      
      <h3 className='sidebar-title'> Todos  </h3>
      <hr />
  
        <li className='list-item'> Voyages </li>
        <hr />
        <li className='list-item'> Voyages </li>
        <hr />
        <li className='list-item'> Voyages </li>
        <hr />

    </ul>

  </div>

  

  )
}
