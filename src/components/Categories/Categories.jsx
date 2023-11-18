import './Categories.sass';
import { categories } from '../../constants/constants';

function Categories(props) {
    console.log(categories);
    return (
        <ul className="categories-menu">
            {categories.map((category, index) => (
                <button key={index} className="categories-menu__item">
                    {category}
                </button>
            ))}
        </ul>
    );
}
export default Categories;
