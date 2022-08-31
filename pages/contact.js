import PageComponent, { getLayoutProps } from '../components/PageComponent'
import contactData from '../data/contact/contactData'

// const contactData =

export default function Contact(props) {
  return <PageComponent {...props} />
}

export async function getStaticProps() {
  const layout = await getLayoutProps()

  return {
    props: {
      type: 'contact',
      header: layout.header,
      footer: layout.footer,
      contactData: contactData,
    },
  }
}
