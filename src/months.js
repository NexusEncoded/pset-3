const readlineSync = require("readline-sync");

const month = String(readlineSync.question("\nEnter a month: "));

if (month == "January" || month == "january" || month == "Jan" || month == "jan") {
      console.log("\n31 days.\n")

} else if (month == "February" || month == "february" || month == "Feb" || month == "feb") {
      console.log("\n28 or 29 days.\n")

} else if (month == "March" || month == "march" || month == "Mar" || month == "mar") {
      console.log("\n31 days.\n")

} else if (month == "April" || month == "april" || month == "Apr" || month == "apr") {
      console.log("\n30 days.\n")

} else if (month == "May" || month == "may") {
      console.log("\n31 days.\n")

} else if (month == "June" || month == "june" || month == "Jun" || month == "jun") {
      console.log("\n30 days.\n")

} else if (month == "July" || month == "july" || month == "Jul" || month == "jul") {
      console.log("\n31 days.\n")

} else if (month == "August" || month == "august" || month == "Aug" || month == "aug") {
      console.log("\n31 days.\n")

} else if (month == "September" || month == "september" || month == "Sep" || month == "sep") {
      console.log("\n30 days.\n")

} else if (month == "October" || month == "october" || month == "Oct" || month == "oct") {
      console.log("\n31 days.\n")

} else if (month == "November" || month == "november" || month == "Nov" || month == "nov") {
      console.log("\n30 days.\n")

} else if (month == "December" || month == "december" || month == "Dec" || month == "dec") {
      console.log("\n31 days.\n")

} else {
      console.log("\nInvalid.\n")
}
