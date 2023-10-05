
function FormInput({label , type , name , value , onChange}) {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} value={value} name={name} onChange={onChange}  />
        </div>
    );
}

export default FormInput;