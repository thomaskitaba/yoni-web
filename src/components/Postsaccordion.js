// src/components/JSONBinComponent.js
import React, { useState, useEffect } from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'


export const Postsaccordion = (props) => {

  const {data} = props;
  // const data = {
  //   "record": {
  //     "posts": [
  //       {
  //         "id": 1,
  //         "title": "First Post",
  //         "content": "This is the content of the first post.",
  //         "author": "John Doe",
  //         "comments": [
  //           {
  //             "id": 1,
  //             "text": "This is a comment on the first post.",
  //             "user": "Commenter1",
  //             "likes": 5,
  //             "replies": [
  //               {
  //                 "id": 1,
  //                 "text": "Reply to Commenter1's comment",
  //                 "user": "ReplyUser1"
  //               }
  //             ]
  //           },
  //           {
  //             "id": 2,
  //             "text": "Another comment on the first post.",
  //             "user": "Commenter2",
  //             "likes": 8,
  //             "replies": []
  //           }
  //         ]
  //       },
  //       {
  //         "id": 2,
  //         "title": "Second Post",
  //         "content": "Content for the second post goes here.",
  //         "author": "Jane Smith",
  //         "comments": [
  //           {
  //             "id": 1,
  //             "text": "Comment on the second post.",
  //             "user": "Commenter3",
  //             "likes": 12,
  //             "replies": [
  //               {
  //                 "id": 1,
  //                 "text": "Reply to Commenter3's comment",
  //                 "user": "ReplyUser2"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "id": 3,
  //         "title": "Third Post",
  //         "content": "Third post content.",
  //         "author": "Alex Johnson",
  //         "comments": [
  //           {
  //             "id": 1,
  //             "text": "Comment on the third post.",
  //             "user": "Commenter4",
  //             "likes": 3,
  //             "replies": []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   "metadata": {
  //     "id": "65a17308dc74654018914a1e",
  //     "private": false,
  //     "createdAt": "2024-01-12T17:12:40.611Z"
  //   }
  // }

  return (
    <React.Fragment>
    <div>
      <h2>Posts Accordion:</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Error fetching data or no data available.</p>
      )}

    </div>
    { data.record.posts.map((post,index) =>
    <div className="accordion-container">
      <div className="post-container">
        <div className="post-header">
        <div className="post-title"> Title: <span class="post-text-header">{post.title}</span></div>
          <div className="post-id">id: {post.id}  {post.author} </div>

        </div>
        <div className="post-content"> {post.content} </div>
      </div>

        <div className="comment-container">
          {post.comments.map((c, index) =>
            <div className="comment-box">
              <div className="comment-body">
                <div>{JSON.stringify(c.text)} </div>
              </div>
              <div className="comment-footer">
                <div>comment-id: {c.id}</div>
                <div>commenter: {JSON.stringify(c.user)} </div>
                <div>Likes: {JSON.stringify(c.likes)}</div>
              </div>
            </div>
          )}
          </div>
          <form>
            <div className="comment-button-container"> <button type="submit" className="comment-button">Comment</button>
            <inputbox type="text" name="commenter" ></inputbox>
            </div>
            <div className="comment-textarea">
              <textarea name="new-comment"></textarea>
            </div>
            <div class="post-icons"> </div>
          </form>
      <hr></hr>
    </div>
    )
  }
  </React.Fragment>
    );
  };

  // <div className="accordion-container">
  //     <div className="post-content">id: {data.record.posts[0].id}  {data.record.posts[0].author} </div>
  //     <div className="title"> {data.record.posts[0].title}</div>
  //     <div className="content"> {data.record.posts[0].content} </div>

  //     <div className="comment-box">{data.record.posts[0].author} </div>
  //     <form>
  //       <div className="comment-container">
  //       <div className="comment-box">{data.record.posts[0].comments.map((c, index) => (<div>{JSON.stringify(c.text)}</div>))} </div>
  //         <div className="comment-button"> <button type="submit">comment</button> </div>
  //       </div>
  //       <div class="post-icons"> </div>
  //     </form>
  //   </div>

      /* <Accordion activeKey={activeKey} onSelect={(eventKey) => setActiveKey(eventKey)}>
        {data.record.posts.map((post) => (
          <Card key={post.id}>
            <Accordion.Toggle as={Card.Header} eventKey={post.id.toString()}>
              {post.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={post.id.toString()}>
              <Card.Body>
                <div className="content">{post.content}</div>
                <div className="comment-container">
                  <div className="comment-box">{post.author}</div>
                  <div className="comment-button">
                    <Button type="submit">comment</Button>
                  </div>
                </div>
                <div className="post-icons"></div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
}; */
