import Chord from '../utils/Chord.js';
import Piano from '../components/Piano.js' 

const HomePage = () =>{
    return (
        console.log('Rendering Piano Component'),
        <div>
            {/* Render a two-octave piano with highlighted notes */}
            <Piano notes={ new Chord('I', 'major', 'D').mount()} />
            <Piano notes={[0,3,7]} />

            {/* Render a default one-octave piano without highlighted notes */}
            
        </div>
    );
}

export default HomePage