import React, { useState } from "react"
import ResponseCard from "../ResponseCard/ResponseCard"
import MainInfo from "../MainInfo/MainInfo"
import "./style.css"

function MainPage() {
  const [data, setData] = useState({ data: "image", clickDate: Date.now() })

  const changeData = (data) => {
    setData({ data, clickDate: Date.now() })
  }

  return (
    <div className="baseDisplay">
      <div className="skewed" />
      <div>
        <h1>Kitty API</h1>
      </div>
      <div className="buttonGroup">
        <button className="responseButton" onClick={() => changeData("breed")}>
          Breeds
        </button>
        <button className="responseButton" onClick={() => changeData("fact")}>
          Facts
        </button>
        <button className="responseButton" onClick={() => changeData("emoji")}>
          Emojis
        </button>
        <button className="responseButton" onClick={() => changeData("image")}>
          Images
        </button>
      </div>
      <div className="infoBlock">
        <div className="mainInfoWrapper">
          <MainInfo mode={data} />
        </div>
        <div className="cardWrapper">
          <ResponseCard mode={data} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
