import React, { useEffect, useState } from "react"
import getRandomData from "../../api/getRandomData"
import getRandomImage from "../../api/getRandomImage"
import "./style.css"

export default function ResponseCard(props) {
  const [responseData, setResponseData] = useState(<div/>)

  useEffect(() => {
    async function fetchApi() {
      const data = props.mode.data
      const time = props.mode.clickDate

      if (data == "image") {
        const image = await getRandomImage("all")
        setResponseData(<img src={`${image}?${time}`} className="catImage"/>)
      } else {
        const modeData = await getRandomData(data, 1)
      setResponseData(<div className="catInfo">{JSON.stringify(modeData)}</div>)
      }
    }
    fetchApi()
  }, [props])



  return <div className="responseCard">{responseData}</div>
}
