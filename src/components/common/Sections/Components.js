import styled from "styled-components";
import { motion } from "framer-motion";

export const InViewContainer = styled(motion.div)`
    margin-top: 25vh;
    height: 12vw;
    width: 12vw;
    background-color: red;
    border-style: solid;
    border-width: 1vh;
    border-color: red;
    border-radius: 2vh;
`;

export const CenterDivParent = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const Square = styled(motion.div)`
    height: 8vw;
    width: 8vw;
    background-color: aqua;
    border-radius: 2vh;
`;
