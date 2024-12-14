import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const barData = [
  {
    name: "Jan",
    oneStar: 10,
    twoStar: 15,
    threeStar: 20,
    fourStar: 25,
    fiveStar: 30,
  },
  {
    name: "Feb",
    oneStar: 20,
    twoStar: 25,
    threeStar: 30,
    fourStar: 35,
    fiveStar: 40,
  },
  {
    name: "Mar",
    oneStar: 30,
    twoStar: 35,
    threeStar: 40,
    fourStar: 45,
    fiveStar: 50,
  },
  {
    name: "Apr",
    oneStar: 40,
    twoStar: 45,
    threeStar: 50,
    fourStar: 55,
    fiveStar: 60,
  },
];

const lineData = [
  { name: "Sun", rating: 3.0 },
  { name: "Mon", rating: 3.5 },
  { name: "Tue", rating: 4.0 },
  { name: "Wed", rating: 4.2 },
  { name: "Thu", rating: 4.3 },
  { name: "Fri", rating: 4.5 },
  { name: "Sat", rating: 4.8 },
];

const TeacherRating = () => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Row 1: Overall Rating and Monthly Rating */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Overall Rating */}
        <Box sx={{ flex: 1, minWidth: "300px", maxWidth: "400px" }}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Overall Rating
              </Typography>
              <Box sx={{ width: "70%", margin: "20px auto" }}>
                <CircularProgressbar value={4.83} maxValue={5} text="4.83" />
              </Box>
              <ul>
                <li>5 star: 40%</li>
                <li>4 star: 30%</li>
                <li>3 star: 18%</li>
                <li>2 star: 10%</li>
                <li>1 star: 14%</li>
              </ul>
            </CardContent>
          </Card>
        </Box>

        {/* Monthly Rating */}
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Monthly Rating
              </Typography>
              <Box sx={{ width: "100%", height: "250px" }}>
                <ResponsiveContainer>
                  <BarChart data={barData}>
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
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Row 2: Daily Rating */}
      <Box sx={{ width: "100%", minWidth: "300px" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="start">
              Daily Rating
            </Typography>
            <Box sx={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="rating" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TeacherRating;
