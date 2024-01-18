// src/components/JSONBinComponent.js
import React, { useState, useEffect } from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Postsaccordion } from './Postsaccordion';


export const Posts = () => {
  const binId = process.env.REACT_APP_BIN_ID;
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const [activeKey, setActiveKey] = useState('1');
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

  const sampleData = {
    "record": {
      "posts": [
        {
          "id": 1,
          "title": "First Post",
          "content": "This is the content of the first post.",
          "author": "John Doe",
          "comments": [
            {
              "id": 1,
              "text": "This is a comment on the first post.",
              "user": "Commenter1",
              "likes": 5,
              "replies": [
                {
                  "id": 1,
                  "text": "Reply to Commenter1's comment",
                  "user": "ReplyUser1"
                }
              ]
            },
            {
              "id": 2,
              "text": "Another comment on the first post.",
              "user": "Commenter2",
              "likes": 8,
              "replies": []
            }
          ]
        },
        {
          "id": 2,
          "title": "Second Post",
          "content": "Content for the second post goes here.",
          "author": "Jane Smith",
          "comments": [
            {
              "id": 1,
              "text": "Comment on the second post.",
              "user": "Commenter3",
              "likes": 12,
              "replies": [
                {
                  "id": 1,
                  "text": "Reply to Commenter3's comment",
                  "user": "ReplyUser2"
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Third Post",
          "content": "Third post content.",
          "author": "Alex Johnson",
          "comments": [
            {
              "id": 1,
              "text": "Comment on the third post.",
              "user": "Commenter4",
              "likes": 3,
              "replies": []
            }
          ]
        }
      ]
    },
    "metadata": {
      "id": "65a17308dc74654018914a1e",
      "private": false,
      "createdAt": "2024-01-12T17:12:40.611Z"
    }
  }

  const [data, setData] = useState(sampleData);
  useEffect(() => {
    const fetchJSONData = async () => {
      const jsonData = await fetchData();
      setData(sampleData);
    };

    fetchJSONData();
  }, [binId, fetchData, secretKey]);

  // setData(sampleData);

  return (
    <Container>
      <Postsaccordion data={sampleData} />
  </Container>
    );
  };
