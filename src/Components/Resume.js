import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'June 2021-August 2021'} 
                        title={'Summer intern'}
                        subTitle={'Ciena'}
                        text={"Worked on Ciena's SDS(service delivery) switches for Middleware related feature development, which includes SNMP and TELNET module, majorly working on authentication-related protocols. "} 
                    />
                    <ResumeItem 
                        year={'January 2020-February 2020'} 
                        title={'Intern'}
                        subTitle={'Ingenious e brain Solutions'}
                        text={'Worked on their website.'} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019-2023'} 
                        title={'BTech in Computer Engineering'}
                        subTitle={'Delhi Technological University'}
                        text={'8.90 cgpa till 4th semester. '} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Class 12th'}
                        subTitle={'CR Oasis Convent Sr. Secondary School'}
                        text={'94% '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'Class 10th'}
                        subTitle={'Delhi Public School,Sector 45 Gurgaon'}
                        text={'10 cgpa'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
