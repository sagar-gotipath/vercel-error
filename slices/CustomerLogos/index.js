import React from "react";
import ClientLogoImage from "../../components/section2/ClientLogoImage";

const CustomerLogos = ({ slice }) => {
    return <ClientLogoImage image={slice.primary.customerLogo.url} />;
};

export default CustomerLogos;
