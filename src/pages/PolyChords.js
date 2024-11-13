import Chord from '../utils/Chord.js';
import Piano from '../components/Piano.js' 
import ChordControl from '../components/ChordControl.js';
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
            <div className='container'></div>
            <div className='row no-gutters'>
                <div className='col-md-6'>
                    <Piano notes={ new Chord('I', 'major', 'D').mount()} />
                    <ChordControl />
                </div>
                <div className='col-md-6'>
                    <Piano notes={[0,3,7]} />
                    <ChordControl />
                </div>
            </div>
            {/* Render a default one-octave piano without highlighted notes */}
            
        </div>
        </>
    );
}

export default HomePage