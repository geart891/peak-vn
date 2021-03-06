import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import ProductCard from './ProductCard';

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 5,
  },
};

const Product = ({ classes, productList }) => (
  <Grid container spacing={8} className={classes.root}>
    {productList.length === 0 ? (
      <div>
        <Fade
          in={productList.length === 0}
          style={{
            transitionDelay: productList.length === 0 ? '800ms' : '0ms',
          }}
          unmountOnExit
          size={100}
        >
          <CircularProgress />
        </Fade>
      </div>
    ) : (
      productList.map(productItem => (
        <ProductCard key={productItem.productId} productItem={productItem} />
      ))
    )}
  </Grid>
);
const mapStateToProps = state => ({
  productList: state.productList,
});

export default connect(mapStateToProps)(withStyles(styles)(Product));
