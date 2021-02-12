import { Drawer, Hidden } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";
import DrawerList from "./DrawerList";

const MainDrawer = ({ mobileOpen, setMobileOpen }) => {
  const classes = dashboardStyle();
  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>

      <Hidden xsDown>
        <Drawer
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default MainDrawer;
