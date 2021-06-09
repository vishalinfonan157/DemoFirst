function valid()
{
	var name=document.getElementById("name").value;
	var addr=document.getElementById("addr").value;
	var mno=Number(document.getElementById("mno").value);
	var email=document.getElementById("email").value;
	var age=Number(document.getElementById("age").value);
	var pass=document.getElementById("pass").value;
	var type=document.getElementsByName("gender");
	var gender;
	if(type[0].checked)
	{
		gender="Male";
	}
	else if(type[1].checked)
	{
		gender="Female";
	}	
	
	if(name==null || name=="")
	{
		alert("Name Not Be Null ")
		return false;
	}
	
	else if(addr==null || addr=="")
	{
		alert("Please Enter Your Address ");
		return false;
	}
	else if(mno==null || mno=="")
	{
		alert("Please Enter Your Moblie Number ");
		return false;
	}
	

			else if(age==null || age=="")
	{
		alert("Please Enter Your Age  ");
		return false;
	}
	
	
        else if(document.getElementById("gender")==false )
	    {
			alert("Please Select Your Gender");
			return false;
		}
	
	
			else if(email==null || email=="")
	{
		alert("Please Enter Your Email  ");
		return false;
	}
	
	
	
	
			else if(pass==null || pass=="")
	{
		alert("Please Enter Your password");
		return false;
	}
	
	
		  
		  var mydata=[{fname:name,addrres:addr,moblie:mno,emailaddr:email,gen:gender,age1:age}];
		  
	   var table=document.getElementById("tab");
		  var row=table.insertRow();
		  var cell1=row.insertCell();
		  cell1.innerHTML="Name";
		  var cell2=row.insertCell();
		  cell2.innerHTML="Address";
		  var cell3=row.insertCell();
		  cell3.innerHTML="MOblie No";
		  
		  var cell4=row.insertCell();
           cell4.innerHTML="Email";	
		   var cell5=row.insertCell();
		   cell5.innerHTML="Age";
	    var cell6=row.insertCell();
		   cell6.innerHTML="Gender";
	    for( var i=0;i<mydata.length;i++)
		  {
			  var row=table.insertRow();
			   var cel1=row.insertCell();
			    var cel2=row.insertCell();
			    var cel3=row.insertCell();
				  var cel4=row.insertCell();
				 var cel5=row.insertCell();
				  var cel6=row.insertCell();
				 
				  cel1.innerHTML=mydata[i].fname;
				  cel2.innerHTML=mydata[i].addrres;
				  cel3.innerHTML=mydata[i].moblie;
				  cel4.innerHTML=mydata[i].emailaddr;
				  cel5.innerHTML=mydata[i].gen;
				   cel6.innerHTML=mydata[i].age1;
				 
		  }
	
	
	
	
	
	
	
	
	
	
	
	
}