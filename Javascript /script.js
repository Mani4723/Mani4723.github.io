/* ---------------------------------------------------------------------------*/
//Tab
function getTab(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
    
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



/* --------------------------------------------------------------------------*/
// Gallery 
var jsonObj = '{ "images": [' +
'{"id": 0, "url": "http://www.hdwallpaper.nu/wp-content/uploads/2015/08/Rafael_Nadal_wallpaper_004.jpg", ' + 
'"name":"nadal", "information":"Clay court king", "uDate":"21/08/2017"}, ' +  
'{"id": 1, "url": "http://7wallpapers.net/wp-content/uploads/2016/05/4_Roger-Federer.jpg", ' + 
'"name": "federer", "information":"Best tennis player of all time.", "uDate":"21/08/2017"}, ' + 
'{"id": 2, "url": "https://images8.alphacoders.com/476/thumb-1920-476725.jpg", ' +
'"name": "cristiano", "information": "Best footballer of all time.", "uDate": "21/08/2017"}, '+ 
'{"id": 3, "url": "http://media1.santabanta.com/full1/Cricket/Virat%20Kohli/virat-kohli-4a.jpg", ' +
'"name": "kohli", "information":"King of cricket", "uDate": "21/08/2017"}, ' + 
'{"id": 4, "url": "http://images.footyroom.com/avatars/54208", ' + 
'"name": "united", "information": "Manchester United Best Football club in the world.", "uDate": "21/08/2017"}, ' + 
'{"id": 5, "url": "https://s-media-cache-ak0.pinimg.com/originals/07/65/60/076560f40fc01333739626d3c3b08c08.jpg", ' + 
'"name": "dortmund", "information":"One of the best German football clubs.", "uDate": "21/08/2017"}, ' +
'{"id": 6, "url": "http://99pcwallpapers.com/wp-content/uploads/lionel-messi-black-and-white-wallpaper.jpg", ' + 
'"name": "lionel", "information":"God of Football", "uDate": "21/08/2017"} ]}';		

// Parsing gallery into js object.
//gallery = JSON.parse(jsonObj);

var gallery = [
{id: 0, url: "http://www.hdwallpaper.nu/wp-content/uploads/2015/08/Rafael_Nadal_wallpaper_004.jpg", 
 name: "nadal", information: "Clay court king", uDate: new Date("03/25/2015")}, 
{id: 1, url: "http://7wallpapers.net/wp-content/uploads/2016/05/4_Roger-Federer.jpg", 
 name: "federer", information: "Best tennis player of all time.", uDate: new Date("03/25/2015")}, 
{id: 2, url: "https://images8.alphacoders.com/476/thumb-1920-476725.jpg",                       
 name: "cristiano", information: "Best footballer of all time.", uDate: new Date("03/25/2015")},
{id: 3, url: "http://media1.santabanta.com/full1/Cricket/Virat%20Kohli/virat-kohli-4a.jpg", 
 name: "kohli", information: "King of cricket", uDate: "21/08/2017"},
{id: 4, url: "http://images.footyroom.com/avatars/54208", 
 name: "united", information: "Manchester United Best Football club in the world.", uDate: new Date("03/25/2015")},
{id: 5, url: "https://s-media-cache-ak0.pinimg.com/originals/07/65/60/076560f40fc01333739626d3c3b08c08.jpg", 
 name: "dortmund", information: "One of the best German football clubs.", uDate: new Date("03/25/2015")},
{id: 6, url: "http://99pcwallpapers.com/wp-content/uploads/lionel-messi-black-and-white-wallpaper.jpg", 
 name: "lionel", information: "God of Football", uDate:new Date("03/25/2015")}
];



/* --------------------------------------------------------------------------*/
// Modal 
// Get the modal and buttons
var modal = document.getElementById('myModal');
var btn = document.getElementById("addButton");
var span = document.getElementsByClassName("close")[0];


// addButton clicked.
btn.onclick = function() {	 
    modal.style.display = "block";
}

//close the modal
span.onclick = function() {
	document.getElementById("editImage").style.display = "none";
	document.getElementById("addImageForm").reset();
	document.getElementById("addImage").style.display = "block";
	modal.style.display = "none";
    
}

//close it by clicking anywhere
window.onclick = function(event) {
    if (event.target == modal) {
    	document.getElementById("editImage").style.display = "none";
    	document.getElementById("addImageForm").reset();
		document.getElementById("addImage").style.display = "block";
      modal.style.display = "none";
    }
}



/*---------------------------------------------------------------------------*/ 
// creating div element  
function createDiv () {
	 
   var imgDiv = document.createElement("div");
	imgDiv.className = "show-image";
	imgDiv.style.position = "relative";
	imgDiv.style.float = "left";
	imgDiv.style.margin = "5px";
	imgDiv.style.width = "400px";
	imgDiv.style.height = "280px";
	imgDiv.style.overflow = "hidden";
	
	return imgDiv;
}


//create a new image.
function createImage() {
	
	var image = document.createElement("img");
	image.className = "imgG";
	image.style.width = "100%";
	image.style.height = "100%";
	image.style.borderRadius = "5px";
	image.style.overflow = "hidden";
	
	return image;
}


//Create edit button
function createEdit() {
	var spanEdit = document.createElement("span");
	spanEdit.setAttribute("onclick", "editFunc(this.id)");	
	spanEdit.className = "update";
	var editButton = document.createElement("button");
	editButton.appendChild(document.createTextNode("edit"));
	spanEdit.appendChild(editButton);
	
	return spanEdit;
}


//Create Delete button
function createDelete() {
	
	var spanDelete = document.createElement("span");
	spanDelete.setAttribute("onclick", "removeFunc(this.id)");
	spanDelete.className = "delete";	
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("x"));
	spanDelete.appendChild(deleteButton);
	
	return spanDelete;
}



