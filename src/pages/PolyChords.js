import ChordPiano from '../components/ChordPiano.js';
import '../styles/polychord.css'
const PolyChords = () =>{


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
        <div className='container m-5 p-5'>
            <div className='row'>
                <div className='col-6 d-flex'>
                    <ChordPiano className='piano-left'/>
                </div>
                <div className='col-6 d-flex'>
                    <ChordPiano className='piano-right'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default PolyChords