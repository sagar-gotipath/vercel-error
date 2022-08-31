import Link from 'next/link'

export default function FeatureCard({ featureName, featureTitle, featureHref = '#' }) {
  return (
    <article className="px-12 min:h-[170px] duration-150 transition w-full group text-center">
      <Link href={featureHref}>
        <a className="cursor-pointer">
          <span className="block mb-2 text-xs font-semibold uppercase transition text-neutral-400 ">{featureName}</span>
          <h4 className="text-base font-semibold !leading-6 capitalize ">{featureTitle}</h4>
        </a>
      </Link>
    </article>
  )
}
