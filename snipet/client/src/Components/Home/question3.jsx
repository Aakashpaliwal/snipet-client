import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
class question3 extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
      first_name : "",
      last_name : "",
      email : "",
      subject : "",
      contact_number : ""
    
      };
    }
     
        change  = e => {
          this.setState ({
            [e.target.name]: e.target.value
          });
        };
        getWebsite = () => {
          fetch("/")
      };
        onSubmit = e =>
        {
            e.preventDefault();
            console.log(this.state);
          //   if (
          //     this.state.category === "" ||
          //     this.state.subcategory === "" ||
          //     this.state.company === "" ||
          //     this.state.model === "" ||
          //     this.state.manufacturing_year === ""
             
          //  ) {
          //     alert("Unable to contact because fields were left blank");
          //     }else {
          //         fetch(`/contact`,{
          //             method : "POST",
          //             headers : {
          //                 "Content-Type": "application/json; charset=utf-8"
          //             },
          //             body: JSON.stringify(this.state)
          //         }
          //         ).then(this.getWebsite);
          //       }
            this.setState ({
              first_name : "",
              last_name : "",
              email : "",
              subject : "",
              contact_number : ""
  
            })
            //replace /contact with server url
            fetch('/partner', {
              method : "POST",
              headers : {
                "Content-Type" : "application/json; chardet=utf-8"
              },
              body : JSON.stringify(this.state)
            }).then(this.getWebsite);
  
        };
    render() {
      return (
        <div>
            <div>
      {/*SLIDER HERE */}

  
  
  
      {/* END SLIDER HERE */}
      {/*upper four boxes */}
        {/* <section className="custom-upper-boxes">
          <div className="container">
            <div className = "row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                  <div className="custom-inner-boxes">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <span class="badge badge-primary custom-badge">1</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                          <p><strong>Money Care</strong></p>
                          <p>Lorem Ipsum Dolor Simit</p>
                        </div>
                      </div>
                  </div>
              </div>
  
               <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                  <div className="custom-inner-boxes">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <span class="badge badge-primary custom-badge">1</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                          <p><strong>Money Care</strong></p>
                          <p>Lorem Ipsum Dolor Simit</p>
                        </div>
                      </div>
                  </div>
              </div>
  
               <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                  <div className="custom-inner-boxes">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <span class="badge badge-primary custom-badge">1</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                          <p><strong>Money Care</strong></p>
                          <p>Lorem Ipsum Dolor Simit</p>
                        </div>
                      </div>
                  </div>
              </div>
  
               <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                  <div className="custom-inner-boxes">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <span class="badge badge-primary custom-badge">1</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                          <p><strong>Money Care</strong></p>
                          <p>Lorem Ipsum Dolor Simit</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section> */}
      {/*end upper four boxes */}
        
      {/* offer section */}
          <section className = "service-nikhil-content" id="service">
            <div className="container">
            <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div className="left-side-content-mcq">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="custom-offer-box" id="q11">
                       <h6>11. Which one of the following is not an application software package? </h6>
                      <div className="custom-ul-answers">
                      <ol type="A">
                      <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="RedHatLinux" name="defaultExampleRadios" />
    <label class="custom-control-label" for="RedHatLinux">Red Hat Linux</label>
  </div>
  </li>
  
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="MicrosoftOffice" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="MicrosoftOffice">Microsoft Office</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="AdobePagemaker" name="defaultExampleRadios" />
    <label class="custom-control-label" for="AdobePagemaker">Adobe Pagemaker</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="OpenOffice" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="OpenOffice">Open Office</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Allofthese" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Allofthese">All of these</label>
  </div>
  </li>
  </ol>
  </div>
  
  <div className="below-button text-center">
  <button type="button" className="btn btn-primary">Answer &amp; solution</button>
  <button type="button" className="btn btn-info">Discuss in Boards</button>
  <button type="button" className="btn btn-success">Share</button>
  <button type="button" className="btn btn-warning">Save For Later</button>
  </div>
                    </div>
                  </div>
  
  
  
                </div>
  
                              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="custom-offer-box" id="q12">
                       <h6>12. Which of the following statement is wrong?</h6>
                      <div className="custom-ul-answers">
                      <ol type="A">
                      <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="PhotoshopisagraphicaldesigntoolbyAdobe" name="defaultExampleRadios" />
    <label class="custom-control-label" for="PhotoshopisagraphicaldesigntoolbyAdobe">Photoshop is a graphical design tool by Adobe</label>
  </div>
  </li>
  
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Linux is free and open source software" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Linux is free and open source software">Linux is free and open source software</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Linux is owned and sold by Microsoft" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Linux is owned and sold by Microsoft">Linux is owned and sold by Microsoft</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Windows XP is an operating system" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Windows XP is an operating system">Windows XP is an operating system</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Noneofthese" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Noneofthese">None of these</label>
  </div>
  </li>
  </ol>
  </div>
  
  <div className="below-button text-center">
  <button type="button" className="btn btn-primary">Answer &amp; solution</button>
  <button type="button" className="btn btn-info">Discuss in Boards</button>
  <button type="button" className="btn btn-success">Share</button>
  <button type="button" className="btn btn-warning">Save For Later</button>
  </div>
                    </div>
                  </div>
  
  
  
                </div>
  
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="custom-offer-box" id="q13">
                       <h6>13. An error is also known as:</h6>
                      <div className="custom-ul-answers">
                      <ol type="A">
                      <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Bug" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Bug">Bug</label>
  </div>
  </li>
  
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Debug" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Debug">Debug</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Cursor" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Cursor">Cursor</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Icon" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Icon">Icon</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="None of these" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="None of these">None of these</label>
  </div>
  </li>
  </ol>
  </div>
  
  <div className="below-button text-center">
  <button type="button" className="btn btn-primary">Answer &amp; solution</button>
  <button type="button" className="btn btn-info">Discuss in Boards</button>
  <button type="button" className="btn btn-success">Share</button>
  <button type="button" className="btn btn-warning">Save For Later</button>
  </div>
                    </div>
                  </div>
  
  
  
                </div>
  
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="custom-offer-box" id="q14">
                       <h6>14. Microsoft Word is an example of  </h6>
                      <div className="custom-ul-answers">
                      <ol type="A">
                      <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="an operating system" name="defaultExampleRadios" />
    <label class="custom-control-label" for="an operating system">an operating system</label>
  </div>
  </li>
  
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Processing device" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Processing device">Processing device</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Application software" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Application software">Application software</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="an input device" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="an input device">an input device</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="None of these" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="None of these">None of these</label>
  </div>
  </li>
  </ol>
  </div>
  
  <div className="below-button text-center">
  <button type="button" className="btn btn-primary">Answer &amp; solution</button>
  <button type="button" className="btn btn-info">Discuss in Boards</button>
  <button type="button" className="btn btn-success">Share</button>
  <button type="button" className="btn btn-warning">Save For Later</button>
  </div>
                    </div>
                  </div>
  
  
  
                </div>
  
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="custom-offer-box" id="q15">
                       <h6>15. Graphical pictures that represent an object like file, folder etc are:</h6>
                      <div className="custom-ul-answers">
                      <ol type="A">
                      <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Task bar" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Task bar">Task bar</label>
  </div>
  </li>
  
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Windows" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Windows">Windows</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Icons" name="defaultExampleRadios" />
    <label class="custom-control-label" for="Icons">Icons</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Desktop" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Desktop">Desktop</label>
  </div>
  </li>
  <li>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="Noneofthese" name="defaultExampleRadios"/>
    <label class="custom-control-label" for="Noneofthese">None of these</label>
  </div>
  </li>
  </ol>
  </div>
  
  <div className="below-button text-center">
  <button type="button" className="btn btn-primary">Answer &amp; solution</button>
  <button type="button" className="btn btn-info">Discuss in Boards</button>
  <button type="button" className="btn btn-success">Share</button>
  <button type="button" className="btn btn-warning">Save For Later</button>
  </div>
                    </div>
                  </div>
  
  
  
                </div>
  
  
  <nav aria-label="pagination example">
      <ul class="pagination pagination-circle pg-blue mb-0 justify-content-center">
  
          
          <li class="page-item disabled"><a class="page-link">First</a></li>
  
         
          <li class="page-item disabled">
              <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
              </a>
          </li>
  
         
          <Link to = "/"><li class="page-item active"><a class="page-link">1</a></li></Link>
          <Link to ="/question2"><li class="page-item"><a class="page-link">2</a></li></Link>
          <Link to ="/question3"><li class="page-item"><a class="page-link">3</a></li></Link>
  
         
          <li class="page-item">
              <a class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
              </a>
          </li>
  
        
          <li class="page-item"><a class="page-link">Last</a></li>
  
      </ul>
  </nav>
  
  
  
  
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="custom-offer-box right-side-content-mcq">
        <h6>Number of Questions</h6>
        <ul>
        <li><a href="#q11">Question 11</a> </li>
        <li><a href="#q12">Question 12</a> </li>
        <li><a href="#q13">Question 13</a> </li>
        <li><a href="#q14">Question 14</a> </li>
        <li><a href="#q15">Question 15</a> </li>
        </ul>
        </div>
      </div>
            </div>
            </div>
          </section>
  
  
  
      {/* end offer section */}
      
            </div>
          
        </div>
      )
    }
  }

export default question3;