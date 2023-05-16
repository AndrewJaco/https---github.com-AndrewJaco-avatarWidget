import * as React from "react";
const SvgPearsmojiTransparent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <filter
        id="pearsmoji-transparent_svg__d"
        width="118.2%"
        height="116%"
        x="-9.1%"
        y="-8%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlurInner1"
          stdDeviation={2}
        />
        <feOffset dy={4} in="shadowBlurInner1" result="shadowOffsetInner1" />
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
          result="shadowMatrixInner1"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
        />
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlurInner2"
          stdDeviation={6}
        />
        <feOffset dy={-4} in="shadowBlurInner2" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          k2={-1}
          k3={1}
          operator="arithmetic"
          result="shadowInnerInner2"
        />
        <feColorMatrix
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
          values="0 0 0 0 0.326341712 0 0 0 0 0.326341712 0 0 0 0 0.326341712 0 0 0 0.397399476 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
      <filter
        id="pearsmoji-transparent_svg__g"
        width="103.6%"
        height="109.8%"
        x="-1.8%"
        y="-2.4%"
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
          values="0 0 0 0 0.872990263 0 0 0 0 0.872990263 0 0 0 0 0.872990263 0 0 0 0.462767701 0"
        />
      </filter>
      <filter
        id="pearsmoji-transparent_svg__i"
        width="125%"
        height="139%"
        x="-12.5%"
        y="-17.1%"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.271716565 0"
        />
      </filter>
      <path
        id="pearsmoji-transparent_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-transparent_svg__e"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-transparent_svg__h"
        d="M8 85.424c4.418 0 8-4.477 8-10s-3.582-10-8-10-8 4.477-8 10 3.582 10 8 10zm40 0c4.418 0 8-4.477 8-10s-3.582-10-8-10-8 4.477-8 10 3.582 10 8 10zm-20 21c10.493 0 19-9.406 19-13.164 0-3.757-5.206 6.361-19 6.361S9 89.503 9 93.261c0 3.757 8.507 13.163 19 13.163z"
      />
      <linearGradient
        id="pearsmoji-transparent_svg__b"
        x1="50%"
        x2="50%"
        y1="2.576%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#F7F7F7" />
        <stop offset="100%" stopColor="#FFF" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-transparent_svg__j"
        x1="50%"
        x2="71.662%"
        y1="9.894%"
        y2="81.159%"
      >
        <stop offset="0%" stopColor="#DDD" />
        <stop offset="99.992%" stopColor="#AEAEAE" />
      </linearGradient>
      <radialGradient
        id="pearsmoji-transparent_svg__f"
        cx="50%"
        cy="50.788%"
        r="49.212%"
        fx="50%"
        fy="50.788%"
      >
        <stop offset="0%" stopColor="#B4B4B4" stopOpacity={0.242} />
        <stop offset="100%" stopColor="#C7C7C7" stopOpacity={0} />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-transparent_svg__c" fill="#fff">
          <use xlinkHref="#pearsmoji-transparent_svg__a" />
        </mask>
        <use
          xlinkHref="#pearsmoji-transparent_svg__a"
          fill="url(#pearsmoji-transparent_svg__b)"
          fillRule="nonzero"
        />
        <g
          fill="#000"
          fillRule="nonzero"
          mask="url(#pearsmoji-transparent_svg__c)"
        >
          <use
            xlinkHref="#pearsmoji-transparent_svg__e"
            filter="url(#pearsmoji-transparent_svg__d)"
          />
        </g>
        <circle
          cx={72}
          cy={73}
          r={14}
          fill="url(#pearsmoji-transparent_svg__f)"
          mask="url(#pearsmoji-transparent_svg__c)"
        />
        <circle
          cx={16}
          cy={73}
          r={14}
          fill="url(#pearsmoji-transparent_svg__f)"
          mask="url(#pearsmoji-transparent_svg__c)"
        />
        <path
          stroke="#CFCFCF"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-transparent_svg__c)"
        />
      </g>
      <g transform="translate(26 8.576)">
        <use
          xlinkHref="#pearsmoji-transparent_svg__h"
          fill="#000"
          filter="url(#pearsmoji-transparent_svg__g)"
        />
        <use
          xlinkHref="#pearsmoji-transparent_svg__h"
          fill="#898989"
          fillOpacity={0.412}
        />
        <use
          xlinkHref="#pearsmoji-transparent_svg__h"
          fill="#000"
          filter="url(#pearsmoji-transparent_svg__i)"
        />
      </g>
      <path
        fill="url(#pearsmoji-transparent_svg__j)"
        d="M35.6 12.813c.578-2.045-.65-4.166-2.685-4.635l-1.443-.333-.06-.013c-2.037-.47-4.04.908-4.378 3.01L24.162 27.89c-.21 1.311.603 2.567 1.868 2.884l.03.036.72.152.722.18.006-.027c1.277.27 2.54-.51 2.902-1.788l5.19-16.514zM1.024 1.164C.46 6.526 2.81 12.261 7.63 15.95c4.82 3.688 10.848 4.367 15.698 2.285.563-5.362-1.787-11.096-6.606-14.785S5.874-.917 1.024 1.164"
        transform="translate(26 8.576)"
      />
    </g>
  </svg>
);
export default SvgPearsmojiTransparent;
