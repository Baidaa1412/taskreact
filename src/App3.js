// src/App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import DisplayData from './DisplayData';




function App3() {
    const [formData, setFormData] = useState(null);
  
    const handleLogin = (data) => {
      setFormData(data);

    };
  
    return (
      <div>
        <h1>Login Form</h1>
        <LoginForm onSubmit={handleLogin} />
        {formData && <DisplayData data={formData} />}
      </div>
    );
  }
  
  export default App3;