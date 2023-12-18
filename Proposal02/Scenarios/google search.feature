Feature: google search

  Scenario: Google search GEM 
      Given I run to Google homepage
      When I search for a keyword "GEM vietnam"
      Then I should see the number of result is "28.700.000"