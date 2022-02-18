import { makeStyles } from "@material-ui/styles";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles(() => ({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "25%",
      margin: 5,
    },
  }));
  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};
export default SelectButton;
