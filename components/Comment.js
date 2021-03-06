const Comment = ({ comment }) => (
    <div className="comment">
        <div className="comment-user">{comment.user}</div>
        <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>

        {comment.comments && (
            <div className="nested-comment">
                {comment.comments.map((nestedComment) => (
                    <Comment key={nestedComment.id} comment={nestedComment} />
                ))}
            </div>
        )}

        <style jsx>{`
            .comment {
                margin-bottom: 1.5rem;
            }
            .comment-user {
                font-size: 0.9rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
            .comment-content {
                font-size: 0.9rem;
            }
            .comment-content :global(p) {
                margin: 0 0 0.5rem;
                word-wrap: break-word;
            }
            .comment-content :global(a) {
                color: #f60;
                text-decoration: underline;
            }
            .comment-content :global(pre) {
                overflow: scroll;
                max-width: 100%;
            }
            .nested-comment {
                border-left: 1px solid rgba(0, 0, 0, 0.1);
                padding-left: 1rem;
                margin-top: 1rem;
            }
        `}</style>
    </div>
)

export default Comment;