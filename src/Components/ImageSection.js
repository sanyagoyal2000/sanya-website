import React from 'react'
import styled from 'styled-components';
import resume from '../img/img2.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Sanya Goyal</span></h4>
                <p className="paragraph">
                    I am an Indian student in my junior year at Delhi Technological University.I doing my BTech. in 
                    Computer Science Engineering.I am doing my minor in Data Ananlytics.I am proficient in C++ and C.Currently,I am exploring various front end 
                    frameworks and javascripts libraries like react.js,next.js,etc.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        
                    </div>
                    <div className="info">
                        <p>: Sanya Goyal</p>
                        
                        <p>: Indian </p>
                        <p>: English,Hindi,and basic Spanish </p>
                        <p>: India</p>
                        
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1rgehSUqdQu5zN7AAm-gDFuPfxnfnjGrs/view?usp=sharing"><PrimaryButton title={'Download Resume'}/></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
