# TIPS

- `tauri.conf.json`中的`devPath`设置为前端服务地址，默认就是，也可以设定（`vite.config.ts`中的`server`项）端口需一致，改为`../dist`会导致修改前端文件，浏览器会更新而应用里面不会更新。
- `vite.config.ts`中会报错"找不到名称 "process"。是否需要为节点安装类型定义? 请尝试使用 `npm i --save-dev @types/node`"。安装就是了。
