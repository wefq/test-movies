import type { FC, ReactNode } from 'react'

interface FormProperties {
  children: ReactNode
  onSubmit: (event: React.FormEvent) => void
}

export const Form: FC<FormProperties> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='border rounded-md border-gray bg-gray-light p-4'>
      <div className='flex flex-col items-start gap-4 mb-4'>{children}</div>

      <input
        type='submit'
        value='обновить'
        className='text-white bg-blue hover:bg-gray font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer'
      />
    </form>
  )
}
