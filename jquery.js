//Q1.
$("#button1").click(function()
 {
     $("#para2").hide();
})
$("#button2").click(function()
 {
     $("#para2").show();
})

//Q.2
    $.ajax({
        //url:"https://jsonplaceholder.typicode.com/posts",
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type:"GET",
        success:function(data){//data retrieved from url is recieved by data parameter
            //console.log(data);
            //document.getElementsByTagName("p")[0].innerText=data.title;
            document.getElementById("heading1").innerText=data.title;
            //document.getElementById("heading1").innerText=data.body;//In AJAX, id and classes can be accessed without using . and #
        }
    })
