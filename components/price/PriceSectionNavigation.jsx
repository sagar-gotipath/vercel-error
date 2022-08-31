import clsx from 'clsx'

export default PriceSectionNavigation

function PriceSectionNavigation({ navItems, activeSectionId, setActiveSectionId }) {
  return (
    <>
      {navItems.map((item, index) => {
        return (
          <NavigationItem
            item={item}
            isActive={activeSectionId == item.id || (activeSectionId === null && index === 0)}
            onClick={() => setActiveSectionId(item.id)}
            key={index}
          />
        )
      })}
    </>
  )
}

function NavigationItem({ item, isActive, onClick }) {
  return (
    <a
      onClick={() => onClick()}
      href={'#' + item.id}
      className="flex items-center w-full px-5 space-x-4 group py-7 lg:max-w-xs"
    >
      <span className="relative w-10 h-8">
        <img
          src={item.images.inactive}
          className={clsx('absolute inset-0 group-focus:hidden group-hover:hidden ', isActive && 'hidden ')}
        />
        <img
          src={item.images.active}
          className={clsx('absolute inset-0 hidden group-focus:block group-hover:block ', isActive && '!block ')}
        />
      </span>
      <span
        className={clsx(
          'capitalize group-hover:text-blue-700 group-focus:text-blue-700 font-semibold  active:text-blue-700 transition-colors duration-100',
          isActive ? 'text-blue-700' : 'text-neutral-700'
        )}
      >
        {item.title}
      </span>
    </a>
  )
}
