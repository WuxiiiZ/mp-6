import styled from 'styled-components';

const StyledTitle = styled.div`
    text-align: center;
    margin: 3vh 0;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    background: white;
`

export default function Title() {
    return (
        <StyledTitle>CS701 mp-6 OAuth</StyledTitle>
    )
}