/*async function getDatas(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
       console.log("delayed time")
       resolve()
        },2000)
    })
}
async function display(){
    console.log("start");
     await getDatas();
    console.log("end")
}
display()*/
const updateBanner = (message, color) => {
    const banner = document.getElementById("banner");
    banner.innerHTML = message;
    banner.style.backgroundColor = color;
};
const checkSystem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random() > 0.5);
        }, 2000);
    });
};
const checkStatus = () => {
    updateBanner("System is Checking...", "orange");

    checkSystem().then((status) => {
        if (status) {
            updateBanner("System is Online", "green");
        } else {
            updateBanner("System is Offline", "red");
        }
    });
};
window.onload = () => {
    alert("Welcome to System Monitor!");
    checkStatus();
};
