# Canvas-Assignment

## 1. General Requirements
- Pair Programming: You must work in pairs (or form a larger team if there’s an odd number of members).
- Work Across Three Labs: You’ll have time to work in Lab 7.2, 8.1, and 8.2.
- Driver/Navigator Method: Switch roles every 30 minutes.
## 2. Core Functional Requirements
- Draw at least three different shapes (e.g., circle, rectangle, triangle).
- Each shape must be represented by a JavaScript class with a constructor, and atleast one method (draw method)
- User must be able to configure shape properties via input elements (e.g., shape type, size, color).
- Shapes should be drawn by either clicking a button or dragging the mouse on the canvas
## 3. Undo & Clear Functionalities
- Undo Button: Removes the last shape drawn (supports multiple undo operations).
- Clear Button: Clears the entire canvas.
## 4. Local Storage
- The drawing state should be saved to local storage.
- When the user closes and reopens the browser, the last saved state should be retrieved and displayed.
## 5. UI and Design Guidelines
- Consistency: UI should follow standard conventions.
- Constraints: Ensure users can only perform valid actions.
- Affordances: Intuitive controls for drawing and interactions.
- Feedback: Provide immediate responses to user actions.
- Separate Files for Organization:
- JavaScript (/js folder)
- CSS (/css folder)
- Images (/images folder), etc.
- Use addEventListener for event handling.
- Wrap all JavaScript code in a load event listener.
- No Alerts/Prompts: Use DOM manipulation instead of popups.
## 6. Performance & Error Handling
- The app should run indefinitely without errors in the browser console.
- It should look good on a desktop screen (1000px+ width).
- No visual bugs (even though aesthetics won’t be graded).
## 7. Optional Extra Features (For Extra Challenge)
- Responsive design for different screen sizes.
- More shape types.
- Image brushes (drawing with images instead of basic shapes).
- Sound effects.
- Allow users to select and modify existing objects.
- Allow Ctrl+click and drag to size a shape dynamically.
## 8. Submission Requirements
- Upload the project to a folder named draw on your university server.
- A ZIP file of the draw folder.
- A link to each team member’s hosted draw folder.
- User ID & password (if .htaccess protection is used).
- Brief usage instructions, if needed.
