import React, { useState, useContext, useEffect, ReactElement,ChangeEvent } from "react";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import MultiSelect from "./MultiSelect";
import { Option } from "../util/GenericUtil";

interface IRegexBarProps {
  // setRegExValue(value: string): any;
  //TODO
  setRegExValue: (value: string) => any;
  setRegExFlags(values: string[]): any;
}

const RegexBar = ({ setRegExValue, setRegExFlags }: IRegexBarProps) : ReactElement => {
  const options: Option[] = [
    { id: 0, label: "Global", value: "g" },
    { id: 1, label: "Case Insensitive", value: "i" },
    { id: 2, label: "Multiline mode", value: "m" },
    { id: 3, label: "Dotall mode", value: "s" },
    { id: 4, label: "Unicode support", value: "u" },
    { id: 5, label: "Sticky mode", value: "y" },
  ];

  const userThemeModeContext = useContext<IThemeContextType>(ThemeContext);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    let regExFlags: string[] = selectedOptions.map((so) => {
      return so.value;
    });
    setRegExFlags(regExFlags);
  }, [selectedOptions]);

  const changeRegExValue = (event:ChangeEvent<HTMLInputElement>) : void => {
    setRegExValue(event.target.value);
  };
  return (
    <div id="regex-container" className="p-2 font-monospace md:p-3">
      <div className="flex h-[4vh] flex-row items-center border-[0.05rem] md:h-[6vh] ">
        <div className="px-1 font-bold">
          <pre> /</pre>
        </div>
        <input
          onChange={changeRegExValue}
          className={`  ${
            userThemeModeContext.themeMode === "dark"
              ? "bg-[#141414] text-[#fcfcfc]"
              : "bg-[#fcfcfc] text-[#141414]"
          }
           h-[100%]
           flex-1 align-middle`}
        ></input>

        <div className="px-1 font-bold">
          <pre>/ </pre>
        </div>

        <div className="h-[100%] w-[10%]  ">
          <MultiSelect
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default RegexBar;
