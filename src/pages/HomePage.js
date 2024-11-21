import logo from '../images/logo.png'
import '../styles/homepage.css';
import React, { useState } from 'react';

const HomePage = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className='p-3 bg-dark text-white text-left text-bold'>
            <nav class="navbar navbar-expand-sm bg-dark">

            <div className="container-fluid">
                <ul class="navbar-nav">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} />
                    </a>
                    <h1 className="navbar-text text-white">BrickNotes</h1>
                </ul>

                <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleMenu}
                        aria-expanded={isOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto fs-5 fw-bold justify-content-end gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/app">APP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
        <div className="banner d-flex flex-column justify-content-center align-items-center">
                <img src={logo} alt="Logo" style={{ width: '150px', height: '150px'}} />
                <div className='fw-bold text-center flex-column d-flex m-5'>
                    <p className="display-4 fw-bold highlight bg-light">BrickNotes</p>
                    <p className="highlight bg-light">Build your sound!</p>
                </div>
                <a href='/app'>
                    <button className="btn btn-dark border border-rounded m-4">Get Started!</button>
                </a>
        </div>
        <div className='container m-5 p-5'>
            <div className='row'>
                <div className='col-12 border border-primary rounded'>
                    <h1 className='text-center'>Features</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='fw-bold text-center'>Piano</p>
                            <p className='text-center'>Build your own piano.</p>
                        </div>
                        <div className='col-6'>
                            <p className='fw-bold text-center'>Chord Generator</p>
                            <p className='text-center'>Generate chords for your piano.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className='p-3 bg-dark text-white'>
            <p className="text-center">© 2023 BrickNotes. All rights reserved.</p>
        </footer>
        </>
      );
}

export default HomePage