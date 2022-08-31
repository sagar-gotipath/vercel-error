import { useContext, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { MobileLink } from './MegaMenuTransition'
import { GlobalContext } from '../Layout'

export default function MobileDropdown({ title = '', items = [], icon, className }) {
  const isCarrot = title !== '' && items.length > 0

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <div className="flex items-center">
            <Menu.Button className="flex items-center justify-between w-full py-3 capitalize">
              <span className="w-full font-medium text-left">{title}</span>

              {items.length > 0 && (
                <span className="relative z-0 lg:pr-0">
                  {open ? <FiChevronUp className="w-3 h-auto" /> : <FiChevronDown className="w-3 h-auto" />}
                </span>
              )}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="pl-4 capitalize border-l-[1px] border-woodsmoke-500">
              <>
                {items.map((item, index) => {
                  if (item.hasOwnProperty('items')) {
                    return (
                      <div key={index}>
                        <MobileDropdown title={item.title} items={item.items} />
                      </div>
                    )
                  } else {
                    if (item.href) {
                      return (
                        <Menu.Item key={index}>
                          <MobileLink
                            href={item.href}
                            className="block py-3 capitalize transition duration-150 hover:opacity-80 lg:!text-sm font-medium"
                          >
                            {item.title}
                          </MobileLink>
                        </Menu.Item>
                      )
                    }
                  }
                })}
              </>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

// export const DeskTopLink = forwardRef((props, ref) => {
//   let { href, children, ...rest } = props
//   return (
//     <>
//       {href && (
//         <Link href={href}>
//           <a ref={ref} {...rest}>
//             {children}
//           </a>
//         </Link>
//       )}
//     </>
//   )
// })

// export const MobileLink = forwardRef((props, ref) => {
//   const { handleDisplayMobileNav } = useContext(GlobalContext)
//   let { href, children, ...rest } = props
//   return (
//     <>
//       {href && (
//         <Link href={href}>
//           <a ref={ref} {...rest} onClick={handleDisplayMobileNav}>
//             {children}
//           </a>
//         </Link>
//       )}
//     </>
//   )
// })

// DeskTopLink.displayName = 'DeskTopLink'
// MobileLink.displayName = 'MobileLink'
