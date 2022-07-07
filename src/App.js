import React from "react";
import { useState,useEffect } from "react";
import Header from "./Header";
import Hero from "./hero";
import Footer from "./Footer"
import Details from "./challengedata"
import I1 from "./components/images/icons/carbon_skill-level-basic.svg"
import {nanoid} from "nanoid"

export default function App() {
  const [page, setPage] = useState(0);
  const [newPage, setNewPage] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  };
  const newNextPage = () => {
    setNewPage(newPage + 1);
  };
  const prevPage = () => {
    setTimeout(()=>{
      setPage(page-1)
    })
  }
  const newPrevPage = () => {
    setTimeout(()=>{
      setNewPage(newPage-1)
    })
  }

  const dataFromLocalStorage = () =>{
    const data = localStorage.getItem('newData')
    if(data){
      return JSON.parse(data)
    }
    else{
      return []
    }
  }
  const[newData,setNewData] = React.useState(dataFromLocalStorage())
 
  const [newTitle, setNewTitle] = React.useState('')
  const [newStart, setNewStart] = React.useState('')
  const [newPara, setNewPara] = React.useState('')
  const [newCategory,setNewCategory] = React.useState('')
  const [newStatus,setNewStatus] = React.useState("Upcoming")
  const [image,setImage] = React.useState('')
  const[cardId,setCardId] = React.useState(nanoid())

const handleAddBookSubmit = (e) =>{
  e.preventDefault()
  let data = {
    title: newTitle,
    start: newStart,
    para:newPara,
    category:newCategory,
    status:newStatus,
    image:image,
    cardId:cardId
  }
  setNewData([...newData,data])
  setNewTitle('')
  setNewStart('')
  setNewPara('')
  setNewCategory('')
  setNewStatus("Upcoming")
  setImage('')
  setCardId(nanoid())
}
useEffect(()=>{
localStorage.setItem('newData',JSON.stringify(newData))
},[newData])

const deleteData = (id) =>{
  const filteredCards = newData.filter((element,index)=>{
    return element.cardId !== id
  })
  setNewData(filteredCards)
}
  return (
    <div>
      {page === 1 && newPage === 0 && <div>
      <h1 className="Main-heading">Challenge Details</h1>
      <form onSubmit={handleAddBookSubmit}>
        <div className="form-group1">
          <label for="formGroupExampleInput">Challenge Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Challenge Name"
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="form-group2">
          <label for="formGroupExampleInput">Start-Date</label>
          <input
            type="date"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Challenge Name"
            name="start"
            value={newStart}
            onChange={(e) => setNewStart(e.target.value)}
          />
        </div>
        <div className="mb-3" id="teaxtarea">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name="para"
            rows="3"
            value={newPara}
            onChange={(e) => setNewPara(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group4">
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            class="form-control-file"
            value={image}
            onChange = {(e) => setImage(e.target.value)}
            id="exampleFormControlFile1"
          />
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Level Type
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item" value = {newCategory} onClick={(e) => setNewCategory("Easy")}>
              EASY
            </div>
            <div class="dropdown-item" value = {newCategory} onClick={(e) => setNewCategory("Medium")}>
              MEDIUM
            </div>
            <div class="dropdown-item" value = {newCategory} onClick={(e) => setNewCategory("Hard")}>
              HARD
            </div>
          </div>
        </div>
        <button className="bn1" type="submit" onClick={prevPage}>Create</button>
      </form>
    </div>}
      {page === 0 && newPage === 0 && <Header nextPage={nextPage} />}
      {page === 0 && newPage === 0 && <Hero />}
      {page === 0 && newPage === 0 && <Footer newNextPage={newNextPage} newData={newData} deleteData = {deleteData}/>}
      {page === 0 && newPage === 1 && <div>
            {Details.map((elem) => {
                const { time, title, sub,category,para } = elem;
                return(
                    <div className="challenge--container">
            <div className="challenge--time"><h3>{time}</h3></div>
            <h1>{title}</h1>
            <h2>{sub}</h2>
            <div className="challenge--image">
                <img src={I1} alt=""></img>
                <h3>{category}</h3>
            </div>
            <div className="lower-challenge">
                <h1>Overview</h1>
                <div className="edit-class">
                <button className="edit">Edit</button>
                </div>
                <div className="delete-class">
                <button className="delete" onClick={() => {
                  deleteData(newData.cardId)
                  newPrevPage()
                }}>delete</button>
                </div>
            </div>
            <p className="para">{para}
            </p>
        </div>
                )
            })}
        </div>}
    </div>
  );
}
