 # Complete Test Description

1. Dynamic ID Test

   Positive Test: should click button with dynamic ID
   
   Navigates to Dynamic ID page
   
   Clicks the button with dynamically generated ID
   
   Verifies button remains visible after click
   
   Negative Test: should verify dynamic ID changes on page reload
   
   Captures the initial dynamic ID of the button
   
   Reloads the page to generate new dynamic ID
   
   Verifies the ID changes after reload

2. Class Attribute Test

  Positive Test: should click primary button successfully
  
  Navigates to Class Attribute page
  
  Clicks the primary button among multiple buttons with same class
  
  Handles and verifies the alert dialog message
  
  Negative Test: should verify multiple buttons with same class
  
  Confirms multiple buttons share the same CSS class
  
  Tests the page structure with duplicate class attributes

3. Hidden Layers Test

   Positive Test: should handle hidden layers
   
   Navigates to Hidden Layers page
   
   Clicks the green button (top layer)
   
   Verifies blue button remains visible but layered underneath
   
   Negative Test: should verify button interaction behavior
   
   Tests that blue button cannot be interacted with normally
   
   Uses force click to attempt interaction with hidden button
   
   Verifies no state change occurs after forced click

4. Load Delay Test

   Positive Test: should wait for page to load completely
   
   Navigates to Load Delay page
   
   Waits for delayed button to appear (up to 15 seconds)
   
   Verifies button is visible, enabled, and clickable
   
   Negative Test: should verify button loading behavior
   
   Confirms page content loads immediately
   
   Validates button appears after specific delay period
   
   Tests the asynchronous loading behavior

5. AJAX Data Test

   Positive Test: should wait for AJAX response
   
   Navigates to AJAX Data page
   
   Clicks button to trigger AJAX request
   
   Waits for and verifies AJAX response content
   
   Negative Test: should verify initial state before AJAX
   
   Confirms AJAX content doesn't exist before request
   
   Tests the loading state and delayed content appearance
   
   Validates proper AJAX request handling

6. Client Side Delay Test

   Positive Test: should handle client-side processing delay
   
   Navigates to Client Side Delay page
   
   Clicks button to trigger client-side processing
   
   Waits for delayed client-side calculation result
   
   Negative Test: should verify processing delay behavior
   
   Confirms button remains enabled during processing
   
   Verifies result doesn't appear immediately
   
   Tests the client-side JavaScript execution delay

7. Click Test

   Positive Test: should handle normal click
   
   Navigates to Click page
   
   Clicks the target button
   
   Verifies successful click and visual state change
   
   Negative Test: should verify button color change
   
   Confirms initial button color (primary)
   
   Tests the color transition after click (to success)
   
   Validates visual feedback for user interaction

8. Text Input Test

   Positive Test: should input text and verify button text changes
   
   Navigates to Text Input page
   
   Types custom text into input field
   
   Clicks update button and verifies text transfer
   
   Negative Test: should handle empty input
   
   Tests button behavior with empty input
   
   Verifies button doesn't accept empty text
   
   Validates form input validation

9. Scrollbars Test

   Positive Test: should handle scrollbar interaction
   
   Navigates to Scrollbars page
   
   Scrolls to find hidden button
   
   Clicks the revealed button
   
   Negative Test: should verify button visibility after scroll
   
   Confirms button exists but initially out of view
   
   Tests scroll-to-reveal functionality
   
   Validates element visibility after scrolling


10. Dynamic Table Test

   Positive Test: should verify CPU load values match
   
   Navigates to Dynamic Table page
   
   Extracts CPU value from warning label
   
   Verifies matching value in dynamic table
   
   Negative Test: should handle table structure changes
   
   Confirms table structure exists
   
   Tests resilience to table format changes
   
   Validates dynamic content handling



11. Verify Text Test


    Positive Test: should find text with special spacing
    
    Navigates to Verify Text page
    
    Locates and verifies text with unique spacing
    
    Tests text visibility with special formatting
    
    Negative Test: should handle text visibility scenarios
    
    Searches for text within entire page content
    
    Tests text presence verification methods
    
    Validates text accessibility

12. Progress Bar Test
    
    Positive Test: should stop progress bar at 75%
    
    Navigates to Progress Bar page
    
    Starts progress bar and stops at 75%
    
    Verifies stopping functionality and result display
    
    Negative Test: should complete progress bar and show results
    
    Allows progress bar to reach 100%
    
    Manually stops and captures final result

Tests complete progress cycle and result formatting
