import React from 'react';
import faker from 'faker';

// This is a child component

const CommentDetail = props => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {/* Babs */}
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post!
        </div>
      </div>
    </div>
  );
}

export default CommentDetail; 