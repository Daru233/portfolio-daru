import React from "react";
import AnimationContainer from "../../common/Sections/Animation-Container";
import { CenterDivParent } from "../../common/Sections/Components";
import Section from "../../common/Sections/Section";
import { Square } from "../LandingPage/Components";
// import { Heading } from "./Components";

const AboutPage = () => {
    return (
        <Section>
            {/* <Heading>About Page</Heading> */}
            <CenterDivParent>
                <AnimationContainer></AnimationContainer>
            </CenterDivParent>
        </Section>
    );
};

export default AboutPage;
