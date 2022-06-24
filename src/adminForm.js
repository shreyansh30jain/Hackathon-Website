import React from "react";
export default function adminForm( ){
    return(
        <div>
          <h1 className="Main-heading">Challenge Details</h1>
  <form>
  <div className="form-group1">
    <label for="formGroupExampleInput">Challenge Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Challenge Name"/>
  </div>
  <div className="form-group2">
    <label for="formGroupExampleInput">Start-Date</label>
    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="Challenge Name"/>
  </div>
  <div className="form-group3">
    <label for="formGroupExampleInput">End-Date</label>
    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="Challenge Name"/>
  </div>
  <div className="mb-3" id="teaxtarea">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    <div className="form-group4">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Level Type
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="www.abx.com">Action</a>
    <a class="dropdown-item" href="www.abx.com">Another action</a>
    <a class="dropdown-item" href="www.abx.com">Something else here</a>
  </div>
</div>
</form>
        </div>
    )
}