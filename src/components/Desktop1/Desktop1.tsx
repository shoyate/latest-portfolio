import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AkarIconsFigmaFillIcon } from './AkarIconsFigmaFillIcon.js';
import classes from './Desktop1.module.css';
import { Fa6BrandsMetaIcon } from './Fa6BrandsMetaIcon.js';
import { Group16Icon } from './Group16Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 173:144 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame22}>
        <div className={classes.akarIconsFigmaFill}>
          <AkarIconsFigmaFillIcon className={classes.icon} />
        </div>
        <div className={classes.fa6BrandsMeta}>
          <Fa6BrandsMetaIcon className={classes.icon2} />
        </div>
        <div className={classes.frame7}>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon3} />
          </div>
          <div className={classes.vector2}>
            <VectorIcon2 className={classes.icon4} />
          </div>
          <div className={classes.noise}></div>
          <div className={classes.designlab}>designlab.</div>
        </div>
        <div className={classes.helloIMCanBasedInPolandPoznan}>hello, i’m Can! based in poland, poznan</div>
        <div className={classes.webDeveloperUiUxDesignerBehavi}>
          <div className={classes.textBlock}>web developer</div>
          <div className={classes.textBlock2}>ui/ux designer</div>
          <div className={classes.textBlock3}>behavioral researcher</div>
          <div className={classes.textBlock4}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>currently software enginneer</span>
            </p>
          </div>
        </div>
        <div className={classes.image2}></div>
      </div>
      <div className={classes.frame23}>
        <div className={classes.line2}></div>
        <div className={classes.frame14}>
          <div className={classes.frame16}>
            <div className={classes._1}></div>
            <div className={classes.workInProgressSaaS}>Work in progress SaaS.</div>
            <div className={classes.taskManagementAppForStartups}>Task management app for startups.</div>
            <div className={classes._2022}>2022</div>
            <div className={classes.frame15}>
              <div className={classes.rectangle14}></div>
              <div className={classes._12}></div>
              <div className={classes._20222}>2022</div>
              <div className={classes.caseStudy}>Case Study.</div>
              <div className={classes.myPortfolioWebsiteBuiltInReact}>My portfolio website built in React.js</div>
              <div className={classes.iMac_black1}></div>
            </div>
          </div>
          <div className={classes.frame17}>
            <div className={classes._13}></div>
            <div className={classes.caseStudy2}>Case Study.</div>
            <div className={classes.lilac_iMac1}></div>
            <div className={classes.adminDashboardForHouseRenderin}>Admin dashboard for house rendering pipeline</div>
            <div className={classes._20223}>2022</div>
          </div>
          <div className={classes.frame19}>
            <div className={classes._14}></div>
            <div className={classes.caseStudy3}>Case Study.</div>
            <div className={classes.personalManagementAppForEmploy}>Personal management app for employees</div>
            <div className={classes.red_iMac1}></div>
          </div>
        </div>
        <div className={classes.line3}></div>
        <div className={classes._2013}>2013</div>
        <div className={classes._20224}>2022</div>
        <div className={classes.frame24}>
          <div className={classes.rectangle16}></div>
          <div className={classes._11}></div>
          <div className={classes._122}></div>
          <div className={classes._132}></div>
          <div className={classes.group16}>
            <Group16Icon className={classes.icon5} />
          </div>
          <div className={classes.denemeOlarakBunuYaziyorum}>Deneme olarak bunu yaziyorum.</div>
        </div>
      </div>
    </div>
  );
});
