import React from 'react';

const JobSearchFilters = ({ handleSearch, handleFilterChange }) => {
  return (
    <div>
      <h2>Job Search Filters</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Keywords"
          onChange={(e) => handleFilterChange('keywords', e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />
        <select onChange={(e) => handleFilterChange('type', e.target.value)}>
          <option value="">Select Job Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const JobListing = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

const JobDetail = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

const JobSearchApp = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Perform API call with search filters
  };

  const handleFilterChange = (filter, value) => {
    // Handle changes in search filters
  };

  const jobListings = [
    { id: 1, title: 'Front-end Developer', company: 'ABC Company', location: 'New York' },
    { id: 2, title: 'Back-end Developer', company: 'XYZ Corporation', location: 'San Francisco' },
    // Additional job listings
  ];

  return (
    <div>
      <JobSearchFilters handleSearch={handleSearch} handleFilterChange={handleFilterChange} />

      <h2>Job Listings</h2>
      {jobListings.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}

      {/* Render job detail when a job listing is clicked */}
      {/* <JobDetail job={selectedJob} /> */}
    </div>
  );
};

export default JobSearchApp;