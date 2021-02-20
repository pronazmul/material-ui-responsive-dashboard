import { Box, Paper } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";
import StudentResister from "./StudentResister";

const MainContent = () => {
  const classes = dashboardStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper>
        <Box p={3}>
          <StudentResister />
        </Box>
      </Paper>
    </main>
  );
};
export default MainContent;
