# OM Events
## Test Plan Document

### Introduction
This testing plan outlines the approach, criteria, and responsibilities for testing the **OM Events** system developed by Group 10. The purpose of this plan is to ensure the quality and reliability of the web application before its deployment.

### Test Items
The test items include all modules, functionalities, and components of the OM Events system that require validation through testing.

#### A. Features Not To Be Tested:
(blank for now)

#### B. Features To Be Tested:

1. **User Authentication and Role-Based Access**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Users can create accounts, log in, and are assigned the correct roles (Admin, Event Organizer, Event Worker, Attendee). Access to features is restricted based on user roles.

2. **Event Creation by Organizers**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Event organizers can create events with all required details and submit them for approval.

3. **Event Approval and Management by Admins**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Admins can approve or deny event requests, cancel events, assign spaces, and manage event details. Changes are reflected accurately in the system. *E.g. An assigned event space no longer being available during an event time.*

4. **Event Space Search and Booking**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Users can search for available event spaces. Event organizers can request spaces, and admins can assign or make spaces unavailable.

5. **Worker Sign-Up and Scheduling**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Event workers can sign up to work, post their available hours, and view events they are assigned to.

6. **Notifications System**
   - **Approach**: Integration Testing
   - **Item Pass Criteria**: Users receive notifications (via web portal) about event approvals, cancellations, updates, and assignments.

7. **Event Editing and Cancellation**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Event organizers and admins can edit event details or cancel events. Updates are properly reflected to all relevant users.

8. **Attendee Event Interaction**
   - **Approach**: Unit Testing and Integration Testing
   - **Item Pass Criteria**: Attendees can view approved events, like events to receive updates, and search for events.

9. **System Performance and Scalability**
    - **Approach**: Performance Testing and Load Testing
    - **Item Pass Criteria**: The system performs efficiently under expected load, with acceptable response times.


### Suspension Criteria and Resumption Requirements
Testing may be suspended if critical defects impact testing progress or if there are environmental issues affecting test execution. Testing will resume once such issues are resolved, and the environment is stable.

### Test Deliverables
- Test plans and test cases
- Test execution reports
- Defect reports and resolutions
- Test summary report

### Environmental Needs
- Testing environments mirroring production environments
- Access to testing tools and resources
- Stable internet connectivity
- Computers meeting minimum requirements
- Automation tools *(e.g., Selenium)*

### Responsibilities
- **Development Team**: Provide builds for testing and address defects raised during testing.
- **Testing Team**: Design, execute, and report test cases. Identify and report defects.
- **Project Manager**: Oversee testing activities and ensure alignment with project timelines.

### Staffing and Training Needs
- Testing team members should possess expertise in manual and automated testing methodologies.
- Training may be provided for new tools or technologies introduced during the testing process.

### Schedule
Testing activities will be conducted in parallel with the development phase, following an iterative approach. Specific testing milestones and timelines will be aligned with the project schedule.

### Risks and Contingencies
- **Double-Booking of Event Spaces**: Potential for spaces to be double-booked by different organizers.
  - *Mitigation*: Implement and test booking conflict detection and resolution mechanisms.
- **Information Security**: Handling sensitive user information (e.g., contact details).
  - *Mitigation*: Enforce data encryption, secure authentication, and access controls.
- **Missed Notifications**: Important updates could be missed if users do not receive notifications.
  - *Mitigation*: Ensure reliability of the notification system through testing. 

### Approvals
This testing plan requires approval from the project stakeholders and the Product Manager before testing activities commence. Any modifications to the plan will be documented and communicated accordingly.
