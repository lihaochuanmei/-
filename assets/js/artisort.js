// 写一个接口
$(function () {
    getArtisort()
    //  封装一个获取数据的函数
    function getArtisort() {
        $.ajax({
            method: "GET",
            url: "/my/article/cates",
            success: function (res) {
                console.log(res)
            }
        })
    }
})