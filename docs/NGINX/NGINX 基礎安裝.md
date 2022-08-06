---
sidebar_position: 1
last_update:
  date: 2022/08/07
  author: JohnShuuu
tags: [NGINX, ubuntu, server]
title: 【實作】NGINX 基礎安裝
description: 使用 NGINX 做反向代理。
---
# 【實作】NGINX 基礎安裝
`環境為ubuntu`

NGINX 是一款現在常見的 Web Server, 主要功用有反向代理、負載平衡 (Load Balance)、快取以及 HTTPS 憑證等功能。

可以想像NGINX為飯店的櫃檯, 當顧客(使用者) 來到飯店(伺服器IP), 經由櫃檯(NGINX) 引導到不同的房間(Server)

## 如何使用

### 安裝 NGINX (以 Ubuntu 系統為例）
```
// 更新安裝套件
sudo apt-get update

// 安裝 Nginx
apt-get install nginx

// 確認安裝
nginx -v
```

### 連進主機, 從github抓檔案下來安裝, 並且build好

```
1. cd 下載位置
2. git clone xxx
3. cd xxx
4. npm install
5. npm run build
```

### 進入Nginx資料夾設定檔案 並建立軟連結後 重啟

#### 1. cd /etc/nginx/sites-available
#### 2. sudo vim new-test.conf

```md title="new-test.conf"
server {
  listen [::]:80;

  listen 80;
 
  server_name test.newtest.com;

	root  /home/new_file/xxx/dist;

  index index.html;

	gzip            on;
  gzip_types      text/plain application/xml text/css application/javascript;
  gzip_min_length 1000;
 
  location / {
     try_files $uri $uri/ /index.html;
  }
 
  return 301 http://test.newtest.com$request_uri;
}
```
- server_name 指定導向 server domain 名稱
- root 指定讀取靜態檔位置
- index 靜態檔名
- gzip 壓縮檔案
- location 指定位置
- return 301 轉址

#### 3. 儲存後, 回到上一頁建立軟連結
```md title="sudo ln -s “生產目標” “產生目的地”"
sudo ln -s /etc/nginx/sites-available/new-test.conf /etc/nginx/sites-enable/new-test.conf
```
#### 4. 測試後重啟
```
// NGINX 測試
sudo nginx -t 

// 重啟 NGINX
sudo service nginx restart
```

#### 5. 輸入網址 test.newtest.com 查看
