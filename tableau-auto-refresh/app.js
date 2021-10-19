let viz;
const vizContainer = document.getElementById("vizContainer");
const url =
    "https://tableau.data.ztore.com/#/views/testautorefresh/Sheet1"
const options = {
    height: "820px",
    width: "1200px",
    hideToolbar: true,
};

function initViz(){
    viz = new tableau.Viz(vizContainer, url, option);
}

let refreshInterval;

function refreshDataSource(){
    refreshInterval = setInterval(() => {
        viz.refreshDataAsync();
    }, 15000)
}

function stopRefresh(){
    clearInterval(refreshInterval);
}

document.getElementById("Start").addEventListener("click", refreshDataSource);
document.getElementById("Stop").addEventListener("click", stopRefresh);

initViz();