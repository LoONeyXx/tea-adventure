import CollectionTea from "../CollectionTea/CollectionTea";
import "./CollectionPanel.sass";
import { collectionsList } from "../../constants/constants";

function CollectionPanel(props) {
  return (
    <section className='collection-panel'>
      <h4 className='collection-panel__title'>Название коллекции</h4>
      <div className='collection-panel__wrapper'>
        <ul className='collection-panel__tea-list'>
          {collectionsList[0].itemList.map(({ item }) => (
            <CollectionTea
              key={item.id}
              tea={item}
            />
          ))}
        </ul>
        <div className='collection-panel__break-line'></div>
        <button className='collection-panel__button collection-panel__button_add'>
          Добавить
        </button>
        <div className='collection-panel__break-line'></div>
        <button className='collection-panel__button collection-panel__button_edit'>
          Редактировать
        </button>
        <div className='collection-panel__break-line'></div>
        <button className='collection-panel__button collection-panel__button_delete'>
          Удалить
        </button>
      </div>
    </section>
  );
}
export default CollectionPanel;
