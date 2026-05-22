# 素養導向命題：國小自然科評量設計與 AI 輔助應用

這是一份可部署到 GitHub Pages 的 RWD 互動式 HTML 簡報。

## 檔案結構

- `index.html`：簡報主頁
- `style.css`：版面與響應式樣式
- `script.js`：投影片資料與互動功能
- `assets/images/`：每頁簡報圖片與縮圖

## 操作方式

- 鍵盤右鍵 / 空白鍵：下一頁
- 鍵盤左鍵：上一頁
- `總覽`：開啟所有投影片縮圖
- `講稿`：開啟講者備註
- `全螢幕`：進入全螢幕播放
- 手機可左右滑動切換投影片

## GitHub Pages 部署

1. 建立一個 GitHub repository。
2. 將本資料夾內所有檔案上傳到 repository 根目錄。
3. 到 `Settings` → `Pages`。
4. Source 選擇 `Deploy from a branch`。
5. Branch 選擇 `main`，資料夾選 `/root`。
6. 儲存後等待 GitHub Pages 產生網址。

## 修改簡報內容

所有投影片文字都在 `script.js` 的 `slides` 陣列中，可直接修改標題、內文、講者備註與圖片檔名。
