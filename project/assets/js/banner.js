$(function(){
    ;(function(){
        var _index = 0 // 图片索引
        var picli = $("#b_main .b_m_pic li");
        var len = picli.length ; 
        var btn = $("#b_main .b_m_btn div")

        btn.click(function(){
            var index = $(this).index()
            if(index > 0 ) {
                _index++ // _index = _index + 1
                if(_index > len - 1){
                    _index = 0
                }
                //图片动起来
                imgPLay()
            }else{
                _index-- // _index = _index - 1
                if(_index < 0){
                    _index = len - 1
                }
                //图片动起来
                imgPLay()
            }
        })

        function imgPLay(){
            picli.eq(_index).fadeIn().siblings().fadeOut();
        }

     })() // js 闭包 立即执行函数
}); // jquery for ready