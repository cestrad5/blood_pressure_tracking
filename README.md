# Blood Pressure Tracker App

![App Screenshot](./screenshot.png)

This project is a Blood Pressure Tracker App built with React and Vite. The app allows users to monitor their daily blood pressure readings, including systolic and diastolic pressures, weight, and date. The data is stored in the local storage, providing persistent information for the user.

## Features

- Record and store daily blood pressure readings.
- View and edit previously recorded data.
- Delete unwanted entries from the records.
- Graphical representation of the blood pressure data over time.
- Additional page with tips and recommendations for blood pressure control.

## Demo

You can access the live demo of the Blood Pressure Tracker App [here](https://your-live-demo-url).

## Installation and Setup

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/blood-pressure-tracker-app.git
```

2. Navigate to the project directory:

```
cd blood-pressure-tracker-app
```

3. Install the dependencies using npm:

```
npm install
```

4. Start the development server:

```
npm run dev
```

The app will be accessible at `http://localhost:3000`.

## Usage

1. Open the Blood Pressure Tracker App in your browser.
2. Enter your daily blood pressure readings, weight, and date in the input fields provided.
3. Click the "Add Record" button to save the entry to the records.
4. The recorded data will be displayed on the screen, showing the latest entry at the top.
5. To edit an existing entry, click on the "Edit" button for that record and modify the information as needed.
6. To delete a record, click on the "Delete" button for that entry.
7. Navigate to the "Tips & Recommendations" page for valuable advice on blood pressure control.

## Technologies Used

- React
- Vite
- Local Storage API
- Chart.js (for the graphical representation)

## Contributing

Contributions are welcome! If you find a bug or have an idea for an enhancement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use and modify it as you see fit.

## Acknowledgments

Special thanks to all the contributors and open-source community for their invaluable support.

---

### Development Notes

To add the graph and the "Tips & Recommendations" page, we can follow these steps:

1. Graph: Use the Chart.js library to create a line chart that visualizes the variation of the three variables (systolic, diastolic, and weight) over time. To do this, you'll need to create a new component for the graph and pass the data as props.

2. "Tips & Recommendations" Page: Create a new page (component) that displays helpful tips and recommendations on controlling blood pressure. You can include information on lifestyle changes, dietary choices, and other practices that contribute to maintaining healthy blood pressure levels.

Remember to update the README.md file with the relevant information for these additions, including instructions on how to access the new features and any additional setup required.

