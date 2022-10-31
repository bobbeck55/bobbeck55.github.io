
function end_to_end(){

   //month = document.getElementById('month').value;
   alert("hello world");
   
   const xhr = new XMLHttpRequest();
   
   alert("after xhr new");
   
   //const url = `https://api.github.com/users/bobbeck55/repos`;
   const url = `https://api.github.com/users/bobbeck55/repo/bobbeck55.github.io`;
   
   alert("after url");
	  
   xhr.open('GET', url, true);
   
   alert("after open");
   
   xhr.onload = function() {
    
	    alert("onload function");
		
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        		
        alert("after json parse");
		
        // Log the response
		
		for (let i in data) {

		   str = "repo: " + data[i].name;
		   alert(str);
		   
		   str = "description: " + data[i].description;
		   alert(str);
		   
		   str = "url: " + data[i].html_url;
		   alert(str);
		   
		}
   }
   alert("after onload");
   
   xhr.send();
   
   alert("after send");
}