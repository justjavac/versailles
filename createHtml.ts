import { html } from "https://deno.land/x/html/mod.ts";

export default function createHtml(str: string): string {
  return html`<html lang="zh-CN">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>凡尔赛</title>
    <meta name="description" content="凡尔赛：一种“以低调的方式进行炫耀”的话语模式，也称凡学。这种话语模式先抑后扬，明贬暗褒，自说自话，假装用苦恼、不开心的口吻炫耀自己">
    <meta name="keywords" content="凡尔赛,低调,炫耀">
    <meta property="og:title" content="凡尔赛" />
    <meta property="og:url" content="https://versailles.deno.js.cn" />
    <meta property="og:image" content="https://versailles.deno.js.cn/assets/icon.png" />
    <meta property="og:site_name" content="凡尔赛" />
    <meta property="og:description" content="凡尔赛：一种“以低调的方式进行炫耀”的话语模式，也称凡学。这种话语模式先抑后扬，明贬暗褒，自说自话，假装用苦恼、不开心的口吻炫耀自己" />
    <link rel="alternate icon" type="image/png" href="assets/icon.png">
    <link rel="shortcut icon" href="assets/favicon.ico">
    <link rel="stylesheet" href="assets/style.css" />
</head>

<body>
    <div class="container">
        <h1><a href="/">凡尔赛</a></h1>

        <article>
            <div>${str}</div>
        </article>

        <footer>
            <div>本站源码使用 MIT 许可证发布在 <a href="https://github.com/justjavac/versailles" target="_blank"  rel="nofollow">GitHub</a> 上。内容来源自网络。</div>
        </footer>
</body>

</html>`;
}
