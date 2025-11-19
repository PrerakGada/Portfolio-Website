import React, {Suspense, useContext, useEffect, useState} from "react";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../../../shared/data/portfolio";
import StyleContext from "../../../../shared/contexts/StyleContext";

const renderLoader = () => <Loading />;
const widthScreen = typeof window !== "undefined" ? window.screen.width : 400;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="twitter">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: widthScreen}}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
            />
            {showFallback && (
              <p className="mt-4 text-sm text-[var(--color-subtitle)]">
                Can&apos;t load? Check your privacy protection settings.
              </p>
            )}
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}
