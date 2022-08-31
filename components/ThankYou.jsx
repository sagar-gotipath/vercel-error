import CenterWrapper from './shared/CenterWrapper'
import ContainerVertical from './shared/ContainerVertical'

export default function ThnakYou({ title, description, backgroundColor, coverImage = '' }) {
  return (
    <div
      className="grid py-32 place-items-center"
      style={{ backgroundColor: backgroundColor, backgroundImage: 'url(coverImage)' }}
    >
      <CenterWrapper>
        <article className="mb-4 text-center text-white">{title}</article>
        <article className="text-center text-white">{description}</article>
      </CenterWrapper>
    </div>
  )
}
