import SearchInput from '../nav/SearchInput'
import SearchForm from '../shared/SearchForm'

export default function BlogsHeroSection({ title = '', subTitle = '', bannerTitle = false }) {
  return (
    <section className="py-10 bg-zinc-100">
      <div className="px-4 mx-auto lg:w-2/4">
        <article className="flex flex-col items-center">
          {bannerTitle ? (
            <h1 className="text-4xl font-semibold capitalize mb-2.5">{title}</h1>
          ) : (
            <h1 className="text-4xl font-semibold capitalize mb-2.5">{title}</h1>
          )}

          <p className="mb-2.5 text-center">{subTitle}</p>
          <div className="hidden lg:block">
            <SearchInput triggerComponent={<SearchForm className="" />} className="max-w-xl mx-auto" />
          </div>
        </article>
      </div>
    </section>
  )
}
