import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
   email: ""
  
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
            email : ""

          })
          //replace /contact with server url
          fetch('/subscribe', {
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
        <footer>
            <section class="footer">
            <div class="container">
                <div class="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p>Copyright &copy; 2018.All Rights Reserved. &nbsp;Designed By <strong>NEO404</strong></p>
          </div>
                </div>
                </div>
            </section>
                </footer>
         

         


        

    {/* end foter */}
      </div>
    )
  }
}

export default Footer
