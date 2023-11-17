import './Content.sass';

function Content({ children, place }) {
    return <main className={`content content_${place}`}>{children}</main>;
}
export default Content;
