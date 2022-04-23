# Mr Roboger's Neighborhood

#### By **Alexander Kirkpatrick**

#### An application that gives the user a specific response, based upon the number given.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JQuery
* Markdown

## Description

When the user enters a number, an array of numbers will be returned. Numbers containing "1", "2", or "3" are altered to display "Beep!" "Boop!" and "Won't you be my neighbor?", with reverse hierarchy.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of directory
* Open roboger/index.html in your browser
* Input data, then click submit to receive an answer!

## TDD Descriptions

Describe: inputArray

Test One: It should populate the array, with a string of numbers
Code: inputArray(7);
Expected Output: ["1","2","3","4","5","6","7"]

Describe: numberSwap

Test Two: It should replace the elements in an array if it contains a 1, 2, or 3
Code: numberSwap ("2");
Expected Result: "boop!"

Describe: userResponse

Test Three: It should take the new elements and put them into the array
Code: userResponse (2);
Expected Result: 0, "beep!", "boop!"

## Known Bugs

No known bugs as of yet. Please contact knibz@protonmail.com for any suggestions or fixes.

## GitHub Pages Link

[AlexanderKirkpatrick.github.io/roboger](https://alexanderkirkpatrick.github.io/roboger/)

## License

THE PORTFOLIO IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2022_ _Alexander Kirkpatrick_