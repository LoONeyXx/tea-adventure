import './TeaList.sass';
import { InitialList } from '../../constants/constants';
import CardOfTea from '../CardOfTea/CardOfTea';

function TeaList({ onMore }) {
    return (
        <ul className="tea-list">
            {InitialList.map(tea => (
                <li key={tea.id}>
                    <CardOfTea onMore={onMore} {...tea} place="all-tea" />
                </li>
            ))}
        </ul>
    );
}
export default TeaList;
