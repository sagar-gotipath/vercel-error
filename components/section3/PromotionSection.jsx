import clsx from 'clsx'
import ButtonUnderLined from '../shared/ButtonUnderLined'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'

export default function PromotionSection({
  title,
  description,
  button = {},
  isReversed,
  bgColor,
  image,
  isFlipped,
  altText = 'Image',
}) {
  return (
    <ContainerVertical bgColor={bgColor}>
      <CenterWrapper>
        <section
          className={clsx(
            'flex lg:space-x-12 space-y-6 lg:items-center',
            isReversed === true ? 'flex-col-reverse space-y-reverse' : 'flex-col',
            isFlipped === true ? 'lg:flex-row-reverse lg:space-x-reverse' : 'lg:flex-row'
          )}
        >
          <div className="flex-1 my-5 lg:my-0">
            <article>
              <div className="mb-4 font-semibold">{title}</div>
              <div>{description}</div>
              {button.btnLink !== null && button.btnLink && (
                <div className="mt-8">
                  <ButtonUnderLined link={button?.btnLink || ''}>{button.btnText}</ButtonUnderLined>
                </div>
              )}
            </article>
          </div>
          <div className="flex-1">
            <img src={image} alt={altText} className="w-full rounded-md" />
          </div>
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}
