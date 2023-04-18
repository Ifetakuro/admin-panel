import "../scss/components/CustomButton.scss";

const CustomButton = ({ type, onClick, extraClass, children, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${extraClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
