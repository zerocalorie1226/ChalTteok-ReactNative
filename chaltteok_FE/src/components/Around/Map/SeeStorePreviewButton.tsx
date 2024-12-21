import React from 'react';
import styled from 'styled-components/native';

const seeStorePreviewIcon = require('../../../assets/Around/BTN_Floating_list.png')

const SeeStorePreviewButton: React.FC=()=>{

    return(
        <ButtonContainer >
            <SeeStorePreviewIcon source={seeStorePreviewIcon} />
        </ButtonContainer>
    )
}

export default SeeStorePreviewButton;

const ButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const SeeStorePreviewIcon = styled.Image``;