import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  }
}));

const StudentResister = () => {
  const classes = useStyle();
  // Mannage Student Resistration Data....
  const CurrentDate = new Date();
  const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    class: "",
    date: `${CurrentDate.getDate()}/${CurrentDate.getMonth()}/${CurrentDate.getUTCFullYear()}`
  };

  const [studentData, setStudentData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  return (
    <>
      <form>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item container xs={12}>
            <Typography variant="h5" align="center">
              Resister Student
            </Typography>
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={5} className={classes.root}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              variant="standard"
              value={studentData.fullName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="standard"
              value={studentData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              variant="standard"
              value={studentData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={5} className={classes.root}>
            <TextField
              fullWidth
              label="City"
              name="city"
              variant="standard"
              value={studentData.city}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Class"
              name="class"
              variant="standard"
              value={studentData.class}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="PIck Date"
              name="date"
              variant="standard"
              value={studentData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </form>
    </>
  );
};

export default StudentResister;
