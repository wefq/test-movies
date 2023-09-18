import type { FC } from 'react'

interface SelectProperties {
  label: string
  id: string
  value: string | number
  values: (string | number)[]
  setValue: React.Dispatch<React.SetStateAction<string | number>>
}

export const Select: FC<SelectProperties> = ({
  label,
  id,
  value,
  values,
  setValue,
}) => {
  const changeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex items-center'>
      <label
        htmlFor={`${id} from`}
        className='mr-2 text-sm font-medium text-black'
      >
        {label}:
      </label>
      <select
        id={`${id} from`}
        value={value}
        onChange={changeValue}
        className='text-black text-sm rounded-lg block w-full p-2.5 border border-gray'
      >
        <option className='font-mono' value=''></option>
        {values.sort().map((value, index) => (
          <option key={index} value={value} className='font-mono'>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
