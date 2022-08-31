import clsx from 'clsx'

export default function HeroSlide({ children, imageUrl, className, isOverlay }) {
  return (
    <>
      <section
        style={{
          backgroundImage: `${
            isOverlay === true
              ? `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,.2)), url(${imageUrl})`
              : `url(${imageUrl})`
          }`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '80%',
        }}
        className="hidden lg:block"
      >
        <div className={clsx('flex flex-col items-stretch justify-center text-white', className)}>{children}</div>
      </section>

      <section className="bg-gradient-to-tl to-slate-900 from-blue-900 lg:hidden">
        <div className="flex flex-col items-stretch justify-center text-white min-h-[370px] py-16">{children}</div>
      </section>
    </>
  )
}
