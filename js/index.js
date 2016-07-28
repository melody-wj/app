// JavaScript Document
$(function(){
	var index=0
	var i=$('.banner a').length
	$('.banner a').css({display:"none"}).eq(index).css({display:'block'})
	$('.banner ul li').click(function(){
		index=$(this).index()
		$('.banner a').eq(index).fadeIn().siblings().fadeOut()
        $(this).addClass('on').siblings().removeClass('on')
             })
	/*setInterval(function(){
			index++
			if(index>i-1){
				index=0;
			}
				$('.banner a').css({display:"none"}).eq(index).fadeIn().siblings().fadeOut()
           	  	$('.banner ul li').eq(index).addClass('on').siblings().removeClass('on')
			},1000)*/
	var audio=document.querySelector(".audio");
	var time=document.querySelector(".time");
	var cor=document.querySelector(".cor");
	var line1=document.querySelector(".line1");
	var cir=document.querySelector(".cir");
	var line=document.querySelector(".line");
	cor.onclick=function(){
		if(audio.paused){
			audio.play();
			cor.innerHTML="&#xe672;"
		}else{
			audio.pause();
			cor.innerHTML="&#xe78a;"
		}
	}
	var lineW=$(line).width();
	audio.ontimeupdate=function(){
		var now=parseInt(audio.currentTime);
		var m=parseInt(now/60);
		m=m<=9?"0"+m:m;
		var s=parseInt(now%60);
		s=s<=9?"0"+s:s;
		time.innerHTML=m+":"+s;
		var all=parseInt(audio.duration);
		var scal=now/all;
		line1.style.width=scal*100+"%";
		cir.style.left=scal*100+"%";
	}
	line.onmousedown=function(e){
		if(e.target.className=="line"||e.target.className=="line1"){
			var x=e.offsetX;
			var scale=x/lineW;
			line1.style.width=x+"px";
			cir.style.left=x+"px";
			var all=parseInt(audio.duration);
			audio.currentTime=scale*all;
		}else if(e.target.className=="cir"){
			document.onmousemove=function(a){
				alert(1)
				var ex=e.target.offsetLeft;
				var scale=ex/lineW;
				line1.style.width=ex+"px";
				cir.style.left=ex+"px";
				var all=parseInt(audio.duration);
				// audio.currentTime=scale*all;
			}
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		e.preventDefault();
	}
})