function loadMenuActive(id){

	$('#js-nav-menu').find('li[class=active]').removeClass('active');

	$('#' + id ).addClass('active');

	// console.log($('#' + id ));

	// $('#' + id ).closest('li').addClass('open')

	if(id.indexOf('user') > -1){

		$('#js-nav-menu>li').eq(0).addClass('active');

	}else{
		$('#js-nav-menu>li').eq(1).addClass('active');
	}

}