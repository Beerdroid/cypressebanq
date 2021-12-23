Feature: Login page - Cucumber

  @customTag
  Scenario: a user can log in (tag)

    Given login page is opened
    When user enters username 'Demo-User'
    And user enters password 'Demo-Access1'
    And user submits credentials
    Then my accounts page is opened

  Scenario: an error is displayed if a password is incorrect (no tag)

    Given login page is opened
    When user enters username 'Demo-User'
    And user enters password 'Demo'
    And user submits credentials
    Then the error is displayed
