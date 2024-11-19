import AddPiano from '../components/AddPiano.js';

const PolyChords = () =>{
    return (
        <>
        <header className='p-5 bg-primary text-white text-center'>
            <h1>Music App</h1>
        </header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">HomePage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/polychords">Polychords</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/negative_harmony">Negative Harmony</a>
                </li>
                </ul>
            </div>
        </nav>
        <div className='container m-5 p-5'>
            <div className='row'>
                <div className='col-12 border border-primary rounded'>
                    <AddPiano />
                </div>
            </div>
        </div>
        </>
    );
}

export default PolyChords