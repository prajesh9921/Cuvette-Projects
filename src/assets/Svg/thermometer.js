import * as React from "react"

function Thermometer(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={21}
      viewBox="0 0 12 21"
      fill="none"
      {...props}
    >
      <path
        d="M6.895 13.116V6.892a.918.918 0 10-1.836 0v6.224a1.836 1.836 0 00-.918 1.579 1.836 1.836 0 003.672 0 1.836 1.836 0 00-.918-1.58zm3.213-2.093V4.138a4.13 4.13 0 10-8.262 0v6.885a5.508 5.508 0 002.946 9.024c.39.088.786.14 1.185.156a5.508 5.508 0 004.13-9.18zm-1.836 6.49a3.68 3.68 0 01-4.884-5.508.918.918 0 00.275-.652V4.138a2.295 2.295 0 014.59 0v7.289a.919.919 0 00.276.651 3.672 3.672 0 01-.257 5.508v-.073z"
        fill="#fff"
      />
    </svg>
  )
}

export default Thermometer
