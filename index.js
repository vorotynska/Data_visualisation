const height = 500;
const width = 700;
const margin = 30;

data = [{
        name: "Ливерпуль",
        score: 54
    },
    {
        name: "Ман. Юнайтед",
        score: 62
    },
    {
        name: "Арсенал",
        score: 66
    },
    {
        name: "Челси",
        score: 70
    },
    {
        name: "Ман. Сити",
        score: 61
    },
];


const xAxisLength = width - 2 * margin;
const yAxisLength = height - 2 * margin;

const xScale = d3.scaleBand()
    .range([0, xAxisLength + margin], .1)
    .domain(data.map(d => d.name))
    .padding(0.2);

const yScale = d3.scaleLinear()
    .domain([
        d3.min(data, d => d.score - 10),
        d3.max(data, d => d.score + 10)
    ]).range([yAxisLength, 0]);

const svg = d3.select('body').append('svg')
    .attr('class', 'axis')
    .attr('width', width)
    .attr('height', height);

const xAxis = d3.axisBottom(xScale);

const yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform",
        "translate(" + margin + "," + (height - margin) + ")")
    .call(xAxis);

// отрисовка оси Y 
svg.append("g")
    .attr("class", "y-axis")
    .attr("transform",
        "translate(" + margin + "," + margin + ")")
    .call(yAxis);

var color = d3.scaleOrdinal()
    .range(d3.schemeCategory10
        .map(function (c) {
            c = d3.rgb(c);
            c.opacity = 0.6;
            return c;
        }));

d3.selectAll('g.y-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', xAxisLength)
    .attr('y2', 0);

svg.append('g')
    .attr("transform", // сдвиг оси вправо
        "translate(" + margin + ", 0)")
    .selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.name))
    .attr("width", xScale.bandwidth())
    .attr('y',
        d => yScale(d.score))
    .attr('height', d => height - yScale(d.score) - 30)
    .attr("fill", function (d) {
        return color(d.name);
    });