import { Fragment } from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
    <Fragment>
        {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </Fragment>
)

export default CommentList;