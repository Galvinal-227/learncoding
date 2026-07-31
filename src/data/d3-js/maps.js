export const chapter = {
  slug: "d3-js-maps",
  title: "Maps & GeoJSON",
  description: "Buat peta interaktif dengan D3 Geo projections dan GeoJSON.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-svg"],
  tags: ["d3js", "maps", "geo", "geojson"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## D3 Geo

D3 punya modul khusus untuk peta: proyeksi, GeoJSON, dan rendering geografis.

## GeoJSON

Format standar data geografis:
\`\`\`json
{
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[106.8, -6.2], [106.9, -6.2], ...]]
        },
        "properties": { "name": "Jakarta", "population": 10000000 }
    }]
}
\`\`\`

## Projections

\`\`\`javascript
// Proyeksi peta (3D → 2D)
const projection = d3.geoMercator()     // Google Maps style
    .center([106.8, -6.2])              // Center ke Jakarta
    .scale(5000)
    .translate([width/2, height/2]);

const projection = d3.geoEquirectangular(); // Simple
const projection = d3.geoOrthographic();    // Globe 3D
const projection = d3.geoAlbers();          // USA
\`\`\`

## Path Generator

\`\`\`javascript
const path = d3.geoPath().projection(projection);
\`\`\`

## Render Peta Indonesia

\`\`\`javascript
d3.json('/data/indonesia.geojson').then(data => {
    const projection = d3.geoMercator()
        .center([118, -5])
        .scale(1000)
        .translate([width/2, height/2]);
    
    const path = d3.geoPath().projection(projection);
    
    svg.selectAll('path')
        .data(data.features)
        .join('path')
        .attr('d', path)
        .attr('fill', '#69b3a2')
        .attr('stroke', '#333')
        .attr('stroke-width', 0.5);
});
\`\`\`

## Choropleth Map

\`\`\`javascript
const color = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, d3.max(data.features, d => d.properties.population)]);

svg.selectAll('path')
    .data(data.features)
    .join('path')
    .attr('d', path)
    .attr('fill', d => color(d.properties.population))
    .on('mouseover', function(event, d) {
        d3.select(this).attr('fill', 'orange');
        tooltip.style('display', 'block').text(d.properties.name);
    });
\`\`\`
  `,

  quiz: [
    { question: "GeoJSON untuk?", options: ["Chart", "Data geografis (peta)", "Database", "Animasi"], correctAnswer: 1 },
    { question: "d3.geoPath() untuk?", options: ["Line chart", "Generate SVG path dari GeoJSON", "Pie chart", "Tree"], correctAnswer: 1 }
  ],

  codeExamples: []
};