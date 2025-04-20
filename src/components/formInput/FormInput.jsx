import "./FormInput.scss";

function FormInput({ label, type, name, placeholder }) {
  return (
    <label>
      <span>{label}</span>
      <input type={type} name={name} placeholder={placeholder} id="" />
    </label>
  );
}

export default FormInput;
