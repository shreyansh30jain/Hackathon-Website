import React from "react"
import { useState } from "react";
import Header from "./Header"
import Hero from "./hero"
import Footer from "./footer"
import AdminForm from "./adminForm"
import ChallengeDetails from "./ChallengeDetailPage"


export default function App(props){

  const [page, setPage] = useState(0);
  const [newPage, setNewPage] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  }
  const newNextPage = () => {
    setNewPage(newPage + 1);
  }
  return(
    <div>
      {page === 0 && newPage=== 0 && <Header nextPage={nextPage}/>}
      {page === 0 && newPage=== 0 && <Hero/>}
      {page === 0 && newPage=== 0 && <Footer newNextPage={newNextPage}/>}
      {page === 1 && newPage=== 0 && <AdminForm/>}
      {page=== 0 && newPage === 1 && <ChallengeDetails/>}
    </div>
  )
}