import React from "react"
import { useState } from "react";
import Header from "./components/Header"
import Hero from "./components/hero"
import Footer from "./components/footer"
import AdminForm from "./components/adminForm"

export default function App(){
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  }
  return(
    <div>
      {page === 0 && <Header nextPage={nextPage}/>}
      {page === 0 &&<Hero/>}
      {page === 0 &&<Footer/>}
      {page === 1 && <AdminForm/>}
    </div>
  )
}