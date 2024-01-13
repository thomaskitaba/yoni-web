// src/components/JSONBinComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Posts = () => {
  const binId = process.env.REACT_APP_BIN_ID;
  const secretKey = process.env.REACT_APP_SECRET_KEY

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}`, {
        headers: {
          'X-Master-Key': secretKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchJSONData = async () => {
      const jsonData = await fetchData();
      setData(jsonData);
    };

    fetchJSONData();
  }, [binId, secretKey]);

  return (
    <div>
      <h2>JSONBin.io Data:</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Error fetching data or no data available.</p>
      )}
    </div>
  );
};


