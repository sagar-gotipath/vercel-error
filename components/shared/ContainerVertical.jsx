import clsx from 'clsx'

export default function ContainerVertical({ children, className = '', bgColor = '' }) {
  const backgroundColor = bgColor === '' ? 'transparent' : bgColor
  return (
    <section
      className={clsx('py-10 md:py-14 lg:py-16', className)}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </section>
  )
}
