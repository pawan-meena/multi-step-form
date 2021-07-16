
  
   $('.q').click(function(e){
   $('.e,textarea').attr({readonly:"",})
  });
    $('.qq.qqq').click(function(e){   
            $('.e,textarea').removeAttr("readonly");
    });
 $('.e').click(function(e){
    return false;
  });
 var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
$(document).ready(function()
 {$(".sx").click(function() {
var value1 = $("#fname").val();
var value2 = $("#des").val();
var value3 = $("#mobile").val();
var value4 = $("#email").val();
var value5 = $("#se").val();
var value6 = $("#ed").val();
var value7 = $("#time").val();
$("#fname1").val(value1);
$("#des1").val(value2);
$("#mobile1").val(value3);
$("#email1").val(value4);
$("#se1").val(value5);
$("#ed1").val(value6);
var value9= $("#des11").val();
var value15= $(".offered").html();
$(".e").html(value15);
$(".des11").val(value9);
var value10= $("#des12").val();
$(".des12").val(value10);
var value11= $("#des13").val();
$(".des13").val(value11);
var value12= $("#des13").val();
$(".des13").val(value12);
var value13= $("#des14").val();
$(".des14").val(value13);
var value14= $("#des15").val();
$(".des15").val(value14);
var value7 = $("#time").val();
var value20 = $("#time1").val();
$("#time2").val(value7);
$("#time3").val(value20)
if ((value1.length<4) || (value1.length>40)){

alert('Plase fill name(length min:4 max:40) field');
}
else if ((value2.length<10) || (value2.length>300)) {
alert('Plase fill description(length min:10 max:300) field');

}
else if ((value3.length<10) || (value3.length>12)) {
alert('Plase fill  mobile(length min:10 max:12) field');

}
else if (!testEmail.test(value4))
  {
alert('Plase fill  email field');
  }

else{
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});


$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});


}


});

});






$(document).ready(function()
 {$(".q").click(function() {
var value1 = $("#fname").val();
var value2 = $("#des").val();
var value3 = $("#mobile").val();
var value4 = $("#email").val();
var value5 = $("#se").val();
var value6 = $("#ed").val();
var value7 = $("#time").val();
$("#fname1").val(value1);
$("#des1").val(value2);
$("#mobile1").val(value3);
$("#email1").val(value4);
$("#se1").val(value5);
$("#ed1").val(value6);
var value9= $("#des11").val();
var value15= $(".offered").html();
$(".e").html(value15);
$(".des11").val(value9);
var value10= $("#des12").val();
$(".des12").val(value10);
var value11= $("#des13").val();
$(".des13").val(value11);
var value12= $("#des13").val();
$(".des13").val(value12);
var value13= $("#des14").val();
$(".des14").val(value13);
var value14= $("#des15").val();
$(".des15").val(value14);
var value7 = $("#time").val();
var value20 = $("#time1").val();
$("#time2").val(value7);
$("#time3").val(value20)

if (value5==0) {
alert('Plase fill services field');
}

else if (value6==0) {
alert('Plase fill eductional background field');

}
else if (value20==0||value7==0){
alert('Plase fill timesloat field');
}

else{
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});


$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});


}


});

});