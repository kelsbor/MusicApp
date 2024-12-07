const AddContainer = () => {
    return (
        <>
            <header className="bg-primary text-white p-3">
                <h3>Add Container</h3>
                <p>Key:</p>
                <select className="form-select mb-3">
                    <option value={"default"}>C</option>
                </select>
                <p>Harmonic:</p>
                <select className="form-select">
                    <option value="default">Default</option>
                </select>
            </header>
            
            
        </>
    )
}

export default AddContainer