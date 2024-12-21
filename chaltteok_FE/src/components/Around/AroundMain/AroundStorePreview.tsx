import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

// 이미지 경로
const LikeIcon = require('../../../assets/Around/heart.png');
const ScoreIcon = require('../../../assets/Around/rating.png');
const downArrowGray = require('../../../assets/Around/downGray.png');
const emptyImage = require('../../../assets/Around/img_empty.png');

const longText = "이 텍스트는 30자 이상으로 작성된 예시 문장입니다. 초과된 부분은 말줄임표로 표시됩니다. 확인해보세요";



const StorePreview: React.FC = () => {
  
    const truncatedText = longText.length > 30 
    ? longText.substring(0, 30) + '...' 
    : longText;
  const images = [
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage,
    emptyImage
  ];
  return (
    <StorePreviewSection>
      <StorePreviewIntroSection>
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
      </StorePreviewIntroSection>

      <MiddleLine></MiddleLine>

      <StorePreviewImagesSection>
      <StorePreviewImagesContainer 
        horizontal 
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <StorePreviewImages 
            key={index} 
            source={image} 
            style={{
              marginRight: index === images.length - 1 ? 20 : 8, // 마지막 이미지인지 확인
            }}
          />
        ))}
      </StorePreviewImagesContainer>
      </StorePreviewImagesSection>
      </StorePreviewSection>
  );
};

export default StorePreview;

// Styled Components
const StorePreviewSection = styled.View`
  width: 343px;
  height: 237px;
  border-radius: 12px;
  position: absolute; 
  left: 6.5%;
  bottom: 5%; 
  z-index: 3; 
  background-color: #fff; 
`;

const StorePreviewIntroSection = styled.View`
  width: 343px;
  height: 108px;
`;

const MiddleLine = styled.View`
  width: 343px;
  height: 1px;
  background-color: #EAEAEA;
`;

const StoreTitle = styled.Text`
  width: 273px;
  height: 24px;
  position: absolute;
  left: 20px;
  top: 18px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const StoreIntro = styled.Text`
  position: absolute;
  left: 20px;
  top: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const StoreLike = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 307px;
  top: 18px;
`;

const StoreScoreIcon = styled.Image`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 20px;
  top: 70px;
`;

const StoreScore = styled.Text`
  width: 26px;
  height: 22px;
  position: absolute;
  left: 40px;
  top: 68px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const StoreAddressShort = styled.Text`
  width: 65px;
  height: 22px;
  position: absolute;
  left: 68px;
  top: 68px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #888888;
`;

const StoreAddressShortIcon = styled.Image`
  width: 16px;
  height: 16px;
  position: absolute; 
  top: 70px;
  left: 133px;
`;

const StorePreviewImagesSection = styled.View`
  width: 343px;
  height: 128px;
`;

const StorePreviewImagesContainer = styled(ScrollView)`
  width: 343px;
  height: 88px;
  flex-direction: row;
  position: relative;
  top: 20px;
  padding-left: 20px;
`;

const StorePreviewImages = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 6px;
  margin-right: 8px;
`;
