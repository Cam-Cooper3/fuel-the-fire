# Fuel the Fire - Meal Prep Service

This repository contains the source code for the Fuel the Fire meal prep ordering application, including the React frontend and the FastAPI backend.

## Automated Setup (Recommended)

This project includes an automation script to set up and run the entire development environment with a single command.

### Prerequisites

Before you begin, ensure the following is installed locally:

* [Git](https://git-scm.com/)
* [Python](https://www.python.org/downloads/) (3.8 or newer)
* [Node.js](https://nodejs.org/) (which includes npm)

### Instructions

1. **Open the terminal** and navigate to the root directory of the project:
   ```
   cd fuel-the-fire
   ```

2. **Run the setup script.** This will:
   * Set up and activate a Python virtual environment.
   * Install all backend and frontend dependencies.
   * Launch the backend and frontend servers in separate terminal windows.

   * **On Windows (Command Prompt or PowerShell):**
     ```
     .\setup.bat
     ```
   * **On macOS or Linux:**
     *(You may need to make the script executable first by running `chmod +x setup.sh`)*
     ```
     ./setup.sh
     ```

Once the script finishes, the backend API will be running at `http://127.0.0.1:8000` and the frontend application will be running at `http://localhost:5173`.

### Manual Setup

To set up the backend and frontend manually, follow the steps below.

<details>
<summary><strong>Click to expand manual setup instructions</strong></summary>

#### Backend Setup (FastAPI)

1. **Navigate to the Backend Directory**
   ```
   cd fuel-the-fire/backend
   ```

2. **Create and Activate Virtual Environment**
   * `python -m venv venv`
   * On Windows: `venv\Scripts\activate`
   * On macOS/Linux: `source venv/bin/activate`

3. **Install Dependencies**
   ```
   pip install -r requirements.txt
   ```

4. **Run the Backend Server**
   ```
   uvicorn app.main:app --reload
   ```

#### Frontend Setup (React)

1. **Navigate to the Frontend Directory (in a new terminal)**
   ```
   cd fuel-the-fire/frontend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Frontend Development Server**
   ```
   npm run dev
   ```

</details>