import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium
     text-lg dark:text-light dark:border-light sm:text-base '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
         <span>Rights</span>
          <Link href="/">Damini</Link>
          <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
