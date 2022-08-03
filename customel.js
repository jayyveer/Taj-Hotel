class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =`
        <div class="header">
          
          <div class="header-right">
            <img src="images/tajlogo.png" align="left" alt="logo" style="width:40px;height:40px; margin-right:15px">
            <a href="index.html">Home</a>
            <a href="ourhotels.html">Our Hotels</a>
            <a href="wedding.html" >Wedding Planing</a>
            <a href="contactus.html">Contact</a>
            <a href="about.html">About</a>
            <a href="signin.html">Signin</a>
            <a href="signup.html">Signup</a>
            
            
            
            <a class="active" href="booking.html"style="margin-left: 1070px; ">Booking</a>
          </div>
        </div>
        `
    }}customElements.define("my-header", MyHeader);
    class Myfooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =`
        <style>
        .container{
         display:flex;
         padding-top:10px;
         padding-left:10px;
         background-color: #cac6c6;
        }
        .child{
         width: 50%;
         
        }
        .itembox2 a img{
        width: 70%;
        height: 60%;
        }
        p{
          padding-top:15px;
          margin: 0px;
        }
         </style>
         <div class="container" >
         <div class="child">
             <a href="https://www.theindianhotels.com">
                 <img src="/images/logo1.svg" alt="Ihcllogo" style=" display: block;
                 margin-left: auto;
                 margin-right: auto;
                 padding-bottom: 25px;
                 padding-top: 15px;;">
             </a>
             <p>©2022 The Indian Hotels Company Limited. All Rights Reserved.</p>
         </div>
         <div class="child" >
             <p>Our Brands:</p><br><br>
             <div class="itembox2 "style="display: flex;">
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo2.png" alt="Ihcllogo">                   
                                            </a>
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo3.png" alt="Ihcllogo">
                                          </a>
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo4.png" alt="Ihcllogo">
                                          </a>
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo5.png" alt="Ihcllogo">
                                        </a>
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo6.png" alt="Ihcllogo">
                                         </a>
                 <a href="https://www.theindianhotels.com">
                     <img class="foot" src="/images/logo1.svg" alt="Ihcllogo">
                 </a>
             </div>
             
         </div>
     </div>
        `
    }}customElements.define("my-footer", Myfooter);