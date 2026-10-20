# MINGLU 路铭 — 个人网站

纯静态网站（HTML + CSS + JavaScript），不需要安装任何框架、不需要 npm，WebStorm 打开就能用。

```
minglu-site/
├── index.html            页面骨架（一般不用改）
├── css/style.css         样式：颜色、字体、排版（:root 里改整体配色）
├── js/data.js            ★ 所有文字 + 图片路径都在这里 ★
├── js/main.js            交互逻辑（一般不用改）
├── images/               所有图片，按作品分文件夹
├── 图片替换清单.md        每张图对应 PDF 第几页、要不要换
└── README.md             就是本文件
```

---

## 一、在 WebStorm 里打开和预览

1. 解压 `minglu-site.zip`，放到一个固定位置，比如 `文稿/Websites/minglu-site`。
2. WebStorm → **File → Open** → 选择 `minglu-site` 文件夹。
3. 在左侧双击打开 `index.html`，鼠标移到编辑器右上角，会出现一排浏览器小图标，点 Chrome（或按 `⌥F2` / Windows `Alt+F2`）。
   WebStorm 会开一个本地服务器（地址类似 `http://localhost:63342/minglu-site/index.html`），网站就在浏览器里跑起来了。
4. 之后改任何文件 → 保存 → 浏览器刷新即可看到效果。

> ⚠️ 不要直接双击 index.html 用 `file://` 打开，YouTube 视频嵌入可能不显示。用 WebStorm 的预览就没问题。

---

## 二、怎么改内容

### 改文字
全部在 **`js/data.js`**，从上到下依次是：

| 区块 | 对应 data.js 里的 | 说明 |
|---|---|---|
| 首屏大字 | `SITE.hero` | 三行问句、左右小标签、底部一句话 |
| Philosophy | `SITE.philosophy` | 三个关键词 Presence / Fold / Moha + 各一段话 |
| Approach | `SITE.approach` | 轮换词、标题、四个方法步骤 |
| 工具滚动条 | `SITE.tools` | 软件名列表 |
| About | `SITE.about` | 简介、教育、背景 |
| 三个系列 | `SERIES` | 001 / 002 / 003 |
| 每个作品 | `WORKS` | 标题、年份、Credits、正文和图片排版 |

只改引号 `'…'` 里面的字。英文里如果有撇号（比如 It's），要么写成 `"It's"`（外面用双引号），要么写成 `'It\'s'`。

### 作品页的排版积木（`blocks`）
每个作品页从上到下由这些积木组成，复制一行改改就能加：

```js
{ type: 'text',  title: '小标题(可空)', body: ['第一段', '第二段'] },
{ type: 'full',  src: img('aura', 5) },                       // 通栏大图
{ type: 'grid',  cols: 2, srcs: imgs('aura', 3, 6) },          // 2列（或 cols: 3）
{ type: 'pair',  srcs: [img('aura', 13), img('aura', 14)], text: '旁注' }, // 一大一小+文字
{ type: 'quote', body: '居中大引文' },
{ type: 'video', youtube: 'gN-febdVZZU' },                     // YouTube 链接 v= 后面那串
```

`img('aura', 5)` 就是 `images/aura/aura-05.jpg`；`imgs('aura', 3, 6)` 就是 03 到 06 四张。

### 换图片
看 **`图片替换清单.md`**。最简单的方法：**高清图改成同样的文件名，覆盖旧文件**，代码一行都不用动。

### 换配色 / 字体
`css/style.css` 最上面的 `:root`：`--bg` 背景色、`--fg` 文字色、`--muted` 灰字。
字体用的是 Google Fonts 的 Inter Tight（无衬线）+ Newsreader（斜体衬线）。

---

## 三、上线：推荐 GitHub + GitHub Pages（免费）

整体流程：**本地改 → WebStorm 提交(commit) → 推送(push)到 GitHub → GitHub Pages 自动更新网站**。

### 第一次设置（只做一次）

1. 注册 / 登录 [github.com](https://github.com)。
2. WebStorm → **Settings / Preferences → Version Control → GitHub** → 点 `+` → **Log In via GitHub**，浏览器里授权。
3. 菜单 **VCS → Share Project on GitHub**（新版叫 **Git → GitHub → Share Project on GitHub**）：
   - Repository name：建议填 `你的GitHub用户名.github.io`（例如 `louislumi.github.io`），这样网址最短。
   - 不要勾 Private（免费账号的 Pages 需要公开仓库）。
   - 点 Share，弹出窗口里全选文件 → Add。
4. 到 GitHub 网页打开这个仓库 → **Settings → Pages**：
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，文件夹 **/ (root)** → Save。
5. 等 1–2 分钟，页面顶部会显示网址：
   - 仓库名是 `用户名.github.io` → 网址就是 `https://用户名.github.io`
   - 仓库名是别的（比如 `portfolio`）→ 网址是 `https://用户名.github.io/portfolio/`

### 以后每次更新

1. 在 WebStorm 里改文字 / 替换图片，保存。
2. `⌘K`（Windows `Ctrl+K`）打开 Commit 窗口 → 勾选改动的文件 → 写一句说明（如 “replace HD images for aura”）→ 点 **Commit and Push**。
3. 等 1 分钟左右，刷新网站就是新版本。

### （可选）绑定自己的域名，比如 minglu.art
1. 在任意域名商（Namecheap、Cloudflare、阿里云等）买域名。
2. GitHub 仓库 **Settings → Pages → Custom domain** 填上域名，勾 **Enforce HTTPS**。
3. 在域名商的 DNS 里按 GitHub 提示添加记录（4 条 A 记录指向 GitHub，或一条 CNAME 指向 `用户名.github.io`）。

### 其他托管选择（都免费，也都连 GitHub）
- **Netlify / Vercel**：登录后 “Import from GitHub” 选这个仓库，什么都不用配，直接 Deploy。好处是自带预览链接，国内访问有时比 GitHub Pages 稳一点。
- 不想用 Git：Netlify 有 “Drop” 功能，直接把整个文件夹拖到 app.netlify.com/drop 就上线了（但以后每次更新都要重新拖）。

---

## 四、上线前检查清单

- [ ] `图片替换清单.md` 里 ⭐ 部分的图片已换成高清
- [ ] 所有图片单张 < 1MB（整个 images 文件夹最好 < 150MB；GitHub 单文件上限 100MB）
- [ ] `js/data.js` 里 email / Instagram 正确
- [ ] 手机上打开看一遍（WebStorm 预览时，Chrome 按 `⌘⌥I` → 左上角手机图标可模拟手机）
- [ ] 文件名里没有中文、空格、大写字母（GitHub Pages 区分大小写，`Aura-01.JPG` ≠ `aura-01.jpg`）
