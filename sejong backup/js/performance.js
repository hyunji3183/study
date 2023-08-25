$(document).ready(function () {
    $('main.performance .visual .fade_slider').slick({
        fade: true,
        swipe:false,
        arrows:false,
        asNavFor:'.recommend_slider'
    });
    $('main.performance .visual .recommend_slider').slick({
        arrows:false,
        slidesToShow:5,
        slidesToScroll:1,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        variableWidth:true,
        focusOnSelect:true,
        centerMode:true,
        touchThreshold:1000,
        asNavFor:'.fade_slider'
    });
    $('main.performance .sorting .performance_list > li figure figcaption .info_wrap .btn_like').click(function(){
        $(this).css({backgroundColor:'#9988FF'});
        $(this).before().css({backgroundColor:'#9988FF'});
        $(this).after().css({backgroundColor:'#9988FF'});
    });
});


$.ajax({
	url: "http://openapi.seoul.go.kr:8088/66585264716973653438574d5a5a64/xml/SJWPerform/1/10",
	dataType: 'xml',
	beforeSend: function () { console.log('로딩중....') },
	complete: function () { console.log('로딩끝내기') },
	success: function (data) {


		// console.log($(data).html());
		// let xmlParser = new DOMParser(); //DOM파서 객체를 생성 
		// let xmlDoc = xmlParser.parseFromString(data, "text/xml"); // parseFromString() 메소드를 이용해 문자열을 파싱함. 
		// console.log(xmlDoc);
	},
	error: function () { }

	// url: "./data.json",
	// success: function (data) {
	// 	let tag = "";
	// 	$.each(data.items, function (key, value) {
	// 		tag += `<div class="thumb">
	// 					<a href="${value.detail}" class="image">
	// 						<img src="${value.thumb}" alt="" />
	// 					</a>
	// 					<h2>${value.name}</h2>
	// 				</div>`;
	// 	});
	// 	$("#main").html(tag);
	// },
	// error: function () { },
});

$(window).on("load", function () {
	
});