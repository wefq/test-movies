import type { FC, ReactNode } from 'react'

interface DescriptionFieldProperties {
  name: string
  children: ReactNode
}

export const DescriptionField: FC<DescriptionFieldProperties> = ({
  name,
  children,
}) => {
  return (
    <div>
      <span className='font-bold'>{name}: </span>
      <span>{children}</span>
    </div>
  )
}
