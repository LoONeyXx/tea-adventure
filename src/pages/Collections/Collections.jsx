import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Collections.sass';
import Section from '../../components/Section/Section';
import CollectionList from '../../components/CollectionList/CollectionList';
import CollectionPanel from '../../components/CollectionPanel/CollectionPanel';
function Collections(props) {
    return (
        <>
            <Header />
            <Content place="collections">
                <Section name="collections" title="Коллекции">
                    <CollectionList />
                </Section>
                <CollectionPanel />
            </Content>
            <Footer />
        </>
    );
}
export default Collections;
