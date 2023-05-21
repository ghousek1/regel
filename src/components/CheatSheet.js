import React from "react";

function CheatSheet() {
  return (
    <>
      <div>
        <div>
          <span>.</span> - Any Character Except New Line 
        </div>
        <div>
          <span>\d</span> - Digit (0-9)
        </div>
        <div>
          <span>\D</span> - Not a Digit (0-9)
        </div>
        <div>
          <span>\w</span> - Word Character (a-z, A-Z, 0-9, _)
        </div>
        <div>
          <span>\W</span> - Not a Word Character
        </div>
        <div>
          <span>\s</span> - Whitespace (space, tab, newline)
        </div>
        <div>
          <span>\S</span> - Not Whitespace (space, tab, newline)
        </div>
        <div>
          <span>\b</span> - Word Boundary
        </div>
        <div>
          <span>\B</span> - Not a Word Boundary
        </div>
        <div>
          <span>^</span> - Beginning of a String
        </div>
        <div>
          <span>$</span> - End of a String
        </div>
        <div>
          <span>[]</span> - Matches Characters in brackets
        </div>
        <div>
          <span>[^ ]</span> - Matches Characters NOT in brackets
        </div>
        <div>
          <span>|</span> - Either Or
        </div>
        <div>
          <span>( )</span> - Group
        </div>
        <div>
          <span>Quantifiers:</span>
        </div>
        <div>
          <span>*</span> - 0 or More
        </div>
        <div>
          <span>+</span> - 1 or More
        </div>
        <div>
          <span>?</span> - 0 or One
        </div>
        <div>
          <span>{3}</span> - Exact Number
        </div>
        <div>
          <span>{(3, 4)}</span> - Range of Numbers (Minimum, Maximum)
        </div>
      </div>
    </>
  );
}

export default CheatSheet;
