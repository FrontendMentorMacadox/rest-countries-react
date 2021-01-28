import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { theme } = useGlobalContext();
  return (
    <div
      className='loader-wrap'
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BounceLoader
        color={`${theme === 'dark-theme' ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.15)"}`}
        css={{ margin: "6em auto" }}
      />
    </div>
  );
};

export default Loading;
