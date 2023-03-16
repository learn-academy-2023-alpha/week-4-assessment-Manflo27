# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# Psedocode 1. Create a method called number
#           2. Input is taking in a number 
#           3. Conditonal statement checking if the number is even by using modulo, every if must have an end just like def has an end.
#           4. Else to return number that doesn't meet the first condition therefore returns odd
#           5. Output  returns if number is even or odd
def number num
   if num % 2==0
    "#{num} is even"
   else
    "#{num} is odd"
   end
    
end
p number num1
p number num2
p number num3




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Psedocode 1. Create a method called this_name
#           2. Input is taking in a string 
#           3. Take in a string as an parameter,use the delete() to return the string without the elements presented
#           4. Output removes all the vowels from the string. "aeiouAEIOU"
def this_name string
    string.delete"aeiouAEIOU"
end
p this_name beatles_album1
p this_name beatles_album2
p this_name beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'



# Psedocode 1. Create a method called my_name
#           2  Input is taking in a string
#           3  Take in a string as an parameter, use string is equal to  string.reverse and capitalize.
#           4. string.reverse and capitalize reverse the order of the word and capitalize the first letter of that word. 
#           5. Output checks if the string is a palindrome.





def my_name string
     if string == string.reverse.capitalize!
        "#{string} is a palindrome"
     else
        "#{string} is not a palindrome"
     end
end 
p my_name palindrome_tester1
p my_name palindrome_tester2
p my_name palindrome_tester3