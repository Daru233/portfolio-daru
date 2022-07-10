import styled, { css } from "styled-components";

const FlexContainer = styled.div`
    ${(props) =>
        props.secondary &&
        css`
            background-color: grey;
        `}
`;

export default FlexContainer;
