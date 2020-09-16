import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400 + 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Photos(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const modalClasses = useModalStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(0);

  const handleOpen = (index) => {
    setPhoto(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(props.photos);
  const handleNext = () => {
    setPhoto(photo + 1 === props.photos.length ? 0 : photo + 1);
  };
  const handlePrev = () => {
    setPhoto(photo - 1 === -1 ? props.photos.length - 1 : photo - 1);
  };
  const drawer = (
    <div>
      {!props.photos ? null : (
        <div>
          <img
            src={props.photos[0].href}
            width="100%"
            onClick={(e) => handleOpen(0)}
          />
          {props.photos.map((photo, index) => (
            <img
              src={photo.href}
              width="50%"
              onClick={(e) => handleOpen(index)}
            />
          ))}
        </div>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {!props.photos ? null : (
        <div>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      )}
      {!props.photos ? null : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={modalClasses.paper}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <i
                  class="far fa-arrow-alt-circle-left fa-7x"
                  onClick={handlePrev}
                ></i>
              </Grid>
              <Grid item xs={10}>
                <img src={props.photos[photo].href} width="100%" />
              </Grid>
              <Grid item xs={1}>
                <i
                  class="far fa-arrow-alt-circle-right fa-7x"
                  onClick={handleNext}
                />
                {/* <p onClick={handleNext}> Next </p> */}
              </Grid>
            </Grid>
          </div>
        </Modal>
      )}
    </div>
  );
}

Photos.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Photos;
