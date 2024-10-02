import { useState } from "react";
import { useDispatch } from 'react-redux';  // Import useDispatch
import { addPassword } from './features/passwords/passwordsSlice'; 
import zxcvbn from 'zxcvbn';

function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  // Generate a password with a dynamic length based on user input
  const newPassword = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }).join(''); // Join the array into a single string

  // Insert hyphens after every 3 characters to match the pattern xxx-xxx-xxx
  const hyphPassword = `${newPassword.slice(0, 3)}-${newPassword.slice(3, 6)}-${newPassword.slice(6, 9)}`;

  return hyphPassword;
}

function Password() {
  // Controlled component states
  const dispatch = useDispatch();  // Create a dispatcher
  const [password, setPassword] = useState('p@$$w0rd');  // Initial password value
  const [name, setName] = useState('My Password');       // New state for the password description/name
  const [length, setLength] = useState(9);               // State for dynamic password length
  console.log(zxcvbn(password))

  return (
    <div className="password-container">
      <h1>Password Generator</h1>
      
      {/* Input for password itself */}
      <div>
        <input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Generated password" 
        />
      </div>
      
      {/* New input for password name/description */}
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Password name/description" 
        />
      </div>
      
      {/* Input to control the password length */}
      <div>
        <label>Password Length: </label>
        <input 
          type="number" 
          value={length} 
          min="3" 
          max="15" 
          onChange={(e) => setLength(Number(e.target.value))} 
        />
      </div>
      
      {/* Display the current password and name */}
      <div className="password-display">
        <p><strong>{name}</strong>: {password}</p>
      </div>

      {/* Button to generate a new password */}
      <button className="generate-btn" onClick={() => {
        const newPassword = generatePassword(length);  // Generate password with chosen length
        setPassword(newPassword);  // Update the password in state
      }}>
        Generate
      </button>

      <button className="save-btn" onClick={() => dispatch(addPassword({ name, password }))}>
        Save
      </button>
    </div>
    
  );
}


export default Password;
