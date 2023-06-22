import React from 'react'
import { Footer, Navbar, Sidebar, Header } from '@/components'
import { BasicInformation } from '@/containers'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="w-full p-4">
          <Header />
          <section id='basic-information' className='bg-white'>
            <BasicInformation />
          </section>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default page