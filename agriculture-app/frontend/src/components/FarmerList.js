import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/farmers')
      .then(response => {
        setFarmers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the farmers!', error);
      });
  }, []);

  return (
    <div>
      <h2>Farmers</h2>
      <ul>
        {farmers.map(farmer => (
          <li key={farmer._id}>{farmer.name} - {farmer.location} - {farmer.crops.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerList;