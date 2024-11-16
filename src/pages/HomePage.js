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
                    <a class="nav-link active" href="/">HomePage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/polychords">Polychords</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/negative_harmony">Negative Harmony</a>
                </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default HomePage