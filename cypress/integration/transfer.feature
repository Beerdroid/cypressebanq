Feature: Transfer between accounts cucumber

  Background:
    Given user is logged in

  Scenario: a user can perform transfer between accounts

    Given transfer between accounts page is loaded
    When user selects a debit account 'EBQ11113487654'
    And user selects a credit account 'EBQ11223487456'
    And user enters a transfer amount 11
    And user enters a transfer description 'Transfer test text'
    And user submits a transaction
    Then a message about successful transfer is displayed