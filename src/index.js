import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

// This is the parent component

const App = () => {
  return (
    <div className="ui container comments">
      <br/>

      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        {/* CommmentDetail 
            prop="value" */}
        <CommentDetail 
          author="Babs" 
          timeStamp="Today at 5:00pm" 
          content="Nice blog post!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Pat" 
          timeStamp="Today at 3:45pm" 
          content="Lookin' good!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Fred" 
          timeStamp="Today at 2:01pm" 
          content="What's shakin' bacon?!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));