window.onload=function(){
	x=3;
	var goodthree=document.getElementsByClassName('good_three');
	var goodfour=document.getElementsByClassName('good_four');
	for (var i = 0; i <=3; i++) {
		goodthree[i].style.left="0px";
		goodthree[i].style.opacity=1;
		goodfour[i].style.right="0px";
		goodfour[i].style.opacity=1;
		goodfour[i].style.transitionDelay=i*0.2+"s";
		goodthree[i].style.transitionDelay=i*0.2+"s";

	}

	var x=3,y=0;
	$("#yem").css({color:"#fff",backgroundColor:"#00c0ff"});
	$("#but").click(function(){
		x+=1;
		y+=1;
		if (x==7){
			x=7;
			$("#but").css({display:"none"});
		}else if (y==4){
			$("#but").css({display:"none"});
			$("#butt").css({display:"block"});
		}else if(x==17){
			x=17;
			$("#but").css({display:"none"});
			$("#butt").css({display:"block"});
		}else if(x==23){
			x=23;
			$("#but").css({display:"none"});
			$("#butt").css({display:"block"});
		}else{
			$("#butt").css({display:"block"});
		}

		if (z==1&&x==5){
			$("#but").css({display:"none"});
			$("#butt").css({display:"block"});
		}else if (z==2&&x==5){
			$("#but").css({display:"none"});
			$("#butt").css({display:"block"});
		}
		$("#box").animate({marginTop:-151*y+"px"})
		$("#box1").animate({marginTop:-151*y+"px"})
		$("#box2").animate({marginTop:-151*y+"px"})
		$("#box3").animate({marginTop:-151*y+"px"})
		$("#box4").animate({marginTop:-151*y+"px"})
		$(".good_three").eq(x).css({left:"0px",opacity:1});
		$(".good_four").eq(x).css({right:"0px",opacity:1});
	});


	$("#butt").click(function(){
		y-=1;
		x-=1;
		if (y==0){
			$("#butt").css({display:"none"});
			$("#but").css({display:"block"});
		}else{
			$("#but").css({display:"block"});
		}
		$(".good_three").eq(x+1).css({left:-225+"px",opacity:0});
		$(".good_four").eq(x+1).css({right:-500+"px",opacity:0});
		$("#box").animate({marginTop:-151*y+"px"});
		$("#box1").animate({marginTop:-151*y+"px"})
		$("#box2").animate({marginTop:-151*y+"px"})
		$("#box3").animate({marginTop:-151*y+"px"})
		$("#box4").animate({marginTop:-151*y+"px"})
	})

	$("#yem1").click(function(){
		y=0,x=3;
		$("#box").css({marginTop:"0px"});
		$("#box").css({display:"none"});
		$("#box1").css({display:"block",marginTop:"0px"});

		$(".good_three").eq(0).css({left:-225+"px",opacity:0});
		$(".good_four").eq(0).css({right:-500+"px",opacity:0});
		$(".good_three").eq(1).css({left:-225+"px",opacity:0});
		$(".good_four").eq(1).css({right:-500+"px",opacity:0});
		$(".good_three").eq(2).css({left:-225+"px",opacity:0});
		$(".good_four").eq(2).css({right:-500+"px",opacity:0});
		$(".good_three").eq(3).css({left:-225+"px",opacity:0});
		$(".good_four").eq(3).css({right:-500+"px",opacity:0});

		for (var i = 4; i <=7; i++) {
			$(".good_three").eq(i).css({left:-225+"px",opacity:0});
			$(".good_four").eq(i).css({right:-500+"px",opacity:0});
		}
		for (var j = 8; j <=11; j++) {
			$(".good_three").eq(j).animate({left:"0px",opacity:1});
			$(".good_four").eq(j).animate({right:"0px",opacity:1});
		}

		$("#yem1").css({color:"#fff",backgroundColor:"#00c0ff"});
		$("#yem").css({color:"#abb1c1",backgroundColor:"#fff"});
		
		$("#butt").css({display:"none"});
		$("#but").css({display:"none"});
	})

	$("#yem").click(function(){
		$("#butt").css({display:"none"});
		$("#but").css({display:"block"});
		$("#box1").css({display:"none"});
		$("#box").css({display:"block"});
		$("#yem").css({color:"#fff",backgroundColor:"#00c0ff"});
		$("#yem1").css({color:"#abb1c1",backgroundColor:"#fff"});

		for (var c = 8; c <=11; c++) {
			$(".good_three").eq(c).animate({left:-225+"px",opacity:0});
			$(".good_four").eq(c).animate({right:-500+"px",opacity:0});
		}
		for (var k = 0; k <=3; k++) {
			$(".good_three").eq(k).animate({left:"0px",opacity:1});
			$(".good_four").eq(k).animate({right:"0px",opacity:1});
		}
	})

		var z=0;
		$("#head_two").children().click(function(){
			x=3,y=0;
			$("#box").animate({marginTop:-151*y+"px"})
			$("#box1").animate({marginTop:-151*y+"px"})
			$("#box2").animate({marginTop:-151*y+"px"})
			$("#box3").animate({marginTop:-151*y+"px"})
			$("#box4").animate({marginTop:-151*y+"px"})
			z=$(this).index();
			$("#but").css({display:"block"});
			$("#butt").css({display:"none"});
			if (z==1){
				x=15;
				$("#yem1").css({display:"none"});
				$("#yem").css({color:"#fff",backgroundColor:"#00c0ff",left:"60px",display:"block"});
				for (var m = 12; m <=15; m++) {
					$(".good_three").eq(m).animate({left:"0px",opacity:1});
					$(".good_four").eq(m).animate({right:"0px",opacity:1});
				}

			}else if (z==2){
				x=21;
				$("#yem1").css({display:"none"});
				$("#yem").css({color:"#fff",backgroundColor:"#00c0ff",left:"60px",display:"block"});
				for (var n = 18; n <=21; n++) {
					$(".good_three").eq(n).animate({left:"0px",opacity:1});
					$(".good_four").eq(n).animate({right:"0px",opacity:1});
				}

			}else if (z==3){
				$("#but").css({display:"none"});
				$("#butt").css({display:"none"});
				$("#yem1").css({display:"none"});
				$("#yem").css({color:"#fff",backgroundColor:"#00c0ff",left:"60px",display:"block"});
				$("#good").children().eq(z).find($(".good_three")).animate({left:"0px",opacity:1});
				$("#good").children().eq(z).find($(".good_four")).animate({right:"0px",opacity:1});/**/
			}else if (z==0){
				$("#box1").css({display:"none"});
				$("#box").css({display:"block"});
				$("#but").css({display:"block"});
				$("#butt").css({display:"block"});
				$("#yem").css({color:"#fff",backgroundColor:"#00c0ff",left:"40px",display:"block"});
				$("#yem1").css({display:"block",color:"#abb1c1",backgroundColor:"#fff"});
				for (var d = 0; d <=3; d++) {
					$(".good_three").eq(d).animate({left:"0px",opacity:1});
					$(".good_four").eq(d).animate({right:"0px",opacity:1});
				}

			}
			$(this).css({border:"1px solid #dadada",color:"#00c0ff",borderRadius:"15px"});
			$(this).siblings().css({border:"1px solid #fff",color:"#898989",borderRadius:"15px"});
			$(".good_three").css({left:-225+"px",opacity:0});
			$(".good_four").css({right:-500+"px",opacity:0});

			$("#good").children().eq(z).css({display:"block"});
			$("#good").children().eq(z).siblings().css({display:"none"});
		})




}