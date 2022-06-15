import React from 'react';
import styled from 'styled-components/native';

export type IToggleTabs<T, TLabel> = {
  /**
   * Unique key for each tab
   */
  key: T;
  /**
   * render in a tab
   */
  render: () => React.ReactNode;

  /**
   * Tab button label
   */
  buttonLabel: T;

  /**
   * Tab button aria-label
   */
  buttonAriaLabel?: TLabel;
};

interface IToggleTabsProps<T, TLabel> {
  activeTabKey: T;
  onTabChange: (key: T) => void;
  tabs: IToggleTabs<T, TLabel>[];
}

const Tab = <T extends string, TLabel = T>({
  activeTabKey,
  onTabChange,
  tabs,
}: IToggleTabsProps<T, TLabel>) => {
  const renderComponent = tabs.find(({key}) => key === activeTabKey);
  if (!renderComponent) {
    throw new Error('active key is none');
  }
  return (
    <Base>
      <BaseTab>
        <ToggleTabBase horizontal={true} showsHorizontalScrollIndicator={false}>
          {tabs.map(({key, buttonLabel, buttonAriaLabel}) => (
            <ToggleTab
              key={key}
              onTouchEnd={() => {
                onTabChange(key);
              }}
              isSelected={key === activeTabKey}
              aria-selected={key === activeTabKey}
              aria-label={buttonAriaLabel}>
              <TabText isSelected={key === activeTabKey}>{buttonLabel}</TabText>
            </ToggleTab>
          ))}
          <Footer />
        </ToggleTabBase>
      </BaseTab>
      <BaseRender>{renderComponent.render()}</BaseRender>
    </Base>
  );
};

export default Tab;

const Base = styled.View`
  height: 100%;
  flex-direction: column;
  width: 100%;
`;
const Footer = styled.View`
  width: 36px;
`;
const BaseTab = styled.View`
  justify-content: center;
`;
const BaseRender = styled.View`
  flex: 1;
`;

const ToggleTabBase = styled.ScrollView`
  flex-direction: row;
  background-color: #e2e2e2;
  padding: 12px 24px;
  padding-right: 40px;
`;

const TabText = styled.Text<{isSelected: boolean}>`
  align-items: center;
  color: ${({isSelected}) => (isSelected ? '#fff' : '#333')};
`;
const ToggleTab = styled.View<{isSelected: boolean}>`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 150%;
  font-weight: ${({isSelected}) => (isSelected ? 900 : 400)};
  background-color: ${({isSelected}) =>
    isSelected ? '#FF3A3A' : 'transparent'};
  border-radius: 59px;
  align-items: center;
  justify-content: center;
`;
