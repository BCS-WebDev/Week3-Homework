# Week3-Homework
BootCampSpot Web Development - Week 3 Homework

# Notes on Passwords
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

# Motive & Action
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our client is an employee with access to 
sensitive data and wants to provide greater security by using a random password
generator to generate passwords that meet a certain criteria. JavaScript provides
us with various methods to accomplish this task by applying our logic.

* Logic: