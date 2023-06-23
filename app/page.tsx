'use client'
import React, { useState } from 'react'
import { Footer, Navbar, Sidebar, Header } from '@/components'
import { CONSTANTS } from '@/constants'
import { SavedPage, Section } from '@/containers'
import GetSectionBySidebar from '@/components/GetSectionBySidebar'

const page = () => {
  const [section, setSection] = useState(0)
  const [sidebar, setSidebar] = useState("create")
  const [hideSidebar, setHideSidebar] = useState(false)

  return (
    <>
      <Navbar />
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
            />
          }
          <Footer />
        </main>
      </div>
    </>
  )
}

export default page