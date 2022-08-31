import clsx from 'clsx'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
export default function ButtonUnderLined({
  children,
  onClick = () => {},
  type = 'button',
  label = 'link',
  role = 'button',
  link = '#',
  className,
}) {
  return (
    <Link href={link}>
      <a className="text-base capitalize text-zinc-900 group" type={type} role={role} aria-label={label}>
        <span className={clsx('flex items-center font-semibold', className)}>
          {children} <FiChevronRight className="mt-0.5 ml-0.5 stroke-[3] transition group-hover:translate-x-1" />
        </span>
      </a>
    </Link>
  )
}
