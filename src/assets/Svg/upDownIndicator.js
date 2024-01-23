import * as React from "react";

function UpArrow(props) {
  return (
    <div onClick={props.onPress}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={18}
        viewBox="0 0 27 18"
        fill="none"
        {...props}
      >
        <path
          d="M10.878 1.123l-9.733 9.733c-1.186 1.186-1.45 2.542-.794 4.07.656 1.527 1.825 2.292 3.508 2.295h19.28c1.684 0 2.854-.765 3.51-2.295.657-1.53.391-2.887-.797-4.07L16.12 1.123a3.886 3.886 0 00-1.217-.842A3.526 3.526 0 0013.498 0c-.499 0-.967.094-1.403.28a3.886 3.886 0 00-1.217.843z"
          fill="#949494"
        />
      </svg>
    </div>
  );
}

function DownArrow(props) {
  return (
    <div onClick={props.onPress}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={18}
        viewBox="0 0 27 18"
        fill="none"
        {...props}
      >
        <path
          d="M10.878 16.098L1.145 6.364C-.041 5.18-.305 3.822.35 2.294 1.007.768 2.176.003 3.859 0h19.28c1.684 0 2.854.765 3.51 2.295.657 1.53.391 2.886-.797 4.07l-9.733 9.732c-.374.375-.78.656-1.217.843-.436.187-.904.28-1.404.28-.499 0-.967-.093-1.403-.28a3.887 3.887 0 01-1.217-.843z"
          fill="#949494"
        />
      </svg>
    </div>
  );
}

export { UpArrow, DownArrow };
