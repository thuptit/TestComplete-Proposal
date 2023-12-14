Feature: Smart store search item

  Scenario: Smart store search mobile phone
    Given I navigate to Home Smart Store
    When I enter input search "Phone" and click search button
    Then I should be a item which "Phone Minus"