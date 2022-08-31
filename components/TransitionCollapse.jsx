import { Popover, Transition } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
// import { usePopper } from "react-popper";

export default function TransitionCollapse({ children, trigger }) {
  // reference of tansition container

  return (
    <Popover className="w-full" as="div">
      {({ open, close }) => {
        return (
          <>
            <Popover.Button className="flex items-center justify-between !w-full focus:outline-none first:w-auto ">
              {trigger}

              <span className="pr-2 lg:pl-1 lg:pr-0 lg:pt-0.5">
                {open ? <FiChevronUp className="w-3 h-auto" /> : <FiChevronDown className="w-3 h-auto" />}
              </span>
            </Popover.Button>
            <div className="lg:absolute lg:top-full lg:inset-x-0 2xl:inset-x-auto">
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="lg:mt-0.5">{children}</Popover.Panel>
              </Transition>
            </div>
          </>
        )
      }}
    </Popover>
  )
}
