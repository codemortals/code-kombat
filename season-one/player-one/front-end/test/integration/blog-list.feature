Feature: Testing that the blog list displays correctly

    Scenario: There should be 3 blogs on the list
        Given there is a "GET" endpoint called "http://localhost:3000/blog" that will return "blog-list"
        When i open the blog
        Then there should be 3 "app-blog-item" entries
