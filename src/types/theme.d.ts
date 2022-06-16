import 'styled-components';
import {colors} from '../themes/colors';
type ColorType = typeof colors;
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorType;
  }
}
