# Fuel the Fire - Meal Prep Service

This repository contains the source code for the Fuel the Fire meal prep ordering application, including the React frontend and the FastAPI backend.

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:
* [Git](https://git-scm.com/)
* [Python](https://www.python.org/downloads/) (3.8 or newer)
* [Node.js](https://nodejs.org/) (which includes npm)

---

### Backend Setup (FastAPI)

1.  **Navigate to the Backend Directory**
    Open your terminal and navigate to the backend folder:
    ```bash
    cd fuel-the-fire/backend
    ```

2.  **Create a Python Virtual Environment**
    This creates an isolated environment for the project's Python dependencies.
    ```bash
    python -m venv venv
    ```

3.  **Activate the Virtual Environment**
    You must activate the environment in your terminal session before installing packages or running the server.

    * **On macOS or Linux:**
        ```bash
        source venv/bin/activate
        ```
    * **On Windows (Command Prompt):**
        ```bash
        venv\Scripts\activate
        ```
    * **On Windows (PowerShell):**
        > **Note:** You may first need to allow scripts to run in your current PowerShell session by running:
        > `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process`
        ```powershell
        .\venv\Scripts\Activate.ps1
        ```
    Your terminal prompt should now be prefixed with `(venv)`.

4.  **Install Dependencies**
    With the virtual environment active, install all required packages from `requirements.txt`.
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Backend Server**
    Start the FastAPI development server. The `--reload` flag will automatically restart the server when you make code changes.
    ```bash
    uvicorn app.main:app --reload
    ```
    The API will be running at `http://127.0.0.1:8000`. You can view the interactive documentation at `http://127.0.0.1:8000/docs`.

---

### Frontend Setup (React)

1.  **Navigate to the Frontend Directory**
    Open a **new terminal window** and navigate to the frontend folder:
    ```bash
    cd fuel-the-fire/frontend
    ```

2.  **Install Dependencies**
    Install all required Node.js packages.
    ```bash
    npm install
    ```

3.  **Run the Frontend Development Server**
    Start the React development server.
    ```bash
    npm run dev
    ```
    The frontend application will be running at `http://localhost:5173`.
