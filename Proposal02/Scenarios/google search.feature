Feature: google search

  Scenario: Google search GEM 
      Given I run to "https://google.com.vn"
      When I search for a keyword "GEM vietnam"
      Then I should see the number of result is "36.600.000"