# 🌐 WebMobi QA E2E Validation Suite

**Project Title:** WebMobi QA E2E Validation Suite  
**Author:** Suraj Prajapati  
**Assignment:** QA Testing Intern Evaluation  
**Date:** November 2025  
**Framework:** [Cypress E2E](https://www.cypress.io/)  
**Tested Sites:**  
- [events.webmobi.com](https://events.webmobi.com)  
- [certificates.webmobi.com](https://certificates.webmobi.com)


## 🧩 Project Overview

This project performs **end-to-end (E2E)** automation testing on WebMobi’s event management and certification platforms to ensure release stability before production deployment.  

The suite validates critical user flows including **login**, **event creation**, **API endpoints**, and **UI integrity**.  
No code access was required — all validations were performed through **public endpoints** and **mocked API intercepts**.


## 🎯 Objectives

| Objective | Description |
|------------|-------------|
| ✅ Validate UI/UX | Ensure that all main pages load correctly and expected UI components are visible |
| ✅ Test API Responses | Validate live and mocked API endpoints for reliability |
| ✅ Mock Key Flows | Simulate successful event creation and registration using Cypress intercepts |
| ✅ Certificates Verification | Confirm certificate platform loads and APIs respond correctly |
| ✅ Pre-Release Validation | Ensure both portals are stable before production rollout |


## 🧪 Test Suite Summary

| # | Test Case | Description | Result |
|---|------------|-------------|--------|
| 1 | Load homepage | Validate that the homepage loads successfully | ✅ Passed |
| 2 | Login UI & Mocked API | Validate login page and mock the login process | ✅ Passed |
| 3 | GET & POST API | Validate live GET/POST endpoints for event data | ✅ Passed |
| 4 | Mock Event Creation | Simulate event creation using Cypress intercept | ✅ Passed |
| 5 | Certificates Validation | Validate certificates platform and mock search API | ✅ Passed |


## 📊 Test Execution Results

**Framework:** Cypress E2E  
**Mode:** Headless + Interactive  
**Browser Tested:** Chrome 131.0  
**Execution Time:** ~2 minutes  
**Test Environment:** Public Production URLs (no staging)

**Summary:**
Total Tests: 5
Passed: 5
Failed: 0
Pending: 0
Skipped: 0


## 🧠 Test Strategy

- **Tools Used:** Cypress E2E, Node.js, Mocha (reporter)
- **Test Data:** Static dummy values (mocked using `cy.intercept`)
- **Network Stubbing:** Used for login, event creation, and registration APIs
- **Assertions:** Status code checks, UI visibility, and response validation
- **Error Handling:** Safe fallbacks for non-existent DOM selectors
- **Logs:** Cypress log statements for easy debugging and review


## 🖼️ Test Summary Snapshot

Below is a visual summary of the Cypress E2E test run:

![Test Summary Screenshot](./assets/test-summary.png)


## 🎥 Test Execution Video

Watch the complete recorded run of the Cypress E2E validation suite below:  

🎬 **[View Test Run Video](./assets/test-run.mp4)**


## 📄 Test Report

A detailed PDF report containing test case descriptions, logs, and results is available:

📘 **[WebMobi_QA_E2E_Test_Report.pdf](./WebMobi_QA_E2E_Test_Report.pdf)**


## ⚙️ Folder Structure
cypress/
├── e2e/
│ └── test-event.cy.js # Main E2E test file
├── fixtures/ 
├── videos/ # Test run recordings
reports/
└── WebMobi_QA_E2E_Test_Report.pdf
Final Report/
├── test-summary.png
└── test-run.mp4
README.md
package.json



## 🧾 How to Run Tests

1. **Clone the repository**
   bash
   git clone https://github.com/yourusername/webmobi-qa-e2e.git
   cd webmobi-qa-e2e

2. **Install dependencies**
    npm install


3. **Run Cypress tests**
    npx cypress run

4. **Open interactive mode**
    npx cypress open

***Technologies Used***
| Tool                 | Purpose                 |
| -------------------- | ----------------------- |
| **Cypress**          | E2E testing framework   |
| **Mocha**            | Test runner for Cypress |
| **Node.js**          | Execution environment   |
| **Chai**             | Assertion library       |
| **JavaScript (ES6)** | Test scripting language |


**🚀 Key Highlights**

Comprehensive UI & API coverage

Real + Mock validation for both domains

Self-contained test suite – no backend access needed

Auto-report generation (PDF + logs)

Works seamlessly in CI/CD pipelines

**🏁 Conclusion**

This E2E suite ensures that both WebMobi platforms — Events and Certificates — are functionally stable, API-compliant, and UI-ready for production deployment.

The tests simulate real-world user behavior and confirm that the system can handle both expected and error scenarios.

👨‍💻 Author

Suraj Prajapati
Quality Assurance Engineer | Automation Tester
📧 Email: [transformer9211@gmail.com]
📍 Location: Mumbai, India