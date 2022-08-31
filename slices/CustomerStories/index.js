import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import StoryWrapper from "../../components/customerStoriesSection/StoryWrapper";

const CustomerStories = ({ slice }) => {
    const title = <PrismicRichText field={slice.primary.title} />;
    const description = <PrismicRichText field={slice.primary.description} />;
    const storyData = slice.items.map((item) => {
        const title = <PrismicRichText field={item.title} />;
        const description = item.description;
        // const href = <PrismicLink field={item.storyLink}>My Link</PrismicLink>;
        const href = item.storyLink.url;
        const isFeatured = item.isFeatured;
        const image = item.coverImage.url || "";
        const logo = item.logo.url || "";
        return { title, description, href, isFeatured, image, logo };
    });

    return (
        <>
            <StoryWrapper
                storyData={storyData}
                title={title}
                description={description}
            />
        </>
    );
};

export default CustomerStories;
