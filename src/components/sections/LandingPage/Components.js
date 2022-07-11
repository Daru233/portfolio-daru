import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
`;

export const Name = styled(motion.h1)`
    margin: 0;
    color: #f5f5f5;
    font-size: 5em;
    font-family: "Roboto", sans-serif;
`;

export const Greeting = styled(motion.p)`
    color: #f5f5f5;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    font-size: 2em;
`;

export const Info = styled(motion.p)`
    color: #f5f5f5;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
`;

export const InfoCurtain = styled(motion.div)`
    /* background-color: #202020; */
    background-color: aqua;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
`;

export const Square = styled(motion.div)`
    height: 8vw;
    width: 8vw;
    background-color: aqua;
    border-radius: 2vh;
`;
