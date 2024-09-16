import React from 'react'

export default function AuthLayout(props : React.PropsWithChildren) {
  return (
    <main className='h-screen grid grid-cols-2'>
      <section className='bg-primary-500'></section>
      <section className='flex items-center justify-center'>
        {props.children}
      </section>
    </main>
  )
}
