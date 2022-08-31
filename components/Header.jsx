import { useState, useRef, useEffect, useContext } from 'react'
import { Transition } from '@headlessui/react'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import DropdownMenu from './nav/DropdownMenu.jsx'
import Logo from './nav/Logo.jsx'
import NormalMenu from './nav/NormalMenu.jsx'
import MobileDropdown from './nav/MobileDropdown.jsx'
import LinkButton from './shared/LinkButton.jsx'
import MegaMenuTransitionCollapse from './nav/MegaMenuTransition.jsx'
import { GlobalContext } from './Layout.jsx'
import SearchInput from './nav/SearchInput.jsx'

export default function Header({ logo, navData = [], headerButtons = [] }) {
  const { isDisplayMobileNav, handleDisplayMobileNav } = useContext(GlobalContext)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
  const navToggler = useRef(null)
  const navItems = useRef(null)
  const mobileNav = useRef(null)

  const headerContainerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        handleDisplayMobileNav('false')
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleHeaderBorder() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerContainerRef?.current?.classList.add('border-b')
        headerContainerRef?.current?.classList.add('border-neutral-200')
      } else {
        // headerContainerRef.current.classList.remove('border-b border-neutral-200')
        headerContainerRef?.current?.classList.remove('border-b')
        headerContainerRef?.current?.classList.remove('border-neutral-200')
      }
    }

    window.addEventListener('scroll', handleHeaderBorder)

    return () => window.removeEventListener('scroll', handleHeaderBorder)
  }, [])

  return (
    <>
      {/* <HeaderTop headerData={promotionNavData} /> */}
      <header
        className="sticky top-0 z-50 w-full px-0 py-1 leading-none transition duration-300 bg-white"
        ref={headerContainerRef}
      >
        {/* Desktop Navigation */}
        <nav className="relative hidden h-16 px-12 space-x-10 text-sm lg:flex lg:items-center lg:justify-between lg:flex-row">
          {/* logo */}
          <div className="">
            <Logo src={logo} alt="gotiPath logo" />
          </div>
          {/*  Main Nav  */}
          <div className="flex-1">
            <div className="flex flex-col lg:space-x-5 lg:justify-end lg:items-center lg:flex-row">
              {/*  Left Items  */}
              <div className="flex items-center flex-1 space-x-4">
                <div className="flex space-x-8 text-zinc-900">
                  {navData.map((navItem, index) => {
                    if (navItem.type === 'megamenu') {
                      return (
                        // <MegaMenu title={navItem.title} key={index} menuItems={navItem.items}></MegaMenu>

                        <MegaMenuTransitionCollapse
                          title={navItem.title}
                          key={index}
                          menuItems={navItem.items}
                        ></MegaMenuTransitionCollapse>
                      )
                    } else if (navItem.type === 'dropdown') {
                      return <DropdownMenu key={index} title={navItem.type} items={navItem.items} />
                    } else {
                      return <NormalMenu title={navItem.title} href={navItem.href} key={index} />
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Right Items */}
          <div className="flex items-center space-x-8">
            {headerButtons.map((item, index) => {
              if (item.type === 'link' && item.buttonType === 'primary') {
                return (
                  <LinkButton key={index} {...item}>
                    {item.label}
                  </LinkButton>
                )
              } else {
                return <NormalMenu title={item.label} href={item.link} key={index} />
              }
            })}
          </div>
        </nav>
        {/*  Mobile Navigation */}
        <nav className="relative max-h-screen px-4 lg:hidden">
          <div className="flex items-center justify-between px-0 py-1.5 min-h-14">
            <div className="flex items-center h-full">
              <Logo src="/images/gotiPath_logo.png" alt="website logo" />
            </div>
            <div className="flex">
              <SearchInput triggerComponent={<FiSearch className="w-5 h-5 " />} />
              <span
                ref={navToggler}
                className="inline-block px-2 py-2 cursor-pointer"
                onClick={() => {
                  handleDisplayMobileNav()
                }}
              >
                {isDisplayMobileNav && <FiX className="w-6 h-6" />}
                {!isDisplayMobileNav && <FiMenu className="w-6 h-6" />}
              </span>

              {/* transtion */}
              <Transition
                show={isDisplayMobileNav}
                as="div"
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                className="absolute left-0 z-50 w-full -mt-1 overflow-y-auto shadow-md bg-inherit top-full"
                ref={mobileNav}
              >
                <div ref={navItems} className="w-full pb-3 overflow-y-auto bg-white top-full">
                  <div className="px-4 py-3">
                    {navData.map((menuItem, index) => {
                      if (menuItem.type === 'megamenu' || menuItem.type === 'dropdown') {
                        return <MobileDropdown title={menuItem.title} items={menuItem.items} key={index} />
                      } else {
                        return <NormalMenu title={menuItem.title} href={menuItem.href} key={index} isMobile={true} />
                      }
                    })}
                    {/* buttons */}
                    <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0">
                      {headerButtons.map((item, index) => {
                        if (item.type === 'link' && item.buttonType === 'primary') {
                          return (
                            <LinkButton key={index} {...item}>
                              {item.label}
                            </LinkButton>
                          )
                        } else {
                          return <NormalMenu title={item.label} href={item.link} key={index} isMobile={true} />
                        }
                      })}
                    </div>
                  </div>
                </div>
              </Transition>

              {/* end transtion */}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
