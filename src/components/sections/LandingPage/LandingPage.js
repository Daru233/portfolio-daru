import React from "react";
import Section from "../../common/Sections/Section";
import FlexContainer from "../../common/Flex-Container/FlexContainer";
import styled from "styled-components";

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
`;

const Name = styled.h1`
    margin: 0;
    color: #f5f5f5;
    font-size: 5em;
    font-family: "Roboto", sans-serif;
`;

const Greeting = styled.p`
    margin: 0;
    color: #f5f5f5;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    font-size: 2em;
`;

const LandingPage = () => {
    return (
        <Section landingPage>
            <div>
                <Greeting>Hi, I'm</Greeting>
                <Name>Michael Malto</Name>
            </div>
        </Section>
    );
};

export default LandingPage;
