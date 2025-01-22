import React from "react";


export function Button({ children,type="button" , className, variant = "default", ...props}) {
  const baseStyles =
    "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variantStyles = {
    default: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-green-500",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${
    className || ""
  }`;

  return (
    <button className={combinedClassName} {...props}>
      <button
        type={type}
        className={`px-4 py-2 rounded-md text-white transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    </button>
    
  );
}
