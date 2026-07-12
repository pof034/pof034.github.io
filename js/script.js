// 右クリックを無効化
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// ドラッグを無効化
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});
