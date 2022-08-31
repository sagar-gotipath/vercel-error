import FeatureCard from './FeatureCard'

export default function SectionTwoWrapper({ cardData }) {
  return (
    <section className="hidden w-full bg-gray-100 lg:block">
      <div className="flex py-8 divide-x-2 divide-gray-200 xl:hidden ">
        {cardData.map((item, index) => {
          if (index < 4) {
            return <FeatureCard key={index} {...item}></FeatureCard>
          }
        })}
      </div>

      <div className="hidden py-8 bg-gray-100 divide-x-2 divide-gray-200 xl:flex ">
        {cardData.map((item, index) => {
          return <FeatureCard key={index} {...item}></FeatureCard>
        })}
      </div>
    </section>
  )
}
