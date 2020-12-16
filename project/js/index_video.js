$(function(){
    //video
	(function(){
		const $hide = $("#video .v_hide");
		//追加样式，宽度与高度为当前window的宽度与高度
		function h_Size(){
			$hide.css({
				width:$(window).width(),
				height:$(window).height()
			});
		};
		h_Size();
		$(window).resize(h_Size);
		const $img = $("#video .v_con li img");
		const $h_con = $("#video .v_hide .v_h_con");
		const $iframe = $("#video .v_hide .v_h_con .v_h_c_content iframe");
		//点击img的时候，出现弹出层
		$img.click(function(){
			$hide.fadeIn(300).find(".v_h_con").show().stop(true).animate({
				top:"50%",
				opacity:1
			},500);
			//改变当前iframe视频的src播放地址
			var data = $(this).parent().attr("data");
			$iframe.attr("src",data);
			//改变当前title
			var html = $(this).parent().find("a").html();
			$h_con.find("h2").html(html);
		});
		
		const $close = $("#video .v_hide .v_h_con .v_h_c_title .close");
		//点击close按钮，盒子收上去并且弹出层消失
		$close.click(function(){
			$h_con.stop(true).animate({
				top:"-20%",
				opacity:0
			},600,function(){
				$hide.fadeOut(300);
			});
			//情况iframe的src
			$iframe.attr("src","");
		});
	})();
})