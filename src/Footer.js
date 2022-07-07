import React from "react";
import challen from "./CHallenge";
import I7 from "./components/images/cardimage/Group 1000002466.png"

const Footer = ({ newNextPage,newData,deleteData}) => {
  
  const handlenewnext = () => {
    newNextPage();

  };
  const style = {
    height: newData.length>0 ? "1800px" :"1240px"
  }
  const [challenge, setChallenge] = React.useState(challen);
  const [filteredData, setfilteredData] = React.useState([]);
  
  const filterItem1 = (catChallenge) => {
    const updatedItem = challen.filter((curele) => {
      return curele.category === catChallenge;
    });
    setChallenge(updatedItem);
  };
  const filterItem2 = (catChallenge) => {
    const updatedItem = challen.filter((curele) => {
      return curele.status === catChallenge;
    });
    setChallenge(updatedItem);
  };
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = challen.filter((value) =>{
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setfilteredData([]);
      setChallenge(challen)
    } else {
      setfilteredData(newFilter);
      setChallenge(newFilter)
    }
  }
  const deletePastData = (id) =>{
    const filteredCards = challen.filter((element,index)=>{
      return element.id !== id
    })
    setChallenge(filteredCards)
  }

  

  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="search--area">
          <h1 className="footer--heading">Explore Challenges</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={handleFilter}
          />{filteredData.length !== 0 &&(
          <div className="dataResult">
            {filteredData.map((value) => {
              return <div>
                <button className="bnt11">{value.title}</button>
              </div>
            })}
          </div>)}
          <div class="filter">
            <button
              class="btn8 btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="bnt1" onClick={() => filterItem1("Easy")}>
                Easy
              </button>
              <button className="bnt2" onClick={() => filterItem1("Medium")}>
                Medium
              </button>
              <button className="bnt3" onClick={() => filterItem1("Hard")}>
                Hard
              </button>
              <hr></hr>
              <button className="bnt4" onClick={() => filterItem2("Upcoming")}>
                Upcoming
              </button>
              <button className="bnt5" onClick={() => filterItem2("Active")}>
                Active
              </button>
              <button className="bnt6" onClick={() => filterItem2("Past")}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer" style={style}>
        <div className="row">
          {challenge.map((elem) => {
            const { title, category, status, image, starts, time,id} = elem;
            return (
              <div className="card col-12 col-md-6 col-lg-6 col-xl-3 my-5 mx-3">
                <div className="row item-inside">
                  <div className="col-12 col-md-12 col-lg-5 img-div">
                    <img
                      src={require(`./components/images/cardimage/${image}`)}
                      alt="challenge-poster"
                      className="imgs"
                    ></img>
                  </div>
                  <h3 className="status">{status}</h3>
                  <h1 className="event">{title}</h1>
                  <h2 className="category">{category}</h2>
                  <h2 className="starts">{starts}</h2>
                  <h3 className="time">{time}</h3>
                  <button className="bn" onClick={handlenewnext}>
                    Participate Now
                  </button>
                  <button 
                    className="delete-btn" onClick={() => deletePastData(id)}>
                    <i className="gg-trash trash-icon"></i>
                </button>
                </div>
              </div>
            );
          })}
          {newData?.map(data => {
            return (
              <div className="card col-12 col-md-6 col-lg-6 col-xl-3 my-5 mx-3">
                <div className="row item-inside">
                  <div className="col-12 col-md-12 col-lg-5 img-div">
                    <img src={I7} alt="local"></img>
                  </div>
                  <h3 className="status">{data.status}</h3>
                  <h1 className="event">{data.title}</h1>
                  <h2 className="category">{data.category}</h2>
                  <h2 className="starts">Starts On (Days : hours : min)</h2>
                  <h3 className="time">{data.start}</h3> 
                  <button className="bn" onClick={() => {
                    handlenewnext()
                    deleteData(data.cardId)
                  }}>
                    Participate Now
                  </button>
                  <div className="delete-btn1">
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
