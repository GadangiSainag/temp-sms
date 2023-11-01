import axios from "axios";
import { useState, useEffect } from "react";
import "./messages.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function ShowMessages(props) {
  const [isLoading, setLoading] = useState(props.isLoading);
  // useEffect(() => {
  // axios
  //       .get(`http://localhost:5000/api/messages/${props.number}`)
  //       .then((response) => {
  //         console.log(Object.values(response.data))
  //         setMessages(Object.values(response.data))
  //         // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     }, []);
  return (
    <div>
      {props.messages.map((message, index) => {
        return props.isLoading ? (
          <SkeletonTheme
            baseColor="#2e333d"
            key={index}
            highlightColor="rgb(256,256,256,0.2)"
          >
            <div className="msgbox skleton">
              <Skeleton width="150px" className="from mt-3 absolute" />
              <div className="mt-8">
                <Skeleton className="" width="450px" count={3} />
              </div>
              <Skeleton className="time absolute mt-3" width="120px" />
            </div>
          </SkeletonTheme>
        ) : (
          <div key={index}>
            {/* message[0] - time
        mesage[1] - From
        message[2] - actual msg */}

            <div id="msgbox" className="msgbox">
              <h4 className="from   ">
                <strong>{message[1]}</strong>
              </h4>

              <p className="msgContent"> {message[2]}</p>
              <h3 className="time">{message[0]}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
