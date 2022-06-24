import React from "react";
import challen from "./CHallenge";

const Footer = ({ props, newNextPage }) => {
  
  const handlenewnext = () => {
    newNextPage();

  };
  const [challenge, setChallenge] = React.useState(challen);

   const inputEL = React.useRef("");
  
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

  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="search--area">
          <h1 className="footer--heading">Explore Challenges</h1>
        </div>
        <div className="search">
          <input
            ref={inputEL}
            type="text"
            placeholder="Search"
          />

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
      <div className="lower-footer">
        <div className="row">
          {challenge.map((elem) => {
            const { id, title, category, status, image, starts, time } = elem;
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
                  <div className="key">{id}</div>
                  <h3 className="status">{status}</h3>
                  <h1 className="event">{title}</h1>
                  <h2 className="category">{category}</h2>
                  <h2 className="starts">{starts}</h2>
                  <h3 className="time">{time}</h3>
                  <button className="bn" onClick={handlenewnext}>
                    Participate Now
                  </button>
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
