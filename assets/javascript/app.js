$(document).ready(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAzciEUclqC7qal-bmFC5z5_vKxG3xJo7k",
        databaseURL: "https://train-scheduler-tw.firebaseio.com",
        projectId: "train-scheduler-tw",
        messagingSenderId: "874910039457"
    };
    firebase.initializeApp(config);

    
    var database = firebase.database();
    
    var trainName = "";
    var trainDestination = "";
    var trainFrequency = 0;
    var trainTime = "";
    var clickCounter = 1;

    //Capture the add train button click
    //Alert displayed when the user enters a time more than 24.     
    //Declare the variables that will hold the user input values   
    //Console log to see if the variables are holding the user input values
    //Create a local temporary object for holding train details
    //Load the train data to the database       
    //Clear all the values from the input area when the submit button is clicked.
    //Create a firebase event for adding train to the database and a row to the html
    //Store to a variable
    //Convert the first train arrival time to 
    //Show current time
    //Show the difference in time between the first train time and the current time
    //Calculate the time remaining for the train to arrive.
    //Calculate the next train arrival time
    //Append a row to the table body
    });    