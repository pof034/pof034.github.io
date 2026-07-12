// ==========================
// Image Protection
// ==========================

// 右クリック禁止
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// ドラッグ禁止
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});

// テキスト選択禁止（画像サイト向け）
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});
