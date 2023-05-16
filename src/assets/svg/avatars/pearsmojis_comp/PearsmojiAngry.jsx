import * as React from "react";
const SvgPearsmojiAngry = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <filter
        id="pearsmoji-angry_svg__c"
        width="114.8%"
        height="113%"
        x="-7.4%"
        y="-6.5%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlurInner1"
          stdDeviation={2.5}
        />
        <feOffset dy={-8} in="shadowBlurInner1" result="shadowOffsetInner1" />
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
      </filter>
      <filter
        id="pearsmoji-angry_svg__g"
        width="103.6%"
        height="107.6%"
        x="-1.8%"
        y="-1.9%"
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
          values="0 0 0 0 1 0 0 0 0 0.751386623 0 0 0 0 0.556383384 0 0 0 0.33364292 0"
        />
      </filter>
      <filter
        id="pearsmoji-angry_svg__i"
        width="125%"
        height="130.4%"
        x="-12.5%"
        y="-13.3%"
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
      <linearGradient
        id="pearsmoji-angry_svg__b"
        x1="50%"
        x2="50%"
        y1="2.576%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#FFBF7B" />
        <stop offset="100%" stopColor="#F34136" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-angry_svg__f"
        x1="50%"
        x2="69.169%"
        y1="0%"
        y2="88.845%"
      >
        <stop offset="0%" stopColor="#AF3D2D" />
        <stop offset="100%" stopColor="#633921" />
      </linearGradient>
      <path
        id="pearsmoji-angry_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-angry_svg__h"
        d="M40.002 96.996a4 4 0 0 1 4 4v1.196a4.045 4.045 0 0 1-2.625 3.788l-6.273 2.352a20.227 20.227 0 0 1-14.205 0l-6.272-2.352a4.045 4.045 0 0 1-2.625-3.788v-1.196a4 4 0 0 1 4-4h24zm-28-25a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm32 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM2.426 57.066l20.468 7.102c.632.22.967.907.751 1.54l-1.524 4.46a1.214 1.214 0 0 1-1.66.709L.704 61.714a1.214 1.214 0 0 1-.638-1.494l.82-2.398a1.214 1.214 0 0 1 1.541-.756zm51.151 0a1.214 1.214 0 0 1 1.541.756l.82 2.398c.2.588-.074 1.233-.638 1.494l-19.758 9.163a1.214 1.214 0 0 1-1.66-.709l-1.524-4.46c-.216-.633.12-1.32.751-1.54l20.463-7.1z"
      />
      <radialGradient
        id="pearsmoji-angry_svg__e"
        cx="50%"
        cy="50%"
        r="40.36%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="red" stopOpacity={0.81} />
        <stop offset="100%" stopColor="red" stopOpacity={0} />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-angry_svg__d" fill="#fff">
          <use xlinkHref="#pearsmoji-angry_svg__a" />
        </mask>
        <g fillRule="nonzero">
          <use
            xlinkHref="#pearsmoji-angry_svg__a"
            fill="url(#pearsmoji-angry_svg__b)"
          />
          <use
            xlinkHref="#pearsmoji-angry_svg__a"
            fill="#000"
            filter="url(#pearsmoji-angry_svg__c)"
          />
        </g>
        <path
          stroke="#D78181"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-angry_svg__d)"
        />
        <circle
          cx={12}
          cy={66}
          r={16}
          fill="url(#pearsmoji-angry_svg__e)"
          mask="url(#pearsmoji-angry_svg__d)"
        />
        <circle
          cx={76}
          cy={66}
          r={16}
          fill="url(#pearsmoji-angry_svg__e)"
          mask="url(#pearsmoji-angry_svg__d)"
        />
      </g>
      <path
        fill="url(#pearsmoji-angry_svg__f)"
        d="M35.6 15.389c.578-2.045-.65-4.166-2.685-4.635l-1.443-.333-.06-.013c-2.037-.47-4.04.908-4.378 3.01l-2.872 17.048c-.21 1.311.603 2.567 1.868 2.884l.03.036.72.152.722.18.006-.027c1.277.27 2.54-.51 2.902-1.788L35.6 15.39zM5.021.145C3.09 5.178 3.876 11.326 7.576 16.135c3.7 4.81 9.348 7.026 14.571 6.27 1.932-5.032 1.146-11.18-2.554-15.99-3.7-4.81-9.348-7.026-14.572-6.27"
        transform="translate(26 6)"
      />
      <g transform="translate(26 6)">
        <use
          xlinkHref="#pearsmoji-angry_svg__h"
          fill="#000"
          filter="url(#pearsmoji-angry_svg__g)"
        />
        <use
          xlinkHref="#pearsmoji-angry_svg__h"
          fill="#6F4B14"
          fillOpacity={0.402}
        />
        <use
          xlinkHref="#pearsmoji-angry_svg__h"
          fill="#000"
          filter="url(#pearsmoji-angry_svg__i)"
        />
      </g>
    </g>
  </svg>
);
export default SvgPearsmojiAngry;
