# MATSYA-Portal
For GDG Hackathon

M.A.T.S.Y.A - Fishery Data Collection Portal
Monitoring Antimicrobial Treatment and Surveillance for Yield and Adherence

This project is a full-stack web application designed to collect and manage data related to aquaculture farming. It provides dedicated portals for Farmers, Veterinarians, and Government Officials to ensure proper tracking of antimicrobial usage (AMU) and adherence to regulatory standards.

📋 Table of Contents
Key Features

Technology Stack

Project Setup and Installation

Prerequisites

Installation Steps

Understanding the node_modules Folder

Running the Application

Project File Structure

API Endpoints

✨ Key Features
Three Dedicated Portals:

Farmer Portal: Allows farmers to register their farms and submit detailed reports on animal health, feed, and antimicrobial usage.

Veterinarian Portal: Enables vets to log in, view registered farms, file visit reports, and write detailed prescriptions.

Government Portal: Provides a high-level dashboard to view aggregated data from all farmer and vet reports for oversight and analysis.

Data Persistence: Uses a Node.js backend with a JSON file acting as a simple database to store all submitted data.

Aquaculture Calculators: Includes built-in tools to predict drug withdrawal times (WDT) and calculate residue rates, helping farmers maintain compliance and ensure food safety.

Dynamic Reporting: All data is fetched live from the backend, providing a real-time view of operations.

💻 Technology Stack
Frontend: HTML5, Tailwind CSS, Vanilla JavaScript

Backend: Node.js, Express.js

API / Database: json-server (for creating a mock REST API using a database.json file)

Server Management: concurrently (to run the frontend and backend servers with a single command)

🛠️ Project Setup and Installation
Follow these instructions carefully to get the application running on your local machine.

Prerequisites
You must have Node.js installed on your computer. Installing Node.js will also automatically install npm (Node Package Manager), which is essential for managing the project's dependencies.

Download Node.js: nodejs.org (download the LTS version).

You can verify the installation by opening your terminal and running:

node -v
npm -v

This should print the version numbers for Node.js and npm.

Installation Steps
Place Files in a Folder: Make sure all four project files (index.html, server.js, package.json, database.json) are in a single, empty folder.

Open Terminal in Project Folder: Open your terminal (Command Prompt, PowerShell, or Terminal) and navigate into your project folder using the cd command.

# Example if your folder is on the Desktop
cd Desktop/your-project-folder-name

Install Dependencies: Run the following command. This will read the package.json file and automatically download all the required libraries into a new folder called node_modules.

npm install

Understanding the node_modules Folder
When you run npm install, you will see a new folder named node_modules appear.

What is it? This folder contains all the external code libraries (dependencies) that your project needs to function. For this project, it includes Express.js, json-server, etc.

Do I need to create it? NO! You should NEVER create, add, or modify the node_modules folder yourself. It is managed entirely by npm.

Why is it important? The npm install command reads the dependencies list in your package.json file and fetches the correct versions of all the code, creating the node_modules folder for you. This is a fundamental concept in modern web development.

🚀 Running the Application
After the installation is complete, you can start the application with a single command from your project folder:

npm start

This command does two things at once:

Starts the API server on http://localhost:3000 (serving your database.json).

Starts the web server on http://localhost:8080 (serving your index.html file).

Once you see the success messages in your terminal, open your web browser and navigate to:

➡️ http://localhost:8080

The application is now live! All data you create will be saved in the database.json file. To stop the servers, go back to your terminal and press Ctrl + C.

📂 Project File Structure
/
├── index.html            # Main frontend file with all HTML, CSS, and JS
├── server.js             # Express.js server to serve the index.html file
├── database.json         # Simple file-based database for json-server
├── package.json          # Project configuration, scripts, and dependencies
└── node_modules/         # Auto-generated folder with all dependencies

🌐 API Endpoints
The json-server automatically creates a full REST API from your database.json file. You can access these endpoints at http://localhost:3000.

GET /farms - Retrieves a list of all farms.

GET /vets - Retrieves veterinarian profiles.

GET /farmerReports - Retrieves all reports submitted by farmers.

POST /farmerReports - Adds a new farmer report.

GET /vetReports - Retrieves all reports submitted by veterinarians.

POST /vetReports - Adds a new veterinarian report.
