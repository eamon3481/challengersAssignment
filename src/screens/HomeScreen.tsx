/* eslint-disable react-native/no-inline-styles */
import React, {Suspense, useState} from 'react';
import {Text} from 'react-native';

import ChallengeList from '../components/ChallengeList';
import Tab from '../components/Tab';
import {CategoryType} from '../types/challengeItem';

type TabKeyType = '전체' | CategoryType;
const HomeScreen: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<TabKeyType>('전체');
  const TabKeys: TabKeyType[] = [
    '전체',
    '운동',
    '식습관',
    '생활',
    '정서',
    '취미',
    '환경',
  ];
  const handleTabChange = (key: TabKeyType) => {
    setActiveTabKey(key);
  };
  return (
    <Tab
      activeTabKey={activeTabKey}
      onTabChange={handleTabChange}
      tabs={TabKeys.map(key => ({
        key,
        buttonLabel: key,
        render: () => (
          <Suspense fallback={<Text>로딩</Text>}>
            {key === '전체' ? (
              <ChallengeList />
            ) : (
              <ChallengeList category={key} />
            )}
          </Suspense>
        ),
      }))}
    />
  );
};

export default HomeScreen;
