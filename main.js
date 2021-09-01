var name_of_guest = [];
function add(){
    var add = document.getElementById("name_of_guest").value;
    name_of_guest.push(add);
    console.log(add);
    var length_of_array = name_of_guest.length;
    document.getElementById("name_of_guest_div").innerHTML = name_of_guest.toString();
}
var array_value = "";
function list(){
    for(i = 0; i<name_of_guest.length; i++){
        console.log(name_of_guest[i]);
        array_value = array_value + name_of_guest[i] + "<br>";
    }
    document.getElementById("name_of_guest_list_div").innerHTML = array_value;
    document.getElementById("Sort").style.display = "inline-block";
}
function sorting(){
    name_of_guest.sort();
    var i = name_of_guest.join("<br>");
    console.log(name_of_guest);
     document.getElementById("name_of_guest_list_sorted_div").innerHTML = i.toString();
}
function search(){
    var s = document.getElementById("search_name_of_guest").value;
    var found = 0;
    var j;
    for(j=0;j<name_of_guest.length;j++){
        if(s==name_of_guest[j]){
            found = found + 1;
        }
    }
    document.getElementById("search_name_of_guest_div").innerHTML = "Name found "+found+" times";

}