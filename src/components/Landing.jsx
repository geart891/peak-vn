import FiberNewIcon from '@material-ui/icons/FiberNew';
import ButtonBase from 'material-ui/ButtonBase';
// import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import React from 'react';
// import { clearSubmitStatus } from "./redux/actionCreators";
import connect from 'react-redux/es/connect/connect';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import data, { productList } from '../data';
import ProductCard from './ProductCard';



const styles: { [key: string]: React.CSSProperties } = {
  // const styles: { [key: string]: React.CSSProperties } = theme => ({
  root: {
    padding: '.1vw',
    margin: '0.2vw 1.1vw',
  },
  image: {
    '&:hover': {
      zIndex: 1,
      opacity: 0.75,
      transition: 'all .5s ease',
    },
  },
  media: {
    height: 175,
  },
  pickup: {
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 10,
  },
  information: {
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 10,
  },
  products: {
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 10,
  },
  divider: {
    marginTop: 5,
  },
  puImg: {
    height: 75,
  },
  card: {
    maxWidth: 200,
    maxHeight: 250,
  },
  puCard: {
    display: 'inline',
  },
  carousel: {
    // borderRadius: 5,
    // overflow: 'hidden'
  },
  imgCrop: {
    // borderRadius: 2
  },
  gridContainer: {
    marginBottom: 5,
  },
  listInfo: {
    padding: '0 16px',
  },
};
const Landing = ({ classes }) => (
  <Paper className={classes.root} elevation={4}>
    <Carousel
      showArrows
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
    >
      {data.carouselImg.map(e => (
        <div key={e.id} className={classes.carousel}>
          <img className={classes.imgCrop} key={e.id} src={e.url} alt="" />
        </div>
      ))}
    </Carousel>
    <Typography className={classes.pickup} variant="display2" component="h2">
      PICK UP
    </Typography>
    <Grid
      container
      className={classes.gridContainer}
      justify="center"
      spacing={24}
    >
      {data.pickUpData.map(e => (
        <Grid key={e.imgDescription} item xl={4}>
          <ButtonBase
            focusRipple
            className={classes.image}
            component={Link}
            to={e.metalink}
            target="_blank"
            style={{ outline: 'none', textDecoration: 'none' }}
          >
            <Card className={classes.card}>
              <CardMedia
                className={classes.puImg}
                image={e.imgLink}
                title={e.imgDescription}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {e.title.toUpperCase()}
                </Typography>
                <Typography component="p">{e.description}</Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
    <Divider className={classes.divider} />
    <Typography
      className={classes.information}
      variant="display2"
      component="h2"
    >
      INFORMATION
    </Typography>
    <List className={classes.listInfo} component="nav">
      {data.newsInfo.map(e => (
        <ListItem
          button={!!e.url}
          key={e.priority}
          component={Link}
          to={e.url}
          target="_blank"
          style={{ outline: 'none', textDecoration: 'none' }}
        >
          <ListItemIcon>
            <FiberNewIcon />
          </ListItemIcon>
          <ListItemText primary={e.headline} secondary={e.date} />
        </ListItem>
      ))}
    </List>
    <Divider className={classes.divider} />
    <Typography className={classes.products} variant="display2" component="h2">
      PRODUCTS
    </Typography>
    <Grid
      container
      className={classes.gridContainer}
      justify="center"
      spacing={8}
    >
      {productList.map(e => (
        <ProductCard key={e.productId} {...{ productItem: e }} />
      ))}
    </Grid>
  </Paper>
);

export default connect()(withStyles(styles)(Landing));
