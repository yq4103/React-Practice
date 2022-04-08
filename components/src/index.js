import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const APP = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          user="Zoey"
          timePosted="Today at 1PM"
          comments="u r hot"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          user="Vi"
          timePosted="Today at 2PM"
          comments="cupcake"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          user="Cait"
          timePosted="Today at 3PM"
          comments="don't call me that"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<APP />, document.querySelector('#root'));