import React from "react";
import AboutPage from "./components/sections/AboutPage/AboutPage";
import LandingPage from "./components/sections/LandingPage/LandingPage";

import Section from "./components/common/Sections/Section";
import AnimationContainer from "./components/common/Sections/Animation-Container";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 },
// };

// const Box = ({ num }) => {
//     const control = useAnimation();
//     const [ref, inView] = useInView();

//     useEffect(() => {
//         if (inView) {
//             control.start("visible");
//         } else {
//             control.start("hidden");
//         }
//     }, [control, inView]);

//     return (
//         <motion.div
//             className="box"
//             ref={ref}
//             variants={boxVariant}
//             initial="hidden"
//             animate={control}
//         >
//             <Square />
//         </motion.div>
//     );
// };

function App() {
    return (
        <div>
            <LandingPage />
            <AboutPage />
            <AnimationContainer />
            <AnimationContainer />
        </div>
    );
}

export default App;
