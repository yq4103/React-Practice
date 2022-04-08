
const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.user}
          </a>
          <div className="metadata">
            <span className="date">
              {props.timePosted}
            </span>
          </div>
          <div className="text">
            {props.comments}
          </div>
        </div>
      </div>
  );
}

export default CommentDetail;