import { colors } from "@atlaskit/theme";
const axios = require('axios');


const teste = async () => {
  axios.get('https://api-gs.vercel.app/api/hello?key=B":T|%23vGwx?@RHi|Z[9$Ht}sfBGwjL&data=colunas', {
  // axios.get('http://172.25.112.1:3000/api/hello?key=B":T|%23vGwx?@RHi|Z[9$Ht}sfBGwjL&data=colunas', {
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function (e) {
    console.log(e)
    // always executed
  });  
}

let AceiteO = {
  id: "1",
  name: "AceiteO",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: null,
  colors: {
    soft: colors.P50,
    hard: colors.P200
  }
};

// export const authors = [teste()]
export const authors = [AceiteO];

export const quotes = [
  {
    id: "1",
    content: "Pedido: 2697",
    author: "Espera",
    responsavel: "Adriano"
  }
];

const getByAuthor = (author, items) =>
items.filter(quote => quote.author === author);
console.log(teste())

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes)
  }),
  {}
);
