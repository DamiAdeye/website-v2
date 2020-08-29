import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Numbers from "./sections/Numbers/Numbers";
import Footer from "./sections/Footer/Footer";
import {StyledGradientBackground, StyledSectionText, StyledSectionWrapper} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";
import {Container} from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  //refs
  landing = React.createRef();
  about = React.createRef();
  calendar = React.createRef();
  getInvolved = React.createRef();
  resources = React.createRef();
  sponsors = React.createRef();
  committee = React.createRef();
  contactUs = React.createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  componentDidUpdate = () => {
    this.scrollToSection(this.state.selected);
  };

  scrollToSection = index => {
    let refs = [
      this.landing,
      this.about,
      this.calendar,
      this.getInvolved,
      this.resources,
      this.sponsors,
      this.committee,
      this.contactUs
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar changeSelection={this.changeSelection}/>
        <div ref={this.landing}>
          <Landing/>
        </div>
        <StyledSectionWrapper ref={this.about}>
          <StyledGradientBackground>
            <Container style={{width: '1040px'}}>
              <StyledSectionText>{strings.about}</StyledSectionText>
            </Container>
            <Mission/>
          </StyledGradientBackground>
          <Numbers/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.calendar}>
          <Container style={{width: '1042px'}}>
            <StyledSectionText>{strings.calendar}</StyledSectionText>
          </Container>
          <Calendar/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.getInvolved}>
          <Container style={{width: '1060px'}}>
            <StyledSectionText>{strings.getInvolved}</StyledSectionText>
          </Container>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.resources}>
          <Container style={{width: '1060px'}}>
            <StyledSectionText>{strings.resources}</StyledSectionText>
          </Container>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.sponsors}>
          <Container style={{width: '1060px'}}>
            <StyledSectionText>{strings.industry}</StyledSectionText>
          </Container>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.committee}>
          <Container style={{width: '1060px'}}>
            <StyledSectionText>{strings.committee}</StyledSectionText>
          </Container>
          <CurrentCommittee/>
          <PastCommittee/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.contactUs}>
          <Container style={{width: '1060px'}}>
            <StyledSectionText>{strings.contactUs}</StyledSectionText>
          </Container>
        </StyledSectionWrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
