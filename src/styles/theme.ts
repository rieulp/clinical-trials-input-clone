import { DefaultTheme } from "styled-components";

type deviceType = "mobile" | "tablet" | "laptop" | "desktop";

const size: { [key in deviceType]: string } = {
  mobile: "543px",
  tablet: "768px",
  laptop: "1011px",
  desktop: "1280px"
};

const device: { [key in deviceType]: string } = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  desktop: `screen and (max-width: ${size.desktop})`
};

const color = {
  bg: "#CAE9FF",
  primary: "#007BE9",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#6A737B",
  shadow: "rgba(30, 32, 37, 0.1)"
};

const theme: DefaultTheme = {
  device,
  color
};

export default theme;
