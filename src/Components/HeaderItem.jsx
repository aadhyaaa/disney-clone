import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] hover:underline underline-offset-8 cursor-pointer font-semibold'>
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
