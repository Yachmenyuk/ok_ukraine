$(document).ready(function() {

/* navigation*/
	$("#navigation").on("click", ".select", function(){

    $("#navigation .select").removeClass("active");

    $(this).addClass("active"); 

	});

	$("#navigation-footer").on("click", ".select", function(){

    $("#navigation-footer .select").removeClass("active");

    $(this).addClass("active"); 

	});




/*Carousel*/
	$(function() {
		var thumbs = $('#thumbscarousel');
	 
		$('#carousel').carouFredSel({
			items: 1,
			scroll: {
				fx: 'crossfade'
			},
			auto: {
				timeoutDuration: 5000,
				duration: 2000
			},
			pagination: {
				container: '#pager',
				duration: 1500
			}
		});
	 
		thumbs.carouFredSel({
			circular: false,
			auto: false,
			width: 150,
			height: 75,
			scroll: {
				duration: 200
			},
			items: {
				visible: 1,
				width: 150,
				height: 75
			}
		});
	 
		$('#pager').hover(function() {
			var current = $('#carousel').triggerHandler( 'currentPosition' );
			thumbs.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
			$('#thumbs').stop().fadeTo(300, 1);
		}, function() {
			$('#thumbs').stop().fadeTo(300, 0);
		});
	 
		$('#pager a').mouseenter(function() {
			var index = $('#pager a').index( $(this) );
	 
			//	clear the queue
			thumbs.trigger( 'queue', [[]] );
	 
			//	scroll
			thumbs.trigger( 'slideTo', [index, { queue: true }] );
		});
	});





	/*About company: button show me more*/
	
	$('#show_more').on('click',function() {
		$('.unvisible').css('display','block');
		$('#show_more').css('display','none');
		$('#hidden_show_more').css('display','block');
	});

	$('#hidden_show_more').on('click',function() {
		$('.unvisible').css('display','none');
		$('#hidden_show_more').css('display','none');
		$('#show_more').css('display','block');
	});

	



	/*Small gallery objects*/
		/*Object 1*/
	$('#small_photo_top_1').click(function() {
		$('#big_photo_1').animate({opacity:'0.4'},400);
		$('#big_photo_1').css('background','url(img/objects/marshal_city/1.jpg) left/cover no-repeat');
		$('#big_photo_1').animate({opacity:'1'},400);
		$('#small_photo_top_1').addClass("active_photo");
		$('#small_photo_middle_1').removeClass("active_photo");
		$('#small_photo_bottom_1').removeClass("active_photo");
		
	});
	$('#small_photo_middle_1').click(function() {
		$('#big_photo_1').animate({opacity:'0.4'},400);
		$('#big_photo_1').css('background','url(img/objects/marshal_city/2.jpg) left/cover no-repeat');
		$('#big_photo_1').animate({opacity:'1'},400);
		$('#small_photo_middle_1').addClass("active_photo");
		$('#small_photo_top_1').removeClass("active_photo");
		$('#small_photo_bottom_1').removeClass("active_photo");
	});
	$('#small_photo_bottom_1').click(function() {
		$('#big_photo_1').animate({opacity:'0.4'},400);
		$('#big_photo_1').animate({opacity:'1'},400);
		$('#big_photo_1').css('background','url(img/objects/marshal_city/3.jpg) left/cover no-repeat');
		$('#small_photo_bottom_1').addClass("active_photo");
		$('#small_photo_top_1').removeClass("active_photo");
		$('#small_photo_middle_1').removeClass("active_photo");
	});

	/*Object 2*/
	$('#small_photo_top_2').click(function() {
		$('#big_photo_2').animate({opacity:'0.4'},400);
		$('#big_photo_2').css('background','url(img/objects/akademgorodok_sovinyon/1.jpg) left/cover no-repeat');
		$('#big_photo_2').animate({opacity:'1'},400);
		$('#small_photo_top_2').addClass("active_photo");
		$('#small_photo_middle_2').removeClass("active_photo");
		$('#small_photo_bottom_2').removeClass("active_photo");
		
	});
	$('#small_photo_middle_2').click(function() {
		$('#big_photo_2').animate({opacity:'0.4'},400);
		$('#big_photo_2').css('background','url(img/objects/akademgorodok_sovinyon/2.jpg) left/cover no-repeat');
		$('#big_photo_2').animate({opacity:'1'},400);
		$('#small_photo_middle_2').addClass("active_photo");
		$('#small_photo_top_2').removeClass("active_photo");
		$('#small_photo_bottom_2').removeClass("active_photo");
	});
	$('#small_photo_bottom_2').click(function() {
		$('#big_photo_2').animate({opacity:'0.4'},400);
		$('#big_photo_2').animate({opacity:'1'},400);
		$('#big_photo_2').css('background','url(img/objects/akademgorodok_sovinyon/3.jpg) left/cover no-repeat');
		$('#small_photo_bottom_2').addClass("active_photo");
		$('#small_photo_top_2').removeClass("active_photo");
		$('#small_photo_middle_2').removeClass("active_photo");
	});

	/*Object 3*/
	$('#small_photo_top_3').click(function() {
		$('#big_photo_3').animate({opacity:'0.4'},400);
		$('#big_photo_3').css('background','url(img/objects/levanevskiy/1.jpg) left/cover no-repeat');
		$('#big_photo_3').animate({opacity:'1'},400);
		$('#small_photo_top_3').addClass("active_photo");
		$('#small_photo_middle_3').removeClass("active_photo");
		$('#small_photo_bottom_3').removeClass("active_photo");
		
	});
	$('#small_photo_middle_3').click(function() {
		$('#big_photo_3').animate({opacity:'0.4'},400);
		$('#big_photo_3').css('background','url(img/objects/levanevskiy/2.jpg) left/cover no-repeat');
		$('#big_photo_3').animate({opacity:'1'},400);
		$('#small_photo_middle_3').addClass("active_photo");
		$('#small_photo_top_3').removeClass("active_photo");
		$('#small_photo_bottom_3').removeClass("active_photo");
	});
	$('#small_photo_bottom_3').click(function() {
		$('#big_photo_3').animate({opacity:'0.4'},400);
		$('#big_photo_3').animate({opacity:'1'},400);
		$('#big_photo_3').css('background','url(img/objects/levanevskiy/3.jpg) left/cover no-repeat');
		$('#small_photo_bottom_3').addClass("active_photo");
		$('#small_photo_top_3').removeClass("active_photo");
		$('#small_photo_middle_3').removeClass("active_photo");
	});
	/*Object 4*/
	$('#small_photo_top_4').click(function() {
		$('#big_photo_4').animate({opacity:'0.4'},400);
		$('#big_photo_4').css('background','url(img/objects/akademgorodok/1.jpg) left/cover no-repeat');
		$('#big_photo_4').animate({opacity:'1'},400);
		$('#small_photo_top_4').addClass("active_photo");
		$('#small_photo_middle_4').removeClass("active_photo");
		$('#small_photo_bottom_4').removeClass("active_photo");
		
	});
	$('#small_photo_middle_4').click(function() {
		$('#big_photo_4').animate({opacity:'0.4'},400);
		$('#big_photo_4').css('background','url(img/objects/akademgorodok/2.jpg) left/cover no-repeat');
		$('#big_photo_4').animate({opacity:'1'},400);
		$('#small_photo_middle_4').addClass("active_photo");
		$('#small_photo_top_4').removeClass("active_photo");
		$('#small_photo_bottom_4').removeClass("active_photo");
	});
	$('#small_photo_bottom_4').click(function() {
		$('#big_photo_4').animate({opacity:'0.4'},400);
		$('#big_photo_4').animate({opacity:'1'},400);
		$('#big_photo_4').css('background','url(img/objects/akademgorodok/3.jpg) left/cover no-repeat');
		$('#small_photo_bottom_4').addClass("active_photo");
		$('#small_photo_top_4').removeClass("active_photo");
		$('#small_photo_middle_4').removeClass("active_photo");
	});

	


	/*toggle object menu*/
	$('#first_object').click(function(){
		$('#svg_select_object').animate({
			left:'-84.91vw'
		});
		$('.first_objects_description').animate({opacity:'1'}).css('z-index','200');
		$('.second_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.third_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.fourth_objects_description').animate({opacity:'0'}).css('z-index','50');
		
	});
	$('#second_object').click(function(){
		$('#svg_select_object').animate({
			left:'-62.2vw'
		});
		$('.first_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.second_objects_description').animate({opacity:'1'}).css('z-index','200');
		$('.third_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.fourth_objects_description').animate({opacity:'0'}).css('z-index','50');
	});
	$('#third_object').click(function(){
		$('#svg_select_object').animate({
			left:'-39.5vw'
		});
		$('.first_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.second_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.third_objects_description').animate({opacity:'1'}).css('z-index','200');
		$('.fourth_objects_description').animate({opacity:'0'}).css('z-index','50');
	});
	$('#fourth_object').click(function(){
		$('#svg_select_object').animate({
			left:'-16.8vw'
		});
		$('.first_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.second_objects_description').animate({opacity:'0'}).css('z-index','150');
		$('.third_objects_description').animate({opacity:'0'}).css('z-index','50');
		$('.fourth_objects_description').animate({opacity:'1'}).css('z-index','200');
	});




	/*HOT SALES SLIDER*/
	var images_hot = ["1.jpg", "2.jpg", "3.jpg"];
	var current_image = 0;

	var flat = ["Двухкомнатная квартира на 5 этаже в секции 5 61,5м2", "Двухкомнатная квартира на 5 этаже в секции 6 54,9м2", "Трехкомнатная квартира на 1 этаже в секции 1 81,09м2"];
	var current_flat = 0;

	var cost = ["535","535","555"];
	var current_cost = 0;

	var summ_flat = ["32 902","29 371","45 004"];
	var current_summ_flat = 0;


	$("#img_hot_sales").css("background","url(img/hot_sales/"+images_hot[current_image]+") center/cover no-repeat");
	$("#flat").html(flat[current_flat]);
	$("#cost").html(cost[current_cost]);
	$("#summ_flat").html(summ_flat[current_summ_flat]);

	$("#back_hot").click(function(){
		if(current_image != 0) {
			current_image--;
			current_flat--;
			current_cost--;
			current_summ_flat--;

			
			$("#img_hot_sales").fadeToggle("fast");
			$("#left_side").fadeToggle("fast");
			setTimeout(function(){
				$("#img_hot_sales").css("background","url(img/hot_sales/"+images_hot[current_image]+") center/cover no-repeat");
				$("#flat").html(flat[current_flat]);
				$("#cost").html(cost[current_cost]);
				$("#summ_flat").html(summ_flat[current_summ_flat]);
			}, 200);
			$("#img_hot_sales").fadeToggle("fast");
			$("#left_side").fadeToggle("fast");
		}
	});

	$("#forward_hot").click(function(){
		if(current_image != images_hot.length-1) {
			current_image++;
			current_flat++;
			current_cost++;
			current_summ_flat++;

			$("#img_hot_sales").fadeToggle("fast");
			$("#left_side").fadeToggle("fast");
			setTimeout(function(){
				$("#img_hot_sales").css("background","url(img/hot_sales/"+images_hot[current_image]+") center/cover no-repeat");
				$("#flat").html(flat[current_flat]);
				$("#cost").html(cost[current_cost]);
				$("#summ_flat").html(summ_flat[current_summ_flat]);
			}, 200);
			$("#img_hot_sales").fadeToggle("fast");
			$("#left_side").fadeToggle("fast");
		}
	});

});