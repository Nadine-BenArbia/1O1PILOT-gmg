import React from "react";
import { ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
   ServicesP } 
  from "./ServicesElements";
import "../../App.css"
const Services = () => {
  return (
    <>
    <ServicesContainer id='services'>
    <ServicesH1> You are here to hire</ServicesH1>
      <ServicesWrapper>
      
     
      <ServicesCard>
        <ServicesIcon src='https://static.thenounproject.com/png/947106-200.png' />
        <ServicesH2> reach Relevant Talent</ServicesH2>
        <ServicesP> List your required skills for the job so 
          the right candidates apply
        </ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5NHzM0CAZbmPi8IaqqzDZjRc25vEqRiZBg&usqp=CAU' />
        <ServicesH2> Organize Candidates</ServicesH2>
        <ServicesP> view and sort resumes,send messages,and schedule interviews</ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src='https://www.svgrepo.com/show/54454/business-job-search-symbol.svg' />
        <ServicesH2> Feature Your Job</ServicesH2>
        <ServicesP> Get better visibility when you pay to post your job </ServicesP>
      </ServicesCard>
     
      </ServicesWrapper>
    </ServicesContainer>
    </>
  )
};

export default Services;