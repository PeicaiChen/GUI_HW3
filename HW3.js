
/* GUI Assignment: Creating an Interactive Dynamic Table
 Description: Create a table completely dynamically based on parameters entered 
 in an HTML form. Create a form that accepts the starting and ending numbers for 
 both the horizontal (multiplier) and vertical (multiplicand) axes of a multiplication 
 table. Then use the numbers entered into the form to create a multiplication table 
 completely dynamically

 Peicai Chen, Peicai_Chen@student.uml.edu

 10/26/2021 */

/*
 Source Help:
 https://www.includehelp.com/code-snippets/javascript-function-to-display-table-of-an-entered-number.aspx
 https://stackoverflow.com/questions/41465569/multiplication-table-in-javascript
 https://www.geeksforgeeks.org/how-to-display-error-without-alert-box-using-javascript/
 
*/
function callfunction(){
    // button call two function
    printTable();
    errorMessage();
    
}

function printTable() {
    var minCol;
    var maxCol;
    var minRow;
    var maxRow;

    //get four inputs from user
    minCol = Number(document.getElementById("Number1").value)-1;
    maxCol = Number(document.getElementById("Number2").value)-1;
    minRow = Number(document.getElementById("Number3").value)-1;
    maxRow = Number(document.getElementById("Number4").value)-1;

    //make multiplication table scrollable
    var table = document.getElementById("MTable");
    table.style.overflow = "scroll";

    //display the table
    var output = "";

    for (var i = minRow; i <= maxRow+1; i++) {

        output+="<tr>";
        for(var j = minCol; j<= maxCol+1; j++){
            //empty the up left corner box
            if(i==minRow && j==minCol)
                output += "<th></th>";
            //display first row and first column
            else if(i == minRow){
                
                output += "<th>" + j + "</th>";
            } 
            else if(j == minCol){
                
                output += "<th>" + i + "</th>";
            } 
            //display the rest data
            else if(i>minRow && j>minCol){
                output+="<td>"+i*j+"</td>";
            }          
           
        } 
        output+="</tr>";  
        
    }
    table.innerHTML = output;
    
}
//Function to check wrong input
function errorMessage() {
    var error = document.getElementById("error")
    var minCol;
    var maxCol;
    var minRow;
    var maxRow;

    //get four inputs from user
    minCol = Number(document.getElementById("Number1").value);
    maxCol = Number(document.getElementById("Number2").value);
    minRow = Number(document.getElementById("Number3").value);
    maxRow = Number(document.getElementById("Number4").value);

    //if any of four inputs invalid, display error message
    if (isNaN(minCol) || isNAN(maxCol) || isNAN(minRow) || isNAN(maxRow))
    {
        
        // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    } else {
        error.textContent = ""
    }
}