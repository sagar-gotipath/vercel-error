import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import InfastructureWrapper from "../../components/globalInfastructure/InfastructureSection";

const Infra = ({ slice }) => {
    const title = <PrismicRichText field={slice.primary.title} />;
    const desciprtion = <PrismicRichText field={slice.primary.description} />;

    const globalNetworkLink = slice.primary.globalLink.url;

    const locationItem = slice.items;

    return (
        <InfastructureWrapper
            title={title}
            description={desciprtion}
            globalNetworkLink={globalNetworkLink}
            locationItems={locationItem}
        />
    );
};
export default Infra;
