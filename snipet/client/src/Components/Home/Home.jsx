import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
// import './slider';
export class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      userdata : [],
      question_id : "",
     question: "",
     a1 : "",
     a2 : "",
     a3 : "",
     a4 : ""    
  
    };
    // this.listclick = this.listclick.bind(this);
  }
 
  componentWillMount ()
  {
    this.handleClick();
  }
  handleClick () {
    let Editid = this.props.match.params.id;
    //console.log(this.props.match.params.id)
      fetch(`/question/view`,{
      method : 'GET',
      mode: 'no-cors',
      headers : {
        "Content-Type" : "application/json"
    }
    })
      .then((res) => {
        res.json().then((resp) => { 
          console.log(resp.questiondata)
          //this.setState({ data:resp.zonedata})
          this.setState({
              userdata : resp.questiondata,
              question:resp.questiondata[0].question,
              question_id : resp.questiondata[0].question_id,
              a1 : resp.questiondata[0].a1,
              a2 : resp.questiondata[0].a2,
              a3 : resp.questiondata[0].a3,
              a4 : resp.questiondata[0].a4
          
          })
        
    
        })
      }
    
    )
    }

    // listclick (item)
    // {
    //   fetch(`/question/view`,{
    //       method : 'GET',
    //       mode: 'no-cors',
    //       headers : {
    //         "Content-Type" : "application/json"
    //     }
    //     })
    //       .then((res) => {
    //         res.json().then((resp) => { 
    //           console.log(resp.questiondata)
    //           //this.setState({ data:resp.zonedata})
    //           this.setState({
    //               // userdata : resp.questiondata,
    //               question:resp.questiondata[this.props.match.params.id].question,
    //               question_id : resp.questiondata[this.props.match.params.id].question_id,
    //               a1 : resp.questiondata[this.props.match.params.id].a1,
    //               a2 : resp.questiondata[this.props.match.params.id].a2,
    //               a3 : resp.questiondata[this.props.match.params.id].a3,
    //               a4 : resp.questiondata[this.props.match.params.id].a4
              
    //           })
            
        
    //         })
    //       }
        
    //     )
    // }
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
            id : this.props.match.params.id

          })
          //replace /contact with server url
          fetch(`/zone/update`,{
            method : "POST",
            // mode: 'no-cors',
            headers : {
             'Authorization': 'Bearer ' + this.state.token,
            "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
          })
            //   .then(console.log(this.state));
        .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
            //   console.log(json);
            alert("your data has been submitted");
        }
        else{
          console.log(json);
          alert('Please check wait')
      }
    })

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
                  <div className="custom-offer-box" id="q1">
                     <h6>Question . {this.state.question_id} . {this.state.question}</h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ArtificialIntelligence" name="defaultExampleRadios" />
  <label class="custom-control-label" for="ArtificialIntelligence">{this.state.a1}</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ProgrammingIntelligence" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="ProgrammingIntelligence">{this.state.a2}</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SystemKnowledge" name="defaultExampleRadios" />
  <label class="custom-control-label" for="SystemKnowledge">{this.state.a3}</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="VVLSI" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="VVLSI">{this.state.a4}</label>
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

                          

{/* <nav aria-label="pagination example">
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
 */}



          </div>
          </div>
      
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="custom-offer-box right-side-content-mcq">
        <h6>Number of Questions</h6>
        {/* <ul>
        <li><a href="#q1">Question 1</a></li>
        <li><a href="#q2">Question 2</a></li>
        <li><a href="#q3">Question 3</a></li>
        <li><a href="#q4">Question 4</a></li>
        <li><a href="#q5">Question 5</a></li>
        </ul> */}
        <div className="custom-pagination-list">
    <ul>
    {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
            return ( 
                <Link to ={`/SampleDisplay/${item.question_id}`}> <li key = {id} ><strong>Question No . {item.question_id}</strong>
                  
               </li></Link>
            )}, this
                
            )
                    :
                    <span>Data is loading....</span>
                  }

    </ul>
  </div>
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
export default Home