import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';

const Router= () => {
    console.log('Rendering HomePage Component');
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    );
};

export default Router;