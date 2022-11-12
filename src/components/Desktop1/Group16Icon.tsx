import { memo, SVGProps } from 'react';

const Group16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={35} cy={35} r={35} fill='#F1F1F1' />
    <path
      d='M44 35L26 35M36.125 43L44 35L36.125 27'
      stroke='black'
      strokeWidth={3.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group16Icon);
export { Memo as Group16Icon };
