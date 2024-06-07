import React, { useState, useEffect } from "react";
import Badge_Card from "../components/Badge_Card";


function Badges() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedBag = JSON.parse(localStorage.getItem('bag'));
    if (storedBag) {
      setData(storedBag);
    }
  }, []);

  return (
    <div className="px-32 py-9 max-w-screen-2xl flex flex-col gap-3 mx-auto">
      {
        data && data.map((el, index) => {
          return <Badge_Card key={index} el={el}></Badge_Card>
        })
      }
    </div >
  )
}

export default Badges;
