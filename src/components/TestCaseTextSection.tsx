import React, { ChangeEvent } from "react";

interface ITestCaseTextSectionProps {
  userThemeMode: string;
  regExValue: string;
  regExFlags: string[];
  testCaseText: string;
  setTestCaseText(value: string): any;
}

function TestCaseTextSection({
  userThemeMode,
  regExValue,
  regExFlags,
  testCaseText,
  setTestCaseText}: ITestCaseTextSectionProps) {
  
  const Highlight = require("react-highlighter");
  const getRegex = ():RegExp|null => {
    if (!regExValue) {
      return null;
    }

    let regExFlagsStr = regExFlags.join("");
    try {
      return new RegExp(regExValue, regExFlagsStr);
    } catch (error) {
      return null;
    }
  };

  const regex:RegExp|null = getRegex();

  return (
    <>
      <div className="flex flex-col font-monospace">
        <textarea
          className={` 
        ${
          userThemeMode === "dark"
            ? "bg-[#141414] text-[#fcfcfc]"
            : "bg-[#fcfcfc] text-[#141414]"
        }
        
        min-h-[45vh] min-w-[100%] resize-none border-[0.05rem]
        md:min-h-[43vh] md:min-w-[100%]`}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTestCaseText(e.target.value)}
        >
          {testCaseText}
        </textarea>

        {regex ? (
          <div className="min-h-[45vh] min-w-[100%] border-[0.05rem] md:min-h-[43vh] md:min-w-[100%]">
            <Highlight search={regex}>{testCaseText}</Highlight>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TestCaseTextSection;
