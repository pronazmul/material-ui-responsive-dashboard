import { Box, Paper, Typography } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";

const MainContent = () => {
  const classes = dashboardStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper>
        <Box p={3}>
          <Typography variant="h5">
            This is Dashboard Main content Section
          </Typography>
        </Box>
      </Paper>
    </main>
  );
};
export default MainContent;