/*---------------------------------------------------------------------------*/
// loading the initial images and anytime.
function loadGallery() {
	
	var len = gallery.length;
	for (i = 0; i<len; i++) {
		
   // creating div element   
   var divImage = createDiv(); 
   //divImage.id = gallery[i].name; 
	document.getElementById("roughGallery").appendChild(divImage);
	
	
	// Now create a new image.
	var image = createImage();
	image.src = gallery[i].url;
	image.id = gallery[i].name;
	image.alt = "Error loading in " + gallery[i].name;
	divImage.appendChild(image);
	

	// Now create Edit Span buttons.
	var spanEdit = createEdit();
	spanEdit.id = gallery[i].name;
	divImage.appendChild(spanEdit);
	

	// Create a delete icon.
	var spanDelete = createDelete();
	spanDelete.id = gallery[i].name;
	divImage.appendChild(spanDelete);
	}

}
loadGallery();



/*...........................................................................*/
// Add, Edit elements.
var formEle = document.getElementById("addImageForm");
var addbtn = document.getElementById("addImage");
var editbtn = document.getElementById("editImage");



/*---------------------------------------------------------------------------*/
// When clicked on add Image.
addbtn.onclick = function () {
	
	//first validate.
	if (validateAll()) {
	

	//collect the form info
	var imgUrl = formEle.elements[0].value;
	var imgName = formEle.elements[1].value;
	var imgInfo = formEle.elements[2].value;
	var imgUdate = formEle.elements[3].value;
	

	// update jsObj
	var len = gallery.length;	
	gallery[len] = {id: len, url: imgUrl, name: imgName, information: imgInfo, uDate: imgUdate};
	

	//get div element   
   var divImage = createDiv();
	//divImage.id = imgName;
	document.getElementById("roughGallery").appendChild(divImage);
	
	
	// get new image.
	var image = createImage();
	image.src = imgUrl;	
	image.id = imgName;
	image.alt = "Error loading in " + imgName;	
	divImage.appendChild(image);
	
	
	// get edit icon
	var spanEdit = createEdit();
	spanEdit.id = imgName;
	divImage.appendChild(spanEdit);
	
	
	// get a delete icon.
	var spanDelete = createDelete();
	spanDelete.id = imgName;
	divImage.appendChild(spanDelete);
	
	 
	// closing the modal	
	modal.style.display = "none";	
	formEle.reset();
   
   }

}



/*---------------------------------------------------------------------------*/
// remove images from gallery.
function removeFunc(id) {
	
	//remove
	var child = document.getElementById(id);
	child.parentElement.remove();
   
   // updating jsObj.
	var len = gallery.length;
	for (i = 0; i<len; i++) {
		if (id == gallery[i].name) {
				gallery.splice(i, 1);
 		}
 	} 
}



