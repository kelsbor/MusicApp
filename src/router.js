import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import WorkSpace from './pages/WorkSpace.js';
import About from './pages/About.js';
const Router= () => {
    console.log('Rendering HomePage Component');
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/app" element={<WorkSpace />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<h1 className='text-center text-white p-5 bg-primary'>Page not found</h1>} />
        </Routes>
    );
};

export default Router;