import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import TestCasesSection from "./TestCasesSection";
import TestCaseSingleValueSection from "./TestCaseSingleValueSection";

function HomeSection() {
  const [userThemeMode] = useContext(ThemeContext);
  const [regExValue, setRegExValue] = useState("");
  const [testCaseCategory, setTestCaseCategory] = useState("single");
  const [testCaseSingleValue, setTestCaseSingleValue] = useState("");
  const [testCaseList, setTestCaseList] = useState([]);

  const changeRegExValue = (event) => {
    setRegExValue(event.target.value);
  };

  return (
    <>
      <div
        id="regex-container"
        className="flex flex-col p-2 md:flex-row md:p-3"
      >
        <textarea
          onChange={changeRegExValue}
          spellcheck="false"
          //TODO
          className={`  ${
            userThemeMode === "light"
              ? "bg-[#141414] text-[#fcfcfc]"
              : "bg-[#fcfcfc] text-[#141414]"
          }
           h-[10vh] w-[100%] resize-none border-[0.1rem] 
          md:h-[15vh] md:w-[100%] `}
        ></textarea>
      </div>

      <div id="testcases-container" className="p-2 md:p-3">
        <div className="">
          <span
            onClick={(e) => setTestCaseCategory("single")}
            className="bold border-[0.2rem] p-[0.1rem] text-[0.9rem] font-[500]"
          >
            Text Value{" "}
          </span>
          <span
            onClick={(e) => setTestCaseCategory("list")}
            className="bold border-[0.2rem] p-[0.1rem] text-[0.9rem] font-[500] "
          >
            Test Cases{" "}
          </span>
        </div>

        
          {
            (testCaseCategory === "list" ? (
              <TestCasesSection
                userThemeMode={userThemeMode}
                regExValue={regExValue}
                testCaseList={testCaseList}
                setTestCaseList={setTestCaseList}
              />
            ) : (
              <TestCaseSingleValueSection
                userThemeMode={userThemeMode}
                regExValue={regExValue}
                testCaseSingleValue={testCaseSingleValue} 
                setTestCaseSingleValue={setTestCaseSingleValue}
              />
            ))
          }
      </div>
    </>
  );
}

export default HomeSection;
