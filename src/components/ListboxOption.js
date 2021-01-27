import React from "react";

const ListboxOption = ({ className, val, ...props }) => {
  return (
    <div className={`listbox-option ${className}`} {...props}>
      {val}
    </div>
  );
};

export default ListboxOption;
