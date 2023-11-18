import CollectionTea from '../CollectionTea/CollectionTea';
import './CollectionPanel.sass';
import { collectionsList } from '../../constants/constants';
import Button from '../Button/Button';
import BreakLine from '../Break-line/BreakLine';

function CollectionPanel(props) {
    return (
        <section className="collection-panel">
            <h4 className="collection-panel__title">Название коллекции</h4>
            <div className="collection-panel__wrapper">
                <ul className="collection-panel__tea-list">
                    {collectionsList[0].itemList.map(({ item }) => (
                        <CollectionTea key={item.id} tea={item} />
                    ))}
                </ul>
                <BreakLine place="collection-panel" />
                <Button text="Добавить" place="collection-panel" type="add" />
                <BreakLine place="collection-panel" />
                <Button
                    text="Редактировать"
                    place="collection-panel"
                    type="edit"
                />
                <BreakLine place="collection-panel" />
                <Button text="Удалить" place="collection-panel" type="delete" />
            </div>
        </section>
    );
}
export default CollectionPanel;
