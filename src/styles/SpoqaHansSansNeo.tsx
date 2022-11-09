import { css } from "styled-components";

const SpoqaHansSansNeoFont = css`
  /**
 * Copyright (c) 2015 Spoqa, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    src: local("Spoqa Han Sans Neo Bold"),
      url("./SpoqaHanSansNeo-Bold.woff2") format("woff2"),
      url("./fonts/SpoqaHanSansNeo-Bold.woff") format("woff"),
      url("./fonts/SpoqaHanSansNeo-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    src: local("Spoqa Han Sans Neo Medium"),
      url("./fonts/SpoqaHanSansNeo-Medium.woff2") format("woff2"),
      url("./fonts/SpoqaHanSansNeo-Medium.woff") format("woff"),
      url("./fonts/SpoqaHanSansNeo-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    src: local("Spoqa Han Sans Neo Regular"),
      url("./fonts/SpoqaHanSansNeo-Regular.woff2") format("woff2"),
      url("./fonts/SpoqaHanSansNeo-Regular.woff") format("woff"),
      url("./fonts/SpoqaHanSansNeo-Regular.ttf") format("truetype");
  }
`;

export default SpoqaHansSansNeoFont;
