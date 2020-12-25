$(function(){
    //content内容的实现
	(function(){
        const $li = $("#content .c_con .c_c_li");
        //给li上面的border-top更换颜色
		$li.each(function(i){
			var color = "#f60";
			switch(i){
				case 1:
					color = "#83c44e";
					break;
				case 2:
					color = "#e53935";
					break;
				case 3:
					color = "#2196f3";
					break;
			}
			$(this).css("border-color",color).find("h3").css("color",color);
        });
        //鼠标划入$li的时候，将btn出现
		$li.hover(function(){
			$(this).find(".btn").fadeIn(500);
		},function(){
			$(this).find(".btn").fadeOut(500);
		});

        const $tabLi = $("#content .c_con .c_c_li .tab li");
        const $box_wrap = $("#content .c_con .c_c_li .box_wrap");
        var len = $box_wrap.length;//4
        
        //给$box_wrap附加一个属性a
		$box_wrap.each(function(){
			this.a = 0;
		});
        //点击tabli的时候
		$tabLi.click(function(){
			//给当前所点击的li增加on样式
			$(this).addClass("on").siblings().removeClass("on");
			//获取当前点击的tabli的索引
			let index = $(this).index();
			let pIndex = $(this).parent().parent().parent().index();
            $box_wrap.eq(pIndex)[0].a = index;//javascript的索引
			$box_wrap.eq(pIndex).stop(true).animate({
				marginLeft:-296*$box_wrap.eq(pIndex)[0].a
			},300);
        });

        var $btn = $("#content .c_con .c_c_li .btn div");
        
        //点击$btn触发事件
		$btn.click(function(){
			var index = $(this).index();
			var pIndex = $(this).parent().parent().index();
			if(index>0){//点击的为右按钮
				if(pIndex>0){
					if($box_wrap.eq(pIndex)[0].a<len-1){
						$box_wrap.eq(pIndex)[0].a++;
					}
				}else{
					if($box_wrap.eq(pIndex)[0].a<len-2){
						$box_wrap.eq(pIndex)[0].a++;
					}
				}
			}else{
				if($box_wrap.eq(pIndex)[0].a>0){
					$box_wrap.eq(pIndex)[0].a--;
				}
			}
			//控制ul滚动切换
			$box_wrap.eq(pIndex).stop(true).animate({
				marginLeft:-296*$box_wrap.eq(pIndex)[0].a
			},300);
			//控制li的颜色的切换
            $("#content .c_con .c_c_li .tab")
                .eq(pIndex).find("li")
                .eq($box_wrap.eq(pIndex).get(0).a)
                .addClass("on")
                .siblings()
                .removeClass("on");
		});
	})();
})