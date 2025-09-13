import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
const programs = ['Construction', 'Safety', 'Program Management', 'System Mobility'];
const districts = ['District 1', 'District 2', 'District 3', 'District 4'];
const years = Array.from({ length: 10 }, (_, i) => 2015 + i);
function App() {
  const [data, setData] = useState([]);
  const [program, setProgram] = useState(programs[0]);
  const [district, setDistrict] = useState(districts[0]);
  const [yearRange, setYearRange] = useState([2015, 2024]);
  const [filteredData, setFilteredData] = useState([]);
  // Simulate fetching data from API
  useEffect(() => {
    async function fetchData() {
      // Replace with real API call
      // const response = await axios.get('https://api.trak.kytc.ky.gov/data');
      // setData(response.data);
      // Simulated data
      const simulatedData = [];
      for (let y = 2015; y <= 2024; y++) {
        simulatedData.push({
          year: y,
          program: programs[Math.floor(Math.random() * programs.length)],
          district: districts[Math.floor(Math.random() * districts.length)],
          </ResponsiveContainer>
      <div style={{ marginTop: 20 }}>
        <h3>Data Table</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Program</th>
              <th>District</th>
              <th>Metric Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.year}</td>
                <td>{row.program}</td>
                <td>{row.district}</td>
                <td>{row.metricValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
