import React, { useState } from "react";

function MultiSelect({ options , selectedOptions, setSelectedOptions }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const isOptionSelected = (option) => {
    return selectedOptions.some(so => so.label === option.label);
  };

  const toggleSelectedOptions = (option) => {
    if (selectedOptions.some(so => so.label === option.label)) {
      let filteredTasks = selectedOptions.filter((o) => {
        return o.label !== option.label;
      });
      setSelectedOptions(filteredTasks);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const closeMultiSelectMenu = () =>{
    console.log("closeMultiSelectMenu..........................");
    setIsOpen(false);
  }

  return (
    <>
      <div className="h-[100%] relative"
        onBlur={closeMultiSelectMenu}>
            
        <div
          className="flex flex-row
          px-5 justify-evenly items-center border-[0.05rem]  h-[100%]  "
          onClick={() => setIsOpen((prev) => !prev)}>
            
          <div className="w-[85%]">
            {selectedOptions.map((so) => {
              return <span key={so.id}>{so.value}</span>;
            })}
          </div>
          <div className="w-[15%]">
          <i className=" fa-solid fa-sort"></i>
          </div>

        </div>

        <ul
          className={`${
            isOpen ? " " : " hidden "
          }  inline-block border-[0.05rem] px-5 min-w-fit float-right z-10`}
        >
          {options.map((o) => {
            return (
              <li
                key={o.id}
                className={`${
                  isOptionSelected(o) ? " underline" : ""
                }  hover:border-[0.05rem] my-1  font-uno`}
                onClick={() => toggleSelectedOptions(o)}
              >
                {o.label}
                
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MultiSelect;
