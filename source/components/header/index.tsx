import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='bg-gray-dark mb-10'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <div>
          <Link href='/'>
            <Image
              src='/kinovtopku.svg'
              alt='app logo'
              className=''
              width={70}
              height={24}
              priority
            />
          </Link>
        </div>

        <div className='text-white uppercase '>«Киновтопку»</div>
      </div>
    </header>
  )
}
