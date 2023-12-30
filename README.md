Certainly! Here's a modified version of your project details focusing on how the technologies, including JWT, are implemented in the project:

---

# Blad - Blood Donation Platform

Welcome to Blad, a blood donation website designed to streamline the blood donation process, connecting donors, volunteers, and administrators for a more efficient and life-saving experience.

## Live Site

Visit the live site: [Blad - Blood Donation](https://blad-donate.web.app/)

## Backend Repository

[Backend Repository](https://github.com/Be3tle/blad-mern-server-side.git)

## Features

### User Role Functionality

Blad incorporates a robust user role system, ensuring that each user has specific privileges and access levels within the platform.

1. **Admin Role:**

   - **View and Edit All Users:** Admins have the authority to view and edit information for all users registered on the platform.
   - **Manage Donation Requests:** Admins can oversee and modify details related to all donation requests.

2. **Volunteer Role:**

   - **View Donation Requests:** Volunteers can see a list of donation requests.
   - **Update Request Status:** Volunteers have the capability to update the status of donation requests, providing real-time information on their progress.

3. **Donor Role:**
   - **Create Donation Requests:** Donors can easily create new donation requests, providing essential details such as the blood type, location, and urgency.
   - **View Own Donation Requests:** Donors have access only to their own donation requests, ensuring privacy and a focused view of their contributions.

### Technologies and Implementations

#### Frontend

- **React:** Utilized for building dynamic and responsive user interfaces.
- **Tailwind CSS:** Used for efficient and responsive styling, providing a visually appealing user experience.

#### Backend

- **MongoDB:** Implemented as a NoSQL database for storing and retrieving user and donation request information.
- **Express.js:** Employed as the web application framework for Node.js, facilitating the creation of robust and scalable APIs.
- **JWT (JSON Web Token):** Implemented for secure authentication and authorization. JWTs are issued upon successful login and are sent with each subsequent request to authenticate the user's identity.
- **Axios:** Used for making HTTP requests from the frontend to the backend, facilitating seamless communication between the client and server.

#### Deployment

- **Firebase:** Used as the platform for hosting and deploying the Blad website, ensuring a reliable and accessible user experience.

Thank you for using Blad - your contribution can help save lives!
