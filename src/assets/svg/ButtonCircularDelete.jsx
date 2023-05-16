import * as React from "react";
const SvgButtonCircularDelete = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#373C39"
        fillOpacity={0.5}
        d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1z"
      />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M17.875 7.75c.621 0 1.125.504 1.125 1.125V10h4.55a.7.7 0 0 1 .7.7v.8h-1.544L22.124 22c-.068 1.243-1.131 2.25-2.374 2.25h-7.5c-1.243 0-2.306-1.007-2.374-2.25l-.583-10.5H7.75v-.8a.7.7 0 0 1 .7-.7H13V8.875c0-.585.446-1.065 1.017-1.12l.108-.005h3.75zm3.33 3.75h-10.41l.578 10.417a.912.912 0 0 0 .788.828l.089.005h7.5a.908.908 0 0 0 .877-.833l.577-10.417zm-6.642 2.25.379 6.75h-1.503l-.378-6.75h1.502zm4.428 0-.38 6.75H17.11l.38-6.75h1.502zM17.5 9.25h-3V10h3v-.75z"
      />
    </g>
  </svg>
);
export default SvgButtonCircularDelete;

