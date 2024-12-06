import AxisSelector from "./AxisSelector"
const NegativeTab = ({axis,onChange,onSubmit,onClose}) => {
    return (
      <>
        <AxisSelector onSelectAxis={onChange} />
        <h2>Negative Control</h2>
        <p>Axis: {axis.axisName}</p>
        <p>Tune: {axis.axisTonal}</p>
        <p>State: {axis.negative ? "Negative" : "Normal"}</p>

      <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
      <button className="btn btn-primary" onClick={onClose}>Close</button>
      </>
    )
}   

export default NegativeTab
