import React from 'react';
import styled from 'styled-components/native';
import AroundSearchContainer from './AroundSearchContainer';
import Map from '../Map/Map';

// 이미지 경로
const leftArrow = require('../../assets/Around/left.png');
const downArrowBlack = require('../../assets/Around/downBlack.png');

const Around: React.FC = () => {
  return (
    <Container>
      {/* Header*/}
      <Header>
        <BackButton onPress={() => console.log('뒤로가기 버튼 눌림')}>
          <BackArrowIcon source={leftArrow} />
        </BackButton>
      </Header>

      {/* AroundSearchForm Section*/}
      <AroundSearchForm>
        <AroundSearchContainer text="장소/지명으로도 검색해보세요." />
        <FilterButton>
          <FilterText>가격</FilterText>
          <DownArrowIcon source={downArrowBlack} />
        </FilterButton>
      </AroundSearchForm>

      {/* Google Map Section*/}
      <MapSection>
        <Map />
      </MapSection>
    </Container>
  );
};

export default Around;

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

const Header = styled.View`
  padding: 16px;
  background-color: #fff;
`;

const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const BackArrowIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const DownArrowIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

const MapSection = styled.View`
  flex: 1;
`;

const AroundSearchForm = styled.View`
  align-items: center;
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
  margin-right: 269px;
  margin-top: 8px;
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;
`;
