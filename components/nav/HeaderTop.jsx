import Link from 'next/link'

export default function HeaderTop({ headerData = [], className = 'text-white bg-black' }) {
  return (
    <nav className={`${className} px-12 py-2.5 lg:flex justify-between flex-row items-center hidden`}>
      {headerData.map((item, index) => {
        return (
          <div key={index} className="flex space-x-5">
            {item.items.map((navItem, index) => {
              return (
                <Link href={navItem.href} key={index}>
                  <a className="text-xs font-light capitalize transition hover:opacity-80">{navItem.title}</a>
                </Link>
              )
            })}
          </div>
        )
      })}
    </nav>
  )
}
