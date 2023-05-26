import React, { useContext, useState } from "react";

function TestCasesSection({
  userThemeMode,
  regExValue,
  testCaseList,
  setTestCaseList,
}) {
  const [newTestCase, setNewTestCase] = useState("");
  const getRegex = () => {
    try {
      return new RegExp(regExValue);
    } catch (error) {
      return undefined;
    }
  };

  const regex = getRegex();

  const updateTestCaseList = () => {
    if (newTestCase) {
      setTestCaseList([...testCaseList, newTestCase]);
    }
  };

  const validateTestCase = (val) => {
    if (!regex) {
      return "invalid";
    }

    if (regex.test(val)) {
      return "valid";
    }

    return "in-valid";
  };

  return (
   
      <div
        className="flex min-h-[90vh] min-w-[100%] flex-col border-[0.1rem] md:min-h-[85vh] 
         md:min-w-[100%] font-monospace"
      >
        <div id="test-cases-list">
          {testCaseList.map((val, key) => {
            return (
              <div
                key={key}
                className={`${
                  validateTestCase(val) === "valid"
                    ? "border-green-500 bg-green-500 opacity-50 "
                    : "border-red-500 bg-red-500 opacity-50 "
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
          className="m-[0.2rem] border-[0.05rem] p-[0.2rem]"
        >
          <input
            className={`  ${
              userThemeMode === "light"
                ? "bg-[#141414] text-[#fcfcfc]"
                : "bg-[#fcfcfc] text-[#141414]"
            } border-[0.1rem]`}
            onChange={(e) => setNewTestCase(e.target.value)}
          ></input>
          <button onClick={updateTestCaseList}>
            <span className="text-[1.7rem] font-[500] pl-[0.5rem] ">+</span>
          </button>
        </div>
      </div>
  );
}

export default TestCasesSection;
