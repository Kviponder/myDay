# myDay
A simple calendar app for scheduling your work day. This application allows you to create and save tasks for each hour of your work day (9AM to 5PM). The tasks are stored in the browser's local storage, and when the page is refreshed, the saved tasks are loaded automatically. The time blocks are color-coded based on whether they are in the past, present, or future.

Functionality

Clicking the "save" button next to a time block saves the task in that time block to the browser's local storage.
Tasks are saved using the hour as the key and the task description as the value.
The current date is displayed in the header of the page.
Time blocks are color-coded based on the current time:
Past hours have a gray background.
The current hour has a red background.
Future hours have a green background.
Implementation

To achieve this functionality, we made the following changes to the JavaScript code:

We added a click event listener to the save button that retrieves the time block's hour and description, then saves them to the browser's local storage.
We used Day.js to get the current hour in 24-hour time and format the current date for display.
We looped through each time block, applying the appropriate "past", "present", or "future" CSS class based on the comparison between the time block's hour and the current hour.
We retrieved any saved tasks from local storage and set the values of the corresponding textarea elements.
Screenshots

(Add your screenshots here. You can use the following syntax for adding an image in markdown: ![Image description](image-url))

