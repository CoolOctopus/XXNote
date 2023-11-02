/*
* bubble-button.js
*/

$(document).ready(function () {

    // 点击事件
    // 回到顶部
    $('.bubble.arrow-up').click(function() {
        $('html, body').animate({scrollTop:0}, '300');
    });
    // 点赞
    $('.bubble.thumbs-up').click(function() {
        // ...
    });
    // 跳转到评论区
    $('.bubble.commenting').click(function() {
        let commentTop = $('#comments-container').offset().top;
        $('html, body').animate({scrollTop:commentTop}, '300');
    });

    // 生成网页二维码
    var qrcodeElement = document.getElementById("qrcode");
    if (qrcodeElement) {
        var qrcode = new QRCode(qrcodeElement, {
            text: document.location.href,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }

});