import React, {Suspense, useContext} from "react";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../../../shared/data/portfolio";
import StyleContext from "../../../../shared/contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='text-center m-auto block mx-auto my-0 p-6'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="ml-[15px] mr-[15px] mb-[15px] w-auto p-6" id="twitter">
          <div className="text-center m-auto block mx-auto my-0 p-6">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: {widthScreen}}}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}
