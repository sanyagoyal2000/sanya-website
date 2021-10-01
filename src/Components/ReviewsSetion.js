import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Extra Curricular'} span={'Extra Curricular'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        title={'General Secretary at Society of Robotics DTU.'}
                        text={"Responsible for the day to day functioning of the society.I am also the Corporate head and mentoring a group of 3-4 students and helping them develop various technical skills."}
                    />
                    <ReviewItem 
                        title={'Treasurer at Round Table Society DTU'} 
                        text={"I have organized many national level competitions and hackathon in the past."}
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
