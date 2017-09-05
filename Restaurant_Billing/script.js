/*-----------------------------Search bars-----------------------------------*/
// Search bar for Menu
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myMenu");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// Search bar for Tables
function tableSearch() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("tInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



/*------------------------Tables, Menu-Items objects-------------------------*/
//Data from objects.
var tables = [{table_id: 1, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 2, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 3, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 4, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 5, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 6, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 7, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0},
				  {table_id: 8, 
				  num_of_items: 0, 
				  items: [], 
				  Bill: 0}];
				  
				  
var menu_items = [{item_id: 1, item_name: "Veg Sweet corn Soup", cost: 125, category: "soup"},
						{item_id: 2, item_name: "Veg Hot & Sour Soup", cost: 120, category: "soup"},
						{item_id: 3, item_name: "Veg Thai Tom Kha", cost: 130, category: "soup"},
						{item_id: 4, item_name: "Veg Thai Tom Yum", cost: 135, category: "soup"},
						{item_id: 5, item_name: "Non Veg Manchow Soup", cost: 145, category: "soup"},
						{item_id: 6, item_name: "Non Veg Thukpa Soup", cost: 145, category: "soup"},
						{item_id: 7, item_name: "Chicken Lemon & Coriander", cost: 145, category: "soup"},
                  {item_id: 8, item_name: "Veg Fried Wontons", cost: 225, category: "starter"},
						{item_id: 9, item_name: "Crispy Chilli Potato", cost: 245, category: "starter"},
						{item_id: 10, item_name: "Ting Ming Mushroom", cost: 260, category: "starter"},
						{item_id: 11, item_name: "Chicken in Black Pepper Sauce", cost: 325, category: "starter"},
						{item_id: 12, item_name: "Kung Pav Chicken", cost: 345, category: "starter"},
						{item_id: 13, item_name: "Chilli Garlic Crispy Chicken", cost: 295, category: "starter"},
						{item_id: 14, item_name: "Crispy Chilli Lamb", cost: 365, category: "starter"},						
						{item_id: 15, item_name: "Shredded Lamb in Schezwan Sauce ", cost: 385, category: "main course"},
						{item_id: 16, item_name: "Lemon Coriander Fish", cost: 395, category: "main course"},
						{item_id: 17, item_name: "Chicken Chilli Garlic Rice", cost: 190, category: "main course"},
						{item_id: 18, item_name: "Veg Pad Thai Noodles", cost: 255, category: "main course"},
						{item_id: 19, item_name: "Stir Fried Asian Greens", cost: 295, category: "main course"},
						{item_id: 20, item_name: "Baby corn Broccoli", cost: 265, category: "main course"},
						{item_id: 21, item_name: "Veg Thai Green Curry", cost: 300, category: "main course"}];


var initialTables = [{Table_id: "t1", table_name: "Table 1", table_num: "1"},
							{Table_id: "t2", table_name: "Table 2", table_num: "2"},
							{Table_id: "t3", table_name: "Table 3", table_num: "3"},
							{Table_id: "t4", table_name: "Table 4", table_num: "4"},
							{Table_id: "t5", table_name: "Table 5", table_num: "5"},
							{Table_id: "t6", table_name: "Table 6", table_num: "6"},
							{Table_id: "t7", table_name: "Table 7", table_num: "7"},
							{Table_id: "t8", table_name: "Table 8", table_num: "8"}];
							
							
							
/*---------------------Load Menu Items--------------------------------------*/
// Load Menu

function loadMenu() {
	
	for (var i = 0; i < menu_items.length; i++) {
		var row = document.createElement("tr");
      var td = document.createElement("td");
      row.id = menu_items[i].item_id;
      row.setAttribute("draggable", "true");
      row.setAttribute("ondragstart", "drag(event)");
      //var div = document.createElement("div");
      var items = document.createElement("h4");
      items.innerHTML = menu_items[i].item_name;
      var cost = document.createElement("p");
      cost.innerHTML = menu_items[i].cost + ",  " + menu_items[i].category;
 
      
      document.getElementById("myMenu").appendChild(row);
      row.appendChild(td);
      td.appendChild(items);
      td.appendChild(cost);
   }    
}						
loadMenu();						




/*--------------------Load Tables data---------------------------------------*/
//Load Tables
function loadTables() {
	 
	 for (var i = 0; i < initialTables.length; i++) {
	 	
	 	//create table elements 
		var row = document.createElement("tr");
      var td = document.createElement("td");
      var tname = document.createElement("h4");
      var rs = document.createElement("p");
      var cost = document.createElement("p");
      var sep = document.createElement("p");
      var tItems = document.createElement("p");
      var items_num = document.createElement("p");
      
      //add attributes and elements.
      row.id = initialTables[i].Table_id;
      row.className = "table-" + initialTables[i].table_num;
      td.className = "table-" + initialTables[i].table_num;
      td.setAttribute("ondrop", "drop(event)");
      td.setAttribute("ondragover", "allowDrop(event)");
      td.setAttribute("onclick", "openModal(this)");
      tname.className = "table-" + initialTables[i].table_num;
      tname.innerHTML = initialTables[i].table_name;
      rs.className = "table-" + initialTables[i].table_num;
      rs.style.display = "inline";
      rs.innerHTML = "Rs. ";
      cost.className = "table-" + initialTables[i].table_num;
      cost.style.display = "inline";
      cost.innerHTML = 0;
      cost.id = "totalBill";
      sep.className = "table-" + initialTables[i].table_num;
      sep.style.display = "inline";
      sep.innerHTML = " | ";
      tItems.className = "table-" + initialTables[i].table_num;
      tItems.style.display = "inline";
      tItems.innerHTML = "Total Items:";
      items_num.className = "table-" + initialTables[i].table_num;
      items_num.style.display = "inline";
      items_num.innerHTML = 0;
      items_num.id = "numItems";
      
      
      //append child
      document.getElementById("myTable").appendChild(row);
      row.appendChild(td);
      td.appendChild(tname);
      td.appendChild(rs);
      td.appendChild(cost);
      td.appendChild(sep);
      td.appendChild(tItems);
      td.appendChild(items_num);        
   }    

}
loadTables();




/* -------------------Modal for Order details--------------------------------*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	 removeAll();
    modal.style.display = "none";
    for (var i = 0; i < initialTables.length; i++) {
    	document.getElementById(initialTables[i].Table_id).style.backgroundColor = "white";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    	  removeAll();
        modal.style.display = "none";
        for (var i = 0; i < initialTables.length; i++) {
        	document.getElementById(initialTables[i].Table_id).style.backgroundColor = "white";
        }     
    }
}								



/*--------------------Drag and Drop------------------------------------------*/
// Drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var item_name = menu_items[data - 1].item_name;
    var cost = menu_items[data-1].cost;
    
    //console.log(item_name);
    //console.log(cost);
 	 //console.log(ev.target.className);   
    //console.log(ev);
    
    var classiden = ev.target.className;
    var iden = classiden.substr(-1);
    
    
    
    if (iden != "") {
    	   
    	   //if item is already present.
    	   var i, sameI;
    	   var len = tables[iden-1].items.length;
    	   console.log(len);
    	   for (i = 0; i < len; i++) {
				if (tables[iden-1].items[i].item_name == item_name) {
							sameI = i; break;			
				}    	   
    	   }
    	   
    	   // update the tables object.
    	   if (len == 0) {
         	tables[iden-1].Bill = cost;
				tables[iden-1].items[len] = {sno: len+1, item_name: item_name, price: cost, quant: 1};
				tables[iden-1].num_of_items = 1;
    	   	
    	   } else if (Number.isInteger(sameI)) {
				tables[iden-1].items[i].quant += 1;
				tables[iden-1].items[i].price += cost;
				tables[iden-1].Bill += cost;				   	   
    	   } else {
				var len = tables[iden-1].items.length;
         	tables[iden-1].Bill = tables[iden-1].Bill + cost;
				tables[iden-1].items[len] = {sno: len+1, item_name: item_name, price: cost, quant: 1};
				tables[iden-1].num_of_items += 1;
			}
			
			// update the display on tables.
			var classes = document.getElementsByClassName(classiden);
	 		classes[4].innerHTML = tables[iden-1].Bill;
	 		classes[7].innerHTML = tables[iden-1].num_of_items;
	  }
    
     //console.log(tables[iden-1]);
    
}




