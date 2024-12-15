import React from 'react';
import styled from 'styled-components/native';
import AroundSearchContainer from './AroundSearchContainer';
import Map from '../Map/Map';

// 이미지 경로
const leftArrow = require('../../assets/Around/left.png');
const downArrowBlack = require('../../assets/Around/downBlack.png');
const LikeIcon = require('../../assets/Around/heart.png')
const ScoreIcon = require('../../assets/Around/rating.png')
const downArrowGray = require('../../assets/Around/downGray.png');
const emptyImage = require('../../assets/Around/img_empty.png')

const longText = "이 텍스트는 30자 이상으로 작성된 예시 문장입니다. 초과된 부분은 말줄임표로 표시됩니다. 확인해보세요";

// 글자 제한: 30자로 제한하고 초과하면 '...' 추가
const truncatedText = longText.length > 30 
  ? longText.substring(0, 30) + '...' 
  : longText;

const Around: React.FC = () => {
  const images = [
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage
  ];
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

      {/*  Store Preview Section */}
      <StorePreviewSection>
      <StorePreviewIntriSection>
        <StoreTitle>
          찰칵 스튜디오
        </StoreTitle>
        <StoreLike source={LikeIcon} />
        <StoreIntro>
          {truncatedText}
        </StoreIntro>
        <StoreScoreIcon source={ScoreIcon}/>
        <StoreScore>4.5</StoreScore>
        <StoreAddressShort>
          서울 강남구
        
        </StoreAddressShort>
        <StoreAddressShortIcon source={downArrowGray}/>
      </StorePreviewIntriSection>

      <MiddleLine></MiddleLine>

      <StorePreviewImagesSection>
        <StorePreviewImagesContainer horizontal showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <StorePreviewImages 
              key={index} 
              source={image} 
            />
          ))}
        </StorePreviewImagesContainer>
      </StorePreviewImagesSection>
      </StorePreviewSection>

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
  border-radius: 16px;
  z-index: 3;
  align-self: center; /* 수평 중앙 정렬 */
  position: absolute;
  top: 9%;
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
  margin-right: 2px;
  padding-left: 8px;
`;

const StorePreviewSection = styled.View`
  width: 343px;
  height: 237px;
  border-radius: 12px;
  position: absolute; /* 부모 요소 기준으로 절대 위치 지정 */
  left: 6%; /* 부모의 절반 위치 */
  bottom: 5%; /* 화면 하단에서 5% 위로 띄움 */
  z-index: 3; /* 다른 요소 위에 표시 */
  background-color: #fff; 
  shadow-color: #000; 
  shadow-offset: 0px 4px; 
  shadow-opacity: 0.1; 
  shadow-radius: 10px; 
  elevation: 5; /* 안드로이드 그림자 효과 */
`;


const StorePreviewIntriSection = styled.View`
  width: 343px;
  height: 108px;
`;



const MiddleLine=styled.View`
  width: 343px;
  height: 1px;
  background-color: #EAEAEA;
`;

const StoreTitle=styled.Text`
  width: 273px;
  height: 24px;
  position: absoulte;
  left:20px;
  top: 18px;
  font-weight:700;
  font-size: 16px;
  line-height: 24px;
`

const StoreIntro=styled.Text`
  position: absoulte;
  left:20px;
  top: -1px;
  font-weight:400;
  font-size: 14px;
  line-height: 22px;
`

const StoreLike=styled.Image`
  width: 24px;
  height: 24px;
  position: absoulte;
  left: 307px;
  top: -12px;
`

const StoreScoreIcon=styled.Image`
  width: 16px;
  height: 16px;
  position: absoulte;
  left: 20px;
  top: 7px;
`
const StoreScore=styled.Text`
  width: 26px;
  height: 22px;
  position: absoulte;
  left: 40px;
  top: -12px;
  font-weight:400;
  font-size: 14px;
  line-height: 22px;
`

const StoreAddressShort=styled.Text`
  width: 65px;
  height: 22px;
  position: absoulte;
  left: 68px;
  top: -34px;
  font-weight:400;
  font-size: 14px;
  line-height: 22px;
  color: #888888;
`

const StoreAddressShortIcon=styled.Image`
  width: 16px;
  height: 16px;
  position: absoulte; 
  top: -53px;
  left: 133px;
`

const StorePreviewImagesSection = styled.View`
  width: 343px;
  height: 128px;


`;

const StorePreviewImagesContainer=styled.View`
  width: 323px;
  height: 88px;
  flex-direction: row;

  overflow: hidden; /* 넘치는 이미지 숨기기 */
  position: relative;
  top:20px;
  left:20px;
`

const StorePreviewImages = styled.Image`
width: 88px;
height: 88px;
border-radius: 6px;
margin-right: 8px;
`

