import PageComponent, { getPrismicProps } from '../components/PageComponent'

export default function Home(props) {
  return <PageComponent {...props} />
}

export async function getStaticProps(props) {
  props.params = {
    uid: 'home',
  }
  return getPrismicProps(props)
}
