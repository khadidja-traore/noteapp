import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <h1> Note It Up </h1>
        <h3> Connexion </h3>
        <form action="" method="post" className="form-login">

        {/* <label for="pseudo"> Pseudo </label>
        <input className="input-login" type="text" id="pseudo" name="pseudo"/> */}

        <label for="email"> Email </label>
        <input className="input-login" type="email" id="email" name="email"/>

        <label for="password"> Mot de passe  </label>
        <input className="input-login" type="password" id="password" name="password"/>

        <button className="login-button"> Se Connecter  </button>
        </form>
        <button className="to-register-button"> S'inscrire </button>
    
    </div>
  )
}
