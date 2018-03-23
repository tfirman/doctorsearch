# Doctor search

An application that searches for doctors in the Portland area

## Installation

This web application uses the BetterDoctor API - in order to use it, a valid API user key will need to be obtained from https://developer.betterdoctor.com/ - the application will look for this key in the root directory in a file named ".env"

This file will need to contain the line exports.apiKey="_________________________", where the blank is your valid API user key.

##Specifications:

####The app should provide user input options for a medical issue name and/or a doctor name

####The app should interface with the BetterDoctor API to accomplish a search of either of the above fields within an area named Portland

####Upon success, The app should output a list of doctors in the Portland area to match the either of the above inputs

####That output should include at a minimum first name, last name, address, phone number, website and whether or not the doctor is accepting new patients

####If the search executes correctly and no matches are found, a notification of this should be given

####If there the BetterDoctor API call encounters an error, the app should return an error message specifying it.

# Bugs

While the original specifications mention a search by medical issue, diagnosis of a malady is beyond the reasonable scope of a web application and doctors do not specialize in symptoms.  Instead, the search was executed based on medical specialty of the professional, information that was available from the API.

### Author

* Tim Firman - Copyright 2018

## License

This project is distributed under the MIT License
