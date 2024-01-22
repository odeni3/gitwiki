import "./styles.css"

const Input = ({value, onChange}) => {
    return (
        <div className="InputContainer">
            <input value={value} onChange={onChange} />
        </div>
    );
};

export { Input };