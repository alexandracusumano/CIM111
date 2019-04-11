$(document).ready(function(){


	$("#logicButton").mouseover(function(){
		$("#logicButton").css("background-color", "gray")
	})


	$("h1").mouseleave(function(){
		$("button").css("background-color", "pink")
	})

	$(".sm").hide()


	$("#button1").click(function(){
		$("#text1").toggle(1)
	})

	$("#button2").click(function(){
		$("#text2").toggle(1)
	})
	$("#button3").click(function(){
		$("#text3").toggle(1)
	})
	$("#button4").click(function(){
		$("#text4").toggle(1)
	})
	$("#button5").click(function(){
		$("#text5").toggle(1)
	})


	$("#visible").hide()


	var hi = true

	$("#logicButton").click(function(){
		if(hi == true){
			$("#visible").hide()
			hi = false
			$("#logicButton").html("Show")
		}
		else{
			$("#visible").show()
			hi = true
			$("#logicButton").html("Hide")
		}
	})


	var a;
	var brands = ["Dermalogica", "Urban Decay", "Stila", "Tarte"]

	$("#brandsButton").click(function(){
		for (a = 0; a < brands.length; a++){
			$("#brands").append(brands[a] + "<br>")
		}
	})




})


