$(function(){
	//header and nav
	(function(){
		var $shop = $("#h_main .h_m_right .h_m_r_shop");
		var $s_hide = $("#h_main .h_m_right .h_m_r_shop .h_m_r_s_hide");

		//h_m_r_shop h_m_r_s_hide 购物车记录
		$shop.hover(function(){
			$s_hide.stop(true).slideDown();
		},function(){
			$s_hide.stop(true).slideUp();
		});
		
		

	})();//闭包

});