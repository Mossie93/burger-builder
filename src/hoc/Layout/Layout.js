import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerOpenedHandler = () => {
    this.setState({showSideDrawer: true});
  }

  sideDrawerClosedToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    })
  };

  render() {
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerClosedToggleHandler}/>
        <SideDrawer opened={this.state.showSideDrawer} close={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;