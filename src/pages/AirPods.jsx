import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AirPods() {
  const [iphones, setIphones] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/airpods')
      .then(res => res.json())
      .then(data => {
        setIphones(data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function handleAbout(id) {
    navigate(`/detail6/:${id}`)
  }

  return (
    <div className="px-32 py-9 flex items-center flex-wrap gap-5 max-w-screen-2xl mx-auto">
      {
        iphones && iphones.map((el, index) => {
          return (
            <div key={index} onClick={() => handleAbout(el.id)} className="transition rounded-lg h-[430px] w-[300px] cursor-pointer shadow-md hover:shadow-xl pb-2">
              <img src={el.image_url} alt="" className="w-[320px] object-contain h-[200px]" />
              <h1 className="text-zinc-600 font-bold text-xl px-5 py-3">{el.name}</h1>
              <p className="text-zinc-600 text-base px-5 py-3">{el.description}
              </p>
              <h2 className="text-gray-500 text-xl font-semibold px-5 py-3">$ {el.price}</h2>
            </div>
          )
        })
      }
    </div>
  );
}

export default AirPods;
