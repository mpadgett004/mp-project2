console.log('is this working2');

function buildPlot() {
    /* data route */
    const url = "/api/data";
    d3.json(url).then(function(response) {

        console.log(response);
        
        const data = response;

        const layout = {
            width: 400,
            height: 500,
            margin: { t: 0, r: 0, l: 5, b: 0 }
        };

        Plotly.newPlot("circlePlot", data, layout);
    });
}

buildPlot();
console.log('is this working');