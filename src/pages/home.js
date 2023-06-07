import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page" >
      <div className="home-image" style={{display: 'flex'}}>
        <img src="https://i0.wp.com/www.familysecurityplan.com/wp-content/uploads/2014/10/single-mom.jpg" 
        alt="placeholder"
        style={{width: '50%', height:'auto'}}/>
        
      <p className="description" style={{marginLeft: '10px'}}>
      <h1>Welcome, Single Mom!</h1>
        We understand the challenges you face as a single mom, and we're here to support you on your journey.
      </p>

      </div>
      <h2>Featured Resources</h2>
      <div className="resource-card">
        <h3>Financial Assistance</h3>
        <p>
          Explore various financial assistance programs available for single moms to help with expenses and education.
        </p>
        <a href="/financial-assistance">Learn More</a>
      </div>
      <div className="resource-card">
        <h3>Childcare Services</h3>
        <p>
          Find reliable and affordable childcare services near you to ensure the well-being of your child while you work or study.
        </p>
        <a href="/childcare-services">Learn More</a>
      </div>
      <div className="resource-card">
        <h3>Career Development</h3>
        <p>
          Discover career development resources, job training programs, and employment opportunities to enhance your skills and secure a stable income.
        </p>
        <a href="/career-development">Learn More</a>
      </div>
      <div className="resource-card">
        <h3>Support Groups</h3>
        <p>
          Connect with other single moms in supportive communities, share experiences, and find emotional support to help you navigate the challenges.
        </p>
        <a href="/support-groups">Learn More</a>
      </div>
    </div>
  );
};

export default HomePage;
