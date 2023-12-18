Feature: Find list Products

  Scenario: List products in mobile phone category page
    Given I navigate to home page of Smart Store website
    When I click "Mobile phone" category
    Then I see "3" products in page category