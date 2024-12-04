import Link from 'next/link'
import React from 'react'

function ContactInfoPage() {
  return (
    <div>
      <h1 className='text-7xl'>ContactInfo Page</h1>
      <Link href='/' className='text-xl text-blue-500 inline-block mt-8'>Home</Link>
    </div>
  )
}

export default ContactInfoPage