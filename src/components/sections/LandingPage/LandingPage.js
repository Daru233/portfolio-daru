import React, { useState, useEffect } from "react";
import Section from "../../common/Sections/Section";
import { Name, Greeting, Square } from "./Components";
import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";

const LandingPage = () => {
    const { scrollYProgress } = useViewportScroll();
    useEffect(() => {
        // hook into the onChange, store the current value as state.
    }, [scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes

    const background = useTransform(
        scrollYProgress,
        [0, 1, 2],
        ["#5526D9", "#EC13EA", "rgb(230, 255, 0)"]
    );

    const opacity = useTransform(scrollYProgress, [0, 1, 2], [1, 0.5, 0]);

    return (
        <Section landingPage>
            <div>
                <Greeting>Hi, I'm</Greeting>
                <Name>Michael Malto</Name>
                <Square style={{ background: background, opacity: opacity }} />
            </div>
        </Section>
    );
};

export default LandingPage;
