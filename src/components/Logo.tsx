interface LogoProps {
  width: string;
  height: string;
  iconColor: string;
}

export default function Logo({ width, height, iconColor }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 158 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M132.709 61.9999L107.418 4.62474e-06L158 0L132.709 61.9999Z"
        fill={iconColor}
      />
      <ellipse cx="30.9932" cy="31" rx="30.9932" ry="31" fill={iconColor} />
      <path
        d="M99.78 6.73095e-05C95.7099 6.74874e-05 91.6796 0.801906 87.9194 2.3598C84.1591 3.91769 80.7424 6.20113 77.8644 9.07975C74.9865 11.9584 72.7035 15.3758 71.146 19.1369C69.5884 22.8979 68.7867 26.9291 68.7867 31C68.7867 35.071 69.5884 39.1021 71.146 42.8632C72.7035 46.6243 74.9865 50.0417 77.8645 52.9203C80.7424 55.7989 84.1591 58.0823 87.9194 59.6402C91.6797 61.1981 95.7099 62 99.78 62L99.78 31L99.78 6.73095e-05Z"
        fill={iconColor}
      />
    </svg>
  );
}
