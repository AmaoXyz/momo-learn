$(function(){
  $('body').prepend(
  	$("<div class='top'></div><div class='left'></div><div class='right'></div><div class='bottom'></div> "))
	$('.top').css({"width":"1000px","height":"100px","background-color":'red',"top":"0px"})
	$('.left').css({"width":"100px","height":"1000px","background-color":'black',"left":"100px"})
	$('.top,.left,.right,.bottom').css("position","fixed")
})
