d3.selectAll("p").style("color", function (d, i) {
    return i % 2 ? "#fff" : "#eee";
});

d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function (d) {
        return d + "px";
    });

var a = ['1', '2', '3', '4'];
d3.select('ul').selectAll('li').data(a).enter().append('li');
d3.select('ul').selectAll('li').data(a).text((d) => d);
d3.select('ul').selectAll('li').data(a).exit().remove();


let phones = [{
        name: 'iPhone',
        price: 64
    },
    {
        name: 'Samsung',
        price: 48
    },
    {
        name: 'LG G4',
        price: 36
    },
    {
        name: 'MiPad 5',
        price: 25
    }
];
//enter
d3.select('div.diagram').selectAll('div').data(phones).enter().append('div').attr('class', 'item')
    .append('div').attr('class', 'data').append('span');
//update
d3.select('div.diagram').selectAll('div.item').data(phones)
    .select('div').style('width', function (d) {
        return (d.price * 3) + 'px';
    })
    .select('span').text((d) => d.price);

d3.select('div.diagram').selectAll('div.item').data(phones).append('div').attr('class', 'name')
    .text((d) => d.name);
d3.select('div.diagram').selectAll('div.item').data(phones).exit().remove();

//--svg

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

var svg = d3.select("main")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
        return i * 30;
    })
    .attr("y", (d, i) => {
        return 100 - 3 * d
    })
    .attr("width", 25)
    .attr("height", (d, i) => d * 3)
    .attr('fill', '#102138')
    .attr('class', 'bar')
    .append('title').text((d) => d);
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * 30)
    .attr('y', (d, i) => (h - 3 * d) - 3)
    .text((d, i) => d)
    .style('font-size', '25px')
    .attr('fill', 'red')


//----------scaleLinear()

const scale = d3.scaleLinear() // Створіть шкалу тут
    .domain([250, 500])
    .range([10, 150]);

const output = scale(50); // Викличте шкалу з аргументом тут

d3.select("body")
    .append("h2")
    .text(output);

// max min 
const positionData = [
    [1, 7, -4],
    [6, 3, 8],
    [2, 9, 3]
]
const put = d3.max(positionData, d => d[2]); // Змініть цей рядок

d3.select("body")
    .append("h2")
    .text(put)

//---dynamic scale

const dataset1 = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];

const w1 = 500;
const h1 = 500;

// Відступ між межею полотна SVG та графіком
const padding = 60;

// Створіть шкалу x і y
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    // Додайте свій код під цим рядком

    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr('r', 5);

// Додайте свій код над цим рядком

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => (d[0] + ", " +
        d[1]))
    // Додайте свій код під цим рядком
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]));

const xAxis = d3.axisBottom(xScale);
// Додайте свій код під цим рядком
const yAxis = undefined;
// Додайте свій код над цим рядком

svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);