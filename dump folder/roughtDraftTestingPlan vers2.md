OM Events 
Test Plan Document 
Introduction 
This testing plan outlines the approach, criteria, and responsibilities for testing the OM Events system developed by Group 10. The objective of this plan is to validate the quality, performance and reliability of the web application to ensure that it meets the functional requirements and quality standards before its deployment. 
Test Items 
The test items include all modules, functionalities, and components of the OM Events system that require validation through testing. 
A. Features Not To Be Tested: 
External third party authentication-systems.
Compatibility with outdated browsers.

B. Features To Be Tested: 
1. User Authentication and Role-Based Access 
Approach: Unit Testing and Integration Testing
Item Pass Criteria: Users can create accounts, log in, and are assigned the correct roles (Admin, Event Organizer, Event Worker, Attendee). Features access is restricted based on user roles. 
2. Event Creation by Organizers 
Approach: Unit Testing and Integration Testing 
Item Pass Criteria: Event organizers can successfully create events with all required details and submit them for administrator approval. 
3. Event Approval and Management by Admins 
Approach: Unit Testing and Integration Testing 
Item Pass Criteria: Admins can approve, deny, or cancel event requests, assign event spaces, and manage event details. The system reflects changes accurately. E.g. An assigned event space is unavailable to others during the event time. 
4. Event Space Search and Booking 
Approach: Unit Testing and Integration Testing
Item Pass Criteria: Users can search for available event spaces. Event organizers can
request spaces and admins can assign or mark spaces as unavailable.
5. Worker Sign-Up and Scheduling 
Approach: Unit Testing and Integration Testing 
Item Pass Criteria: Event workers can sign up for shifts, post availability, and view their current event assignments.
6. Notifications System 
Approach: Integration Testing 
Item Pass Criteria: Users receive timely notifications (via web portal) regarding event approvals, cancellations, updates, and assignments. 
7. Event Editing and Cancellation 
Approach: Unit Testing and Integration Testing 
Item Pass Criteria: Authorized users (event organizers and administrators) can edit event details or cancel events, with updates accurately displayed to relevant users.
8. Attendee Event Interaction 
Approach: Unit Testing and Integration Testing 
Item Pass Criteria: Attendees can view approved events, like events to receive updates, and approve searches for events of interest. 
9. System Performance and Scalability 
Approach: Performance Testing and Load Testing 
Item Pass Criteria: The system maintains acceptable and efficient response times and performance levels under anticipated user load. 
Suspension Criteria and Resumption Requirements 
Testing activities may be suspended/paused if critical defects hinder testing progress or if environmental issues arise that affect test execution. Testing will resume once these issues are resolved and the testing environment is stable.
Test Deliverables 
Test Plans and Test Cases: Documentation of all testing scenarios and individual test cases.
Test Execution Reports: Detailed records of each test case execution. 
Defect Reports and Resolutions: Documentation of identified defects and their resolutions. 
Test Summary Report: A final report summarizing all testing activities, results, and findings.
Environmental Needs 
Testing Environments: Environments that mirror production to ensure accurate testing conditions. 
Access to Testing Tools and Resources: All necessary tools, including automation and manual testing resources. 
Stable Internet Connectivity: Reliable internet for smooth test execution. 
Hardware Requirements: Computers that meet minimum system requirements.
Automation Tools: Use of tools, such as Selenium, for automated testing where applicable.
Responsibilities 
Development Team: Provide builds for testing and resolve defects identified by the testing team.
Testing Team: Design, execute, and report test cases, and identify and report any defects found.
Project Manager: Oversee all testing activities and ensure alignment with project timelines. 
Staffing and Training Needs 
Testing team members should possess skills in both manual and automated testing methodologies.
Training will be provided for any new tools or technologies introduced during the testing process. 
Schedule 
Testing activities will occur concurrently with the development phase, following an iterative approach to maintain agility.
Testing milestones and timelines will be set in accordance with the project schedule. 
Risks and Contingencies 
Double-Booking of Event Spaces: There is a potential risk for event spaces being booked by multiple organizers simultaneously. 
- Mitigation: Implement and deeply test booking conflict detection and resolution
mechanisms. 
Information Security: The system will handle sensitive user information, such as contact details, which require secure handling.
- Mitigation: Enforce data encryption, secure authentication, and strict access control to protect user data.
Missed Notifications: Users may miss important updates if notifications fail. 
- Mitigation: Test the reliability and consistency of the notification system to ensure users
receive updates promptly. 

Approvals 
This testing plan requires formal approval from project stakeholders and the Product Manager before testing activities commence. Any updates or modifications to this plan will be documented and shared with the relevant parties, accordingly. 
