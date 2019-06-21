/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Adding in global variables.
-the first one to access the specific part of the student list by targeting the li element's class name.
-the second one, how many students I want per page. ***/

const list = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/*** Create a showPage function with 2 parameters. 
   -one for your variable targeting the li element. 
   -one for the page number you want it to show up to.
   Inside the function, add in the startIndex and endIndex.
   -startIndex will equal to page multiplied by studentsPerPage minus students per page.
   -endIndex will equal to page multiplied by studentsPerPage.
   Create a for loop for how many students you have.  
      Inside the loop:
      if the index is greater than or equal to the startIndex AND the index is less than the endIndex
      then show the list. If not, then hide. 
   ***/
const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage; 
   const endIndex = page * studentsPerPage;

   for (let i = 0; i < list.length; i++) {
     if (i >= startIndex && i < endIndex) {
        // show the item
        list[i].style.display = 'block';
     } else {
        // hide the item
        list[i].style.display = 'none';
     }
   }
}

/*** Create a function to show the number of pages.
Use your global variable as a parameter.
Inside the function:
Create a return statement that will give you the value of the number of items 
on your list divided by the students per page rounded up.
***/

function numberOfPages (list) {
   return Math.ceil(list.length/studentsPerPage);
}

/*** 
Create the appendPageLinks function. 
Inside the function:
   -Create a constant for the first div you're trying to select.
   -Create a constant for the new div you're trying to create.
   -Set the class pagination to the new div.
   -Append it to the old div.  
***/

function appendPageLinks () {
   const getDiv = document.querySelector('.page');
   const newDiv = document.createElement('div');
   newDiv.setAttribute('class', 'pagination');
   getDiv.appendChild(newDiv);

/*** 
Create a constant for the ul element.
Append the ul element to the new div. 
Add the rest of these in a for loop. Use the function you 
created for the number of pages with the parameter of the student list.
   -Create a constant for the li element.
   -Append the li element to the ul element. 
   -Create a constant for the a tag.
   -Set the property of the a tag to href and value to a number.
   -Set the text content of the a tag to a number. The number will change as the page changes (therefore, use index).
   -Append the a tag to the list element. 
***/

   const ul = document.createElement('ul');
   newDiv.appendChild(ul);
   for (let i = 1; i <= numberOfPages(list); i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i;
      li.appendChild(a);

//Set the first item on the list as active. We will change this later to change the class name as you click on different pages. 
document.querySelector('.pagination li:first-child a').className = 'active';

/*** 
Create an event handler to handle what happens when you click the page numbers.
Inside the function:
      -Create a variable to select which parts you want to target that will do something when clicked (a tags).
      -You will need a for loop to iterate through the a tags.
      -If a specific page is clicked, you need to add the class 'active'. 
         -Create a variable to show that the event clicked is a number. 
      -If it is not the page you clicked, then remove the class 'active'.
      -Call the showPage function targeting your list of students and the page number.
***/

      a.addEventListener('click', (e) => {
         const links = document.querySelectorAll('li a');
         for (i = 0; i < links.length; i++) {
            links[i].classList.remove('active'); //remove a class
         }
         e.target.className = 'active';
         let pageNumber = Number(e.target.textContent);
         showPage(list, pageNumber);
      });
   }
}

//Call your functions.
showPage(list, 1);

appendPageLinks (list);

// searchBar(list);