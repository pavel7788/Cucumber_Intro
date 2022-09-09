Feature: SignIn Functionality
  Everybody wants to sign in successfully

  Scenario Outline: Successful login with valid entries
    Given I am registered with "<username>" and "<password>"
    When I sign in with my credentials
    Then I receive sign up "<result>"

    Examples:
      | username                | password           |       result    |
      | username                | password           |       ok        |
      | anything else           | password           |       no        |
      | username                | anything else      |       no        |
      | anything else           | anything else      |       no        |