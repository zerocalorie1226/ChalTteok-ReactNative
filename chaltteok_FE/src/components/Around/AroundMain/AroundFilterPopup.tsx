import React from 'react';
import styled from 'styled-components/native';

const deleteIcon= require('../../../assets/Around/delete.png')

const AroundFilterPopup: React.FC = ()=>{

    return(
        <PopUpContainer>
            <SettingPrice>
                <SettingPriceTitle>가격대 설정</SettingPriceTitle>
                <DeleteIcon source={deleteIcon} />
            </SettingPrice>
            <MiddleLine></MiddleLine>

        </PopUpContainer>
    );
};

export default AroundFilterPopup;

const PopUpContainer = styled.View`
    width: 100%;
    height: 250px;
    background-color: #ffffff;
`
const SettingPrice = styled.View`
    position: relative;
    width: 100%;
    height: 122px;
`

const SettingPriceTitle = styled.Text`
    position: absolute;
    width: 64px;
    height: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    top: 24px;
    left: 16px;

`

const DeleteIcon = styled.Image`
        position: absolute;
        width: 24px;
        height: 24px;
        top: 16px;
        right: 16px;
`

const SettingPriceFilter = styled.View`
`


const MiddleLine = styled.View`
  width: 100%;
  height: 8px;
  background-color: #EAEAEA;
`;