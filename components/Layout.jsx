import { useState, createContext } from 'react'
import Footer from './Footer'
import Header from './Header'

export const GlobalContext = createContext()

export default function Layout({ children, menu = null, footerMenu = null }) {
  const [isDisplayMobileNav, setIsDisplayMobileNav] = useState(false)

  const handleDisplayMobileNav = (isShow) => {
    if (isShow) {
      setIsDisplayMobileNav(false)
      return
    }
    setIsDisplayMobileNav(!isDisplayMobileNav)
  }
  // header menu data
  const [menuRawData] = menu?.data?.slices || []
  const menuData = menuRawData?.items?.map((item) => {
    const { href, title, type } = item
    if (type === 'megamenu') {
      const { slices } = item.items.data
      const items = slices.map((slice) => {
        const {
          title,
          icon: { url: icon },
        } = slice.primary
        return {
          title,
          icon,
          items: slice.items
            .map((item) => {
              const href = item.href.link_type === 'Web' ? item.href.url : `/${item.documentLink.uid}`
              return { ...item, href }
            })
            .filter((item) => item.href !== '/undefined'),
        }
      })

      return { title, items, type }
    } else {
      return { title, href, type }
    }
  })

  if (!menuRawData) {
    return
  }

  const logo = menu.data.logo
  const buttonOne = menu.data.button1.data
  const buttonTwo = menu.data.button2.data
  const buttonArray = [buttonOne, buttonTwo].map((btn) => {
    const {
      buttonType,
      color,
      label,
      href: { url: link },
      type,
    } = btn
    return { link, buttonType, label, color, type }
  })

  // footer menu data

  const {
    facebookLink: { url: facebook },
    linkedinLink: { url: linkedin },
    twitterLink: { url: twitter },
    logo: { url: footerLogo },
  } = footerMenu.data

  // processing footer menu data

  const privacyLink = footerMenu.data.privacyPolicyLink?.uid || null
  const legalLink = footerMenu.data.legalLink?.uid || null
  const cookiePolicyLink = footerMenu.data.cookiePolicyLink?.uid || null

  const footerNavigationData = footerMenu.data?.slices?.map((item) => {
    const title = item.primary.title
    const items = item.items
      .map((ele) => {
        if (ele.href.url || ele.documentLink.uid) {
          return { ...ele, href: ele.href.url || (ele.documentLink.uid && `/${ele.documentLink.uid}`) }
        }
      })
      .filter((item) => item !== undefined)

    return { title, items }
  })

  // console.log(footerNavigationData)

  // footer social links
  const footerSocial = [
    { name: 'facebook', href: facebook },
    { name: 'twitter', href: twitter },
    { name: 'linkedin', href: linkedin },
  ]

  // footer important links
  const footerImportantLinks = [
    {
      title: 'privacy policy',
      href: `/${privacyLink}`,
    },
    {
      title: 'legal',
      href: `/${legalLink}`,
    },
    {
      title: 'cookie policy',
      href: `/${cookiePolicyLink}`,
    },
  ]
  return (
    <>
      <GlobalContext.Provider value={{ isDisplayMobileNav, handleDisplayMobileNav }}>
        <Header navData={menuData} logo={logo.url} headerButtons={buttonArray} />

        <main>{children}</main>
        <Footer
          footerNavData={footerNavigationData}
          footerSocialData={footerSocial}
          footerImportantLinks={footerImportantLinks}
        />
      </GlobalContext.Provider>
    </>
  )
}
