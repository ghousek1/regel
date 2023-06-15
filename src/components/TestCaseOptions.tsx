import React ,{MouseEvent} from "react";

interface ITestCaseOptionsProps{
  setTestCaseCategory(value: string): void;
}

function TestCaseOptions({ setTestCaseCategory }:ITestCaseOptionsProps) {

  return (
    <div className="my-1 flex w-[100%] flex-row gap-2 md:my-2">
    <div
      onClick={(e: MouseEvent) => setTestCaseCategory("single")}
      className="bold border-[0.05rem] p-[0.3rem] font-uno text-[0.9rem] font-[600]
        tracking-[0.07rem] md:tracking-[0.05rem]"
    >
      Text Value{" "}
    </div>
    <div
      onClick={(e: MouseEvent) => setTestCaseCategory("list")}
      className="bold border-[0.05rem] p-[0.3rem] font-uno text-[0.9rem]  font-[600] 
      tracking-[0.07rem] md:tracking-[0.05rem]"
    >
      Test Cases{" "}
    </div>
  </div>
  );
}

export default TestCaseOptions;
