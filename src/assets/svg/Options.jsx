import * as React from "react";
const SvgOptions = (props) => (
  <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="#373C39" fillRule="evenodd" fillOpacity={0.5}>
      <circle cx={6.5} cy={6.5} r={4.333} />
      <circle cx={19.5} cy={6.5} r={4.333} />
      <circle cx={6.5} cy={19.5} r={4.333} />
      <circle cx={19.5} cy={19.5} r={4.333} />
    </g>
  </svg>
);
export default SvgOptions;
