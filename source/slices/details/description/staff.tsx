import type { FC, ReactNode } from 'react'

interface StaffProperties {
  name: string
  children: ReactNode
}

export const Staff: FC<StaffProperties> = ({ name, children }) => {
  return (
    <div>
      <span className='font-bold'>{name}: </span>
      <div className='flex flex-col mt-2'>{children}</div>
    </div>
  )
}
