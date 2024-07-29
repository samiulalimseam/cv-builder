// @ts-nocheck
import { Box } from "@chakra-ui/react";
import { ReactChildren } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import Skills from "./Skills";

const Wrapper = ({ children , gap = 4 } : {children: ReactChildren, gap: number}) => {
    return (
        <Box marginBottom={gap} >
            {children}
        </Box>
    );
};

const RenderWidgets = ({ id , gap= 4, key, property, mutationProps} : {mutationProps: {setBoardItems : ()=> void, templateId : number}, key : string,id : string, gap: number}) => {
 

    switch (id) {
        case "personal-information":
            return (
                <Wrapper gap={gap}    >
                    <PersonalInfo mutationProps={mutationProps}  />
                </Wrapper>
            );
        case "education":
            return (
                <Wrapper gap={gap} >
                    <Education />
                </Wrapper>
            );
        case "experience":
            return (
                <Wrapper gap={gap} >
                    <Experience />
                </Wrapper>
            );
        case "skills":
            return (
                <Wrapper gap={gap} >
                    <Skills />
                </Wrapper>
            );
        case "about":
            return (
                <Wrapper gap={gap} >
                    <About />
                </Wrapper>
            );
        case "projects":
            return (
                <Wrapper gap={gap} >
                    <Projects />
                </Wrapper>
            );
        default:
            return (
                <Wrapper gap={gap} >
                    <div>
                        <h1>Unknown</h1>
                    </div>
                </Wrapper>
            );
    }
};

export default RenderWidgets;
