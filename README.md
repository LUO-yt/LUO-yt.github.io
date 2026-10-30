# Yitong Luo | 罗亦彤

基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 的 GitHub Pages 学术主页。保留原模板的侧栏、导航和响应式布局，新增个人内容与紫色主题细节。

## 发布到 GitHub Pages

1. 创建名为 `你的用户名.github.io` 的 GitHub 仓库，将本目录内的源码上传至仓库（不要把整个外层文件夹作为一层子目录上传）。
2. 编辑 `_config.yml`：填写 `repository: "你的用户名/你的用户名.github.io"`、`url: "https://你的用户名.github.io"` 和 `author.github`。根域主页的 `baseurl` 保持为空。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支 `main`、目录 `/ (root)`，保存。
4. 等待 GitHub Pages 构建完成，在 `https://你的用户名.github.io` 查看。

## 本地预览

安装 Ruby 和 Bundler 后：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

打开输出的本地地址。`_site` 是构建结果，不需要提交。

## 维护

- `_pages/about.md`：简介、论文、新闻、奖项和教育。
- `_config.yml`：个人资料及站点地址。
- `_data/navigation.yml`：导航与锚点。
- `images/yitong-luo.jpg`：用户指定的海边照片。
- `assets/css/main.scss`：保留模板样式，在末尾增加个人样式。
- `CONTENT_NOTES.md`：资料来源及待核对事项（不输出到网站）。

未配置 Google Scholar ID，因此不启用引用数爬虫或第三方统计。日后可按需恢复。本站以英文为主，保留姓名与奖学金中文原名。

## License

原模板 MIT License 见 `LICENSE`。
