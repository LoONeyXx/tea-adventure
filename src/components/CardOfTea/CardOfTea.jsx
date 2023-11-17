import './CardOfTea.sass';
import backgroundImage from '../../assets/images/background.jpg';
import { Link } from 'react-router-dom';
function CardOfTea({
    title,
    description,
    place,
    category,
    isNew,
    id,
    onMore,
    image,
}) {
    function handleMore() {
        onMore({ title, image, description });
    }
    return (
        <li
            style={{
                backgroundImage: `url(${image})`,
            }}
            className={`card card_${place}`}
        >
            <div className={`card__title-zone card__title-zone_${place}`}>
                <h3 className={`card__title card__title_${place}`}>{title}</h3>
                <div
                    className={`card__circle-color card__circle-color_${place} `}
                >
                    <p className="card__category">{category}</p>
                    {isNew && (
                        <div className={`card__new card__new_${place}`}>
                            Новинка
                        </div>
                    )}
                </div>
                <div className={`card__break-line`}></div>
            </div>
            <p className={`card__description card__description_${place}`}>
                {description.slice(0, 500)}
            </p>
            <Link
                to={place === 'main' ? `all-tea/${id}` : id}
                onClick={handleMore}
                className={`card__more-about card__more-about_${place}`}
            >
                Подбробнее
            </Link>
        </li>
    );
}
export default CardOfTea;
