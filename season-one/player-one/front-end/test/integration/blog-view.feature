Feature: Viewing a single blog entry

    Scenario: Opening a blog via the list page
        Given there is a "GET" endpoint called "http://localhost:3000/blog" that will return "blog-list"
        And there is a "GET" endpoint called "http://localhost:3000/blog/000000001" that will return "blog-item"
        When i open the blog
        And i click the "View more" button on the first "app-blog-item" entry
        Then there should be 1 "app-blog-item" entry
