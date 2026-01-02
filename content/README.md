# 內容管理說明

本專案使用 YAML 檔案來管理日記、作品集和影片內容。

## 資料夾結構

```
content/
  diaries/      # 日記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇日記
  works/        # 作品集資料夾
    *.yaml      # 每個 YAML 檔案對應一篇作品集
  videos/       # 影片資料夾
    videos.yaml # 單一 YAML 檔案包含所有影片的相對路徑
```

## 日記格式

在 `content/diaries/` 資料夾中，每個 YAML 檔案對應一篇日記。檔案名稱（不含副檔名）會自動成為該日記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
date: "2025-01-15"
title: "開始新的學期"
preview: "今天是新學期的第一天，充滿了期待與挑戰..."
content: |
  # 開始新的學期

  今天是新學期的第一天，充滿了期待與挑戰。

  ## 新學期的目標

  - 提升程式設計能力
  - 完成至少三個專案
```

### 欄位說明

- `id`: 日記的唯一識別碼（字串）
- `date`: 日期（格式：YYYY-MM-DD）
- `title`: 日記標題
- `preview`: 預覽文字（顯示在列表頁）
- `content`: 日記內容（支援 Markdown 語法）

## 作品集格式

在 `content/works/` 資料夾中，每個 YAML 檔案對應一篇作品集。檔案名稱（不含副檔名）會自動成為該作品集的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "智能數據儀表板"
description: "企業級數據視覺化平台，支援即時數據分析與自訂報表功能"
image: "/attached_assets/generated_images/Coding_workspace_lifestyle_photo_b2ca2acb.png"
tags:
  - "React"
  - "D3.js"
  - "Node.js"
links:
  demo: "#"
  github: "#"
content: |
  # 智能數據儀表板

  這是一個企業級數據視覺化平台...
```

### 欄位說明

- `id`: 作品集的唯一識別碼（字串）
- `title`: 作品集標題
- `description`: 作品集描述
- `image`: 封面圖片 URL（必須以 `/attached_assets/` 開頭）
- `tags`: 標籤列表（陣列）
- `links`: 連結物件（可選 `demo` 和 `github`）
- `content`: 作品集內容（支援 Markdown 語法）

## 影片格式

在 `content/videos/` 資料夾中，有一個 `videos.yaml` 檔案，包含所有影片的相對路徑。

### YAML 檔案範例

```yaml
videos:
  - id: "1"
    title: "我的程式學習之旅"
    description: "分享我從零開始學習程式設計的心路歷程"
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  - id: "2"
    title: "專案展示：AI 聊天機器人"
    description: "展示我最近完成的 AI 專案功能與技術細節"
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
```

### 欄位說明

- `id`: 影片的唯一識別碼（字串）
- `title`: 影片標題
- `description`: 影片描述
- `embedUrl`: YouTube 嵌入 URL
- `thumbnail`: 縮圖 URL

## 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該內容的 URL slug。例如：`開始新的學期.yaml` 的 URL 會是 `/diary/開始新的學期`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：`image` 欄位必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/diaries/` 資料夾中的所有 YAML 檔案
2. 讀取 `content/works/` 資料夾中的所有 YAML 檔案
3. 讀取 `content/videos/videos.yaml` 檔案
4. 為每個日記和作品集自動生成 `slug`（基於檔案名稱）
5. 驗證圖片 URL 是否正確
6. 將所有內容合併成一個 JSON 檔案（`client/src/data/content.json`）
7. 按日期排序日記（最新的在前）

## 開發流程

1. 在對應的資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看內容

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

