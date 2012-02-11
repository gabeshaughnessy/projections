//Global Variables
var trendTweets; 
var searchTerm;
var current_row;
var i;
var data;
var theTweet;

var rows = 0;

$('document').ready(function(){

	function getTrends(theTrends){
		//Get the trends from the twitter api and create a row for each trend. Add the name of the trend to each row.
		
		for (var i = 0; i < theTrends[0].trends.length; i++) {
			searchTerm = theTrends[0].trends[i].query;
			$('#wrapper').append(
			'<div id=\"row' + i + '\" class=\"row\"><div class=\"trend span3\"></div><div class=\"user span2\"><img class=\"user_img\" src="" width=\"50px\" height=\"auto\" alt=\"user image from twitter\" /></div><div class=\"tweet span4\"></div></div>'
			);
			//Get the JSON object for each search term
			$.getJSON("http://search.twitter.com/search.json?q=" + searchTerm + "&rpp=5&include_entities=true&result_type=mixed?callback=?", 
					function(data){
					   getTweets(data, rows);//rows is the global variable that keeps track of the row.
					   rows++;
						        });
				        
				
			current_row = '#row' + i;
			$(current_row + ' .trend').append(theTrends[0].trends[i].name);
			console.log('row ' );
			}
		}
	
	function getTweets(tweets, count) {
		//gets the tweets from a trend and appends them to the rows 
		theTweet = tweets.results[0].text; //you could change the index of results and show more tweets from each trend.
		       $('#row'+ count + ' .tweet').append(tweets.results[0].text);
		        $('#row'+ count + ' .user_img').attr('src', tweets.results[0].profile_image_url); 
		        }
	        
	<!-- Get The trends for a WOEID -->
	$.getJSON("https://api.twitter.com/1/trends/2357536.json?callback=?",
		function(data){
		trendTweets = data;
		getTrends(trendTweets);
		 });        

});

