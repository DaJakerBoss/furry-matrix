#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    /* INITIALIZE VARIABLES */
    string inputFilename;   // user input for filename
    string name;            // grabbed student name from input file
    float gradeAverage;     // averaged grade
    float gradeIn;          // grade read from input file

    /* OPEN REQUIRED FILES  */
    cout << "Please, input the name of the file of grades: ";   // prompt user input
    cin >> inputFilename;                               // get user input for file name
    ifstream inputGrades(inputFilename.c_str());        // Initialize input file as grades.txt [.c_str() converts to char which compiler takes]
    if (!inputGrades)                                   // run if inputGrades is null (file did not open)
    {
        cout << "Input file does not exist!" << endl;
        return(1);
    }

    cout << "Please, input the name of the file of results: ";  // prompt user input
    cin >> inputFilename;                               // get user input for file name
    ofstream outputGrades(inputFilename.c_str());       // Initialize output file as results.txt [see input comment]

    cout << endl;                                       // formatting :)

    /* WRITING RESULTS */
    while(!inputGrades.eof())                           // while end of file has not been reached
    {
        inputGrades >> name;                            // grab student name
        gradeAverage = 0;                               // reset average
        /* hard-coded for loop for this assignment */
        for(int i(1); i <= 7; i++)                      // increment 7 times to get each of the 7 grade numbers
        {
            inputGrades >> gradeIn;                     // recieve grade from file
            gradeAverage += gradeIn;                    // create cumulative sum
        }
        gradeAverage /= 7;                              // average the cumulative grade

        outputGrades << name << " " << gradeAverage << endl;    // Print to file
        cout << name << " " << gradeAverage << endl;            // Print to terminal
    }                                                   // Loop
}