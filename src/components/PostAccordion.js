import React, { useState, useEffect } from 'react';
import { Accordion, Card} from 'react-bootstrap';
import axios from 'axios';

  const PostAccordion = () => {
  const binId = process.env.REACT_APP_BIN_ID;
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const [activeKey, setActiveKey] = useState('1');
  const [data, setData] = useState(null);

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

  // Assuming you want to set sampleData to data when the component mounts
  useEffect(() => {
    setData(sampleData);
  }, []);

  return (
    <div>
      <h2>JSONBin.io Data:</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Error fetching data or no data available.</p>
      )}

      {data && (
        <Accordion defaultActiveKey={activeKey}>
          {data.record.posts.map((post, index) => (
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={post.id.toString()}>
                <div className="post-header">
                  <div className="post-title">
                    Title: <span className="post-text-header">{post.title}</span>
                  </div>
                  <div className="post-id">id: {post.id} {post.author}</div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={post.id.toString()}>
                <Card.Body>
                  <div className="post-content">{post.content}</div>
                  <div className="comment-container">
                    {post.comments.map((c, commentIndex) => (
                      <div className="comment-box" key={commentIndex}>
                        <div className="comment-body">
                          <div>{JSON.stringify(c.text)}</div>
                        </div>
                        <div className="comment-footer">
                          <div>comment-id: {c.id}</div>
                          <div>commenter: {JSON.stringify(c.user)}</div>
                          <div>Likes: {JSON.stringify(c.likes)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form>
                    <div className="comment-button-container">
                      <button type="submit" className="comment-button">
                        Comment
                      </button>
                      <input type="text" name="commenter" />
                    </div>
                    <div className="comment-textarea">
                      <textarea name="new-comment" />
                    </div>
                    <div className="post-icons"> </div>
                  </form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </div>
  );
};
export { PostAccordion };
