import "./CollectionTea.sass";

function CollectionTea({ tea }) {
  return (
    <li className='collection-tea'>
      <p className='collection-tea__category'>{tea.category}</p>
      <h4 className='collection-tea__title'>{tea.title}</h4>
      <form
        disabled
        className='collection-tea__form'
        action='#'
        noValidate
      >
        <input
          disabled
          type='text'
          defaultValue='0'
          className='collection-tea__counter'
        />
      </form>
    </li>
  );
}
export default CollectionTea;
