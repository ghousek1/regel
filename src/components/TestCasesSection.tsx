import React, { ChangeEvent, useState } from "react";


interface ITestCasesSectionProps{
  userThemeMode: string;
  regExValue: string;
  regExFlags: string[];
  testCaseList: string[];
  setTestCaseList(values: string[]): any;
}

function TestCasesSection({userThemeMode,regExValue,regExFlags, 
                         testCaseList,setTestCaseList}:ITestCasesSectionProps) {

  const [newTestCase, setNewTestCase] = useState<string>("");

  const getRegex = ():RegExp|null => {
    if(!regExValue){
      return null;
    }

    let regExFlagsStr=regExFlags.join("");
    try {
      return new RegExp(regExValue,regExFlagsStr);
    } catch (error) {
      return null;
    }
  };

  const regex: RegExp|null  = getRegex();

  const updateTestCaseList = ():void => {
    if (newTestCase) {
      setTestCaseList([...testCaseList, newTestCase]);
    }
  };

  const validateTestCase = (val: string): string => {
    console.log("regex: ",regex);
    if (!regex) {
      return "wrong-regex";
    }

    if (regex.test(val)) {
      return "valid";
    }

    return "in-valid";
  };

  const getTestCaseStyle = (val: string): string => {
    let testCaseRes = validateTestCase(val);

    if (testCaseRes==="valid") {
      return " border-green-500 bg-green-500 ";
    }

    if (testCaseRes==="in-valid") {
      return " border-red-500 bg-red-500 ";
    }

    return " border-gray-400 bg-gray-400 ";
  };

  return (
   
      <div
        className="flex min-h-[90vh] min-w-[100%] flex-col border-[0.05rem] md:min-h-[85vh] 
         md:min-w-[100%] font-monospace 
         "
      >
        <div id="test-cases-list">
          {testCaseList.map((val: string, key: number) => {
            return (
              <div
                key={key}
                className={`${
                  getTestCaseStyle(val)
                }
                 m-[0.25rem] border-[0.05rem] p-[0.2rem] 
               `}
              >
                {val}
              </div>
            );
          })}
        </div>

        <div
          id="new-test-case"
          className="m-[0.2rem] border-[0.05rem] p-[0.2rem] "
        >
          <input
            className={`  ${
              userThemeMode === "dark"
                ? "bg-[#141414] text-[#fcfcfc]"
                : "bg-[#fcfcfc] text-[#141414]"
            } border-[0.1rem]`}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setNewTestCase(e.target.value)}
          ></input>
          <button onClick={updateTestCaseList}>
            <span className="text-[1.7rem] font-[500] pl-[0.5rem] ">+</span>
          </button>
        </div>
      </div>
  );
}

export default TestCasesSection;
