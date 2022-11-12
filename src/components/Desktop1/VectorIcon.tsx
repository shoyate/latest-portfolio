import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 695 851' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M372.907 0.141605C467.642 -5.24255 485.603 144.283 549.208 214.697C594.87 265.246 676.139 287.411 692.199 353.61C708.098 419.146 652.192 477.279 628.2 540.304C605.798 599.149 596.55 661.467 556.507 710.058C506.329 770.947 451.807 849.765 372.907 850.092C294.02 850.418 251.79 758.267 188.199 711.583C125.071 665.237 18.4953 654.419 2.07026 577.846C-14.6689 499.81 74.3633 442.043 115.743 373.797C145.68 324.423 177.853 281.506 210.588 233.942C265.726 153.828 275.81 5.66002 372.907 0.141605Z'
      fill='url(#paint0_linear_182_359)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_182_359'
        x1={347.5}
        y1={0}
        x2={347.5}
        y2={850.093}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C13A3A' />
        <stop offset={1} stopColor='#FF7E21' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
