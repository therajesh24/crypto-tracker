import { Container, makeStyles, Typography } from "@material-ui/core";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const useStyles = makeStyles(() => ({
  bannerContent: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  contactItems: {
    fontSize: "30px",
    margin: "10px",
    cursor: "pointer",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer style={{ padding: "20px" }}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="subtitle1"
            style={{
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            <div className={classes.contact}>
              <a
                href="https://www.linkedin.com/in/therajesh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className={classes.contactItems} />
              </a>
              <a
                href="https://github.com/therajesh24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className={classes.contactItems} />
              </a>
            </div>
            <hr
              style={{
                width: "100%",
              }}
            />
            <p style={{ paddingTop: "10px" }}>
              © {new Date().getFullYear()} - developed by{" "}
              <a
                href="https://github.com/therajesh24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajesh D
              </a>
            </p>
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
