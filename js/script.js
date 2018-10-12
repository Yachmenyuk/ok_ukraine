$(document).ready(function() {
	/* navigation -top */
	$("#navigation").on("click", ".select", function(){
	    $("#navigation .select").removeClass("active");
	    $(this).addClass("active"); 
	});

	/* navigation -footer */
	$("#navigation-footer").on("click", ".select", function(){
	    $("#navigation-footer .select").removeClass("active");
	    $(this).addClass("active"); 
	});

	/*About company: button show me more*/
	$('#about-button-more').on('click',function() {
		$('.text-about').toggleClass('show-more');
		this.value = this.value != 'Подробнее...' ?  'Подробнее...' : 'Скрыть'; 
	})

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