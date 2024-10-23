import Image from 'next/image'
import React from 'react'

type Props = {
    size: number;
}

const logotipo = ({size}:Props) => {
  return (
    <Image
                src={'/images/logotipo.png'}
                alt="Unidas"
                width={size}
                height={size}
                quality={100}
                className="items-center"
            />
  )
}

export default logotipo