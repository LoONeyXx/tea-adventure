import './Categories.sass';
import { categories } from '../../constants/constants';
import Section from '../Section/Section';
function Categories() {
    return (
        <Section name="categories">
            <ul className="categories__menu">
                {categories.map((category, index) => (
                    <button key={index} className="categories__menu-item">
                        {category}
                    </button>
                ))}
            </ul>
        </Section>
    );
}
export default Categories;
