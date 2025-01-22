import React from "react";

export function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
      {children}
    </div>
  );
}

export function SelectItem({ value, children }) {
  return (
    <option
      value={value}
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </option>
  );
}
