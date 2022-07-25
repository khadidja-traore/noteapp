import React from 'react'
import './signIn.css'

export default function SignIn() {
  return (
    <div className="register">
        <h1> Note It Up </h1>
        <h3> Inscription </h3>
        <form action="http://localhost:5000/api/re
        " method="post" className="form-register">

        <label for="username"> Nom : </label>
        <input className="input-register" type="text" id="username" name="username"/>

        <label for="email"> Email </label>
        <input className="input-register" type="email" id="email" name="email"/>

        <label for="password"> Mot de passe  </label>
        <input className="input-register" type="password" id="password" name="password"/>

        <button className="register-button"> S'inscrire </button>
        </form>
        <button className="to-login-button"> Se Connecter </button>
    
    </div>
  )
}
