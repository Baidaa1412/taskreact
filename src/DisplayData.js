// src/DisplayData.js
import React from 'react';

function DisplayData({ data }) {
  return (
    <div>
      <h2>Entered Data:</h2>
      <p>Username: {data.username}</p>
      <p>Password: {data.password}</p>
    </div>
  );
}

export default DisplayData;

