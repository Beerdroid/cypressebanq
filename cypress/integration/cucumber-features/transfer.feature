Feature: Transfer between accounts

  Background:
    Given user is logged in

  Scenario:

    Given transfer between accounts page is loaded
    When user selects a debit account
    And user selects a credit account
    And user enters a transfer amount
    And user enters a transfer description
    And user submits a transaction
    Then a message about successful transfer is displayed