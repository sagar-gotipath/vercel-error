import Title from "./Title";

export default function SectionTitle({ title = "", description="" }) {
    return (
        <>
            <Title clsName="text-center ">{title}</Title>
            <div className="mb-10 text-base text-center">{description}</div>
        </>
    );
}
