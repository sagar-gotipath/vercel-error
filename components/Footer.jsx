import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import DropdownMenu from './nav/DropdownMenu'
import Logo from './nav/Logo'
import MobileDropdown from './nav/MobileDropdown'
import CenterWrapper from './shared/CenterWrapper'
import ContainerVertical from './shared/ContainerVertical'

export default function Footer({ footerNavData = [], footerSocialData = [], footerImportantLinks = [] }) {
  return (
    <section className="pt-8 pb-8 text-white bg-black lg:pt-14">
      <CenterWrapper>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-1">
          {footerNavData.map((footer, index) => {
            return (
              <div key={index}>
                <div className="hidden lg:block">
                  {footer.title && <h3 className="mb-4 text-xs uppercase text-neutral-400">{footer.title}</h3>}

                  <section className="flex flex-col space-y-3">
                    {footer.items.map((item, index) => {
                      if (item.href) {
                        return (
                          <Link key={index} href={item.href}>
                            <a className="text-sm font-light text-white capitalize transition hover:opacity-80">
                              {item.title}
                            </a>
                          </Link>
                        )
                      }
                    })}
                  </section>
                </div>
                <div className="lg:hidden">
                  <MobileDropdown title={footer.title} items={footer.items} />
                </div>
              </div>
            )
          })}
        </section>
      </CenterWrapper>
      <div className="border-t-[1px] border-zinc-900 mt-7 mb-7"></div>
      <CenterWrapper>
        <section className="flex flex-col space-y-5 lg:justify-between lg:items-center lg:flex-row">
          <div>
            <Logo src="/images/gotiPath_logo_white.png" className="w-auto h-7 mb-2.5" alt="website logo" />

            <p className="text-xs text-white capitalize lg:sm">
              copyright &copy; 2022 nusratech pte ltd. all rights reserved.
            </p>
          </div>
          <div>
            <section className="flex mb-2.5 space-x-3 lg:justify-end">
              {footerSocialData.map((item, index) => {
                if (item.name === 'facebook' && item.href) {
                  return (
                    <Link href={item.href} key={index}>
                      <a className="grid w-5 h-5 transition rounded-full bg-neutral-500 place-items-center hover:bg-neutral-300">
                        <FaFacebookF className="w-2.5 h-2.5 text-zinc-900" />
                      </a>
                    </Link>
                  )
                } else if (item.name === 'twitter' && item.href) {
                  return (
                    <Link href={item.href} key={index}>
                      <a className="grid w-5 h-5 transition rounded-full bg-neutral-500 place-items-center hover:bg-neutral-300">
                        <FaTwitter className="w-2.5 h-2.5 text-zinc-900" />
                      </a>
                    </Link>
                  )
                } else if (item.name === 'linkedin' && item.href) {
                  return (
                    <Link href={item.href} key={index}>
                      <a className="grid w-5 h-5 transition rounded-full bg-neutral-500 place-items-center hover:bg-neutral-300">
                        <FaLinkedinIn className="w-2.5 h-2.5 text-zinc-900" />
                      </a>
                    </Link>
                  )
                }
              })}
            </section>
            <section className="flex text-gray-300 divide-x-[1px] divide-zinc-800 ">
              {footerImportantLinks.map((item, index) => {
                if (item.href) {
                  return (
                    <Link href={item.href} key={index}>
                      <a className="block px-2 text-xs font-light text-white capitalize transition last:pr-0 lg:text-sm hover:opacity-80">
                        {item.title}
                      </a>
                    </Link>
                  )
                }
              })}
              {/* <Link href="#">
                <a className="block pr-3 text-xs lg:text-sm font-light capitalize border-r-[1px] border-zinc-800 hover:opacity-80 transition text-white">
                  privacy policy
                </a>
              </Link>
              <Link href="#">
                <a className="block px-3 text-xs lg:text-sm font-light capitalize border-r-[1px] border-zinc-800 hover:opacity-80 transition text-white">
                  legal
                </a>
              </Link>
              <Link href="#">
                <a className="block pl-3 text-xs font-light text-white capitalize transition lg:text-sm hover:opacity-80">
                  cookie policy
                </a>
              </Link> */}
            </section>
          </div>
        </section>
      </CenterWrapper>
    </section>
  )
}
