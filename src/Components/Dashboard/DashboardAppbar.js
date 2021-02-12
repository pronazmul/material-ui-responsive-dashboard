import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const DashboardAppbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <Menu />
        </IconButton>
        <Typography variant="h6">Hello School</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppbar;
