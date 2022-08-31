export default function HeroSection({ children, imageUrl }) {
  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-gradient-to-tr from-black/70 to-black/20 py-16 min-h-fit md:min-h-[400px] flex items-center">
        {children}
      </div>
    </section>
  )
}
