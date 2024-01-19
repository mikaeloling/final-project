import NavBar from '../components/NavBar'
import styled from 'styled-components'





const AboutContainer = styled.div`
    display: flexbox;
    flex-direction: row;

    @media (max-width: 1024px) {

        flex-direction: column;
    }

    @media (max-width: 768px) {

        flex-direction: column;
    }
   
    
`;

const AboutSection = styled.div`
   
   display: flex;

flex-direction: column;
padding: 50px;

   
   
`;

const AboutHeading = styled.div`

    display: flex;
    justify-content: center;
    h1 {
        font-size: 30px;
        font-weight: 700;
        color: #000000;
    }
   
    
`;

const AboutText = styled.div`
    width: 80%
    height: 600px;
    
`;

export const AboutCafeMap = () => {
  return (

    
       
       <>
        <NavBar />
        <AboutContainer>
        <AboutSection>
       

                <AboutHeading><h1>About</h1> </AboutHeading>
                <AboutText>
                    <div>
                    <p> Cafélist Tallinn is a web application that allows users to find the best cafes in Tallinn. 
                        Users can view the cafes on a map and click on the markers to see more information about the cafes. 
                        </p>
                    <p>
                        In this version new cafe listings are managed by the admin user.

                    </p>
                    <p>
                        The application is built using React, Node.js, Express, and MongoDB.
                    </p>
                </div>
                </AboutText>


                </AboutSection> 
                </AboutContainer>
           
        </>
        )

   

  
}

export default AboutCafeMap
