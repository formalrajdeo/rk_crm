'use client'
import React, { useState } from 'react'
import { Footer, Navbar, Sidebar } from '@/components'
import { SavedPage } from '@/containers'
import GetSectionBySidebar from '@/components/GetSectionBySidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [section, setSection] = useState(0)
  const [sidebar, setSidebar] = useState("create")
  const [hideSidebar, setHideSidebar] = useState(false)

  const notify = () => {
    toast.error("Fields validation failed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex bg-gray-100">
        <Sidebar
          setSection={setSection}
          setSidebar={setSidebar}
          sidebar={sidebar}
          setHideSidebar={setHideSidebar}
          hideSidebar={hideSidebar}
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
              notify={notify}
            />
          }
          <Footer />
        </main>
      </div>
    </>
  )
}

export default page