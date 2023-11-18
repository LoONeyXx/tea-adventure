import ColorMenu from '../../components/Categories/Categories';

import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import TeaList from '../../components/TeaList/TeaList';
import './AllTea.sass';

function AllTea({ onMore }) {
    return (
        <>
            <Header />
            <Content place="all-tea">
                <Section title="Все товары" name="all-tea">
                    <TeaList onMore={onMore} />
                </Section>
                <section className="categories">
                    <ColorMenu />
                </section>

            </Content>
            <Footer />
        </>
    );
}
AllTea;
export default AllTea;
