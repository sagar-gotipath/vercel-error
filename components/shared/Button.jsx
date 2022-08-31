import clsx from 'clsx'

export default function Button({
  children,
  onClick = () => {},
  type = 'button',
  text = '',
  role = 'button',
  buttonType = 'primary',
  className = '',
  color,
}) {
  return (
    <button
      type={type}
      role={role}
      onClick={onClick}
      aria-label={text}
      className={clsx(
        'capitalize text-sm py-3 lg:py-2 rounded-[4px] text-white',
        `${
          buttonType === 'primary'
            ? 'bg-mariner-500 border-mariner-500 border-[1px] px-4 md:px-8 text-center block lg:grid lg:place-content-center border-transparent'
            : 'bg-transparent underline md:no-underline md:px-8 inline-block md:border-[1px] border-0 pr-5'
        }`,
        color === 'dark' ? 'text-zinc-900 border-zinc-900' : 'text-white',
        className
      )}
    >
      {children}
    </button>
  )
}
