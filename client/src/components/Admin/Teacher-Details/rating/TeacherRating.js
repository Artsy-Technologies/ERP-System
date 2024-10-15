import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from 'recharts';

// Sample Data
const barData = [
  { name: 'Jan', oneStar: 10, twoStar: 15, threeStar: 20, fourStar: 25, fiveStar: 30 },
  { name: 'Feb', oneStar: 20, twoStar: 25, threeStar: 30, fourStar: 35, fiveStar: 40 },
  { name: 'Mar', oneStar: 30, twoStar: 35, threeStar: 40, fourStar: 45, fiveStar: 50 },
  { name: 'Apr', oneStar: 40, twoStar: 45, threeStar: 50, fourStar: 55, fiveStar: 60 },
];

const lineData = [
  { name: 'Sun', rating: 3.0 },
  { name: 'Mon', rating: 3.5 },
  { name: 'Tue', rating: 4.0 },
  { name: 'Wed', rating: 4.2 },
  { name: 'Thu', rating: 4.3 },
  { name: 'Fri', rating: 4.5 },
  { name: 'Sat', rating: 4.8 },
];

const TeacherRating = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Circular Progress */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Overall Rating</Typography>
            <CircularProgressbar value={4.83} maxValue={5} text="4.83" />
            <ul>
              <li>5 star: 40%</li>
              <li>4 star: 30%</li>
              <li>3 star: 18%</li>
              <li>2 star: 10%</li>
              <li>1 star: 14%</li>
            </ul>
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart for Ratings */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Monthly Rating</Typography>
            <BarChart width={400} height={250} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="oneStar" fill="#FF0000" />
              <Bar dataKey="twoStar" fill="#FFA500" />
              <Bar dataKey="threeStar" fill="#FFD700" />
              <Bar dataKey="fourStar" fill="#ADD8E6" />
              <Bar dataKey="fiveStar" fill="#008000" />
            </BarChart>
          </CardContent>
        </Card>
      </Grid>

      {/* Line Chart for Daily Rating */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Daily Rating</Typography>
            <LineChart width={400} height={250} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#8884d8" />
            </LineChart>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TeacherRating;
