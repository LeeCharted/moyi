window.onload=function(){
	// 轮播
	$(".btn_src span").eq(0).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
	var x=0;flag=true;
	var w=$(".ban_box img").width();
	// 周期轮播
	var ban_time=setInterval(function(){
		x+=1;
		if (x>2) {
			x=1;
			$(".ban_box").css({marginLeft:0});
		};

		$(".btn_src span").css({backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0.3)"});
		if (x==2) {
			$(".btn_src span").eq(0).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		}
		else {
			$(".btn_src span").eq(x).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		};
		$(".ban_box").animate({marginLeft:-w*x},500);
	},3000)
	// 分页器
	$(".btn_src span").click(function(){
		clearInterval(ban_time);
		$(".btn_src span").css({backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0.3)"});
		$(this).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		var y=$(this).index();
		if (x==2) {
			$(".ban_box").css({marginLeft:0});
		}
		x=y;
		$(".ban_box").animate({marginLeft:-w*x},500);
	});
	// 左箭头
	$(".but_l").click(function(){
		clearInterval(ban_time);
		if (flag) {
			flag=false;
		x-=1;
		if (x<0) {
			x=1;
			$(".ban_box").css({marginLeft:-2*w});
		}
		$(".ban_box").animate({marginLeft:-w*x},500);
		$(".btn_src span").css({backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0.3)"});
		$(".btn_src span").eq(x).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		setTimeout(function(){flag=true},500);
		}
	})
	// 右箭头
	$(".but_r").click(function(){
		clearInterval(ban_time);
		if (flag) {
			flag=false;
		x+=1;
		if (x>2) {
			x=1;
			$(".ban_box").css({marginLeft:0});
		}
		$(".btn_src span").css({backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0.3)"});
		if (x==2) {
			$(".btn_src span").eq(0).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		}
		else {
			$(".btn_src span").eq(x).css({backgroundColor:"#00C0FF",borderColor:"#00C0FF"});
		};
		$(".ban_box").animate({marginLeft:-w*x},500);
		setTimeout(function(){flag=true},500);
		}
	})
	// 渐入渐出
	var bgc=document.getElementById('bgc');
	$(window).scroll(function(){
		var ele=$(document).scrollTop()||$("body").scrollTop();
		if(ele>30){
				bgc.style.height="62px";
				back.style.display="block";
			}else{
				bgc.style.height="0";
				back.style.display="none";
			}
		if (ele>60) {
			$(".user_box li").css({transform:"translateY(0)"});
		}
		if (ele>470) {
			$(".pro_pic_box a").eq(0).css({transform:"translateY(0)"});
			$(".pro_pic_box a").eq(1).css({transform:"translateY(0)",transitionDelay:"0.2s"});
			$(".pro_pic_box a").eq(2).css({transform:"translateY(0)",transitionDelay:"0.4s"});
		}
		if (ele>960) {
			$(".pro_pic_box a").eq(3).css({transform:"translateY(0)"});
			$(".pro_pic_box a").eq(4).css({transform:"translateY(0)",transitionDelay:"0.2s"});
			$(".pro_pic_box a").eq(5).css({transform:"translateY(0)",transitionDelay:"0.4s"});
		}
		if (ele>1450) {
			$(".pro_pic_box a").eq(6).css({transform:"translateY(0)"});
			$(".pro_pic_box a").eq(7).css({transform:"translateY(0)",transitionDelay:"0.2s"});
			$(".pro_pic_box a").eq(8).css({transform:"translateY(0)",transitionDelay:"0.4s"});
		}
		if (ele>1940) {
			$(".pro_pic_box a").eq(9).css({transform:"translateY(0)"});
			$(".pro_pic_box a").eq(10).css({transform:"translateY(0)",transitionDelay:"0.2s"});
			$(".pro_pic_box a").eq(11).css({transform:"translateY(0)",transitionDelay:"0.4s"});
		}
		if (ele>2600) {
			$(".ser_tit h1").css({transform:"translateY(0)",transitionDelay:"0.5s"});
			$(".ser_tit h2").css({transform:"translateY(0)",transitionDelay:"0.5s"});
		}
		if (ele>2760) {
			$(".ser_info_l").eq(0).css({transform:"translateX(0)",transitionDelay:"0.5s"});
			$(".ser_info_r").eq(0).css({transform:"translateX(0)",transitionDelay:"0.5s"});
		}
		if (ele>2910) {
			$(".ser_info_l").eq(1).css({transform:"translateX(0)",transitionDelay:"0.5s"});
			$(".ser_info_r").eq(1).css({transform:"translateX(0)",transitionDelay:"0.5s"});
		}
		if (ele>3060) {
			$(".ser_info_l").eq(2).css({transform:"translateX(0)",transitionDelay:"0.5s"});
			$(".ser_info_r").eq(2).css({transform:"translateX(0)",transitionDelay:"0.5s"});
		}
		if (ele>3210) {
			$(".ser_info_l").eq(3).css({transform:"translateX(0)",transitionDelay:"0.5s"});
			$(".ser_info_r").eq(3).css({transform:"translateX(0)",transitionDelay:"0.5s"});
		}
		if (ele>3500) {
			$(".uemo_tit h1").css({transform:"translateY(0)",transitionDelay:"0.5s"});
			$(".uemo_tit h2").css({transform:"translateY(0)",transitionDelay:"1s"});
		}
		if (ele>5240) {
			$(".con_tit h1").css({transform:"translateY(0)",transitionDelay:"0.5s"});
			$(".con_tit h2").css({transform:"translateY(0)",transitionDelay:"0.8s"});
			$(".con_l").css({transform:"translateX(0)",transitionDelay:"0.8s"});
			$(".con_r").css({transform:"translateX(0)",transitionDelay:"0.8s"});
		}
		$("#back").click(function(){
			var e= $(document)||$("body");
			var a = 0,b=0;
			var t=setInterval(function(){
				a+=50;
				b = e.scrollTop()-a;
				if(b<=0){
					clearInterval(t);
					e.scrollTop(0);
				}else{
			 		e.scrollTop(b);
				}	
			},30)
		})	
	})
}

