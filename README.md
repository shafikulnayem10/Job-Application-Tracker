1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById() method selects a single element using that  ID .It returns one element. getElementsByClassName() method selects all elements using that class name and returns a  HTMLCollection. querySelector() method  returns the first matching element and  querySelectorAll() returns all matching elements in a  NodeList. Both querySelector() and querySelectorAll() use CSS selectors .
2. How do you create and insert a new element into the DOM?
Answer:
To create a new element  the document.createElement() method is used. After creating the new  element then add   attributes using   innerText and  classList. Finally, the new  element is inserted into the document using  appendChild() .
3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling is a process where  an event starts from the target element and then propagates upward through its parent elements in the DOM hierarchy. For example, when a button inside a div is clicked, the event first triggers on the button and then moves up to the div, body, and document unless it is stopped.
4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event Delegation is a technique where a single event listener is added  to a parent element to handle events for its child elements. It works because of event bubbling and this approach improves performance.
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() method prevents the browser’s default behavior for an event .for example  stopping a form submission.And  stopPropagation() method stops the event from bubbling up to parent elements.