/* --------------------------------------------------------------------------*/

// display info on pressing edit button
function editFunc(id) {
	
	document.getElementById("editImage").style.display = "block";
	document.getElementById("addImage").style.display = "none";
	modal.style.display = "block";
   
   var len = gallery.length;
	for (i = 0; i<len; i++) {
		if (gallery[i].name == id) {
			formEle.elements[0].value = gallery[i].url;
			formEle.elements[1].value = gallery[i].name;
			formEle.elements[2].value = gallery[i].information;
			formEle.elements[3].value = gallery[i].uDate;
			}
 	   } 
 	idenI = i;
 	idenName = id;	
}

var idenName, idenI;

//Submit the edits.
editbtn.onclick = function () {
	
	//validate	
	if (validateAll()) {
	

	// get the identity of old image place.
	var iden = idenName;
	var i = idenI;
   var spanBlock = document.getElementById(iden);
   var divBlock = spanBlock.parentElement;
   var imgBlock = divBlock.firstChild;
	
	
   // Edited info from forms	
	var imgUrl = formEle.elements[0].value;
	var imgName = formEle.elements[1].value;
	var imgInfo = formEle.elements[2].value;
	var imgUdate = formEle.elements[3].value;
      

   // edit the json object too.
   gallery[i] = {id: i, url: imgUrl, name: imgName, information: imgInfo, uDate: imgUdate};
   
   
   //Changes if any made.
   spanBlock.id = imgName; 
   imgBlock.src = imgUrl;
   imgBlock.id = imgName;
   imgBlock.className = "imgG";
   
   
 	// closing the modal	
 	modal.style.display = "none";	
	editbtn.style.display = "none";
	addbtn.style.display = "block";	
	formEle.reset();
	}
   

 	
}



/*---------------------------------------------------------------------------*/
// Validating functions
function validateAll() {
    var u = document.forms["myForm"]["urlName"].value;
    var n = document.forms["myForm"]["Name"].value;
    var i = document.forms["myForm"]["iName"].value;
    var d = document.forms["myForm"]["uName"].value;
    
    if (u == "") {
        alert("url must be filled");
        return false;
    } else if (!urlValidate(u)){
    	  alert("Please enter a valid url");
    	  return false;    
 	 } else if (n == "") {
        alert("Name must be filled");
        return false;
    } else if (i == "") {
        alert("Please provide brief information about the pic");
        return false;
    } else if (d == "") {
        alert("Date must be filled");
        return false;
    } else if (!dateValidate(d)) {
    	  alert("You can't enter a future date. Please refill the date.");		      	  
    	  return false;
    	  document.getElementById("imgaeUdate").focus();
 	 } else 
 	     return true; 	 
}
    

// Validating url.
function urlValidate(url) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  var localRegex = /\.(jpeg|jpg|gif|png)$/;
   
  if(!regex.test(url) || !localRegex.test(url)) {
    	return false;     
    
  } else {
  		return true;
  }
}


// Validating Date 
function dateValidate(input){
    var timestamp = Date.parse(input);
    var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth()+1; //January is 0!
         var yyyy = today.getFullYear();
         
         if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd;   
        var todayTimeStamp=Date.parse(today);   
    
    if(timestamp>todayTimeStamp){
            return false;
       } else {     
            return true;
       }
}



/*---------------------------------------------------------------------------*/
// Validating contact form
function validateContact() {
	  var n = document.forms["mycontactForm"]["Name"].value;
     var e = document.forms["mycontactForm"]["eName"].value;
     var m = document.forms["mycontactForm"]["mName"].value;
      
    if (n == "") {
        alert("Name must be filled");
        return false;
    } else if (e == "") {
        alert("Please provide your email-id");
        return false;
    } else if (emailValidate(e)) { 
        alert("Invalid email. Provide a valid email.");
        return false;    
    } else if (m == ""){
    	  alert("Please write briefly the reason to contact.");
    	  return false;   
    } else {
        return true;    
    }
}

function contactBtn () {
		if(validateContact()) {
		document.getElementById("contactDemo").innerHTML = "You will be contacted soon. cheers :)";
      document.getElementById("contactForm").reset();	 
    }
}

function emailValidate(email){
        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regex.test(email.value)) 
        {
            return false;
        }   
           return true;
}





