# playwright

This is working demo of automating website using playwright tool and Typescript.

**Features:**
1. This sample framwework demonstrates standard project structure using playwright tool (developed by microsoft).
2. It uses Page Object Model (POM) for easy maintainance of locators by pages.
3. It uses the .env files to run tests in multiple environments.
4. It uses the .env files to maintain test data separately.
5. It uses the typescript as programming language (default langauge binding of playwright).
6. You can also record the tests, tweaks them as needed and run them.
7. You can execute tests in parallel or sequencial as needed.
8. It generates HTML reports with screenshots/recordings after finishing run.
9. You can run specific tests (e.g. smoke tests, regression tests, login tests, etc).
10. You can run configure browsers, parallel threads, etc. in the playwright config file.
11. You can also integrate this test suite with CI/CD pipeline (e.g. github actions).


**Run tests in parallel:**
Go to terminal and navigate to project root directory.
Run command: npm run test:regression  
Note: This will run tests on 2 parallel threads. You can modify it in config file as per your needs.

**Run tests in sequencial:**
Go to terminal and navigate to project root directory.
Run command: npm run test:smoke  
Note: This will run tests in sequencial on single thread.
