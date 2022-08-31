import { forwardRef, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { GlobalContext } from '../Layout'

export default function MegaMenuTransitionCollapse({ title, menuItems = [] }) {
  return (
    <Menu as="div" className="flex items-center">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-between !w-full first:w-auto font-medium">
            {title}
            <span className="pr-2 lg:pl-1 lg:pr-0 lg:pt-0.5">
              {open ? <FiChevronUp className="w-3 h-auto" /> : <FiChevronDown className="w-3 h-auto" />}
            </span>
          </Menu.Button>

          <div className="absolute lg:top-full lg:inset-x-0 2xl:inset-x-auto">
            <Transition
              show={open}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div className="lg:absolute right-0 mt-2 divide-y inset-x-0 2xl:-left-7 bg-white lg:min-w-[960px] w-full 2xl:absolute top-full px-4 py-8 rounded-sm lg:mt-[3px] lg:border shadow-md">
                <Menu.Items>
                  <div className="grid flex-1 grid-cols-2 gap-6 px-4 lg:grid-cols-3 xl:grid-cols-4">
                    {menuItems.map((menu, index) => {
                      return (
                        <div key={index} className="">
                          <p className="flex items-center gap-2 mb-4 font-semibold">
                            <span className="text-xs uppercase text-neutral-400">{menu.title} </span>
                          </p>
                          <ul className="space-y-2">
                            {menu.items.map((item, index) => {
                              if (item.href) {
                                return (
                                  <li key={index}>
                                    <Menu.Item>
                                      <DeskTopLink
                                        href={item.href}
                                        className="font-medium capitalize transition opacity-100 hover:opacity-80"
                                      >
                                        {item.title}
                                      </DeskTopLink>
                                    </Menu.Item>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </Menu.Items>
              </div>
            </Transition>
          </div>
        </>
      )}
    </Menu>
  )
}

export const DeskTopLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <>
      {href && (
        <Link href={href}>
          <a ref={ref} {...rest}>
            {children}
          </a>
        </Link>
      )}
    </>
  )
})

export const MobileLink = forwardRef((props, ref) => {
  const { handleDisplayMobileNav } = useContext(GlobalContext)
  let { href, children, ...rest } = props
  return (
    <>
      {href && (
        <Link href={href}>
          <a ref={ref} {...rest} onClick={handleDisplayMobileNav}>
            {children}
          </a>
        </Link>
      )}
    </>
  )
})

DeskTopLink.displayName = 'DeskTopLink'
MobileLink.displayName = 'MobileLink'
