# Exercise-Tracker

A web application for tracking your exercise routines, built with React and Node.js.

## Features

- Track daily exercise activities
- User-friendly interface built with React
- RESTful backend built with Node.js/Express
- Easy to install and run locally

## Technologies Used

- Frontend: React (see `exercise-ui/`)
- Backend: Node.js/Express (see `exercise-rest/`)

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/tdawson97/Exercise-Tracker.git
   cd Exercise-Tracker
   ```

2. **Set up the backend**
   ```bash
   cd exercise-rest
   npm install
   npm start
   ```
   The backend server should now be running.

3. **Set up the frontend**
   ```bash
   cd ../exercise-ui
   npm install
   npm start
   ```
   The React app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

- Open your browser to [http://localhost:3000](http://localhost:3000)
- Use the interface to log, view, and manage your exercise routines

## Project Structure

- `exercise-ui/` - React frontend
- `exercise-rest/` - Node.js/Express backend
