import React from "react";

const ListboxTrigger = ({ children, ...props }) => {
  return (
    <button className='listbox-trigger shadow' {...props}>
      {children}
    </button>
  );
};

export default ListboxTrigger;
