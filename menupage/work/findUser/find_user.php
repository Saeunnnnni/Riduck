<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/* body {
	background:#000000	
} */
* {
	font-size:14px; line-height:20px; 
}

select {
	font-size:14px; height:24px; line-height:18px; padding:0px 8px;
}

.container {
	margin-top:10px; 
}
.main-content{
	margin-top: 10px;
border: 1px solid #333
}
.input-wrap, .result-wrap {
	padding:15px;
	background:#f5f5f5; 
}

.input-wrap h5 {
	padding:0px; margin:0 0 15px 0;
}

.table-head{
font-size:16px !important;

}
.table-content{
	width: 150px;
    text-align: center;
    height: 50px;
    line-height: 30px;
	border-top : 1px solid #333;
	border-bottom : 1px solid #333;
}

/* table thead{
	border : 1px solid #333;
	width : 50px;
	height:50px;
} */
</style>
<script src="./curve_lib.js"></script>
<script async defer type="text/javascript">

$(document).ready(function() {

	$("#submit").live("click", function() {

		var user_text = $("#user_text").eq(0).val();	

		var url = "https://rest.riduck.com/json-api/lab/find_user_by_text.php";
		var params = { user_text : user_text };


		var table_html = "<table><thead><th></th><th></th><th></th><th></th><th></th></thead><tbody>";

		$.post(url, params, function(json){

			var data = eval(json);	
	
			var tr_html =  "<thead>" + "<tr class='table-head'>" + "<th>keyword</th>" +
												"<th>userId</th>" +
												"<th>LoginId</th>" +
												"<th>Nicename</th>" +
												"<th>Registerd-date</th>" +
												 "</tr>" + "</thead>" +
							"<tbody>" + "</tbody>" ;

			$.each(data, function(index, user){
				
				/*
{"keyword":"\uc790\ub9b0","user_id":"3360","login_id":"kimsam3202","nicename":"kimsam3202","registerd_date":"2021-03-16 23:57:42"}]
				*/
				var tds =		"<tr class='table-list'>" + 
									"<td class='table-content'>" + user.keyword + "</td>" +
									"<td class='table-content'>" + user.user_id + "</td>" +
									"<td class='table-content'>" + user.login_id + "</td>" +
									"<td class='table-content'>" + user.nicename + "</td>" +
									"<td class='table-content'>" + user.registerd_date + "</td>" +
								"</tr>";

				tr_html += tds;

			});

		
			table_html += tr_html;
			table_html += "</tbody></table>";	

			$(".result-wrap").html(table_html);
		});

	
	});

});

</script>
</head>
<body>
<div class="content-header-wrap">
</div>
<?php include '../../header.html' ;?>
<div class="main-content">
	<div class="input-wrap">
		<textarea id="user_text"></textarea>
		<button id="submit">검색하기</button>
	</div>

	<div class="result-wrap">
	</div>
	<div class="container"></div>

</div>

</body>
</html>

