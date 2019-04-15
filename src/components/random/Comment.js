import React from "react";
import Types from "prop-types";
import UserInfo from "./UserInfo";

const Comment = props => (
    <div className="comment">
        <div className="comment-user-info">
          <UserInfo user={props.user} />
        </div>

        <div className="comment-body">
            <p className="comment-text">{ props.text }</p>
            <span className="comment-date-time">{ props.date }</span>
        </div>
    </div>
);



export default Comment;
