import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section class="bg-light py-5 py-xl-8">
  <div class="container" style={{marginBottom: '10%'}}>
    <div class="row gy-5 gy-lg-0 gx-lg-6 gx-xxl-8 align-items-lg-center">
      <div class="col-12 col-lg-6">
        {/* <img class="img-fluid rounded" loading="lazy" src="./assets/img/about-img-1.webp" alt=""> */}
        <img src="https://i0.wp.com/www.familysecurityplan.com/wp-content/uploads/2014/10/single-mom.jpg" 
        alt="placeholder"
        style={{width: '100%', height:'auto', borderRadius: '25px'}}/>
      </div>
      <div class="col-12 col-lg-6">
        <h2 class="h1 mb-3">Why Choose Us?</h2>
        <p class="lead fs-4 text-secondaryX mb-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
        <div class="d-flex align-items-center mb-3">
          <div class="me-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div>
            <p class="fs-5 m-0">Our evolution procedure is super intelligent.</p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div class="me-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div>
            <p class="fs-5 m-0">We deliver services beyond expectations.</p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-5">
          <div class="me-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div>
            <p class="fs-5 m-0">Let's hire us to reach your objectives.</p>
          </div>
        </div>
        <button type="button" class="btn btn-outline-primary btn-2xl rounded-pill px-4 gap-3">Connect Now</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row gy-5 gy-lg-0 gx-lg-8 align-items-center">
      <div class="col-12 col-lg-4">
        <h2 class="display-5 mb-3 mb-xl-4">REVIEWS</h2>
        <p class="lead mb-4 mb-xl-5">We believe in client satisfaction. Here are some testimonials by our worthy clients.</p>
        <a href="#!" class="btn btn-2xl btn-primary rounded-pill">More Reviews</a>
      </div>
      <div class="col-12 col-lg-8">
        <div class="row gy-4">
          <div class="col-12 col-md-6">
            <div class="card border-0 border-bottom border-primary shadow-sm">
              <div class="card-body p-4 p-xxl-5">
                <figure>
                  {/* <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-1.jpg" alt=""> */}
                  <figcaption>
                    <blockquote class="bsb-blockquote-icon mb-4">"I had a great experience working as an REA. I couldn't be happier with the service I received."</blockquote>
                    <h4 class="mb-2">Luna John</h4>
                    <h5 class="fs-6 text-secondary mb-0">Real estate agent</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card border-0 border-bottom border-primary shadow-sm">
              <div class="card-body p-4 p-xxl-5">
                <figure>
                  {/* <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-2.jpg" alt=""> */}
                  <figcaption>
                    <blockquote class="bsb-blockquote-icon mb-4">"They are highly responsive, attentive to detail, and always go above. Their expertise and proactive approach have greatly contributed to the success of our business partnership."</blockquote>
                    <h4 class="mb-2">Mark Smith</h4>
                    <h5 class="fs-6 text-secondary mb-0">Account manager</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card border-0 border-bottom border-primary shadow-sm">
              <div class="card-body p-4 p-xxl-5">
                <figure>
                  {/* <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-3.jpg" alt=""> */}
                  <figcaption>
                    <blockquote class="bsb-blockquote-icon mb-4"> "I highly recommend Sales Representative for anyone looking for a top-notch sales professional."</blockquote>
                    <h4 class="mb-2">Michael Wilson</h4>
                    <h5 class="fs-6 text-secondary mb-0"> Sales representative</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card border-0 border-bottom border-primary shadow-sm">
              <div class="card-body p-4 p-xxl-5">
                <figure>
                  {/* <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-4.jpg" alt=""> */}
                  <figcaption>
                    <blockquote class="bsb-blockquote-icon mb-4">"Working with as Public Relations Manager has been a fantastic experience. I have a deep understanding of the media landscape and know how to generate positive publicity for our organization."</blockquote>
                    <h4 class="mb-2">Luke Reeves</h4>
                    <h5 class="fs-6 text-secondary mb-0">Public relations manager</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;