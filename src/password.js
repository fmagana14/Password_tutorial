import { useState } from "react";

function generatePassword() {
// generate a password here
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz'
// generates array of random num
  const newPassword = Array.from({ length: 8}, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];

  })

  setPassword(newPassword); 
}


function Password() {
  const [password, setPassword] = useState('p@$$wrd')

  return (
    <div>
      <div>{password}</div>
      <div>
        <button onClick={(e) => {
          generatePassword()
        }}>Generate</button>
      </div>
    </div>
  )
}

export default Password