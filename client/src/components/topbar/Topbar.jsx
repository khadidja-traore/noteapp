import './topbar.css'

export default function Topbar() {
  return (

 <div className='nav-container'>


<nav>
  <div class="topbar">
    <div className="topLeft">
      <a href="#" id="logo"> Note It Up </a>
    </div>
    <div className="topCenter">
      <ul className="list-nav-items">
        <li className="nav-item"> Accueil </li>
        <li className="nav-item"> Notes </li>
        <li className="nav-item"> To dos  </li>
      </ul>
    </div>
    <div className="topRight">
      <i class="fa-solid fa-user"></i>
      <button className="button-logout"> Déconnexion </button>
      <button className="button-toggle"> Toggle </button>
    </div>
  </div>
</nav>
  <ul className='links-toggle'>
    <li> Profil</li>
    <li> Déconnexion</li>
  </ul>
 </div>


  )
}
