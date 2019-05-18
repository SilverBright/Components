import React from 'react';
// import faker from 'faker';

// This is a child component
// Prop was passed from the parent component: index.js

const CommentDetail = props => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {/* Babs */}
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">
              {props.timeStamp}
            </span>
          </div>
          <div className="text">
            {props.content}
        </div>
      </div>
    </div>
  );
}

export default CommentDetail; 