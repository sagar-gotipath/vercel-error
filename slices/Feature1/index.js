import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Feature1Wrapper from "../../components/featureSection/Feature1Wrapper";
import FeatureTopSection from "../../components/featureSection/Feature1Wrapper";

const Feature1 = ({ slice }) => {
    const title = <PrismicRichText field={slice.primary.title} />;
    const description = <PrismicRichText field={slice.primary.description} />;

    const featureData = slice.items.map((item) => {
        const title = <PrismicRichText field={item.title} />;
        const subTitle = <PrismicRichText field={item.description} />;
        const image = item.image.url;
        return { title, subTitle, image };
    });

    return (
        // <h1>feature 1</h1>
        <Feature1Wrapper
            title={title}
            description={description}
            featureData={featureData}
        />
    );
};

export default Feature1;
