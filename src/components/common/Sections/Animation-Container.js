import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Square } from "../../sections/LandingPage/Components";
import { CenterDivParent, InViewContainer } from "./Components";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
};

const AnimationContainer = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <InViewContainer
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <Square />
        </InViewContainer>
    );
};

export default AnimationContainer;
