import React from 'react'
import About from './About'
import Cards from './Cards'
import Contatcs from './Contacts'

export default function Home() {
  return (
    <div>
        <About/>
        <Cards q="Qualifications" e="Experience & Skills" a="Achievements & Responsibilities" k="Know More" p="Projects"/>
        <Contatcs/>
    </div>
  )
}
