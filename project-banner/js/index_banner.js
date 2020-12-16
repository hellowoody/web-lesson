$(function(){
    //banner图的轮播切换
	(function(){
		const $picLi = $("#b_main .b_m_pic li");
        const $btn = $("#b_main .b_m_btn div");
        const $tabLi = $("#b_main .b_m_tab ul li");
        const $b_main = $("#b_main");
        let len = $picLi.length;//5
        let _index = 0;//全局索引
        let timer = null;//定时器
        
        //点击左右按钮
		$btn.click(function(){
			let index = $(this).index();
			if(index>0){//判断若点击的是右按钮
				_index++;//_index = _index+1;
				if(_index > len-1){
					_index = 0;
				}
				plays();
			}else{
				_index--;
				if(_index < 0){
					_index = len-1;
				}
				plays();
			}
		});

        $tabLi.click(function(){
            _index = $(this).index();
			plays();
        })

		//统一功能函数封装
		function plays(){
			$tabLi.eq(_index).addClass("click").siblings().removeClass("click");
			$picLi.eq(_index).fadeIn().siblings().fadeOut();
        };
        
        //定时轮播
		function auto(){
			timer = setInterval(function(){
				_index++;
				if(_index > len-1){
					_index = 0;
				}
				plays();
			},2000);
		}
		auto();//默认执行定时轮播

        //鼠标移入b_main停止定时，离开继续
		$b_main.hover(function(){
			clearInterval(timer);//清除定时器
		},function(){
			auto();//执行定时器轮播效果
		});

	})();
})