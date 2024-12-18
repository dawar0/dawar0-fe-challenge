# GitHub Technical Interview Challenge

**Objective:**

Develop an application that allows users to search for public GitHub organizations by name and list the repositories within them.

**Core Features:**

**Search Functionality:**

Allow users to search for any public GitHub organization by its name.
Display a list of repositories within the searched organization.

**Sorting and Pagination:**

Provide sorting options for the displayed list of repositories.
Implement dynamic page sizing with clear pagination controls.

**Master-Detail Page:**

When a user clicks on a repository's name, display detailed information about that repository.
Ensure that the data displayed in the details is sourced from the GitHub lookup API.

**Error Handling:**

Handle any errors during data fetching at the API layer.
Provide appropriate feedback to the user in case of errors.

**Code and File Organization:**

Organize code effectively, separating concerns where necessary.
Use TypeScript consistently throughout the codebase. 


**UI/UX Considerations:**

Ensure the application layout is responsive across different devices.
Ensure UI components, are visually symmetric and aesthetic.


**Additional Features (Bonus points for implementing these features):**

Implement server-side pagination for improved performance with large datasets.
Allow users to search repositories using keyboard shortcuts or commands.
Ensure URL can be bookmarked or shared. 
Ensure loading state and error states are handled appropriately.
Implement infinite scroll. 

**API Reference:**
You can look up the repositories for the given organization using the GitHub [rest API](https://docs.github.com/en/rest/repos/repos#list-organization-repositories).

Run `npm run dev` to start the app.

## Evaluation Criteria

Your submission will be evaluated on the following criteria:

1. **Functionality:**
   - Successful implementation of required features.
   - Effective handling of user interactions and data.
2. **Code Quality and Architecture:**
   - Clear and organized code structure.
   - Effective use of design patterns and best practices.
   - Efficient data retrieval and presentation.
   - Effective error handling, loading states & state management.
3. **Responsive Design and UI/UX:**
   - Visually appealing and intuitive user interface.
   - Responsive layout across different devices.
4. **Version Control and Collaboration:**
   - Usage of Git for version control.
   - Clear commit history showcasing your workflow.
   - A good PR description with relevant information that'll be useful for a reviewer.

