import clsx from 'clsx'

export default function SearchForm({ className = '', onChange = () => {} }) {
  return (
    <form className={clsx('relative w-full ', className)}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Input className="rounded-md bg-zinc-100" onChange={onChange} />
    </form>
  )
}

function Input({ className, onChange }) {
  return (
    <input
      type="search"
      className={clsx(
        ' p-2.5 pl-10 pr-auto text-sm w-full text-gray-900 border border-zinc-300 focus-within:outline-0 ',
        className
      )}
      placeholder="Search tutorials"
      onChange={onChange}
    />
  )
}
