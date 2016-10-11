/* ===1===   Returns the result of concatenation of two strings.
 function concatinateString(value1,value2) {
 var rez = value1 + value2;
 alert('\'' + rez + '\'');
 }
 concatinateString('aa','bb');
 concatinateString('aa','');
 concatinateString('','bb');

 */
/* ===2===   Returns the length of given string.
 function getStringLength(value) {
 alert(value.length);
 }
 getStringLength('aaaaa');
 getStringLength('b');
 getStringLength('');
 */

/* ===3===   Returns the result of string template and given parameters firstName and lastName.
 function getStringFromTemplate(firstName, lastName) {
 alert('\''+'Hello' + ',' + ' ' + firstName + ' ' + lastName + '!' + '\'' )
 }
 getStringFromTemplate ('John', 'Doe');
 getStringFromTemplate ('Chuck', 'Norris');
 */
/* ===4===   Returns a first char of the given string.
 function getFirstChar(value){
 alert('\''+ value.charAt(0) + '\'');
 }
 getFirstChar ('John');
 getFirstChar ('cat');
 */

/* ===5===
Removes a leading and trailing whitespace characters from string. удалить начальные и конечные пробелы из строки

function removeLeadingAndTrailingWhitespaces(str) {
 if (str[0] == null || str[0] == " " || str[0] == '\t') {
 str = str.slice(1);
 }
 if (str.charAt(str.length-1) == null || str.charAt(str.length-1) == " " || str.charAt(str.length-1) == '\t') {
 str = str.substring(0, str.length - 1);
}
removeLeadingAndTrailingWhitespaces(' Abracadabra');
removeLeadingAndTrailingWhitespaces('cat');
removeLeadingAndTrailingWhitespaces('\tHello, World! ');
*/
/* ===6===  Returns a string that repeated the specified number of times.
 function repeatString(value,count) {
 var rez = '';
 for(i=0; i<count; i++){
 rez+=value;
 }
 alert(rez);
 }
 repeatString('A',5);
 repeatString('cat', 3);
 */
