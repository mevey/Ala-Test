alasql(['CREATE TABLE IF NOT EXISTS beige_books',
	'SELECT * INTO beige_books FROM CSV("../beige_books.csv",{headers:true})'
	]).then(function(res){
		
		var number_of_docs = alasql('SELECT COUNT(*) FROM beige_books');
		$("#no-of-docs").html(number_of_docs[0]["COUNT(*)"])

		var districts = alasql('SELECT DISTINCT(District) FROM beige_books');
		console.log(districts)
		for (var i = 0; i < districts.length; i ++) {
			html = $("#districts").html()
			$("#districts").html(html + "<option>"+ districts[i]["(District)"] +"</option>")
		}
		
	});


