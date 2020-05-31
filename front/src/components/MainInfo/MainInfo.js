import React, { useState, useEffect } from "react"
import "./style.css"

export default function MainInfo(props) {
  const [reqUrl, setReqUrl] = useState("GET: /api/images/random/all")
  const [showReq, setShowReq] = useState(false)
  useEffect(() => {
    const data = props.mode.data
    if (data !== "image") {
      setReqUrl(`GET: /api/${data}s/random/1`)
    } else {
      setReqUrl("GET: /api/images/random/all")
    }
  }, [props])

  const allReqClicked = () => {
    setShowReq(!showReq)
  }
  return (
    <div className="mainInfo">
      Current Url: {reqUrl} <br />
      <button onClick={() => allReqClicked()}>All requests</button>
      <div className={showReq ? "requests" : "hidden"}>
        GET: /api/breeds - get all breeds <br />
        GET: /api/breeds/:id - get one breed with id <br />
        GET: /api/breeds/random/:limit - get random breeds in quantity limit{" "}
        <br />
        POST: /api/breeds - add new breed <br />
        PUT: /api/breeds/:id - update breed with id <br />
        DELETE: /api/breeds/:id - delete breed id <br />
        <br />
        GET: /api/facts - get all facts <br />
        GET: /api/facts/:id - get one fact with id <br />
        GET: /api/facts/random/:limit - get random facts in quantity limit{" "}
        <br />
        POST: /api/facts - add new fact <br />
        PUT: /api/facts/:id - update fact with id <br />
        DELETE: /api/facts/:id - delete fact id <br />
        <br />
        GET: /api/emojis - get all emojis <br />
        GET: /api/emojis/:id - get one emoji with id <br />
        GET: /api/emojis/random/:limit - get random emojis in quantity limit{" "}
        <br />
        POST: /api/emojis - add new emoji <br />
        PUT: /api/emojis/:id - update emoji with id <br />
        DELETE: /api/emojis/:id - delete emoji id <br />
        <br />
        GET: /api/images/random/:breed - get random image with breed <br />
        GET: /api/images/:breed/:image - get image with breed and file name
        "image" <br />
      </div>
    </div>
  )
}