/*-------------------open the details modal----------------------------------*/
// When the user clicks the button, open the modal 
function openModal(element) {
	
	 var i;
    var classiden = element.className;
    element.parentElement.style.backgroundColor = "orange";
    var iden = classiden.substr(-1); 
    //console.log(classiden, iden);
    var len = tables[iden-1].items.length;    
    document.getElementById("tableNum").innerHTML = iden;
       
    if (iden != "" && len > 0 ) {
    	
    	for (i = 0; i < len; i++) { 
    				
		//create a row.
		var row = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var input = document.createElement("input");
      var td5 = document.createElement("td");     
      var delbutton = document.createElement("button");
      
      // add attributes
      td1.className = "modalserial";
      td2.className = "modalItemName";
      td3.className = "modalPrice";
      td4.className = "modalQuant" 
      input.setAttribute("type", "number");
      input.setAttribute("min", 1);
      input.setAttribute("onkeypress", "return event.charCode >= 48");
      input.setAttribute("oninput", "editServings(this)");
      //input.setAttribute("max", 10);
      delbutton.setAttribute("onclick", "deleteItem(this)");
      delbutton.className = "modalDelete";
      
      //add values
      delbutton.innerHTML = "del";
      td1.innerHTML = tables[iden-1].items[i].sno;
      td2.innerHTML = tables[iden-1].items[i].item_name;
      td3.innerHTML = tables[iden-1].items[i].price;
      input.value = tables[iden-1].items[i].quant;
      
      //append all
      td4.appendChild(input);
      td5.appendChild(delbutton);
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      
      var table = document.getElementById("modalTableBody");
      table.appendChild(row);  
      }
      
      //Total bill
      document.getElementById("totalAmt").innerHTML = tables[iden-1].Bill;      
    }
    modal.style.display = "block";
}



