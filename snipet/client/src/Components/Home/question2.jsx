import React, { Component } from 'react';
import './Home';
import {Link} from 'react-router-dom';

class question2 extends Component {
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
                  <div className="custom-offer-box" id="q6">
                     <h6>6. Microprocessor was introduced in which generation of computer? </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SecondGeneration" name="defaultExampleRadios" />
  <label class="custom-control-label" for="SecondGeneration">Second Generation</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="FourthGeneration" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="FourthGeneration">Fourth Generation</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Both(A)and(B)" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Both(A)and(B)">Both (A) and (B)</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ThirdGeneration" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="ThirdGeneration">Third Generation</label>
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
                  <div className="custom-offer-box" id="q7">
                     <h6>7. Which of the following memory is non-volatile?</h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SRAM" name="defaultExampleRadios" />
  <label class="custom-control-label" for="SRAM">SRAM</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="DRAM" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="DRAM">DRAM</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ROM" name="defaultExampleRadios" />
  <label class="custom-control-label" for="ROM">ROM</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Alloftheabove" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Alloftheabove">All of the above</label>
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
                  <div className="custom-offer-box" id="q8">
                     <h6>8. GUI stands for</h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="GraphUseInterface" name="defaultExampleRadios" />
  <label class="custom-control-label" for="GraphUseInterface">Graph Use Interface</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="GraphicalUniversalInterface" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="GraphicalUniversalInterface">Graphical Universal Interface</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="GraphicalUserInterface" name="defaultExampleRadios" />
  <label class="custom-control-label" for="GraphicalUserInterface">Graphical User Interface</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="GraphicalUniqueInterface" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="GraphicalUniqueInterface">Graphical Unique Interface</label>
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
                  <div className="custom-offer-box" id="q9">
                     <h6>9. Any data or instruction entered into the memory of a computer is considered as </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Storage" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Storage">Storage</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Output" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Output">Output</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Input" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Input">Input</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Information" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Information">Information</label>
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
                  <div className="custom-offer-box" id="q10">
                     <h6>10. Time during which a job is processed by the computer is:</h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ExecutionTime" name="defaultExampleRadios" />
  <label class="custom-control-label" for="ExecutionTime">Execution Time</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="DelayTime" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="DelayTime">Delay Time</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="RealTime" name="defaultExampleRadios" />
  <label class="custom-control-label" for="RealTime">Real Time</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="WaitingTime" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="WaitingTime">Waiting Time</label>
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
        <li><a href="#q6">Question 6</a></li>
        <li><a href="#q7">Question 7</a></li>
        <li><a href="#q8">Question 8</a> </li>
        <li><a href="#q9">Question 9</a> </li>
        <li><a href="#q10">Question 10</a> </li>
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

export default question2;