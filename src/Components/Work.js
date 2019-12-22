import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import drfirst from './assets/DrFirst-Iprescribe.png'
import umd from './assets/umd.png'
import jqi from './assets/jqi.png'
import Image from 'react-bootstrap/Image'


class Timeline extends Component {
    render() {
        return (
            <VerticalTimeline className="timeline">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="June 2019 - November 2019"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={drfirst} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">DrFirst </h4>
                    <p>
                        - Designed and developed RESTful apis in Spring Boot Integration server for DrFirst’s e-prescribing mobile app to support a new third-party identity proofing system. Helped come up with the changes required in two other applications for this integration
                        <br />
                        - Communicated with product owners and third-party companies about requirements for any new feature or implementation change, ensuring NIST standards and legal guidelines
                        <br />
                        - Fixing production issues related to Single Sign-On users unable to login after using the old identity proofing method. Worked with Data base Administrators, and Support Staff to identify, solve and verify the problems
                        <br />
                        - Helped Quality Assurance Engineers understand new SureScript standard resulting in robust testing
                        <br />
                        - Applied Best Practices of Software Design to elevate code quality and system design. Feature Driven Development, Pair Programming and Extreme Programming.
                        <br />
                        - Collaborated and participated in daily Scrum/Agile meetings, code reviews, and sprint planning
            </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="May 2018 - June 2019"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={jqi} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Joint Quantum Institute</h4>
                    <p>
                        I am a Web developer working with Emily Edwards and Chris Cesare  from Joint Quantum Institute at the University of Maryland and the National Institute of Standards and Technology, College Park.<br />
                        <br />
                        Part of National Science Foundation (NSF) #1713387 Grant funded Advancing Informal STEM Learning (AISL) program that seeks to advance new approaches to, and evidence-based understanding of, the design and development of STEM learning in informal environments. The goal of this project is to make 21st century quantum science comprehensible and engaging to non-expert informal adult learners.<br />
                        <br />
                        Responsibilities include: <br />
                        <br />
                        - Creating a modular website using React.js framework with many multimedia elements and a structure to expand in future<br />
                        - Using three.js and GreenSock (GSAP) for short animations, graphics, and simulations and developing a visually driven online resource to engage non-expert audiences in understanding the basics of quantum physics. <br />
                        - Using latest libraries with React.js like styled components to make styling of individual articles easier. <br />
                        - Making the website and its interactive components Open-Source so that they can be embedded in other websites. <br />
                        - Also maintaining the existing Joint Quantum Institute website, updating its individual Drupal modules and working on upgrading the Drupal core from 7 to 8. <br />
                        - Created a Drupal website for Condensed Matter Theory Center at UMD<br />
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="June 2018 - June 2019"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Student System Administrator</h3>
                    <h4 className="vertical-timeline-element-subtitle">Department of Computer Science, University of Maryland</h4>
                    <p>
                        - Maintaining the CS Department network, managing Mail Servers, VLAN network and Web Servers<br />
                        - Setting up VMs and new Red Hat Systems through Cobbler and managing them through Puppet<br />
                        - Creating automated scripts to set up new accounts, web pages and VMs on CS servers<br />
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="August 2017 - May 2018"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Department of Computer Science, University of Maryland</h4>
                    <p>
                        - Teaching assistant for Dr. Evan Golub, Dr Roger Eastman and Dr. Ilchul Yoon teaching Object Oriented Programming. <br />
                        - Taught a class of 30 student and held office hours to provide help for programming assignments <br />
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="May 2017 - April 2018"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Student Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Department of Resident Life, University of Maryland</h4>
                    <p>
                        -	Migrated the website from Static to Dynamic (Drupal)<br />
                        -	Managed Department of Resident Life and Counselling center website and made the websites web accessible<br />
                        -	Created digital marketing materials for the web, social media, and e-mail marketing targeted towards students and parents <br />
                        -	Enhanced their guidebook app and making it more suitable for students<br />
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="July 2017 - September 2017"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Department of Criminology and Criminal Justice, University of Maryland</h4>
                    <p>
                        Research Assistant under Dr. David Maimon from University of Maryland Cybersecurity Center and the Department of Criminology and Criminal Justice.<br />
                        <br />
                        Part of $500,000 National Science Foundation (NSF) #1444633 Grant funded research project on studying the behavioral model Wi-Fi network access and thus determine susceptibility to cybercrime victimization over smartphones. The 2-year research produces software models by data mining, aiding design of mobile devices that are more secure from cyber crime intrusion.<br />
                        <br />
                        Responsibilities include:<br />
                        <br />
                        -Configuration and setting up of DHCP server at data collection locations on Windows Server 2012 running on VirtualBox.<br />
                        -Sniffing additional network traffic from location's WiFi using Atheros AR9271 Chipset Long-Range Antenna.<br />
                        -Capturing primary data on the WiFi activity of network users on Linux in real-time utilizing a host system connected to Verizon MiFi broadband wireless router.<br />
                        -Mapping the layout and movement at source points, as well as monitoring and analysis of sniffed packets from users in potential research locations spread across Washington DC, Maryland and Virginia.<br />
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work timeline-ele"
                    date="May 2017 - June 2017"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Maryland Information and Network Dynamics</h4>
                    <p>
                        -	Worked under Professor Dr. Ashok Agarawala and PhD candidates and assisting them in Lab’s daily operations.
            <br />
                        -	Created an Android app to help determine the exact location of a person including the room and the floor of the building using Wi-Fi access points.
            </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education timeline-ele"
                    date="September 2016 - December 2019"
                    iconStyle={{ textAlign: 'center' }}
                    icon={<Image className="w-100" src={umd} roundedCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's @ University of Maryland - College Park</h3>
                    <p>
                        Major: Computer Science
                    </p>
                    <p>
                        Minor: Statistics
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', textAlign: 'center' }}
                    icon={<i className="fa fa-bullseye fa-2x" />}
                />
            </VerticalTimeline>
        )
    }
}

export default Timeline