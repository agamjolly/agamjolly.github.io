import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"


const Container = styled.div `
  text-align: center;
  padding-top:1rem;
`

const OuterContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 30vh;
`

const Description = styled.p `
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`
const Content = styled.p `
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-decoration: none; 
`

const NameHeader = styled.h1 `
  font-family: 'Nunito', 'Avenir', 'Helvetica', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 4.2rem;
  margin-bottom: 0;
`

const LandingBio = () => ( <
    StaticQuery query = { graphql `
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
    render={
        data => ( 
            <OuterContainer>
            <Container>
            <img src="https://scontent.fixc1-2.fna.fbcdn.net/v/t1.0-9/36772297_2042896542389231_3944715169732493312_n.jpg?_nc_cat=110&_nc_oc=AQkGZXEiHtGesP3eUY1Y71pfY_bFamn7dVXT8JAGZovV_6Qj_C4yPiC9pfcb_MfKvhw&_nc_ht=scontent.fixc1-2.fna&oh=4a83d29dec0755fb9a46333f9d5c434c&oe=5DB05322" class="picture" width="30%"></img>
            <NameHeader> { data.site.siteMetadata.title } </NameHeader> 
            <Description> Student and Full Stack Developer</Description>
            <Content>
            </Content>   
            </Container> 
            </OuterContainer>
        )
    }
    />
)

NameHeader.propTypes = {
    siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
    siteTitle: ``,
}

export default LandingBio