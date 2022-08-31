import Link from 'next/link'
export default function Logo(props) {
  return (
    <Link href="/">
      <a>
        <img {...props} />
      </a>
    </Link>
  )
}
