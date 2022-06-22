//synchronous
function call()
{
    console.log("person1");
    console.log("person2");
    console.log("person3");
}
call();

//asynchronous
function call1()
{
    console.log("person1");
    setTimeout(() => {
        console.log("person2");
    }, 4000);
   console.log("person3");

}
call1();

//callback
function call3(a,b)
{
    console.log(a);
    b(2,5);
}


function call4(a,b)
{
    
    console.log(a+b);

}
call3("raja",call4);

//ananymous
function call3(a,b)
{
    console.log(a);
    b(2,5);
}

call3("raja",function call4(a,b)
{
    
    console.log(a+b);

});
//promise
let a=new Promise(function(resolve,reject){
    resolve("hello");
})
a.then(function(b)
{
    console.log(b);
})


