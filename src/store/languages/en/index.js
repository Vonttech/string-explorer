export default {
  state: {
    selectedMethod: '',
    find: [
      {
        name: 'chatAt',
        optionLabel: 'a character in a given index',
        description: 'Returns a single character in a given index of the string',
        example: `const sentence = 'Code is poetry';<br>
        const index = 2;<br>
        console.log('The character at index ' + index + ' is ' + sentence.charAt(index));`,
        output: 'The character at index 2 is d'
      },
      {
        name: 'charCodeAt',
        optionLabel: 'a character code in a given index',
        description: 'Returns the character UTF-16 code identifier in a given index of the string',
        example: `const sentence = 'Code is poetry';<br>
        const index = 2;<br>
        const code = sentence.charCodeAt(index);<br>
        console.log('The character code  ' + code + ' is equal to ' + sentence.charAt(index));`,
        output: 'The character code 100 is equal to d'
      },
    ],
    modify: [
      {
        name: 'replace',
        optionLabel: 'by replacing the first occurrence of a pattern with other string',
        description: 'Returns a new string with the first occurrence of a given pattern replaced by a given string',
        example: `const sentence = 'Code is poetry';<br>
        const newSentence = sentence.replace('poetry', 'art');<br>
        console.log(newSentence);`,
        output: 'Code is art'
      },
    ]
  }
}