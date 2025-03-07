// ボタンを押すとテキストが変更され、3秒後に元に戻る
function changeText() {
    let textElement = document.getElementById("text");

    // 変更前のテキストを保存
    let originalText = textElement.innerText;

    // テキストを変更し、クラスを適用
    textElement.innerText = "テキストが変わりました！";
    textElement.classList.add("changed");

    // 3秒後に元のテキストに戻し、クラスを削除
    setTimeout(() => {
        textElement.innerText = originalText;

        // ⭐️ クラスを削除する前に、一瞬遅らせることで CSS の変化を適用しやすくする
        setTimeout(() => {
            textElement.classList.remove("changed");
        }, 100); // 0.1秒遅らせる
    }, 3000);
}


