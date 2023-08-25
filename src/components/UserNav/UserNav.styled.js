import styled from 'styled-components';

export const List = styled.div`
    // Common
    margin: 0;
    padding: 0;
    list-style: none;
    //
;`

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;

    color: rgba(52, 52, 52, 0.50);
    font-size: 14px;
    font-weight: 600;
    line-height: normal;

    svg {
        fill: inher;
        stroke: rgba(52, 52, 52, 0.50);
    }
`;