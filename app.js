//Chapter 38 to 42
//Program 1
// function power(a, b) {
//     return Math.pow(a, b);
//   }
  
//   // Example usage:
//   var result = power(2, 3); // This will return 8
//   document.write(result);

//Program 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   // Example usage:
//   var year = parseInt(prompt("Enter the year: "));
//   var isLeap = isLeapYear(year); // This will return true
// document.write(isLeap);  

//Program 3
// function calculateArea(a, b, c) {
//     var s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   }
  
//   // Example usage:
//   var a = 5, b = 6, c = 7;
//   var area = calculateArea(a, b, c); // This will calculate the area of the triangle
//   document.write(area);

//Program 4
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
//   }
  
//   function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     return (totalMarks / 300) * 100;
//   }
  
//   function mainFunction(subject1, subject2, subject3) {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);
//     document.write("Average:", average);
//     document.write("Percentage:", percentage + "%");
//   }
  
//   // Example usage:
//   mainFunction(80, 90, 75); // This will calculate and display average and percentage
  

//Program 5
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1; // Character not found
//   }
  
//   // Example usage:
//   var sentence = "Hello, world!";
//   var position = customIndexOf(sentence, "o"); // This will return 4
  
//Program 6
// function deleteVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
//   }
  
//   // Example usage:
//   var sentence = "This is a sample sentence.";
//   var result = deleteVowels(sentence); // This will remove all vowels
  

//program 7
// function countSuccessiveVowels(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//       var pair = text.slice(i, i + 2);
//       if (/^[aeiouAEIOU]{2}$/.test(pair)) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   // Example usage:
//   var text = "Pleases read this application and give me gratuity";
//   var occurrences = countSuccessiveVowels(text); // This will count and return 3
  

//program 8
// function convertDistance(distanceKm) {
//     var distanceMeters = distanceKm * 1000;
//     var distanceFeet = distanceKm * 3280.84;
//     var distanceInches = distanceKm * 39370.1;
//     var distanceCentimeters = distanceKm * 100000;
  
//     console.log("Distance in Meters:", distanceMeters);
//     console.log("Distance in Feet:", distanceFeet);
//     console.log("Distance in Inches:", distanceInches);
//     console.log("Distance in Centimeters:", distanceCentimeters);
//   }
  
//   // Example usage:
//   var distanceKm = 10;
//   convertDistance(distanceKm); // This will convert and print the distance
  

//program 9
// function calculateOvertimePay(hoursWorked) {
//     var regularPayRate = 10.0; // Regular pay rate per hour
//     var overtimeRate = 12.0; // Overtime pay rate per hour
//     var regularHours = 40;
  
//     if (hoursWorked <= regularHours) {
//       return hoursWorked * regularPayRate;
//     } else {
//       var overtimeHours = hoursWorked - regularHours;
//       return regularHours * regularPayRate + overtimeHours * overtimeRate;
//     }
//   }
  
//   // Example usage:
//   var hoursWorked = 45;
//   var overtimePay = calculateOvertimePay(hoursWorked); // This will calculate overtime pay
  

//program 10

// function calculateCurrencyNotes(amountInHundreds) {
//     var denomination100 = amountInHundreds;
//     var denomination50 = Math.floor((amountInHundreds % 10) / 5);
//     var denomination10 = (amountInHundreds % 10) % 5;
  
//     document.write("Number of 100 Rupee Notes:", denomination100);
//     document.write("Number of 50 Rupee Notes:", denomination50);
//     document.write("Number of 10 Rupee Notes:", denomination10);
//   }
  
//   // Example usage:
//   var amountInHundreds = parseInt(prompt("Enter amount to withdrawal: "));
//   calculateCurrencyNotes(amountInHundreds); // This will calculate and print the notes
  

