$(window).load(function() {

	//tab img click
	let objects = document.getElementById('objects');
	let objectDescription = Array.prototype.slice.call(document.getElementById('object_description').children);
	let svgSelectObject = document.getElementById('svg_select_object');

	objects.onclick = function(event) {
		let index;
		let target = event.target;
		let parent = target.parentNode;
		index = Array.prototype.indexOf.call(objects.children, parent);
		if(index !== -1) {
			let active = document.getElementsByClassName('active-object')[0];
			active.classList.remove('active-object');
			let show = objectDescription[index];
			show.classList.add('active-object');
			svgSelectObject.style.right = -(16.19 + index*22.71) +"vw";
		};

	};


	//description gallery click
	let photoBox = document.getElementById('object_description');
	photoBox.onclick = function(event) {
		let targetIcon = event.target;
		let bigPhoto = targetIcon.parentNode.previousElementSibling;
		 if (bigPhoto.className != 'big_photo') return; 
		let activePhoto = targetIcon.parentNode.getElementsByClassName('active_photo')[0];
		activePhoto.classList.remove('active_photo');
		targetIcon.classList.add('active_photo'); 
		bigPhoto.style.background = getComputedStyle(targetIcon).background;
	}

});
