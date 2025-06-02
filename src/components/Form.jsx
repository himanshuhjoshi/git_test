import { useState } from "react";

export default function Form(){

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim()){
      setError("Name should not be empty");
      return;
    };

    if(/[^a-zA-Z]/.test(name)){
      setError("Name should only contain alphabets");
      return;
    };
    
    console.log(name);
    setError('');
    setName('');
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
          type="text" 
          placeholder="Enter you name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
        {(error) && <div className="error">{error}</div>}
      </form>
    </>
  );
}