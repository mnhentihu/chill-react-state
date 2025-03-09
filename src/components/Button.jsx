// eslint-disable-next-line react/prop-types
function Button({ children, className }) {
  return (
    <button
      className={`flex justify-center items-center w-full h-10 sm:h-12 border border-tertiary rounded-full font-light text-xs sm:font-normal sm:text-base bg-transparent hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
