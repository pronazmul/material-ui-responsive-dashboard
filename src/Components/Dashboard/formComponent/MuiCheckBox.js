import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";

const MuiCheckBox = (props) => {
  const {
    name,
    value,
    label,
    onChange,
    color,
    setStudentData,
    studentData
  } = props;

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            name={name}
            color={color || "primary"}
            checked={value}
            onChange={() => setStudentData({ ...studentData, agree: !value })}
          />
        }
      />
    </FormControl>
  );
};

export default MuiCheckBox;
