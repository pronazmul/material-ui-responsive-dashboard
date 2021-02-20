import { Grid, makeStyles, Typography } from "@material-ui/core";
import FormHandling from "./formComponent/FormHandling";
import MuiTextField from "./formComponent/MuiTextField";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  }
}));

const StudentResister = () => {
  const classes = useStyle();

  const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    class: "",
    date: new Date()
  };

  const { studentData, handleChange } = FormHandling(initialValue);

  return (
    <>
      <form>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item container xs={12}>
            <Typography variant="h5" align="center">
              Resister Student
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={false} sm={1}></Grid>
            <Grid item xs={12} sm={5} className={classes.root}>
              <MuiTextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={studentData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={5} className={classes.root}>
              <MuiTextField
                fullWidth
                label="City"
                name="city"
                value={studentData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={false} sm={1}></Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default StudentResister;
