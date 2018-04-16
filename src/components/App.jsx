// import ProductShow from "./product/Show";
import blueGrey from 'material-ui/colors/blueGrey';
import green from 'material-ui/colors/green';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import React from 'react';
import { hot } from 'react-hot-loader';
import Provider from 'react-redux/es/components/Provider';
import Router from 'react-router-dom/es/BrowserRouter';
import Route from 'react-router-dom/es/Route';
import Switch from 'react-router-dom/es/Switch';
import store from '../redux/store';
import Footer from './Footer';
import Landing from './Landing';
// import FoF from "./FoF";
import Navbar from './Navbar';
import ProductDetail from './ProductDetail';
import UserControl from './UserControl';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 18,
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/items/:productId" component={ProductDetail} />
          <Route exact path="/admin/orderdetail" component={UserControl} />
          {/* <Route path="/collections" component={Collection} />
              <Route
                path="/products/:id"
                component={props => {
                  console.log(props);
                  return <ProductShow productPermalink={props.match.params.id} />;
                }}
              />
              <Route component={FoF} /> */}
        </Switch>
        <Footer />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default App;
export const HotApp = hot(module)(App);
