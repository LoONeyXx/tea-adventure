import './TeaList.sass';
import { InitialList } from '../../constants/constants';
import CardOfTea from '../CardOfTea/CardOfTea';

function TeaList({ onMore }) {
    return (
        <ul className="tea-list">
            {InitialList.map(tea => (
                <CardOfTea
                    onMore={onMore}
                    key={tea.id}
                    {...tea}
                    place="all-tea"
                />
            ))}
        </ul>
    );
}
export default TeaList;
