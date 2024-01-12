// src/components/JSONBinComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Posts = () => {
  const endPoint = "https://api.jsonbin.io/v3/b/";
  const [data, setData] = useState(null);
  const binId = process.env.REACT_APP_BIN_ID;
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
    const fetchJSONData = async () => {
      try {
        const response = await axios.get(`endPoint${binId}`, {
          headers: {
            'secret-key': secretKey,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJSONData();
  }, [binId, secretKey]);

  return (
    <div>
      <h2>JSONBin.io Data:</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
