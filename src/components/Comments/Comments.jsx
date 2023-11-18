import './Comments.sass';
import CommentList from '../CommentList/CommentList';
import Comment from '../Comment/Comment';
import { comments } from '../../constants/constants';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import Section from '../Section/Section';
function Comments(props) {
    return (
        <>
            <Section name="comments">
                <AddCommentForm />

                <div className="comments__comment-zone">
                    <h2 className="comments__title">Комментарии:</h2>
                    <div className="comments__list-zone">
                        <CommentList comments={comments} />
                    </div>
                </div>
            </Section>
        </>
    );
}
export default Comments;
