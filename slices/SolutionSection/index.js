import React from "react";
import { PrismicRichText } from "@prismicio/react";
import SolutionSectionWrapper from "../../components/solutionSection/SolutionSectionWrapper";

const SolutionSection = ({ slice }) => {
    
    const title = <PrismicRichText field={slice.primary.title} />;
    const description = <PrismicRichText field={slice.primary.description} />;
    const solutionsData = slice.items.map((item) => {        
        const title = <PrismicRichText field={item.title} />;
        const description = <PrismicRichText field={item.description} />;
        if (item.coverImage.url){
            const coverImage = {url : item.coverImage.url, width: item.coverImage.dimensions.width, height: item.coverImage.dimensions.height}
            return { title, description, coverImage };
        }
        return {title, description, coverImage: {}} 
        
    });

    

    return (      
        <SolutionSectionWrapper
            title={title}
            description={description}
            solutionData={solutionsData}
        />   
    );
};

export default SolutionSection;
