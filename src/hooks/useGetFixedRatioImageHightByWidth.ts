import {useState} from 'react';
import {Image} from 'react-native';

type Props = {
  width: number;
  imgUrl: string;
};

const useGetFixedRatioImageHightByWidth = ({imgUrl, width}: Props) => {
  const [height, setHeight] = useState(0);
  Image.getSize(imgUrl, (w, h) => {
    setHeight(h * (width / w));
  });

  return height;
};

export default useGetFixedRatioImageHightByWidth;
