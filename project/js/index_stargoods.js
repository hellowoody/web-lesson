$(function(){
    //starGoods
	(function(){
		const $data = miData.starGoods;  //模拟获取后台数据
		const len = $data.imgSrc.length; //获取li的个数
		const $ul = $("#starGoods .s_goods ul");
		let html = "";
		
		for(let i=0; i<len; i++){
			html += "<li>"+
						"<a href='' class='s_g_img'><img src='"+$data.imgSrc[i]+"'/></a>"+
						"<a href='' class='s_g_title'>"+$data.titles[i]+"</a>"+
						"<p class='s_g_detail'>"+$data.detail[i]+"</p>"+
						"<p class='s_g_price'>"+$data.price[i]+"</p>"+
					"</li>";
		}
		$ul.append(html);//appendChild
		
		const $li = $("#starGoods .s_goods ul li");
		var borderTopColor = ["1px solid #ffac13","1px solid #83c44e","1px solid #2196f3","1px solid #e53935","1px solid #00c0a5"]; 
		for (let i = 0; i < len; i++) {
			var j = i % 5;
			$li.eq(i).css("border-top",borderTopColor[j]);
		};

		const $btn = $("#starGoods .s_title .s_t_btn div");
		const margin = $li.eq(5).position().left;
		let flag = true;
		$btn.click(function(){
			let index = $(this).index();
			if(index){//如果点击的是右边
				if(flag){
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:-margin
					},500);
					toggle();
				}	
			}else{
				if(!flag){
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:0
					},500);
					toggle();
				}
			}
		});
		var $left = $("#starGoods .s_title .s_t_btn .s_t_b_left");
		var $right = $("#starGoods .s_title .s_t_btn .s_t_b_right");
		//实现click样式的轮播切换
		function toggle(){
			$left.toggleClass("click");
			$right.toggleClass("click");
		};
	})();
})