import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ChallengersLogo(props: SvgProps) {
  return (
    <Svg width="96" height="96" viewBox="0 0 96 96" fill="none" {...props}>
      <Path
        d="M20 52H76V44H20V52ZM12 68H68V60H12V68ZM28 28V36H84V28H28Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default ChallengersLogo;
