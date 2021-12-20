Feature: Transfer between accounts cucumber

  Background:
    Given user is logged in

  Scenario: a user can perform transfer between accounts

    Given transfer between accounts page is loaded
    When user selects a debit account
    And user selects a credit account
    And user enters a transfer amount
    And user enters a transfer description
    And user submits a transaction
    Then a message about successful transfer is displayed