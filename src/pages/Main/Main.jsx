import CardOfTea from '../../components/CardOfTea/CardOfTea';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import './Main.sass';
import Content from '../../components/Content/Content';
import { InitialList } from '../../constants/constants';
function Main({ onMore }) {
    return (
        <>
            <Header />
            <Content>
                <Section
                    name="main"
                    title="Добро пожаловать"
                    subtitle="Попробуйте наши новинки"
                >
                    <CardOfTea
                        onMore={onMore}
                        {...InitialList[0]}
                        place="main"
                    />
                </Section>
            </Content>
            <Footer />
        </>
    );
}
export default Main;
