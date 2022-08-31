import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ClientLogoImage({ image }) {
  const logoContainer = useRef(null)

  //after every 30 sec using useEffect incrasing backgorund position of customer logos which giving us a infinite sliding effect

  useEffect(() => {
    logoContainer.current.style.backgroundPosition = `100% 0px`

    const interval = setInterval(() => {
      const position = parseInt(logoContainer.current.style.backgroundPosition.split(' ')[0])
      let newPostion = !position ? 0 : position
      logoContainer.current.style.backgroundPosition = `${newPostion + 100}% 0px`
    }, 50000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 ">
      <div className="customers-logos" style={{ backgroundImage: `url(${image})` }} ref={logoContainer}></div>
      {/* <img src={image} alt="customer logo" width={1760} height={50} /> */}
    </section>
  )
}

// animate-slideToRight
