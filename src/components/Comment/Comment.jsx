import Breakline from '../Break-line/BreakLine';
import './Comment.sass';

function Comment({ comment }) {
    return (
        <li className="comment">
            <div className="comment__title-zone">
                <div className="comment__rate">{`Оценка: ${comment.rate}/10`}</div>
                <h3 className="comment__name">{comment.name}</h3>
                <div className="comment__date">{comment.date}</div>
            </div>
            <Breakline place="comment" />
            <div className="comment__text-zone">
                <p className="comment__text ">{comment.description}</p>
            </div>
            {/* <Breakline place="comment" /> */}
        </li>
    );
}
export default Comment;
