import Icon from './Icon'

export default function Card({ title, description, image, className = '', children }) {
  return (
    <section className={className}>
      <div className="flex items-center justify-between">
        <Icon src={image}></Icon>
        {children}
      </div>
      <div className="mb-2 text-base font-semibold capitalize mt-7">{title}</div>
      <div>{description}</div>
    </section>
  )
}
