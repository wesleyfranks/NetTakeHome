# Net Take Home Calculator for Salary

[![Netlify Status](https://api.netlify.com/api/v1/badges/22031b97-5140-425a-aeb8-f993d0c91edf/deploy-status)](https://app.netlify.com/sites/ironfruit-nettakehome/deploys)

A React application that calculates your net take-home salary based on your gross income and selected pay period, using the 2023 U.S. federal and state income tax brackets.

Check out the app <a href="https://wesleyfranks-nettakehome.netlify.app/" target="_blank">here</a>

<img width="554" alt="Screenshot 2024-10-20 at 12 25 09 PM" src="https://github.com/user-attachments/assets/eced6ca0-07df-42aa-9de8-290c21813cbf">

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Build for Production](#build-for-production)
- [Deployment](#deployment)
- [Technology Stack](#technology-stack)
- [Tax Information](#tax-information)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time Calculations:** Automatically calculates net income as you type.
- **Period Selection:** Choose from daily, weekly, bi-weekly, monthly, or yearly pay periods.
- **Tax Breakdown:** Provides a detailed breakdown of federal and state taxes for each tax bracket.
- **Currency Formatting:** Input and displayed amounts are formatted as currency with proper localization.
- **Dark Mode Support:** Toggle between light and dark themes with a convenient switch.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ironfruit/NetTakeHome.git
   cd NetTakeHome
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Build for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Deployment

The application is deployed using Netlify. You can view the live version [here](https://ironfruit-nettakehome.netlify.app/).

To deploy your own version, follow these steps:

1. **Build the Application**

   Ensure you have a production build ready:

   ```bash
   npm run build
   ```

2. **Create a Netlify Account**

   If you don't have one already, sign up for a free account at [Netlify](https://www.netlify.com/).

3. **Deploy to Netlify**

   - **Option 1: Use the Netlify CLI**

     Install the Netlify CLI:

     ```bash
     npm install -g netlify-cli
     ```

     Deploy the site:

     ```bash
     netlify deploy --prod
     ```

     Follow the prompts to link the site to your Netlify account and deploy the `dist` folder.

   - **Option 2: Connect via GitHub**

     - Push your project to a GitHub repository.
     - In Netlify, click on "New site from Git."
     - Connect your GitHub account and select the repository.
     - Set the build command to `npm run build` and the publish directory to `dist`.
     - Click "Deploy Site."

4. **Configure Build Settings**

   Ensure your build settings in Netlify are:

   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

5. **Access Your Deployed Site**

   After deployment, Netlify will provide you with a URL where your application is live.

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast development build tool.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **react-number-format:** A library for formatting numbers in React.

## Tax Information

The tax calculations include:

- **Federal Income Tax:** Based on the 2023 U.S. federal income tax brackets for single filers.
- **Social Security Tax:** 6.2% on wages up to $160,200.
- **Medicare Tax:** 1.45% on all wages, plus an additional 0.9% on wages over $200,000.
- **State Income Tax:** Based on the selected state (all 50 states included).
- **State Disability Insurance (SDI):** Included for applicable states (e.g., California at 1.2%).

**References:**

- [IRS - Tax Brackets and Rates for the 2023 Tax Year](https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2023)
- [State Tax Agencies](https://www.taxadmin.org/state-tax-agencies)

## Screenshot

<img width="554" alt="Screenshot 2024-10-20 at 12 25 09 PM" src="https://github.com/user-attachments/assets/eced6ca0-07df-42aa-9de8-290c21813cbf">

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   Click on the "Fork" button at the top right of the repository page to create a copy in your GitHub account.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/NetTakeHome.git
   cd NetTakeHome
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes**

   Implement your feature or bug fix.

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add Your Feature"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Submit a Pull Request**

   Go to the original repository and click on "Compare & pull request" to submit your changes for review.

## License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- **GitHub:** [ironfruit](https://github.com/ironfruit)
- **Email:** [code.wesleyfranks@gmail.com](mailto:code.wesleyfranks@gmail.com)
