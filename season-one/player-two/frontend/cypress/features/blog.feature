Feature: Blog

   Scenario: Blog
     When I go to the "/list" page
     Then I should see "Blog post list" on the page
     And I should see 3 items on the page
