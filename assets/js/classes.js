$(function () {
    var layer = layui.layer
    //获取文章分类列表
    getarticleClasses()
    function getarticleClasses() {
        $.ajax({
            method: "GET",
            url: "/my/article/cates",
            success: function (res) {

                if (res.status !== 0) {
                    return layer.msg("获取信息失败")
                }
                layer.msg("获取信息成功")
                console.log(res)
                var article = template("tpl-table", res)
                $('tbody').html(article)


            }
        })
    }
})