import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles: React.CSSProperties = {
  list: {
    width: '15vw',
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    float: 'right',
    marginLeft: 10,
    marginRight: 10,
  },
  iconSizeMenu: {
    fontSize: 36,
  },
  iconSize: {
    fontSize: 24,
  },
  appBar: {
    background: 'linear-gradient(45deg, #37474f 450%, #62727b 95%)',
    // borderRadius: 2,
    // width: '96.5vw',
    padding: '.1vw',
    margin: '0 1vw',
    color: 'white',
    // border: 2,
    // color: 'white',
    // height: 48,
    // margin: '0 10px',
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px #1a0f354d',
  },
};

class Navbar extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              <Link to="/">
                <img
                  style={{ width: '30%' }}
                  src="https://base-ec2.akamaized.net/images/user/logo/033815c0249a9cdcd34eaf53bed282b5.gif"
                  alt=""
                />
              </Link>
            </Typography>
            <IconButton
              className={classes.cartButton}
              color="inherit"
              aria-label="Cart"
              onClick={this.toggleDrawer('right', true)}
            >
              <ShoppingCart style={styles.iconSize} />
            </IconButton>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer('right', true)}
            >
              <MenuIcon style={styles.iconSizeMenu} />
            </IconButton>
          </Toolbar>
        </Paper>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default connect()(withStyles(styles)(Navbar));