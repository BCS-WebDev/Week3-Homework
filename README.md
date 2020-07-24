# Password Generator
BootCampSpot Web Development - Week 3 Homework

![Preview](PasswordGenerator-min.gif)
<img src="PasswordGenerator-min.gif">

## Notes on Passwords
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Passwords are typically used to restrict
access to something that needs to be safeguarded. Usually a string of characters, 
a password is generally set by the 'claimaint' and verified by the 'verifier'. The
password allows the verifier to infer the identity of the claimant via an 
authentication protocol, albeit in a shallow manner.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; While a simple verifier such as this lacks
the ability to defer an intruder once the password is verified, it can prompt the
claimant to create a stronger password that contains a mix of lower and uppercase
letters, numbers, special characters, and a minimum character count. Doing this
will lower the chance of a password being compromised. Passwords that change
frequently and randomly can also further this cause.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Still the sentiment that 'The password is dead'
exists due to it being prone to compromise, prompting the development of other
techniques. Biometrics is one example that is prevalent today in mobile devices but
also impractical, as fingerprint readers are readily available on personal computers.
Two-factor authentication systems, that trigger when a password is verified, prompt
the original claimant via email or mobile device to confirm that they tried to
access their data, and Cognitive passwords use question and answer pairs, making it
more convenient to strengthen an authentication protocol on computers.

## Motive & Action
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our client is an employee with access to 
sensitive data and wants to provide greater security by using a random password
generator to generate passwords that meet a certain criteria. JavaScript provides
us with various methods to accomplish this task by applying our logic. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Some things to consider are retaining randomness,
guaranteeing inclusion of character types, distribution of character types, and
efficiency. Retaining randomness is inherently tied to distributing character types
evenly in that a perfectly even distribution takes away from randomness. We can
diminish this relationship by adjusting the way the characters are chosen,
lessening the predictability of the chosen chracter. Efficiency refers to reducing
checks for the inclusion and types of characters and also to executing the least the
least amount of steps for completion. With this in mind, the following methods are
proposed.

* Method 1:
    - Define helper functions for choosing respective characters using character arrays
        - Uppercase, lowercase, numeric, special
    - Choose required functions at random to pick a character
        - Check that each required function was called at least once
        - Append to string
    - Pros:
        - Guarantees string has required characters
        - Even distribution of character types
        - Finishes in one execution
    - Cons:
        - Too much random number generation
        - Takes away from randomness
        - Requires checks to confirm that required helper functions were called
        - Critical: Works best for single inclusion of character types

* Method 2:
    - Declare character type ASCII index arrays
    - Append chosen arrays to create valid character pool
        - Randomly choose character from appended array and append to string
        - Check to confirm inclusion of at least one instance of chosen character types
    - Pros:
        - Allows for maximum randomness
        - Works well for any number of chosen character types
    - Cons:
        - Requires checks to confirm inclusion of chosen character types
        - Likely to have multiple attempts
        - Higher chance of uneven distribution of character types

* Method 3:
    - Choose random number from ASCII Character set
        - Append to string until password length - # of character types
        - Insert required character types into random indices of password string
            - Using helper functions for choosing respective characters
    - Pros:
        - Retains maximum randomness
        - No checking for character types needed (ensures inclusion chosen character types)
        - Guarantees string has required characters
        - Fastest of three methods (least number of steps)
    - Cons:
        - Higher chance of uneven distribution of character types
        - Critical: Works only when all character types are included

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Although efficiency is not crucial due to the smaller
scale of the algorithm, it is directly related to the conciseness of the code. Of the
above methods, methods 1 & 3 have criticals disadvantages in that they only perform well
when tasked with a certain number of character types, while method 2 is viable for any.
While we will be using method 2, since method 3 is most efficient, we will be implementing
method 3's insert function to guarantee inclusion of character types in method 2.

* Method Final:
    - Declare character type ASCII index arrays
        - Append chosen arrays to create valid character pool
            - If numeric character type is chosen, append array twice for even distribution
        - Randomly choose character from appended array and append to password string
            - Leave space for character insertion to guarantee inclusion of each chosen character type
        - Insert one of each chosen character type into random indices of password string
    - Pros:
        - Retains maximum randomness
        - No checking for character types needed (ensures inclusion chosen character types)
        - Guarantees string has required characters
        - Fastest of proposed methods (least number of steps)
        - Works well for any number of chosen character types
        - Even distribution of character types
    - Cons:
        - Minimal
