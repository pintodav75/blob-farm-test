import { FC } from 'react';
import classes from './BlobComponent.module.less';
import { Blob } from "../../server/models/blob";
import tinycolor from "tinycolor2";
import { Tooltip } from 'antd';

const Header: FC<{ blob: Blob }> = ({ blob }) => {
  function random(min = 0, max = 10) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  const borderRadius1 = `${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}%`;
  const borderRadius2 = `${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}%`;
  const position = ['flex-start', 'flex-end', 'center'][random(0, 2)];
  
  return (
    <div className={classes.container} style={{
      alignSelf: position,
    }}>
      <Tooltip title={blob.name}>
        <div className={classes.blob} style={{
          height: `${blob.size || 10}mm`,
          width: `${blob.size || 10}mm`,
          background: `linear-gradient(45deg, ${tinycolor(blob.color).lighten(25)} 0%, ${tinycolor(blob.color)} 100%)`,
          animationDuration: `${random(8, 18)}s`,
          borderRadius: `${borderRadius1} / ${borderRadius2}`,
        }} />
      </Tooltip>
    </div>
  );
};

export default Header;
