import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import PolyChords from './pages/PolyChords.js';
import NegativeHarm from './pages/NegativeHarm.js';

const Router= () => {
    console.log('Rendering HomePage Component');
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/polychords" element={<PolyChords />} />
            <Route path="/negative_harmony" element={<NegativeHarm />} />
            <Route path="*" element={<h1 className='text-center text-white p-5 bg-primary'>Page not found</h1>} />
        </Routes>
    );
};

export default Router;