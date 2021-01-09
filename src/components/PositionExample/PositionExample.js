import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./positionExample.css";
const PositionExample = () => {
  const [showFilter, setShowFilter] = useState(false);
  const onClickFilter = () => setShowFilter(!showFilter);
  return (
    <div>
      <div className="searchFilterMain">
        <Button style={{ marginRight: "6px" }}>Search</Button>
        <Button onClick={onClickFilter}>Filter</Button>
        {showFilter && (
          <ul className="filter-dropdrown">
            <li>sudhakar</li>
            <li>dinesh</li>
            <li>sample</li>
          </ul>
        )}
      </div>
      <p className="backgroundPara">background background background</p>
      <div className='circle-fixed'></div>
    </div>
  );
};

export default PositionExample;
