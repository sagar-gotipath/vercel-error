import clsx from 'clsx'
import Image from 'next/image'
export default function Icon({ src, className }) {
  return <>{src && <img src={src} alt="icon" className={clsx('w-auto h-8', className)} />}</>
}
