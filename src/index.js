import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// This is a parent component

const App = () => {
  return (
    <div className="ui container comments">
      {/* CommmentDetail prop="value" */}
      <CommentDetail author="Babs"/>
      <CommentDetail author="Pat"/>
      <CommentDetail author="Fred"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));