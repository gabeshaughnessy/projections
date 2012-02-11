//Global Variables
var trendTweets; 
var searchTerm = 'twitter_img';
var current_row;
var i;
var data;
var theTweet;
var twitPic;
var rows = 0;

$('document').ready(function(){

			//Get the JSON object for each search term
			$.getJSON("http://search.twitter.com/search.json?q=" + searchTerm + "&rpp=10&include_entities=true&result_type=mixed?callback=?", 
					function(data){
					   getTweets(data); //rows is the global variable that 
						        }
						        );
		
	function getTweets(tweets) {
		//gets the tweets from a trend and appends them to the rows 
		theTweet = tweets.results[0].text; //you could change the index of results and show more tweets from each trend.
		console.log(tweets.results.length);
		
	strip_links(tweets);
	get_media(tweets);
		
	
	        }//end get tweets
	        
    function strip_links(tweets){
	    for (var i = 0; i < tweets.results.length; i++) {
		     if (tweets.results[i].entities.urls) {
		     console.log(tweets.results[i].entities.urls);
			     if(tweets.results[i].entities.urls[0]){ 
			     console.log(tweets.results[i].entities.urls[0].display_url);
			     
			    	       $('#wrapper').append('<p class=\"link_tweet\">' +tweets.results[i].entities.urls[0].display_url + '</p>');			    	    
			    	       
			    	       			    	        } 
		    	        }//end if
	    	        }//end for loop
    	        
    	        }//end of strip_links function
	        
    function get_media(tweets){
        for (var i = 0; i < tweets.results.length; i++) {
        console.log (tweets.results[i].entities);
    	     if (tweets.results[i].entities.media) {
    	     console.log(tweets.results[i].entities.media);
    		     if(tweets.results[i].entities.media[0]){ 
    		     console.log(tweets.results[i].entities.media[0].media_url);
    		     $('#wrapper').append('<li class=\"span3\"><a href=\"#\" class=\"thumbnail\"><img class=\"media_tweet\" src=\"' + tweets.results[i].entities.media[0].media_url + '\" width=\"100%\" height=\"auto\" /></a></li>');	
	    		    	   } //end if #1
    	    	        }//end if
        	        }//end for loop
    	        
    	        }//end of get_media function
	
});