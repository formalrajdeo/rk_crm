'use client'
import React, { useState } from 'react'
import { Footer, Navbar, Sidebar } from '@/components'
import { SavedPage } from '@/containers'
import GetSectionBySidebar from '@/components/GetSectionBySidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [section, setSection] = useState(0)
  const [sidebar, setSidebar] = useState("create")
  const [hideModal, setHideModal] = useState(false)

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex bg-gray-100">
        <Sidebar
          setSidebar={setSidebar}
          sidebar={sidebar}
          section={section}
          setHideModal={setHideModal}
        />
        <main className="w-full p-4">
          {section > 2 && sidebar === "create"
            ?
            <SavedPage />
            :
            <GetSectionBySidebar
              sidebar={sidebar}
              section={section}
              setSection={setSection}
              hideModal={hideModal}
              setHideModal={setHideModal}
            />
          }
          <Footer />
        </main>
      </div>
    </>
  )
}

export default page