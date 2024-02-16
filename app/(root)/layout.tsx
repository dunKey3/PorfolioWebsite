import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col'>
      {children}
    </div>
  )
}

export default layout