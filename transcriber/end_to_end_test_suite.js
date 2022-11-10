


  
export function end_to_end_write(){
   alert("end to end write test");
   const xhr = new XMLHttpRequest();

   alert("after xhr new");
   
   var patoken_var = document.getElementById("patoken");
   alert(patoken_var.value);
   
   //const octokit = new Octokit({
     //auth: "mypersonalaccesstoken123",
   //});


   alert("after auth set");

/*
   await octokit.request('POST /repos/bobbeck55/bobbeck55.github.io/actions/workflows/app.yml/dispatches', {
     owner: 'bobbeck55',
     repo: 'bobbeck55.github.io',
     workflow_id: 'app.yml',
     ref: 'refs/heads/master',
     inputs: {
	   "vmSku"="Standard_B2ms",
	   "vmCount"=3
     }
   });
   */

}









