import clsx from 'clsx'
import Link from 'next/link'

export default function LinkButton({ children, link, role = 'link', buttonType = 'primary', className = '', color }) {
  return (
    <>
      {link && (
        <Link href={link}>
          <a
            className={clsx(
              'capitalize text-sm py-3 lg:py-2 rounded-[4px] text-white',
              buttonType === 'primary'
                ? 'bg-mariner-500 border-mariner-500 border-[1px] px-4 md:px-8 text-center block lg:grid lg:place-content-center border-transparent my-3 md:my-0'
                : 'bg-transparent underline md:no-underline md:px-8 inline-block md:border-[1px] border-0 pr-5',
              color === 'dark' ? 'text-zinc-900' : 'text-white'
            )}
            role={role}
          >
            <span className={clsx('flex items-center justify-center w-full', className)}>{children}</span>
          </a>
        </Link>
      )}
    </>
  )
}
