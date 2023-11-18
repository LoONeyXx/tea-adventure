import './FullViewTea.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import imageSrc from '../../assets/images/background.jpg';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import Section from '../../components/Section/Section';
function FullViewTea({ title, description, image }) {
    console.log(title, description, image);
    return (
        <>
            <Header />
            <Content place="full-view">
                <Section name="full-view full-view">
                    <div className="full-view__title-zone">
                        <img className="full-view__image" src={image} alt="" />
                        <h2 className="full-view__title">{title}</h2>
                    </div>
                    <div className="full-view__description">
                        <p className="full-view__description-text">
                            {description}
                        </p>
                    </div>
                    {/*
                    <Link className="full-view__back-link" to="../">
                        Назад
                    </Link> */}
                </Section>
                <Comments />
            </Content>
            <Footer />
        </>
    );
}
export default FullViewTea;
