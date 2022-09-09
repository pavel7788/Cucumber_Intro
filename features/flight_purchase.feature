Feature: Buying Flights Functionality
  Everybody wants to buy flight successfully

  Scenario Outline: Successful flight buying with valid entries
    Given The flight has been chosen
    When I input "<traveller>" data
    When I also input "<bank_data>" for payment
    Then I receive flight purchase "<result>"

    Examples:
      | traveller           | bank_data                 |   result     |
      | Pavel Iaroshenko    | payment details           |     ok       |
      | anyone other        | something                 |     no       |