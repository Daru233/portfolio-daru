import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
    margin: 0;
    min-height: 100vh;
    background-color: #202020;

    ${(props) =>
        props.landingPage &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
        `}
`;

export default Section;
