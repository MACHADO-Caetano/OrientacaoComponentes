function FormularioInput({ label, placeholder, value, name }) {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <br />
            <input
                
                type="text"
                id={label}
                name={name}
                size="20"
                placeholder={placeholder}
                value={value}
            />
        </>
    );
}

export default FormularioInput;