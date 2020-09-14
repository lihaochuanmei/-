// 入口函数
$(function () {
    // 刷新页面立马调用获取用户信息的函数
    getUserInfo()
    //    封装获取用户的函数
    function getUserInfo() {
        $.ajax({
            method: "GET",
            url: "/my/userinfo",
            headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function (res) {
                if (res.status !== 0) {
                    return "获取用户基本信息失败"
                }
                console.log(res)
            }
        })
    }
})