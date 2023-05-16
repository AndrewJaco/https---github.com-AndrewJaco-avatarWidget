import * as React from "react";
const SvgPearsmojiAnonymous = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <linearGradient
        id="pearsmoji-anonymous_svg__b"
        x1="50%"
        x2="50%"
        y1="2.576%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#D9F38D" />
        <stop offset="100%" stopColor="#68CD6F" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-anonymous_svg__g"
        x1="50%"
        x2="69.169%"
        y1="0%"
        y2="88.845%"
      >
        <stop offset="0%" stopColor="#42CD70" />
        <stop offset="100%" stopColor="#225323" />
      </linearGradient>
      <filter
        id="pearsmoji-anonymous_svg__d"
        width="104.5%"
        height="128.6%"
        x="-2.3%"
        y="-7.1%"
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
          values="0 0 0 0 0.601740786 0 0 0 0 0.879330842 0 0 0 0 0.533731034 0 0 0 0.500191215 0"
        />
      </filter>
      <filter
        id="pearsmoji-anonymous_svg__f"
        width="131.8%"
        height="214.3%"
        x="-15.9%"
        y="-50%"
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
        id="pearsmoji-anonymous_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-anonymous_svg__e"
        d="M48 105c12.15 0 22-9.406 22-13.164 0-3.757-6.028 6.361-22 6.361-15.972 0-22-10.118-22-6.36C26 95.593 35.85 105 48 105z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-anonymous_svg__c" fill="#fff">
          <use xlinkHref="#pearsmoji-anonymous_svg__a" />
        </mask>
        <use
          xlinkHref="#pearsmoji-anonymous_svg__a"
          fill="url(#pearsmoji-anonymous_svg__b)"
          fillRule="nonzero"
        />
        <path
          stroke="#9AD999"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-anonymous_svg__c)"
        />
      </g>
      <g transform="translate(6 6)">
        <use
          xlinkHref="#pearsmoji-anonymous_svg__e"
          fill="#000"
          filter="url(#pearsmoji-anonymous_svg__d)"
        />
        <use
          xlinkHref="#pearsmoji-anonymous_svg__e"
          fill="#276F14"
          fillOpacity={0.402}
        />
        <use
          xlinkHref="#pearsmoji-anonymous_svg__e"
          fill="#000"
          filter="url(#pearsmoji-anonymous_svg__f)"
        />
      </g>
      <path
        fill="url(#pearsmoji-anonymous_svg__g)"
        d="M55.6 15.389c.578-2.045-.65-4.166-2.685-4.635l-1.443-.333-.06-.013c-2.037-.47-4.04.908-4.378 3.01l-2.872 17.048c-.21 1.311.603 2.567 1.868 2.884l.03.036.72.152.722.18.006-.027c1.277.27 2.54-.51 2.902-1.788L55.6 15.39zM25.021.145c-1.932 5.033-1.145 11.181 2.555 15.99 3.7 4.81 9.348 7.026 14.571 6.27 1.932-5.032 1.146-11.18-2.554-15.99-3.7-4.81-9.348-7.026-14.572-6.27"
        transform="translate(6 6)"
      />
      <path
        stroke="#FFF"
        strokeOpacity={0.4}
        strokeWidth={1.5}
        d="M102.75 57.224v6.381l-.715.54c-2.044 1.635-3.3 4.14-3.445 6.845l-.014.532v5.129c0 4.805-1.804 9.164-4.73 12.366-2.953 3.23-7.048 5.283-11.595 5.444l-.568.01h-3.946c-5.385 0-10.273-2.258-13.856-5.931-3.581-3.671-5.859-8.758-6.018-14.407l-.009-.6c-.11-1.383-.712-2.395-1.661-2.897-.887-.27-1.531-.35-2.193-.35-.664 0-1.311.077-1.941.232a3.003 3.003 0 0 0-1.29 1.027 3.319 3.319 0 0 0-.608 1.638c-.016 5.93-2.226 11.223-5.784 15.046-3.607 3.875-8.6 6.242-14.114 6.242h-3.939c-4.671 0-8.903-1.998-11.965-5.234-3.047-3.221-4.935-7.67-4.935-12.586v-5.14c0-2.9-1.284-5.626-3.459-7.367l-.715-.539v-6.381l26.524.92a33.613 33.613 0 0 1 12.19 2.755l1.46.631a21.633 21.633 0 0 0 7.696 1.768l.879.017.88-.017a21.6 21.6 0 0 0 6.867-1.429l.838-.342 1.452-.628a33.647 33.647 0 0 1 11.056-2.697l1.127-.058 26.531-.92z"
      />
    </g>
  </svg>
);
export default SvgPearsmojiAnonymous;
