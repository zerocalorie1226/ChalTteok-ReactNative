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
      {/* Header */}
      <Header>
        <BackButton onPress={() => console.log('뒤로가기 버튼 눌림')}>
          <BackArrowIcon source={leftArrow} />
        </BackButton>
      </Header>

      {/* AroundSearchForm Section */}
      <AroundSearchForm>
        <AroundSearchContainer text="장소/지명으로도 검색해보세요." />
        <FilterButton>
          <FilterText>가격</FilterText>
          <DownArrowIcon source={downArrowBlack} />
        </FilterButton>
      </AroundSearchForm>

      {/* Google Map Section */}
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
  z-index: 2; /* Header는 SearchForm 위에 있어야 하므로 z-index 추가 */
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
  flex: 1; /* 전체 화면을 채우고 AroundSearchForm 위에 위치 */
`;

const AroundSearchForm = styled.View`
  position: absolute;
  top: 56px; /* Header 아래에 띄우기 위해 설정 */
  left: 8px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  elevation: 5; /* 안드로이드 그림자 */
  z-index: 3; /* 지도의 위에 표시되도록 설정 */
`;

const FilterButton = styled.TouchableOpacity`
  width: 67px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #fff;
  margin-top: 8px;
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;
`;
