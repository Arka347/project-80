var name_of_the_guest_array = [];

function Submit(){
    var guest_name = document.getElementById("Enter name"). value ;
    name_of_the_guest_array.push(guest_name);
    document.getElementById("display_names").innerHTML = name_of_the_guest_array;
    console.log(length_of_the_array);
}

    function show_list(){
        var i = name_of_the_guest_array.join("<br>");
        console.log(name_of_the_guest_array);
        document.getElementById("show_names").innerHTML = i.toString();

    }

    function Sorting(){
        name_of_the_guest_array.sort();
        var i = name_of_the_guest_array.join("<br>");
        console.log(name_of_the_guest_array);
        document.getElementById("sort_name").innerHTML = i.toString();
    }
    
    function Search(){
        var s = document.getElementById("search_names").value ;
        var found = 0;
        var j;
         for(j=0; j<name_of_the_guest_array.length; j++){
             if(s==name_of_the_guest_array[j]){
                 found = found=1;
             }
         }

         document.getElementById("search_names").innerHTML = "Name found" + found + "Time/s";
         console.log("Found name" + found + "Time/s");
    }