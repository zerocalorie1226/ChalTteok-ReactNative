import React from 'react';
import styled from 'styled-components/native';
import AroundContainer from './AroundContainer';
import Map from '../Map/Map';

// Images
const leftArrow = require('../../assets/Around/left.png');
const downArrowBlack = require('../../assets/Around/downBlack.png');

const Around: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onPress={() => console.log('Back button pressed')}>
          <Icon source={leftArrow} />
        </BackButton>
      </Header>

      {/* Map Section */}
      <MapSection>
        <Map />
      </MapSection>

      {/* Around Section */}
      <AroundForm>
        <AroundContainer text="장소/지명으로도 검색해보세요." />
        <FilterButton>
          <FilterText>가격</FilterText>
          <Icon source={downArrowBlack} />
        </FilterButton>
      </AroundForm>
    </Container>
  );
};

export default Around;

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  padding: 16px;
  background-color: #f5f5f5;
`;

const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;

const MapSection = styled.View`
  flex: 1;
`;

const AroundForm = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #fff;
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;
`;
