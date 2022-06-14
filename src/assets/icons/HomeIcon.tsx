import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function HomeIcon(props: SvgProps) {
  return (
    <Svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="currentColor"
      {...props}>
      <Path d="M48 12L16 36V84H36V56H60V84H80V36L48 12Z" fill="currentColor" />
    </Svg>
  );
}

export default HomeIcon;
