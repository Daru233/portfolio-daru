import React, { useState, useEffect } from "react";
import Section from "../../common/Sections/Section";
import { Name, Greeting, Square, Info } from "./Components";
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
                <Greeting
                    initial={{ y: 20 }}
                    animate={{
                        opacity: [0, 0.2, 1],
                        y: 0,
                    }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        stiffness: 250,
                        delay: 0.2,
                    }}
                >
                    Hi, I'm
                </Greeting>
                <Name
                    initial={{ y: 20 }}
                    animate={{
                        opacity: [0, 0.2, 0.4, 1],
                        y: 0,
                    }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        stiffness: 250,
                        delay: 0.4,
                    }}
                >
                    Michael Malto
                </Name>

                <Info
                    initial={{ y: 20 }}
                    animate={{
                        opacity: [0, 0.2, 0.4, 1],
                        y: 0,
                    }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        stiffness: 250,
                        delay: 0.6,
                    }}
                >
                    I love to learn!
                </Info>
            </div>
        </Section>
    );
};

export default LandingPage;
