import ContactSales from '../components/contact/ContactSales'
import PageComponent, { getLayoutProps } from '../components/PageComponent'

export default function ContactSalesWrapper(props) {
  return <PageComponent {...props} />
}

export async function getStaticProps(props) {
  const layout = await getLayoutProps()

  return {
    props: {
      header: layout.header,
      footer: layout.footer,
      type: 'contact-sales',
    },
  }
}
