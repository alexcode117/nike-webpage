import Proptypes from "prop-types";

const Button = ({ 
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  stylesAnimation,
  stylesAnimationIcon,
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'} ${stylesAnimation}`}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon"
          className={`ml-2 rounded-full w-5 h-5 ${stylesAnimationIcon}`}
        />        
      )}
    </button>
  )
};

export default Button;

Button.propTypes = {
  label: Proptypes.string,
  iconURL: Proptypes.string,
  backgroundColor: Proptypes.string,
  borderColor: Proptypes.string,
  textColor: Proptypes.string,
  fullWidth: Proptypes.bool,
  stylesAnimation: Proptypes.string,
  stylesAnimationIcon: Proptypes.string,
};