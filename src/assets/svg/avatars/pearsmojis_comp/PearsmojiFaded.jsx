import * as React from "react";
const SvgPearsmojiFaded = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <linearGradient
        id="pearsmoji-faded_svg__b"
        x1="50%"
        x2="50%"
        y1="2.576%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#D6F1D1" />
        <stop offset="100%" stopColor="#8CB088" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-faded_svg__e"
        x1="50%"
        x2="71.662%"
        y1="9.894%"
        y2="81.159%"
      >
        <stop offset="0%" stopColor="#8DC0B1" />
        <stop offset="100%" stopColor="#57776D" />
      </linearGradient>
      <filter
        id="pearsmoji-faded_svg__f"
        width="104.2%"
        height="111.4%"
        x="-2.1%"
        y="-2.9%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feColorMatrix
          in="shadowOffsetOuter1"
          values="0 0 0 0 0.697673902 0 0 0 0 0.854251585 0 0 0 0 0.503370351 0 0 0 0.462767701 0"
        />
      </filter>
      <filter
        id="pearsmoji-faded_svg__h"
        width="129.2%"
        height="145.7%"
        x="-14.6%"
        y="-20%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlurInner1"
          stdDeviation={4}
        />
        <feOffset dy={6} in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2={-1}
          k3={1}
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.559959572 0"
        />
      </filter>
      <path
        id="pearsmoji-faded_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-faded_svg__g"
        d="M27.058 88.424c4.97 0 9.443 1.845 12.552 3.972l.406.285c.398.287.771.577 1.117.868l.337.29.32.29.299.287.142.143.271.284c.999 1.082 1.556 2.083 1.556 2.795 0 .629-.266.832-.84.778l-.164-.022-.18-.033-.196-.044-.21-.055-.347-.101-.805-.257-1.13-.37-.55-.176-.589-.18-.415-.123-.658-.184-.461-.123-.48-.122-.5-.12-.518-.116-.537-.114-.557-.11-.286-.052-.586-.101-.3-.05-.617-.091-.316-.044-.647-.08-.667-.073a44.276 44.276 0 0 0-4.444-.219c-1.61 0-3.089.082-4.444.219l-.667.072-.647.081-.315.044-.617.092-.3.049-.587.101-.286.053-.557.11-.537.113-.518.117-.5.12-.48.12-.46.124-.658.184-.617.184-.576.178-2.172.706-.36.107-.218.06-.204.05-.275.054-.164.022c-.574.054-.84-.15-.84-.778 0-.712.557-1.713 1.555-2.795l.271-.284.143-.143.3-.288.318-.29.337-.29c.346-.29.72-.58 1.118-.867l.406-.285c3.108-2.127 7.58-3.972 12.551-3.972zm-16-7.167c4.419 0 8-3.992 8-8.916 0-4.925-3.581-8.917-8-8.917-4.418 0-8 3.992-8 8.917 0 4.924 3.582 8.916 8 8.916zm32 0c4.419 0 8-3.992 8-8.916 0-4.925-3.581-8.917-8-8.917-4.418 0-8 3.992-8 8.917 0 4.924 3.582 8.916 8 8.916z"
      />
      <radialGradient
        id="pearsmoji-faded_svg__c"
        cx="50%"
        cy="50.497%"
        r="49.503%"
        fx="50%"
        fy="50.497%"
      >
        <stop offset="0%" stopColor="#B24505" stopOpacity={0.432} />
        <stop offset="100%" stopColor="#B3A100" stopOpacity={0} />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-faded_svg__d" fill="#fff">
          <use xlinkHref="#pearsmoji-faded_svg__a" />
        </mask>
        <use
          xlinkHref="#pearsmoji-faded_svg__a"
          fill="url(#pearsmoji-faded_svg__b)"
          fillRule="nonzero"
        />
        <circle
          cx={9}
          cy={69.5}
          r={17.5}
          fill="url(#pearsmoji-faded_svg__c)"
          mask="url(#pearsmoji-faded_svg__d)"
          opacity={0.481}
        />
        <circle
          cx={79}
          cy={69.5}
          r={17.5}
          fill="url(#pearsmoji-faded_svg__c)"
          mask="url(#pearsmoji-faded_svg__d)"
          opacity={0.481}
        />
        <path
          stroke="#A9CFBF"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-faded_svg__d)"
        />
      </g>
      <path
        fill="url(#pearsmoji-faded_svg__e)"
        d="M34.658 12.813c.578-2.045-.65-4.166-2.685-4.635l-1.443-.333-.06-.013c-2.037-.47-4.04.908-4.378 3.01L23.221 27.89c-.21 1.311.603 2.567 1.867 2.884l.03.036.72.152.722.18.006-.027c1.277.27 2.54-.51 2.902-1.788l5.19-16.514zM.082 1.164C-.48 6.526 1.87 12.261 6.688 15.95c4.82 3.688 10.848 4.367 15.698 2.285.564-5.362-1.787-11.096-6.606-14.785S4.932-.917.082 1.164"
        transform="translate(26.942 8.576)"
      />
      <g transform="translate(26.942 8.576)">
        <use
          xlinkHref="#pearsmoji-faded_svg__g"
          fill="#000"
          filter="url(#pearsmoji-faded_svg__f)"
        />
        <use
          xlinkHref="#pearsmoji-faded_svg__g"
          fill="#4C6F14"
          fillOpacity={0.412}
        />
        <use
          xlinkHref="#pearsmoji-faded_svg__g"
          fill="#000"
          filter="url(#pearsmoji-faded_svg__h)"
        />
      </g>
    </g>
  </svg>
);
export default SvgPearsmojiFaded;
