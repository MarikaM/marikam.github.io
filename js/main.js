function clickFunction(event){
	event.preventDefault();
	console. log('hello',this);
};
$('a').on('click', clickFunction);