/* Book example */

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

const book1 = new Book("The Hunger Games", "someone", 300, "not read yet");

console.log(book1.info());

/* Student example */

function Student(){
}

Student.prototype.sayName = function() {
    return this.name;
}

function eightGrader(name) {
    this.name = name;
    this.grade = 8;
}

eightGrader.prototype = Object.create(Student.prototype);

const kevin = new eightGrader("Kevin");
console.log(kevin.sayName());

function sixGrader(name){
    this.name = name;
    this.grade = 6;
}

sixGrader.prototype = Object.create(Student.prototype);

const dom = new sixGrader("Dom");
console.log(dom);
console.log(dom.sayName());