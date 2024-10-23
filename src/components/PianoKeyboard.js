const Piano = () => {
    return (
        <>
        <div class="keyboard">
          <svg width="560" height="120" xmlns="http://www.w3.org/2000/svg">
            //White keys
            <rect id="C" x="0" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="D" x="40" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="E" x="80" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="F" x="120" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="G" x="160" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="A" x="200" y="0" width="40" height="120" fill="white" stroke="black" />
            <rect id="B" x="240" y="0" width="40" height="120" fill="white" stroke="black" />
          
            //Black keys
            <rect id="C#" x="25" y="0" width="30" height="80" fill="black" />
            <rect id="D#" x="65" y="0" width="30" height="80" fill="black" />
            <rect id="F#" x="145" y="0" width="30" height="80" fill="black" />
            <rect id="G#" x="185" y="0" width="30" height="80" fill="black" />
            <rect id="A#" x="225" y="0" width="30" height="80" fill="black" />
          </svg>
        </div>
        </>
    )
}  

export default Piano