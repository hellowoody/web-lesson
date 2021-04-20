$(function(){
	//header and nav
	(function(){
		const $search = $("#nav .n_search");
		const $input = $("#nav .n_search .n_s_input input");
		const $hotwords = $("#nav .n_search .n_s_input .n_s_hotwords");
		const $search_hide = $("#nav .n_search .n_s_input .n_s_hide");

		//search input 获取焦点
		$input
			.focus(function(){
				$search.addClass("focus");
				$search_hide.fadeIn();
				$hotwords.fadeOut();
			})
			.blur(function(){
				$search.removeClass("focus");
				$search_hide.fadeOut();
				$hotwords.fadeIn();
			});
		
	})();//闭包
});