import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import SummaryCard from '../components/card/summaryCard';

const Home: React.FC = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Main" /> */}

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <SummaryCard />
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

export default Home;
