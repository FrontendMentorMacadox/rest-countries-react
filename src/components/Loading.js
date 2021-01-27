import React from "react";
import BounceLoader from "react-spinners/BounceLoader";



const Loading = () => {
  return (
    <div className="loader-wrap">
      <BounceLoader color="rgba(0,0,0,0.15)" css={{margin: '6em auto'}} />
    </div>
  );
};

export default Loading;
