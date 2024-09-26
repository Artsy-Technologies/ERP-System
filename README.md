# 🏫 School ERP System

<div align="center">  <img src="https://readme-typing-svg.herokuapp.com?color=45ffaa&size=40&width=900&height=80&lines=Welcome+to+the+School+ERP+System!"/></div>

<p align="center">  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/stars/Artsy-Technologies/school-website" alt="GitHub stars"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/forks/Artsy-Technologies/school-website" alt="GitHub forks"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/issues/Artsy-Technologies/school-website" alt="GitHub issues"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/license/Artsy-Technologies/school-website" alt="GitHub license"></a></p>

## Project Overview

The School ERP (Enterprise Resource Planning) system is designed to streamline and manage all school-related administrative and academic activities efficiently. It offers a comprehensive platform to integrate various modules such as student information, attendance, examinations, finance, human resources, and more. The aim is to enhance operational efficiency, improve communication, and support better management of school activities.

## Key Features

### 1. Student Information Management
- **Student Profiles**: Detailed records including personal details, academic history, and health records.
- **Enrollment Management**: Handle admissions, registrations, and transfers.
- **Parent Portal**: Access to child's academic progress, attendance, and teacher communication.

### 2. Attendance Management
- **Automated Attendance**: Track attendance via biometric, RFID, or manual entry.
- **Attendance Reports**: Generate daily, weekly, and monthly reports.
- **Alerts and Notifications**: Notify parents/guardians about absenteeism.

### 3. Timetable and Scheduling
- **Timetable Creation**: Automated generation for classes, exams, and extracurriculars.
- **Schedule Management**: Manage and notify changes in schedules.
- **Room Allocation**: Optimize classroom and facility usage.

### 4. Examination and Grade Management
- **Exam Scheduling**: Plan and schedule exams with seating arrangements.
- **Gradebook**: Record and manage grades and assessments.
- **Report Cards**: Generate digital and printable report cards.
- **Performance Analytics**: Analyze and generate insights on student performance.

### 5. Finance and Accounting
- **Fee Management**: Automate fee collection, invoicing, and receipt generation.
- **Expense Tracking**: Monitor expenses and manage budgets.
- **Financial Reports**: Generate financial statements and custom reports.

### 6. Human Resources Management
- **Staff Profiles**: Maintain detailed staff records.
- **Payroll Management**: Automate payroll processing and salary disbursement.
- **Leave Management**: Track leave requests and approvals.
- **Performance Appraisals**: Manage staff evaluations.

### 7. Library Management
- **Catalog Management**: Digital catalog of library resources.
- **Issuing and Returning**: Track book issuance and returns.
- **Inventory Management**: Manage library stock levels.
- **Fines and Penalties**: Automate fines for overdue books.

### 8. Transport Management
- **Route Planning**: Optimize school bus routes and schedules.
- **Vehicle Tracking**: Track real-time location of buses.
- **Transport Fee Management**: Manage transport fees and payments.

### 9. Communication and Collaboration
- **Messaging System**: Facilitate communication between stakeholders.
- **Announcements**: Broadcast important updates.
- **Event Management**: Plan and manage school events.

### 10. Inventory and Asset Management
- **Asset Tracking**: Track school assets and equipment.
- **Inventory Control**: Manage supply levels.
- **Maintenance Records**: Record asset maintenance and repairs.

### 11. Security and Compliance
- **Data Protection**: Ensure security of sensitive data.
- **Access Control**: Manage user roles and permissions.
- **Compliance Management**: Adhere to educational regulations.

### 12. Mobile Access
- **Responsive Design**: Seamless operation across devices.
- **Mobile App**: Access system features on the go via mobile application.

## Usage

    Login: Access the system via the login page.
    Modules: Navigate through various modules such as Student Management, Attendance, Finance, etc., from the dashboard.
    Admin Access: Ensure you have admin privileges to manage system settings and user roles.

## Frontend Installation

1. Clone the repository:
```bash
      git clone https://github.com/<your-github-username>/ERP-System.git
```
  
2. Navigate to the `client` directory:
  
     ```
      cd ERP-System/client
     ```
  
4. Install dependencies:
  
     ```
      npm install
     ```

5. Set up environment variables: Create a `.env` file in the `client` directory and add the following:
  
      ```
     REACT_APP_API_BASE_URL=http://localhost:3000
     REACT_APP_AXIOS_WITH_CREDENTIALS=true
      ```
6. Run the frontend application: 
  
      ```
      npm start
      ```
  
7. You can view the website in localhost: `http://localhost:3000`

### Backend Installation

1. Navigate to the `server` directory:
  
      ```
      cd school-website/server
      ```
  
2. Install dependencies:
  
      ```
      npm install
      ```
3. Set up environment variables: Create a `.env` file in the `server` directory and add the following:
  
     ```
     MANGODB_URL=mongodb+srv://akdattingal:Aaadi4321@schoolerp.r4y1m.mongodb.net/
     PORT=3000
     ```
  
4. Run the backend application:
  
      ```
      npm start
      ```

## Contributing

We welcome contributions to enhance the system. 

This project is licensed under the GNU License.

## 🔄 Making a Pull Request

1. Fork the repository by clicking on the fork symbol at the top right corner.
  
2. Clone your forked repository:
  
     ```
     git clone https://github.com/<your-github-username>/ERP-System.git
     ```
  
3. Navigate to the project directory:
  
      ```
      cd ERP-System
      ```
4. Update your branch in github and also your code in local:
  
      ```
      git checkout Main
      git pull
      ```
  
5. Make your changes, Add your files.
   
6. Create a new branch:
  
      ```
      git checkout -b YourBranchName
      ```
  
      or
   
      ```
      git branch YourBranchName
      git switch YourBranchName
      ```

8. Check your branch:
  
      ```
      git status
      ```
  
9. Stage your changes and commit:

      ```
      git add file/folder
      git commit -m "<your_commit_message>"
      ```
  
      or

      ```
      git add .
      git commit -m "<your_commit_message>"
      ```
     
10. Push your changes to your forked repository:
  
      ```
      git push origin YourBranchName
      ```
  
11. Create a pull request on GitHub.
  

**Congratulations on your contribution! 🙌🏼**

## Contact

For any inquiries or support, please contact us at theartsytechnologies@gmail.com.

Thank you for using the School ERP System!
