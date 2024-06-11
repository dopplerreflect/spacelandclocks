import React from "react";

const HashMarks = () => {
  return [30, 60, 120, 150, 210, 240, 300, 330].map(deg => (
    <path
      key={deg}
      d='M-5 -105 0 -100 5 -105Z'
      fill='hsla(240, 100%, 75%, 0.75)'
      transform={`rotate(${deg})`}
    />
  ));
};
export default HashMarks;
