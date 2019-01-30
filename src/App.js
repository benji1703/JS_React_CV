import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="April 2018 - Current"
                            iconStyle={{
                                background: '#e8e8e8',
                                color: '#fff'
                            }}
                            icon={< WorkIcon />}>
                            <h3 className="vertical-timeline-element-title">Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">SAP Labs Israel</h4>
                            <p>
                                SAP Cloud Platform Developper.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October 2017 - Mars 2018"
                            iconStyle={{
                                background: '#e8e8e8',
                                color: '#fff'
                            }}
                            icon={< WorkIcon />}>
                            <h3 className="vertical-timeline-element-title">Java Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Halo Labs</h4>
                            <p>
                                Developing Prototyping product for designers in VR environment.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="April 2017 – December 2017"
                            iconStyle={{
                                background: '#e8e8e8',
                                color: '#fff'
                            }}
                            icon={< WorkIcon />}>
                            <h3 className="vertical-timeline-element-title">Javascript Support Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dooblo, Kfar Saba</h4>
                            <p>
                                Provide thorough support and problem resolution for customers in JavaScript.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Mars 2014 - April 2016"
                            iconStyle={{
                                background: '#e8e8e8',
                                color: '#fff'
                            }}
                            icon={< WorkIcon />}>
                            <h3 className="vertical-timeline-element-title">Lead Intelligence Officer</h3>
                            <h4 className="vertical-timeline-element-subtitle">"Yahalom" Unit - IDF</h4>
                            <p>
                                Management of the intelligence axis during dozens of operations. Management and command of 4 officers and about 25 soldiers.
                                Responsible of the Intelligence for the entire Unit's activities in a variety of sectors simultaneously. Working
                                with multiple Intelligence organizations. Participation and Leading the Intelligence's unit during Operation
                                "Protective Edge" ("Zuk Eitan") Held situation evaluation to senior officials.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2016"
                            iconStyle={{
                                background: '#e8e8e8',
                                color: '#fff'
                            }}
                            icon={< WorkIcon />}>
                            <h3 className="vertical-timeline-element-title">Intelligence Corp</h3>
                            <h4 className="vertical-timeline-element-subtitle">IDF</h4>
                            <p>
                                Gained experience in managing teams, cross-projects and working in parallel axes. Graduated from the
                                Intelligence Corp and Completed "Intelligence Officers" course.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="October 2016 - Current"
                            iconStyle={{
                                background: '#bfbfbf',
                                color: '#fff'
                            }}
                            icon={< SchoolIcon />}>
                            <h3 className="vertical-timeline-element-title">B.Sc. in Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">IDC Herzliya</h4>
                            <p>
                                Business Administration Cluster
                            </p><p>
                            Excellence Scholarship
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{
                                background: '#bfbfbf',
                                color: '#fff'
                            }}
                            icon={< SchoolIcon />}>
                            <h3 className="vertical-timeline-element-title">High School</h3>
                            <p>
                                Graduated with honor in Electronics and Computers
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2017 & 2018"
                            iconStyle={{
                                background: '#bfbfbf',
                                color: '#fff'
                            }}
                            icon={< SchoolIcon />}>
                            <h3 className="vertical-timeline-element-title">Hackaton Participant</h3>
                            <h4 className="vertical-timeline-element-subtitle">IDC Herzliya</h4>
                            <p>
                                Javascript / React.JS / Node.JS
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
