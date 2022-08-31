import Link from 'next/link'
export default function MobileDropdownItem({ title = '', href }) {
  return (
    <>
      {href && (
        <Link href={href}>
          <a className="block py-3 capitalize font-medium transition duration-150 hover:opacity-80 lg:!text-sm">
            {title}
          </a>
        </Link>
      )}
    </>
  )
}
