import './CollectionTea.sass';

function CollectionTea({ tea }) {
    return (
        <li className="collection-tea">
            <button type="button" className="collection-tea__close"></button>
            <p className="collection-tea__category">{tea.categorie}</p>
            <h4 className="collection-tea__title">{tea.title}</h4>
            <p className="collection-tea__counter">
                <input
                    type="number"
                    className="collection-tea__input-counter"
                    onChange={e => e.target.value++}
                    value={0}
                />
            </p>
        </li>
    );
}
export default CollectionTea;
