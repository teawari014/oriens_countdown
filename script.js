window.onload = function() {
    // カウントダウン終了日時を2025年3月7日21:00に設定
    var countdownDate = new Date("2025-03-07T21:00:00").getTime();
    var countdown = document.getElementById('countdown');
    var questionImages = document.querySelectorAll('.question');
    var thumbnail = document.getElementById('thumbnail');
    var thumbnailText = document.getElementById('thumbnail-text');
    var mana = document.getElementById('mana');
    
    // 1秒ごとにカウントダウンを更新
    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        // 時間、分、秒を計算
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // カウントダウンを表示
        document.getElementById('hour').textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById('minute').textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById('second').textContent = seconds < 10 ? "0" + seconds : seconds;

        // 3月7日21:00に到達したら
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdown.style.display = "none";  // カウントダウンを消す

            // クエスチョン画像を非表示
            questionImages.forEach(function(img) {
                img.style.display = "none";
            });

            // サムネイルとテキストを表示
            thumbnail.style.display = "block";
            thumbnailText.style.display = "block";

            // さらに1分後にマナくんを表示
            setTimeout(function() {
                // マナくんをぴょこんと登場
                mana.style.display = "block";
                mana.classList.add('pop-in');
            }, 60000);
        }
    }, 1000);
};
