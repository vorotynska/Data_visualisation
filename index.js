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

const svg = d3.select("body")
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