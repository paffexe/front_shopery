const Hamburger = ({ className, ...props }) => {
  return (
    <svg
      height="22"
      width="40"
      fill="currentColor"
      viewBox="0 0 40 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="2"
        x1="1"
        x2="39"
        y1="1"
        y2="1"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="2"
        x1="1"
        x2="39"
        y1="11"
        y2="11"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="2"
        x1="1"
        x2="39"
        y1="21"
        y2="21"
      />
    </svg>
  );
};

export default Hamburger;
