import React from "react";

function TestCaseOptions({ setTestCaseCategory }) {

  return (
    <div className="my-1 flex w-[100%] flex-row gap-2 md:my-2">
    <div
      onClick={(e) => setTestCaseCategory("single")}
      className="bold border-[0.05rem] p-[0.3rem] font-uno text-[0.9rem] font-[600]
        tracking-[0.07rem] md:tracking-[0.05rem]"
    >
      Text Value{" "}
    </div>
    <div
      onClick={(e) => setTestCaseCategory("list")}
      className="bold border-[0.05rem] p-[0.3rem] font-uno text-[0.9rem]  font-[600] 
      tracking-[0.07rem] md:tracking-[0.05rem]"
    >
      Test Cases{" "}
    </div>
  </div>
  );
}

export default TestCaseOptions;
