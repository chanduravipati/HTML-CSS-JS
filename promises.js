let url="https://restcountries.com/v3.1/alpha/co";
fetch(url).then(
    function(full,rej){
        full.json()
       .then(
        function(full1,rej1)
        {
            console.log(full1);
        });
    });