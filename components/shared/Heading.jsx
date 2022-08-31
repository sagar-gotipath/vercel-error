import clsx from 'clsx'

export const Heading = ({ as: Comp = 'h1', size = 'xl', children, className = '' }) => {
  return (
    <Comp
      className={clsx(
        'leading-normal tracking-normal',
        size === 'xl' && 'text-4xl',
        size === 'lg' && 'text-2xl lg:!text-4xl',
        size === 'md' && 'text-xl lg:!text-2xl',
        size === 'sm' && 'text-lg font-medium my-2.5',
        size === 'xs' && 'text-base font-bold',
        size === 'xxs' && 'text-2xl font-semibold',
        className
      )}
    >
      {children}
    </Comp>
  )
}
