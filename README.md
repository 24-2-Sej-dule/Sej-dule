# Sej-dule (셋둘)

**Language**: [KOREAN](README_KOR.md)

**Official Website**: [Sej-dule](https://24-2-sej-dule.github.io/Sej-dule/)
**Document**: [Sej-dule](https://sej-dule.readthedocs.io/)

## 1. Project Overview

In this project, we aim to develop a webpage called "Sej-dule" to organize and display the classroom schedules at Sejong University. Currently, the Sejong University website lacks a convenient feature for quickly checking the availability of specific classrooms. Users must search on the site or download an Excel file to manually find information about the classroom they want, which is inconvenient.

Sej-dule addresses these issues by offering a service that shows class schedules and empty time slots by classroom in an intuitive way, making it easy for users to see classroom availability at a glance.


## 2. Key Features

### 1) Login and Sign-Up
- **Login Feature**
    - Prevents login with incorrect credentials.
- **Sign-Up Feature**
    - Includes validation for the following:
        - Nickname: Minimum 1 character.
        - Username: Must follow email format.
        - Password: Must be at least 8 characters long and include both letters and numbers.
    - Valid input fields are highlighted in green.
- **User Authentication**
    - Saves user information during sign-up, allowing login only with registered credentials.

### 2) Show when the classroom is empty : Chart.js
- **Chart.js Integration**
    - Utilized the open-source library Chart.js to create a timetable in a stacked bar chart format.
- **Data Implementation**
    - Timetable is generated using data collected via JavaScript.
- **Features**
    - Users can select a building and then choose a lecture room to display its timetable.
    - Visual distinction between occupied and free time slots is provided.
    - Hovering over the chart reveals how long the room is available.

### 3) Academic Schedule Integration : FullCalendar
- Integrated the open-source library FullCalendar.js.
- Consolidated the academic schedules scattered across the school website into one unified calendar.
- Enabled users to click on a date to view the academic schedule for that specific day.

### 4) Quick Access to School Websites
- **Direct Links**
    - Provided quick access to school-related websites, including:
        - Sejong University Official Website
        - Daeyang Humanity College
        - DoDream Portal
        - Academic Information System
    - Implemented using `<a>` tags for seamless navigation.
      
## 3. Data Collection Method

Classroom schedule data is gathered from the 2024 academic schedule on Sejong University's Academic Information System. This data includes classroom-specific information, detailing the classes held and their time slots.

Through this, classes can be opened at a certain time and when they are available in a specific classroom, and it supports students to easily check the classrooms they can use freely.

## 4. Expected Benefits

- **Improved Access to Classroom Information**: Users can quickly and easily check the availability of their desired classroom, reducing unnecessary search steps and making information retrieval more convenient.
- **Reduced Stress**: Fewer steps are needed to locate available classrooms, reducing the frustration and stress of searching for information.
- **Efficient Time Management**: The ability to easily identify empty classrooms allows students to effectively plan free or self-study periods.
- **Enhanced User Convenience**: Without complicated searches or downloads, users can intuitively check classroom information, making the academic environment more user-friendly.

## 5. Development Tools

### **1) Frontend**
- **Languages**:
    - HTML
    - CSS
    - JavaScript
- **Libraries**:
    - Chart.js
    - FullCalendar.js

### **2) Backend**
- **Languages**:
    - Node.js
- **Framework**:
    - Express
- **Database**:
    - MongoDB
    - Mongoose

## 6. Role Distribution

- Baek Sejin: Project Management and Data Processing
- Seo Mikyung: Lead Front-end , Support UI/UX
- Jang Seohyun: Lead UI/UX , Support Front-end

## 7. How to Use

### **1) Project Download**
- **Clone the Project from GitHub**
    - Visit the [Sej-dule GitHub Repository](https://github.com/24-2-Sej-dule/Sej-dule).
    - Click **Code → Download ZIP** to download the ZIP file.
    - Use the following commands to clone the project:
    
    ```bash
    git clone https://github.com/24-2-Sej-dule/Sej-dule.git
    cd Sej-dule
    ```
    
- **Run the HTML File**
    - Open the `index.html` file in your browser.
    - This allows you to use the Sej-dule application.

### **2) Node.js and MongoDB Setup**
- **Install Node.js**
    - Use the following commands to install Node.js:
    
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash 
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install --lts
    ```
    
- **Install and Run MongoDB**
    - Follow the [MongoDB Community Edition Installation Guide](https://www.mongodb.com/ko-kr/docs/manual/administration/install-community/) to install MongoDB.
    - Use the following command to start the MongoDB server:
    
    ```bash
    mongod --dbpath /path/to/your/database
    ```
    
### **3) Environment Variable Setup**
- **Create a `.env` File**
    - In the root directory of the project, create a `.env` file and add the following content:
    
    ```bash
    TOKEN_SECRET=Sej-dule-success
    ```
    
### **4) Install Packages and Run**
- **Install npm Packages**
    - Install the required packages for the project:
    
    ```bash
    npm i
    ```
    
- **Start the Project**
    - Use the following command to run the project:
    
    ```bash
    npm run start
    ```

### **5) Access Path**
- To access the project running on the local server, open your browser and go to the following URL:
    
    ```arduino
    http://localhost:3333/1-index.html
    ```
