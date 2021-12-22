Feature: Login page

  Scenario: a user can log in

    Given login page is opened
    When user enters username 'Demo-User'
    And user enters password 'Demo-Access1'
    And user submits credentials
    Then my accounts page is opened
