import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function CameraIcon(props: SvgProps) {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 96 96"
      fill="currentColor"
      {...props}>
      <Path
        d="M47.9992 60.8002C55.0685 60.8002 60.7992 55.0694 60.7992 48.0002C60.7992 40.9309 55.0685 35.2002 47.9992 35.2002C40.93 35.2002 35.1992 40.9309 35.1992 48.0002C35.1992 55.0694 40.93 60.8002 47.9992 60.8002Z"
        fill="currentColor"
      />
      <Path
        d="M36 8L28.68 16H16C11.6 16 8 19.6 8 24V72C8 76.4 11.6 80 16 80H80C84.4 80 88 76.4 88 72V24C88 19.6 84.4 16 80 16H67.32L60 8H36ZM48 68C36.96 68 28 59.04 28 48C28 36.96 36.96 28 48 28C59.04 28 68 36.96 68 48C68 59.04 59.04 68 48 68Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default CameraIcon;
