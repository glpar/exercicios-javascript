/*  ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const output = document.querySelector('#output')
const show = (message) => {
    output.textContent += `${message}\n`
}


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
//• Contar o número de categorias e o número de livros em cada categoria
function counter(criador) {
    cont=0;
    book=0;
    aut=0
    for(i=0; i < booksByCategory.length; i++){
        cont++; 
        book += booksByCategory[i].books.length;
        show("A " + [i+1] + "ª categoria possui " + booksByCategory[i].books.length + " livros");
        
        // aut += booksByCategory[i].books.author.length;
        for(j=0; j < booksByCategory[i].books.length; j++){
            // console.log(booksByCategory[i].books[j].author);
            aut += booksByCategory[i].books[j].author.length;
            if(booksByCategory[i].books[j].author.includes("Augusto Cury")){
                show("Livro de Augusto Cury: " + booksByCategory[i].books[j].title);
            }
            if(booksByCategory[i].books[j].author.includes(criador)){
                show("Livro do autor pesquisado: " + booksByCategory[i].books[j].title);
            }
        } 
    }
    

    show("Quantidade de categorias: " + cont);
    show("Quantidade de livros: " + book);
    show("Quantidade de autores: " + book);
    
}

counter("George S. Clason");
