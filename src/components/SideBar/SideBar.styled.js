import styled from 'styled-components';

export const Container = styled.div`
    // Common
    box-sizing: border-box;
    // 

    width: 225px;
    padding: 20px 24px;
    background-color: lightgray;

    stroke: #343434;

    @media screen and (min-width: 768px) {
        width: 289px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleSideBar = styled.h2`
    color: rgba(52, 52, 52, 0.50);
    font-size: 12px;
    font-weight: 600;
    line-height: normal; 
`;