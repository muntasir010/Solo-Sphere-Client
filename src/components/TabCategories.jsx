import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  },[])
  return (
    <Tabs>
      <div className='px-6 py-10'>
        <div className='max-w-2xl mx-auto py-6 text-center space-y-3'>
          <h1 className='text-4xl font-bold'>Browse Job Categories</h1>
          <p>Compellingly leverage other's reliable communities via emerging collaboration and idea-sharing. Completely productive visionary internal or "organic" sources for superior alignments. Seamlessly facilitate focused manufactured products after superior users. Objectively streamline equity invested.</p>
        </div>
        <div className='flex items-center justify-center font-semibold '>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16 '>
            {jobs.filter(j => j.category === 'Web Development').map(job => <JobCard
              job={job}
              key={job._id}></JobCard>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16 '>
            {jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCard
              job={job}
              key={job._id}></JobCard>)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16 '>
            {jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard
              job={job}
              key={job._id}></JobCard>)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;