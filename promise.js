let promise = new Promise((resolve, reject) => {
    // console.log("hello");
    // resolve("code successufully executed")
    // reject("error in code ")
})


function getdata(dataid, getnextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            if (getnextdata) {
                getnextdata();
            }
        }, 2000);
    });
}