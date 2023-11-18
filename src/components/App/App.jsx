import './App.sass';
import Main from '../../pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AllTea from '../../pages/AllTea/AllTea';
import Collections from '../../pages/Collections/Collections';
import FullViewTea from '../../pages/FullViewTea/FullViewTea';
import { useState } from 'react';
import AddTea from '../../pages/AddTea/AddTea';
function App() {
    const [acitveCard, setActiveCard] = useState({
        description: '',
        image: '',
        title: '',
    });

    const handleClickMore = card => {
        setActiveCard(card);
    };
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main onMore={handleClickMore} />} />
                <Route
                    path="all-tea"
                    element={<AllTea onMore={handleClickMore} />}
                />
                <Route path="collections" element={<Collections />} />
                <Route
                    path="all-tea/:id"
                    element={<FullViewTea {...acitveCard} />}
                />
                <Route path="add-tea" element={<AddTea />} />
            </Routes>
        </div>
    );
}

export default App;
