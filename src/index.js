import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

// This is a parent component

const App = () => {
  return (
    <div className="ui container comments">
      {/* CommmentDetail prop="value" */}
      <CommentDetail 
        author="Babs" 
        timeStamp="Today at 5:00pm" 
        content="Nice blog post!" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Pat" 
        timeStamp="Today at 3:45pm" 
        content="Lookin' good!" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Fred" 
        timeStamp="Today at 2:01pm" 
        content="What's shakin' bacon?!" 
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));