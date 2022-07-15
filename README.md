# Mini Palomar!

## If this was intended for production... :)

- I'd add a proper loading state indicator. We're fetching the data asynchronously, and that could take awhile--for a number of possible reasons. I'd want to let the user know that the web app is working on their request.
- We're getting a fair amount of data here, too much to display on one page
  comfortably. Something we could do would be to add a "pager", allowing the user to be able to step through the results.
- An advanced version might include sorting and filtering.
- This version is somewhat responsive, but it could be improved. For example, on smaller screens the entries like State, Employees, Year could stack.
- From a team and code organizing perspective, I'd want to confirm that I'm structuring the code in a way that's consistent with the team's way of doing things. For example, I could definitely understand if the organization of my /components/card/ directory would be something the team would have different opinions about.
- I'd confirm with the Designer that I've gotten their intentions correct. I'm not sure in this case I have--at least in terms of desired spacing and font sizes.

## Something to note

As a potential starting point of a discussion, I added a few simple files that mimic a Design System. Jason and I talked about Design Systems, so I wanted to provide at least a simple sample here.
