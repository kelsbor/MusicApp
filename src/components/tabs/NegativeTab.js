const NegativeTab = ({axis,onSubmit,onClose}) => {
  
    return (
      <>
        <h2>Negative Control</h2>
        <p>Axis: {axis.axis}</p>
        <p>State: {axis.negative ? "Negative" : "Normal"}</p>

      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
      </>
    )
}   

export default NegativeTab
