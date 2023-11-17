import "./CollectionItem.sass";
import iconList from "../../../assets/images/list.svg";
function CollectionItem({ collection }) {
  return (
    <li className='collection'>
      <h3 className='collection__title'>{collection.title}</h3>
      <div
        className='collection__icon'
        style={{
          backgroundImage: `url(${iconList})`,
        }}
      ></div>
    </li>
  );
}
export default CollectionItem;
