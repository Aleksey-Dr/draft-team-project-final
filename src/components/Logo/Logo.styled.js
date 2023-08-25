import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
    width: 136px;
    height: 35px;
    margin-right: 25px;
`;
export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;

    color: #3E85F3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Coolvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: calc(22 / 16);

    text-decoration: none;

    span {
        font-style: italic;
    }

    img {
        margin-right: 6px;
    }
`;