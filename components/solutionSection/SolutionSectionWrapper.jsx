import ProductBottomCard from "../productsSection/ProductBottomCard";
import CenterWrapper from "../shared/CenterWrapper";
import ContainerVertical from "../shared/ContainerVertical";
import SectionTitle from "../shared/SectionTitle";

export default function SolutionSectionWrapper({
    title,
    description,
    solutionData,
}) {
    return (
        <ContainerVertical>
            <CenterWrapper>
                <SectionTitle
                    title={title}
                    description={description}
                ></SectionTitle>

                <section className="grid grid-cols-2 gap-x-3 gap-y-5 lg:gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    {solutionData.map((item, index) => (
                        <ProductBottomCard
                            key={index}
                            {...item}
                        ></ProductBottomCard>
                    ))}
                </section>
            </CenterWrapper>
        </ContainerVertical>
    );
}
