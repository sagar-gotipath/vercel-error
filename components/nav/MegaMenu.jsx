import { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import TransitionCollapse from '../TransitionCollapse'
import Link from 'next/link'

export default function MegaMenu({ title, children, menuItems }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover as="div" className="flex items-center">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center justify-between !w-full first:w-auto">
            {title}
            <span className="pr-2 lg:pl-1 lg:pr-0 lg:pt-0.5">
              {open ? <FiChevronUp className="w-3 h-auto" /> : <FiChevronDown className="w-3 h-auto" />}
            </span>
          </Popover.Button>
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
                <Popover.Panel>
                  <div className="grid flex-1 grid-cols-2 gap-6 px-4 lg:grid-cols-3 xl:grid-cols-4">
                    {menuItems.map((menu, index) => {
                      return (
                        <div key={index} className="">
                          <p className="flex items-center gap-2 mb-4 font-semibold">
                            <span className="text-xs uppercase text-neutral-400">{menu.title}</span>
                          </p>
                          <ul className="space-y-2">
                            {menu.items.map((item, index) => {
                              if (item.href) {
                                return (
                                  <li key={index}>
                                    <Popover.Button href={item.href}>
                                      <Link href={item.href}>
                                        <a className="capitalize transition opacity-100 hover:opacity-80">
                                          {item.title}
                                        </a>
                                      </Link>
                                    </Popover.Button>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </Popover.Panel>
              </div>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  )
}
