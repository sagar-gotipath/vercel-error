import { Dialog, Transition } from '@headlessui/react'
import { FiXCircle } from 'react-icons/fi'
import { Fragment, useState, useRef } from 'react'
import Loader from '../shared/Loader'

export default function OverviewModal({ children, triggerElement }) {
  // modal component state and functions
  let [isOpen, setIsOpen] = useState(false)

  // handler function for modal
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {triggerElement}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl text-left align-middle transition-all transform rounded shadow-xl">
                  <FiXCircle
                    className="w-10 h-10 pb-1.5 ml-auto md:-mr-8 mr-0 text-white cursor-pointer"
                    onClick={onClose}
                  />
                  <Loader />
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
