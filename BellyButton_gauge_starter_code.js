// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstSample = sampleNames[0]

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var washing_frequency = resultArray.property("wfreq");

    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [trace];
    var trace = {
      domain: { x: [0, 1], y: [0, 1] },
      value: washing_frequency,
      title: { text: "Belly Button Washing Frequency Scrubs Per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [250, 400], color: "orange" },
          { range: [0, 2], color: "yellow" },
          { range: [0, 2], color: "yellowgreen" },
          { range: [0, 2], color: "green" },
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490
      };

    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
   
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('myDiv', gaugeData, gaugeLayout);
  });
}
