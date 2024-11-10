import './App.css';
import Chord from './components/Chord.js';
import Piano from './components/Piano.js' 

function App() {
    return (
        <div>
            {/* Render a two-octave piano with highlighted notes */}
            <Piano notes={ new Chord('I', 'major', 'D').mount()} />
            <Piano notes={[0,3,7]} />

            {/* Render a default one-octave piano without highlighted notes */}
            
        </div>
    );
}

export default App;
