import * as React from "react";
const SvgPearsmojiMulticolor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={108}
    height={140}
    {...props}
  >
    <defs>
      <filter
        id="pearsmoji-multicolor_svg__c"
        width="188.6%"
        height="178%"
        x="-44.3%"
        y="-39%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={13} />
      </filter>
      <filter
        id="pearsmoji-multicolor_svg__e"
        width="103.6%"
        height="109.5%"
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
          values="0 0 0 0 1 0 0 0 0 0.808389807 0 0 0 0 0.556383384 0 0 0 0.462767701 0"
        />
      </filter>
      <filter
        id="pearsmoji-multicolor_svg__g"
        width="125%"
        height="138.1%"
        x="-12.5%"
        y="-16.7%"
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
        id="pearsmoji-multicolor_svg__b"
        x1="88.72%"
        x2="11.28%"
        y1="50%"
        y2="49.985%"
      >
        <stop offset="0%" stopColor="#57F6EF" />
        <stop offset="11.443%" stopColor="#C8F65A" />
        <stop offset="25.38%" stopColor="#F7E35D" />
        <stop offset="42.529%" stopColor="#F7A661" />
        <stop offset="60.853%" stopColor="#F75665" />
        <stop offset="79.073%" stopColor="#F828E0" />
        <stop offset="100%" stopColor="#578EF6" />
      </linearGradient>
      <linearGradient
        id="pearsmoji-multicolor_svg__h"
        x1="50%"
        x2="67.2%"
        y1="0%"
        y2="88.845%"
      >
        <stop offset="0%" stopColor="#5E68D8" />
        <stop offset="100%" stopColor="#2C166B" />
      </linearGradient>
      <path
        id="pearsmoji-multicolor_svg__a"
        d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
      />
      <path
        id="pearsmoji-multicolor_svg__f"
        d="M8 87.581c4.418 0 8-4.477 8-10s-3.582-10-8-10-8 4.477-8 10 3.582 10 8 10zm40 0c4.418 0 8-4.477 8-10s-3.582-10-8-10-8 4.477-8 10 3.582 10 8 10zm-20 22c-9.389 0-17-6.149-17-14.826 0-4.192 4.658 4.192 17 4.192l.404-.003C40.444 98.764 45 90.609 45 94.755c0 8.677-7.611 14.826-17 14.826z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 34)">
        <mask id="pearsmoji-multicolor_svg__d" fill="#fff">
          <use xlinkHref="#pearsmoji-multicolor_svg__a" />
        </mask>
        <use
          xlinkHref="#pearsmoji-multicolor_svg__a"
          fill="url(#pearsmoji-multicolor_svg__b)"
          fillRule="nonzero"
        />
        <path
          fill="url(#pearsmoji-multicolor_svg__b)"
          fillRule="nonzero"
          d="M44 0c10.838 0 19.998 7.782 22.978 18.47C79.588 26.206 88 40.12 88 56c0 24.3-19.7 44-44 44S0 80.3 0 56c0-15.88 8.412-29.794 21.022-37.53C24.002 7.781 33.162 0 44 0z"
          filter="url(#pearsmoji-multicolor_svg__c)"
          mask="url(#pearsmoji-multicolor_svg__d)"
        />
        <path
          stroke="#D1D1D1"
          strokeOpacity={0.402}
          strokeWidth={3}
          d="M44 1.5c5.001 0 9.618 1.778 13.347 4.776 3.856 3.1 6.765 7.5 8.186 12.597.053.19.103.379.152.569.17.1.34.203.509.307C78.374 27.22 86.5 40.662 86.5 56c0 11.736-4.757 22.361-12.448 30.052C66.362 93.743 55.736 98.5 44 98.5s-22.361-4.757-30.052-12.448C6.257 78.362 1.5 67.736 1.5 56c0-15.338 8.126-28.779 20.306-36.252l.51-.309c.048-.189.098-.378.15-.567 1.422-5.097 4.331-9.497 8.187-12.597C34.383 3.278 39 1.5 44 1.5z"
          mask="url(#pearsmoji-multicolor_svg__d)"
        />
      </g>
      <g transform="translate(26 6.419)">
        <use
          xlinkHref="#pearsmoji-multicolor_svg__f"
          fill="#000"
          filter="url(#pearsmoji-multicolor_svg__e)"
        />
        <use
          xlinkHref="#pearsmoji-multicolor_svg__f"
          fill="#6F4B14"
          fillOpacity={0.412}
        />
        <use
          xlinkHref="#pearsmoji-multicolor_svg__f"
          fill="#000"
          filter="url(#pearsmoji-multicolor_svg__g)"
        />
      </g>
      <path
        fill="url(#pearsmoji-multicolor_svg__h)"
        d="M27.034 13c.338-2.102 2.341-3.48 4.378-3.01l.06.013 1.443.332c2.035.47 3.263 2.59 2.685 4.635l-5.19 16.515c-.361 1.277-1.625 2.057-2.902 1.788l-.006.027-.721-.18-.721-.152-.03-.036c-1.265-.317-2.078-1.573-1.868-2.885zM7.616.022c5.27-.297 10.703 2.403 13.97 7.516 3.266 5.115 3.514 11.307 1.15 16.153-5.27.297-10.702-2.402-13.97-7.516C5.5 11.06 5.253 4.868 7.617.022z"
        transform="translate(26 6.419)"
      />
    </g>
  </svg>
);
export default SvgPearsmojiMulticolor;
