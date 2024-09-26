import { useState } from "react";

function generatePassword() {
  // Define the characters for password generation
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate the password with 9 random characters and join without spaces
  const newPassword = Array.from({ length: 9 }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }).join(''); // Join the array into a single string without spaces

  // Insert hyphens after every 3 characters to match the pattern xxx-xxx-xxx
  const hyphPassword = `${newPassword.slice(0, 3)}-${newPassword.slice(3, 6)}-${newPassword.slice(6, 9)}`;

  return hyphPassword; 
}

function Password() {
  const [password, setPassword] = useState('p@$$wrd');

  return (
    <div className="password-container">
      <div className="password-display">{password}</div>
      <div>
        <button className="generate-btn" onClick={() => {
          const newPassword = generatePassword(); // Generate a new password
          setPassword(newPassword); // Update the state with the new password
        }}>Generate</button>
      </div>
    </div>
  );
}

export default Password;
