import React from 'react'
import './signIn.css'

export default function SignIn() {
  return (
    <div className="signin">
        <h1> Note It Up </h1>
        <h3> Inscription </h3>
        <form action="" method="post" className="form-signin">

        <label for="pseudo"> Pseudo </label>
        <input className="input-signin" type="text" id="pseudo" name="pseudo"/>

        <label for="email"> Email </label>
        <input className="input-signin" type="email" id="email" name="email"/>

        <label for="password"> Mot de passe  </label>
        <input className="input-signin" type="password" id="password" name="password"/>

        <button className="signin-button"> S'inscrire </button>
        </form>
        <button className="to-login-button"> Se Connecter </button>
    
    </div>
  )
}
