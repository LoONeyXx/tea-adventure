import './CommentList.sass';

import Comment from '../Comment/Comment';
function CommentList({ comments = [] }) {
    return (
        <ul className="comment-list">
            {comments.length > 0 ? (
                comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))
            ) : (
                <p className="comment-list__empty">Комментариев пока нет</p>
            )}
        </ul>
    );
}
export default CommentList;
