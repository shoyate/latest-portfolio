import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 966 1177' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M569.5 299.288C666.704 200.677 768.548 -74.1746 870.444 19.58C991.258 130.741 759.539 337.707 787.144 499.543C797.871 562.434 946.654 505.939 963.882 567.368C981.562 630.407 883.705 668.675 850.382 725.032C830.481 758.689 804.928 793.602 807.026 832.646C812.185 928.649 907.953 1021.83 871.102 1110.63C844.105 1175.68 734.613 1190.87 669.228 1164.69C590.115 1133.01 595.471 983.16 511.841 966.776C426.17 949.992 361.177 1129.01 283.52 1089.13C213.188 1053.01 297.856 933.701 293.698 854.745C291.386 810.829 293.023 761.027 264.483 727.569C189.655 639.845 4.1055 625.715 0.0464684 510.484C-3.18268 418.811 162.669 424.806 253.326 410.826C321.481 400.316 390.795 463.14 455.828 440.198C513.367 419.9 526.667 342.741 569.5 299.288Z'
      fill='url(#paint0_linear_182_360)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_182_360'
        x1={483}
        y1={0.37826}
        x2={483}
        y2={1176.86}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2545ED' />
        <stop offset={1} stopColor='#F31A1A' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
