interface IDownArrow {
  width: string;
  height: string;
}

export const DownArrow = ({ width, height }: IDownArrow) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.4998 12.0908L54.2223 0L61 3.45452L30.4998 19L0 3.45452L6.77777 0L30.4998 12.0908Z"
        fill="#AB9199"
      />
    </svg>
  );
};
