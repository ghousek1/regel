import React, { useState } from "react";

function TestCaseSingleValueSection({
  userThemeMode,
  regExValue,
  testCaseSingleValue,
  setTestCaseSingleValue,
}) {
  const Highlight = require("react-highlighter");
  const getRegex = () => {
    try {
      return new RegExp(regExValue);
    } catch (error) {
      return new RegExp("\w");
    }
  };

  const regex = getRegex();

  return (
    <>
      <div className="flex flex-col">
        <textarea
          className={` 
        ${
          userThemeMode === "light"
            ? "bg-[#141414] text-[#fcfcfc]"
            : "bg-[#fcfcfc] text-[#141414]"
        }
        
        min-h-[45vh] min-w-[100%] resize-none border-[0.1rem]
      md:min-h-[43vh] md:min-w-[100%]`}
          onChange={(e) => setTestCaseSingleValue(e.target.value)}
        >
          {testCaseSingleValue}
        </textarea>

        <div className="min-h-[45vh] min-w-[100%] border-[0.1rem] md:min-h-[43vh] md:min-w-[100%]">
          <Highlight search={regex}
          >{testCaseSingleValue}</Highlight>
        </div>
      </div>
    </>
  );
}

export default TestCaseSingleValueSection;
