import { Container, Typography } from "@mui/material";
import React from "react";
import AddHabitForm from "../components/add.habits.form";
import HabitList from "../components/habit-list";
import HabitStats from "../components/habits-stats";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStats />
    </Container>
  );
};

export default Home;
