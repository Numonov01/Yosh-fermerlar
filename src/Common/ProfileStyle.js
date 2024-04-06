import { styled } from 'styled-components';
import { themecolor } from '../../src/config';
import ProfileCover from '../assets/images/profile.jpg';
import { Avatar } from 'antd';

const StyleProfileCover = styled.div`
    background-image:  url(${ProfileCover});
    padding: 25px;
    height: 180px;
    border-radius:${themecolor.token.borderRadius}px ${themecolor.token.borderRadius}px 0 0;
`;

const StyleProfileContent = styled.div` 
    position: relative;
    margin-top:-50px;
    display: flex;
    align-items: end;
    gap: 10px;

    .subtitle {
        color: ${({ theme }) => theme.token.colorTextDescription};
    }

    .button-end {
        margin-left: auto;
    }
    
    svg {
        margin-right: 5px;
        vertical-align: middle;
    }
`;

const StyleAvatar = styled(Avatar)` 
    position: relative;
    border: 3px solid ${({ theme }) => theme.token.colorBgContainer};
`;


export { StyleProfileCover, StyleAvatar, StyleProfileContent };