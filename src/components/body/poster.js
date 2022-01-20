import { Fragment } from "react";
import styled from "styled-components"
import getRating from "../../utils/rating";


const Image = styled.img`
width: 250px;
height: auto;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 1440px) {  
 width: 100%;
 height: 100%;   
}

`



function Poster({ details }) {




    return (
        <Container>
            {Object.keys(details).map(item => (
                <Fragment>
                    <Image src={details[item].Poster} alt={details[item].Title} key={details[item].Title} />
                    <p>Rating is: {
                        getRating(details[item].Ratings)


                    }</p>


                </Fragment>
            ))}
        </Container>
    )
};


export default Poster;