import CenterWrapper from '../shared/CenterWrapper'
import LinkButton from '../shared/LinkButton'

export default function HeroSlideContent({ title, description, buttons = [] }) {
  return (
    <CenterWrapper>
      <div className="mb-3 font-semibold text-white drop-shadow-2xl">{title}</div>
      <div className="w-full mb-6 text-white md:w-3/6 drop-shadow-2xl">{description}</div>
      <div className="md:flex md:space-x-6">
        {buttons
          .filter((item) => item.href !== undefined)
          .map((item, index) => {
            return (
              <LinkButton link={item.href} buttonType={item.category || item.buttonType} key={index}>
                {item.text || item.label}
              </LinkButton>
            )
          })}
      </div>
    </CenterWrapper>
  )
}
