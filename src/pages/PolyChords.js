import Chord from '../utils/Chord.js';
import Piano from '../components/Piano.js' 

const HomePage = () =>{
    return (
        <>
        <header className='p-5 bg-primary text-white text-center'>
            <h1>Music App</h1>
        </header>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">HomePage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/polychords">Polychords</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/negative_harmony">Negative Harmony</a>
                </li>
                </ul>
            </div>
        </nav>
        <div className='container'>
            {/* Render a two-octave piano with highlighted notes */}
            <div className='row'>
                <Piano notes={ new Chord('I', 'major', 'D').mount()} />
                <Piano notes={[0,3,7]} />
            </div>
            {/* Render a default one-octave piano without highlighted notes */}
            
        </div>
        </>
    );
}

export default HomePage