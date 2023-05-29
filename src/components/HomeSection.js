import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import TestCasesSection from "./TestCasesSection";
import TestCaseTextSection from "./TestCaseTextSection";
import RegexBar from "./RegexBar";
import TestCaseOptions from "./TestCaseOptions";

function HomeSection() {
  const [userThemeMode] = useContext(ThemeContext);
  const [regExValue, setRegExValue] = useState("");
  const [regExFlags, setRegExFlags] = useState([]);
  const [testCaseCategory, setTestCaseCategory] = useState("single");
  const [testCaseText, setTestCaseText] = useState("");
  const [testCaseList, setTestCaseList] = useState([]);

  return (
    <>
      <RegexBar setRegExValue={setRegExValue}  setRegExFlags ={setRegExFlags}/>

      <div id="testcases-container" className="p-2 md:p-3 ">
        <TestCaseOptions setTestCaseCategory={setTestCaseCategory} />
    
        {testCaseCategory === "list" ? (
          <TestCasesSection
            userThemeMode={userThemeMode}
            regExValue={regExValue}
            regExFlags={regExFlags}
            testCaseList={testCaseList}
            setTestCaseList={setTestCaseList}
          />
        ) : (
          <TestCaseTextSection
            userThemeMode={userThemeMode}
            regExValue={regExValue}
            regExFlags={regExFlags}
            testCaseText={testCaseText}
            setTestCaseText={setTestCaseText}
          />
        )}
        
      </div>
    </>
  );
}

export default HomeSection;
