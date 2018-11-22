import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom';
import Register from "./Components/Login/Register";
import Signin from './Components/Login/AddLogin';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import UpperNavbar from './Components/UpperNavbar/UpperNavbar';
import question2 from './Components/Home/question2';
import question3 from './Components/Home/question3';
import SampleDisplay from './Components/Home/SampleDisplay';
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  render() {
    // const { isSignedIn, route } = this.state;
    return (
      <div>
      <UpperNavbar />
      {/* <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
       <Navbar />
       <Route path = "/" exact component = {Home} />
        {/* <Route path ="/AddLogin" exact component = {AddLogin} /> */}
        <Route path ="/Register" exact component = {Register} />
        <Route path = "/question2" exact = {true} component = {question2}/>
        <Route path = "/question3" exact = {true} component = {question3}/>
        <Route exact path='/SampleDisplay/:id' component={SampleDisplay} />
        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
      <Footer />
      </div>
    );
  }
}

export default App;
