$(function(){
    //左侧nav的二级导航
	(function(){
		const $nav_li = $("#b_nav>ul>li");
		$nav_li.hover(function(){
			//将对应的hide部分显示
			$(this).find(".b_n_hide").show();
		},function(){
			//将对应的hide部分隐藏
			$(this).find(".b_n_hide").hide();
		});
	})();
})