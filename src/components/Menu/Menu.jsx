import { Link } from 'react-router-dom';
import './Menu.sass';

function Menu() {
    return (
        <ul className="menu">
            <li>
                <Link className="menu__link" to="/">
                    Главная
                </Link>
            </li>
            <li>
                <Link className="menu__link" to="/all-tea">
                    Все товары
                </Link>
            </li>
            <li>
                <Link className="menu__link" to="/collections">
                    Коллекции
                </Link>
            </li>
            <li>
                <Link className="menu__link" to="/add-tea">
                    Добавить чай
                </Link>
            </li>
        </ul>
    );
}
export default Menu;
