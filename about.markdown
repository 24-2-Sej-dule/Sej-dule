---
layout: page
title: 📄 About
permalink: /about/
---

## Mission Statement

# Objective

- Provide a clear visual representation of classroom schedules to help students easily identify free time slots.
- Specifically, offer information on available classrooms during free periods for students who arrive early and want to use their time efficiently, or for those who find it difficult to move between locations, and display this information intuitively.

# Target Audience

- This project is designed for students looking to utilize available classrooms.

&nbsp;

---

&nbsp;

## Quick Links

- [GitHub Repository](https://github.com/24-2-Sej-dule/Sej-dule)
- [Read the Documentation](https://sej-dule.readthedocs.io/)

&nbsp;

---

&nbsp;

## Key Features

# 1) Login and Sign-Up

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

# 2) Show when the classroom is empty : Chart.js

- **Chart.js Integration**
  - Utilized the open-source library Chart.js to create a timetable in a stacked bar chart format.
- **Data Implementation**
  - Timetable is generated using data collected via JavaScript.
- **Features**
  - Users can select a building and then choose a lecture room to display its timetable.
  - Visual distinction between occupied and free time slots is provided.
  - Hovering over the chart reveals how long the room is available.

# 3) Academic Schedule Integration: FullCalendar

- Integrated the open-source library FullCalendar.js.
- Consolidated the academic schedules scattered across the school website into one unified calendar.
- Enabled users to click on a date to view the academic schedule for that specific day.

# 4) Quick Access to School Websites

- **Direct Links**
  - Provided quick access to school-related websites, including:
    - Sejong University Official Website
    - Daeyang Humanity College
    - DoDream Portal
    - Academic Information System
  - Implemented using `<a>` tags for seamless navigation.

&nbsp;

---

&nbsp;

## Differentiation

- Unlike traditional timetable viewing methods, this project introduces a visual chart that clearly shows free time slots, making it easier for users to identify available periods.
