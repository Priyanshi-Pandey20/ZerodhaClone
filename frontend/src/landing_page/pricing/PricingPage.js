import React from 'react';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Brokerage from './Brokerage'
import Table from './Table';

function PricingPage(){
    return(
        <>
      <Hero/>
      <OpenAccount/>
      <Brokerage/>
      <Table/>
      </>

    )
}

export default PricingPage