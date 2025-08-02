import React from 'react'

// Button.jsx
const Button = ({ type = "button", title, icon, variant = "", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-xs font-medium flex items-center gap-2 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${variant}`}
      title={title}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className='font-bold'>{title}</span>
    </button>
  );
};

export default Button;