/*-------------------Cleaning modal upon closing-----------------------------*/
// Removing all from Modal.
function removeAll() {
    var table = document.getElementById("modalTableBody");
    while (table.hasChildNodes()) {
    		table.removeChild(table.lastChild);
    }
    document.getElementById("totalAmt").innerHTML = "";
 }



/*------------------Edit the servings----------------------------------------*/
//on changing servings
function editServings(element) {
	
	  //Get the values and ids
	  var tableId = document.getElementById("tableNum").innerHTML;
	  var row = element.parentElement.parentElement;
	  var serial = row.firstChild.innerHTML;
	  var it_name = row.childNodes[1].innerHTML;
	  var menu_len = menu_items.length;
	  var i, singlePrice;
	  for (i = 0; i < menu_len; i++) {
			if (menu_items[i].item_name == it_name) {
					var singlePrice = menu_items[i].cost;
					break;		   
		   }	  	  
	  }
	  
	  //change table memory
	  tables[tableId - 1].items[serial-1].quant = element.value;
	  tables[tableId - 1].items[serial-1].price = element.value * singlePrice;
	  tables[tableId - 1].Bill = 0;
	  var items_len = tables[tableId - 1].items.length;
	  for (i = 0; i < items_len; i++) {
			tables[tableId - 1].Bill += tables[tableId - 1].items[i].price; 	  
	  }	  

	  //Now update the display
	  row.childNodes[2].innerHTML = tables[tableId - 1].items[serial-1].price;
	  var classes = document.getElementsByClassName("table-"+tableId);
	  classes[4].innerHTML = tables[tableId-1].Bill;
	  document.getElementById("totalAmt").innerHTML = tables[tableId - 1].Bill;	  	
}



/*-----------------Deleting the items----------------------------------------*/
//on deleting an item
function deleteItem(element) {
	
      // getting required elements  and ids
		var rowDel = element.parentElement.parentElement;
		var tableBody = rowDel.parentElement;
      var tableId = document.getElementById("tableNum").innerHTML;
      var serial = rowDel.firstChild.innerHTML;
      
      // remove the item		
		rowDel.remove();
		
		//update serial
		var tableSno = document.getElementsByClassName("modalserial");		
      var i;
		for (i = 0; i < tableSno.length; i++) {
			tableSno[i].innerHTML = i + 1;		
		}
		
		//Update table memory
		tables[tableId - 1].items.splice(serial-1, 1);		
	   tables[tableId - 1].Bill = 0;
	   var items_len = tables[tableId - 1].items.length;
      tables[tableId - 1].num_of_items = items_len;	   
	
  	   for (i = 0; i < items_len; i++) {
			tables[tableId - 1].Bill += tables[tableId - 1].items[i].price; 	  
  	      tables[tableId-1].items[i].sno = i+1;
  	   }
  	   
  	   //update display
  	   document.getElementById("totalAmt").innerHTML = tables[tableId - 1].Bill;
  	   var classes = document.getElementsByClassName("table-"+tableId);
	   classes[4].innerHTML = tables[tableId - 1].Bill;
	   classes[7].innerHTML = tables[tableId - 1].num_of_items;
  	   	  
}
	


/*--------------------close session------------------------------------------*/
//Final Close button.

// Get the modal
var billmodal = document.getElementById('billModal');

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];


//When the user clicks the button, open the modal 
function genBill() {
	 
	 var tableId = document.getElementById("tableNum").innerHTML;
	 var bill = document.getElementById("totalAmt").innerHTML;
	 var disBill = document.getElementById("totalBill").innerHTML;
    removeAll();
    
    //remove from table memory
    if (tableId != "") {
    	tables[tableId - 1] = {table_id: tableId, num_of_items: 0, items: [], Bill: 0};
    }
     
    modal.style.display = "none";
    document.getElementById("tablenum").innerHTML = tableId;
    document.getElementById("billAmt").innerHTML = bill;
    billmodal.style.display = "block";
    var classes = document.getElementsByClassName("table-"+tableId);
	 classes[4].innerHTML = 0;
	 classes[7].innerHTML = 0;
} 

//close bill
function pay() {
	for (var i = 0; i < initialTables.length; i++) {
   document.getElementById(initialTables[i].Table_id).style.backgroundColor = "white";
   }
	billmodal.style.display = "none";
	 	
}









