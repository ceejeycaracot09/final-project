import React from 'react';
import { FaBell } from 'react-icons/fa';
// './ContactUsPage.css';

const Services = () => {
  return (
<div class="container">

<h1 class="my-4" >Job Listing
<button className="notification-button" style={{marginLeft: '78%'}}>
        <FaBell />
      </button>
</h1>


<div class="row">
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Account manager</a>
        </h4>
        <p class="card-text">Primary duties: An account manager manages the relationship between a 
        company and its client. They upsell other services, provide the client with project updates 
        and address any concerns. They may have flexibility in their schedules depending on their 
        clients' needs.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#"> Virtual assistant</a>
        </h4>
        <p class="card-text">Primary duties: A virtual assistant is responsible for providing 
        administrative services to another person. They work away from the office to do things 
        like answer phone calls, schedule meetings, arrange travel and keep a contact list. 
        Virtual assistants also create reports and presentations, organize online files and 
        assist with bookkeeping.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#"> Sales representative</a>
        </h4>
        <p class="card-text">Primary duties: A sales representative is responsible for selling 
        a company's products and services to a target audience. They identify a person's needs, 
        create sales reports, meet sales quotas and design presentations that explain a product's 
        benefits to a chosen audience. Sales representatives may also perform research to identify 
        new markets where they can establish a customer base.

</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Business analyst</a>
        </h4>
        <p class="card-text">Primary duties: A business analyst uses data to help a company's 
        leadership team make strategic business decisions. They establish business needs, 
        identify issues and opportunities, create workflows and make recommendations for ways 
        to improve a company's processes.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#"> Real estate agent</a>
        </h4>
        <p class="card-text">Primary duties: Real estate agents can work in a property management 
        business, brokerage or independently. Daily responsibilities involve various administrative, 
        marketing and communication tasks as they show and sell real estate. Those with their own real 
        estate business might delegate some responsibilities to other agents and manage negotiation 
        or transaction processes.

</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      {/* <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a> */}
      <div class="card-body">
        <h4 class="card-title">
          <a href="#"> Public relations manager</a>
        </h4>
        <p class="card-text">Primary duties: A public relations manager shares a brand's positioning 
        with the media and general public. They create media kits, pitch stories to the media so 
         client can share their product or brand story, organize conferences and trade shows 
         and write press releases. A public relations manager enhances their client's public 
         image through articles, news stories and education.</p>
      </div>
    </div>
  </div>
</div>

<ul class="pagination justify-content-center">
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span class="sr-only">Previous</span>
    </a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">1</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">2</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">3</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span class="sr-only">Next</span>
    </a>
  </li>
</ul>
<div class="container">
  <div class="card border-0 shadow my-5">
    <div class="card-body p-5">
      <h1 class="fw-light">Job Search</h1>
      <form id="myForm">
      <label for="myTextbox">Search</label>
      <input type="text" id="myTextbox" name="name" value="Public relations manager"/>
      <input type="submit" value="Submit"/>
      </form>
      <div id="output"></div>


      <p class="lead">A public relations manager shares a brand's positioning 
        with the media and general public. They create media kits, pitch stories to the media so 
         client can share their product or brand story, organize conferences and trade shows 
         and write press releases. A public relations manager enhances their client's public 
         image through articles, news stories and education.</p>
      <p class="lead">National average salary:</p>
      <div ></div>
      <p class="lead mb-0">$55,738 per year; $30.02 per hour</p>
    </div>
  </div>
</div>
</div>

    
  );
};

export default Services;
