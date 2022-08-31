import React from "react";
import InformationWrapper from "../../components/informationSection/InformationWrapper";

const CompanyFeature = ({ slice }) => {
    const title = slice.primary.title;
    const features = slice.primary.featureLists[0].text.split(",");
    const coverImage = slice.primary.coverImage.url;
    const button1 = slice.primary.button1.data;
    const button2 = slice.primary.button2.data;

    return (
        <InformationWrapper
            title={title}
            features={features}
            image={coverImage}
            buttonGroup={[button1, button2]}
        />
    );
};

export default CompanyFeature;
