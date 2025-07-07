# ResuMatch - Smart Resume Analyzer

ResuMatch is an AI-powered web application designed to help job seekers analyze their resumes against the requirements of top Indian companies. Users can upload their resumes, select companies, and receive tailored insights, including eligibility analysis, skill suggestions, and interview preparation questions.

## Features
- **Resume Upload**: Supports PDF, DOCX, and TXT formats with a 5MB size limit.
- **Company Selection**: Choose from a curated list of service-based, product-based, and multinational companies in India.
- **Eligibility Analysis**: Displays match percentages for selected companies based on skills, experience, and education.
- **Skill Suggestions**: Recommends mandatory skills to learn with links to relevant learning resources.
- **Interview Preparation**: Provides company-specific interview questions.
- **Theme Toggle**: Switch between light and dark modes for better usability.
- **Analysis History**: Tracks previous analyses for easy reference.

## Technologies Used
- **HTML5**: For the structure of the web application.
- **Tailwind CSS**: For responsive and modern styling.
- **Custom CSS**: For additional animations and styling.
- **JavaScript**: For interactive features and logic.
- **Font Awesome**: For icons.
- **Google Fonts (Poppins)**: For typography.

## Setup Instructions
To run ResuMatch locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/resumatch.git
   cd resumatch
   ```

2. **Project Structure**:
   Ensure the following files are in the root directory:
   - `index.html`: Main HTML file.
   - `styles.css`: Custom CSS styles.
   - `script.js`: JavaScript logic.
   - `README.md`: This file.

3. **Serve the Application**:
   Since this is a static web app, you can serve it using a local server:
   - Install a local server like `live-server` via npm:
     ```bash
     npm install -g live-server
     live-server
     ```
   - Alternatively, open `index.html` directly in a browser (some features may be limited due to file protocol restrictions).

4. **Dependencies**:
   No additional installations are required as the project uses CDN-hosted libraries:
   - Tailwind CSS: `https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css`
   - Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
   - Google Fonts (Poppins): `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`

## Deployment to GitHub Pages
To deploy ResuMatch to GitHub Pages:

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository named `resumatch`.
   - Initialize it with a README if not already included.

2. **Push Files to GitHub**:
   - Add all project files (`index.html`, `styles.css`, `script.js`, `README.md`) to the repository.
   - Commit and push the files:
     ```bash
     git add .
     git commit -m "Initial commit with ResuMatch files"
     git push origin main
     ```

3. **Enable GitHub Pages**:
   - Go to the repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Under **Source**, select the `main` branch and the `/ (root)` folder.
   - Click **Save**.
   - GitHub Pages will provide a URL (e.g., `https://<your-username>.github.io/resumatch`) once the deployment is complete.

4. **Verify Deployment**:
   - Wait a few minutes for the site to build.
   - Visit the provided GitHub Pages URL to access ResuMatch.

## Usage
1. Open the application in a browser.
2. Click **Begin Your Journey** to access the main interface.
3. Upload a resume (PDF, DOCX, or TXT) via drag-and-drop or file selection.
4. Select companies from the provided list.
5. Click **Analyze Match** to view eligibility, suggestions, and interview questions.
6. Use the history sidebar to review past analyses.
7. Toggle between light and dark modes for a personalized experience.

## Notes
- The resume analysis is simulated using predefined resume data (`resumeData` in `script.js`). For production, integrate a backend to parse actual resume files.
- The application is fully client-side and relies on CDNs for external dependencies.
- Ensure an active internet connection to load Tailwind CSS, Font Awesome, and Google Fonts.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m "Add feature-name"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.