import React from 'react'
import clsx from 'clsx'

const Title = ({ children, clsName = '' }) => {
  return <div className={clsx('font-semibold mb-4', clsName)}>{children}</div>
}

export default Title
