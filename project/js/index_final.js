$(function(){
    
	(function(){
		const $t_li = $("#match .m_title ul li");
		$t_li.eq(0).addClass("hover");

		const $data = miData.match;
		let len = $data.length;
		const $right = $("#match .m_con .m_c_right");

		for (let i = 0; i < len; i++) {
			const $ul_tmp = $("<ul></ul>");
			$right.append($ul_tmp);
		};
		const $ul = $("#match .m_con .m_c_right ul");

		$ul.eq(0).css("display","block");//让第一个ul展现出来

		$ul.each(function(index){
			let $li="";
			let $div = "";
			let numLen = $data[$data.attr[index]].number.length;

			for (var i = 0; i < 9; i++) {
				if (i<7) {
					$li = $(
						"<li>" +
							"<a href='#' class='m_c_r_img'><img src='./images/match/"+$data.attr[index]+"/"+(i+1)+".jpg' alt='' /></a>" +
							"<a href='#' class='m_c_r_title'>"+$data[$data.attr[index]].title[i]+"</a>" +
							"<p class='m_c_r_price'>" +
								"<span>"+$data[$data.attr[index]].price[i]+"元</span>" +
								/*"<del class='delPrice'><span>78</span>元</del>" +*/
							"</p>" +
							"<p class='m_c_r_comment'>"+$data[$data.attr[index]].comment[i]+"</p>" +
							/*"<div class='m_c_r_discount'>享8折</div>" +*/
						"</li>"
						);
				}else if(i==7){
					$li = $(
						"<li class='m_c_eight'>" +
							"<a href='#' class='m_c_e_title'>"+$data[$data.attr[index]].title[i]+"</a>" +
							"<a href='#' class='m_c_e_img'><img src='./images/match/"+$data.attr[index]+"/"+(i+1)+".jpg' alt=''></a>" +
							"<p class='m_c_e_price'><span>"+$data[$data.attr[index]].price[i]+"元</span></p>" +
						"</li>"
						);
				}else{
					$li = $(
						"<li class='m_c_nine'>" +
							"<a href='#' class='m_c_n_more'>浏览更多</a>" +
							"<a href='#' class='m_c_n_hot'>"+$data.tName[index]+"</a>" +
							"<a href='#' class='iconfont'>&#xe60d;</a>" +
						"</li>"
						);
				}

				for (var j = 0; j < numLen; j++) {
					if(i==$data[$data.attr[index]].number[j]){
						$div = $(
							"<div class='m_c_hide'>" +
								"<span class='review'>"+$data[$data.attr[index]].review[j]+"</span>" +
								"<span class='author'>"+$data[$data.attr[index]].author[j]+"</span>" +
							"</div>"
							);
						$li.append($div);
					}
				};

				$(this).append($li);
			}

		});

		//鼠标移入title中的li元素
		$t_li.mouseover(function(){
			let _index = $(this).index();
			$(this).addClass("hover").siblings().removeClass("hover");
			$ul.eq(_index).show().siblings().hide();
		});
	})();
})