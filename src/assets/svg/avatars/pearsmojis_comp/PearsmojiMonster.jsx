import * as React from "react";
const SvgPearsmojiMonster = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <linearGradient
        id="pearsmoji-monster_svg__b"
        x1="50%"
        x2="50%"
        y1="2.576%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#D7FFA9" />
        <stop offset="100%" stopColor="#9DA039" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-monster_svg__d"
        x1="50%"
        x2="90.749%"
        y1="9.894%"
        y2="90.106%"
      >
        <stop offset="0%" stopColor="#7ACD48" />
        <stop offset="100%" stopColor="#1E6A1B" />
      </linearGradient>
      <filter
        id="pearsmoji-monster_svg__e"
        width="103.4%"
        height="108.3%"
        x="-1.7%"
        y="-2.1%"
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
          values="0 0 0 0 0.832722799 0 0 0 0 1 0 0 0 0 0.556383384 0 0 0 0.227737107 0"
        />
      </filter>
      <filter
        id="pearsmoji-monster_svg__g"
        width="124.1%"
        height="133.3%"
        x="-12.1%"
        y="-14.6%"
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
        id="pearsmoji-monster_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-monster_svg__f"
        d="M8.286 82.424c4.576 0 8.285-4.925 8.285-11s-3.71-11-8.285-11c-4.576 0-8.286 4.925-8.286 11s3.71 11 8.286 11zm20.714 0c4.576 0 8.286-4.925 8.286-11s-3.71-11-8.286-11-8.286 4.925-8.286 11 3.71 11 8.286 11zm20.714 0c4.576 0 8.286-4.925 8.286-11s-3.71-11-8.286-11-8.285 4.925-8.285 11 3.71 11 8.285 11zm-20.714 26c13.728 0 24.857-10.009 24.857-14.007 0-3.997-6.811 6.768-24.857 6.768S4.143 90.42 4.143 94.417c0 3.998 11.129 14.007 24.857 14.007z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-monster_svg__c" fill="#fff">
          <use xlinkHref="#pearsmoji-monster_svg__a" />
        </mask>
        <use
          xlinkHref="#pearsmoji-monster_svg__a"
          fill="url(#pearsmoji-monster_svg__b)"
          fillRule="nonzero"
        />
        <path
          stroke="#B6C9B7"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-monster_svg__c)"
        />
      </g>
      <path
        fill="url(#pearsmoji-monster_svg__d)"
        d="M36.6 12.813c.578-2.045-.65-4.166-2.685-4.635l-1.443-.333-.06-.013c-2.037-.47-4.04.908-4.378 3.01L25.162 27.89c-.21 1.311.603 2.567 1.868 2.884l.03.036.72.152.722.18.006-.027c1.277.27 2.54-.51 2.902-1.788l5.19-16.514zM2.024 1.164C6.874-.917 12.904-.239 17.722 3.45c4.819 3.689 7.17 9.423 6.606 14.785-2.008 2.88-5.871 4.594-9.886 4.212-4.018-.381-7.366-2.788-8.938-6.011a9.531 9.531 0 0 1 1.615-1.787C3.326 10.994 1.523 5.93 2.024 1.164z"
        transform="translate(25 8.576)"
      />
      <g transform="translate(25 8.576)">
        <use
          xlinkHref="#pearsmoji-monster_svg__f"
          fill="#000"
          filter="url(#pearsmoji-monster_svg__e)"
        />
        <use
          xlinkHref="#pearsmoji-monster_svg__f"
          fill="#616F14"
          fillOpacity={0.412}
        />
        <use
          xlinkHref="#pearsmoji-monster_svg__f"
          fill="#000"
          filter="url(#pearsmoji-monster_svg__g)"
        />
      </g>
    </g>
  </svg>
);
export default SvgPearsmojiMonster;
