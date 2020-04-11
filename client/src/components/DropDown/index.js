import React from "react";


function DropDown(props) {
  

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select 
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.dropDownOpts}
                </div>
        </div>
        

      
    )
};

export default DropDown;