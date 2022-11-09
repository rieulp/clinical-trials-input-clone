import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeoBoldT from "@/styles/fonts/SpoqaHanSansNeo-Bold.ttf";
import SpoqaHanSansNeoLightT from "@/styles/fonts/SpoqaHanSansNeo-Light.ttf";
import SpoqaHanSansNeoMediumT from "@/styles/fonts/SpoqaHanSansNeo-Medium.ttf";
import SpoqaHanSansNeoRegularT from "@/styles/fonts/SpoqaHanSansNeo-Regular.ttf";
import SpoqaHanSansNeoThinT from "@/styles/fonts/SpoqaHanSansNeo-Thin.ttf";
import SpoqaHanSansNeoBoldW from "@/styles/fonts/SpoqaHanSansNeo-Bold.woff";
import SpoqaHanSansNeoLightW from "@/styles/fonts/SpoqaHanSansNeo-Light.woff";
import SpoqaHanSansNeoMediumW from "@/styles/fonts/SpoqaHanSansNeo-Medium.woff";
import SpoqaHanSansNeoRegularW from "@/styles/fonts/SpoqaHanSansNeo-Regular.woff";
import SpoqaHanSansNeoThinW from "@/styles/fonts/SpoqaHanSansNeo-Thin.woff";

const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: "Spoqa Han Sans Neo";
    src: local('Spoqa Han Sans Neo Thin'),url(${SpoqaHanSansNeoThinT}) format('ttf'),url(${SpoqaHanSansNeoThinW}) format('woff');
    font-style:normal;
    font-weight:100;
}
@font-face {
    font-family: "Spoqa Han Sans Neo";
    src: local('Spoqa Han Sans Neo Light'),url(${SpoqaHanSansNeoLightT}) format('ttf'),url(${SpoqaHanSansNeoLightW}) format('woff');
    font-style:normal;
    font-weight:300;
}
@font-face {
    font-family: "Spoqa Han Sans Neo";
    src: local('Spoqa Han Sans Neo Regular'),url(${SpoqaHanSansNeoRegularT}) format('ttf'),url(${SpoqaHanSansNeoRegularW}) format('woff');
    font-style:normal;
    font-weight:400;
}
@font-face {
    font-family: "Spoqa Han Sans Neo";
    src: local('Spoqa Han Sans Neo Medium'),url(${SpoqaHanSansNeoMediumT}) format('ttf'), url(${SpoqaHanSansNeoMediumW}) format('woff');
    font-style:normal;
    font-weight:500;
}
@font-face {
    font-family: "Spoqa Han Sans Neo";
    src: local('Spoqa Han Sans Neo Bold'), url(${SpoqaHanSansNeoBoldT}) format('ttf'), url(${SpoqaHanSansNeoBoldW}) format('woff');
    font-style:normal;
    font-weight:700;
}
`;

export default GlobalFonts;
