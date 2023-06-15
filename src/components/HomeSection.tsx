import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";
import TestCasesSection from "./TestCasesSection";
import TestCaseTextSection from "./TestCaseTextSection";
import RegexBar from "./RegexBar";
import TestCaseOptions from "./TestCaseOptions";

function HomeSection(): ReactElement {
  const userThemeModeContext = useContext<IThemeContextType>(ThemeContext);

  const [regExValue, setRegExValue] = useState<string>("");
  const [regExFlags, setRegExFlags] = useState<string[]>([]);
  
  const [testCaseCategory, setTestCaseCategory] = useState<string>("single");
  const [testCaseText, setTestCaseText] = useState<string>("");
  const [testCaseList, setTestCaseList] = useState<string[]>([]);

  return (
    <>
      <RegexBar setRegExValue={setRegExValue}  setRegExFlags ={setRegExFlags}/>

      <div id="testcases-container" className="p-2 md:p-3 ">
        <TestCaseOptions setTestCaseCategory={setTestCaseCategory} />
    
        {testCaseCategory === "list" ? (
          <TestCasesSection
            userThemeMode={userThemeModeContext.themeMode}
            regExValue={regExValue}
            regExFlags={regExFlags}
            testCaseList={testCaseList}
            setTestCaseList={setTestCaseList}
          />
        ) : (
          <TestCaseTextSection
            userThemeMode={userThemeModeContext.themeMode}
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
