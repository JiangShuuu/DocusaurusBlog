---
id: docker-command
sidebar_position: 2
last_update:
  date: 2022/12/02
  author: JohnShuuu
tags: [Docker, server]
title: Docker 常用指令
description: 記錄 Docker 常用指令
---
# Docker 常用指令

## 安裝

```jsx
// 更新本地儲存庫
sudo apt update

// 安裝 Docker
sudo apt install docker.io
sudo apt install docker-compose

// 檢查 Docker 安裝是否成功
docker --version
輸出範例, Docker version 20.10.12, build 20.10.12-0ubuntu4

// 啟動 Docker
sudo systemctl start docker

//檢查 Docker 運行狀態
sudo systemctl status docker
輸出範例, 其中一行會寫 Active: active (running)

// 若需要停止 Docker 的指令
sudo systemctl enable docker
```

## 指令

### 查詢

```jsx
// 顯示所有container
docker ps

// 顯示所有images
docker images

// 查詢 container 近期 logs
docker logs -f -t --tail=[行數] [容器名稱]

// 進入容器
docker exec -it [容器id或name] bash

// 暫停與重新啟動
docker pause [容器名稱]
docker uppause [容器名稱]

// 啟動與停止
docker start [容器名稱]
docker stop [容器名稱]
```

### 建立

```jsx
// 建立並啟動容器
docker run --name [容器名稱] -p [對外port]:[對內port] \
-e [環境變數名稱]=[環境變數值] \
--restart unless-stopped \
-d [映像檔名稱:版本]

// 建立 network
docker network create [network名稱]

// 連接容器間的 network
docker network connect [network名稱] [容器名稱]
```

### 刪除

```jsx
// 強制刪除未使用的 container
docker container prune -f

// 強制刪除未使用的 image
docker image prune -a -f

// 強制刪除未使用的 volume
docker volume prume -f
```