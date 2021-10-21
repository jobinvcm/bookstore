const booksMock = [
  {
    id: '1',
    name: 'Goodnight moon',
    timestamp: new Date('2021-10-20').getTime().toString(),
    author: 'Margaret Wise Brown',
    description: `Goodnight Moon is an American children's book written by Margaret Wise Brown and illustrated by Clement Hurd. It was published on 3 September 1947, and is a highly acclaimed bedtime story. This book is the second in Brown and Hurd's "classic series", which also includes The Runaway Bunny and My World.`,
  },
  {
    id: '2',
    name: `Harry Potter and the Philosopher's Stone`,
    timestamp: new Date('2021-8-20').getTime().toString(),
    author: 'J. K. Rowling',
    description: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.`,
  },
  {
    id: '2',
    timestamp: new Date('2021-11-20').getTime().toString(),
    name: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    description: `The Secret Garden is a novel by Frances Hodgson Burnett first published in book form in 1911, after serialisation in The American Magazine. Set in England, it is one of Burnett's most popular novels and seen as a classic of English children's literature. Several stage and film adaptations have been made.`,
  },
];

export default booksMock;
