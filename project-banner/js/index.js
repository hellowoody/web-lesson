$(function(){
	//header and nav
	(function(){
		const $shop = $("#h_main .h_m_right .h_m_r_shop");
		const $s_hide = $("#h_main .h_m_right .h_m_r_shop .h_m_r_s_hide");
		const $search = $("#nav .n_search");
		const $input = $("#nav .n_search .n_s_input input");
		const $hotwords = $("#nav .n_search .n_s_input .n_s_hotwords");
		const $search_hide = $("#nav .n_search .n_s_input .n_s_hide");
		const $one = $("#nav .n_main .n_m_one");
		const $product = $("#n_w_product");
		const $p_ul = $("#n_w_product .n_w_p_main ul");

		//search input 获取焦点
		$input.focus(function(){
			$search.addClass("focus");
			$search_hide.fadeIn();
			$hotwords.fadeOut();
		}).blur(function(){
			$search.removeClass("focus");
			$search_hide.fadeOut();
			$hotwords.fadeIn();
		});
		//h_m_r_shop h_m_r_s_hide 购物车记录
		$shop.hover(function(){
			$s_hide.stop(true).slideDown();
		},function(){
			$s_hide.stop(true).slideUp();
		});
		
		//鼠标滑动到n_m_one上，将n_w_product展示
		$one.hover(function(){
			var _index = $(this).index();
			$product.stop(true).slideDown("fast");
			$p_ul.eq(_index).show().siblings().hide();
		},function(){
			$product.hover(function(){
				$(this).stop(true).slideDown("fast");
			},function(){
				$(this).stop(true).slideUp();
			});
			$product.stop(true).slideUp();
		});

	})();//闭包
});