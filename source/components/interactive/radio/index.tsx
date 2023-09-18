import type { FC } from 'react'

interface RadioInput {
  id: string
  value: string
  label: string
}

interface RadioInputsProperties {
  fields: RadioInput[]
  name: string
  selectValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioInputs: FC<RadioInputsProperties> = ({
  fields,
  name,
  selectValue,
}) => {
  return (
    <div >
      {fields.map((field) => (
        <div key={field.id} className='flex items-center'>
          <input
            type='radio'
            name={name}
            value={field.value}
            id={field.id}
            onChange={(event) => selectValue(event)}
            className='w-4 h-4 text-bluebg-gray border-gray focus:ring-blue'
          />
          <label htmlFor={field.id} className='ml-2 text-sm font-medium text-black'>{field.label}</label>
        </div>
      ))}
    </div>
  )
}
