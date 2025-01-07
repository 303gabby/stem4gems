var quoteList = [
"Mae C. Jemison is the first Black woman to ever travel to space.", /*0*/

"Radia Perlman is a computer programmer famous for inventing the spanning-tree protocol. This breakthrough developed an actual network on the internet for the first time, allowing devices to communicate with each other. She is referred to as the Mother of the Internet.",/*1*/

"Katherine Johnson was a mathematician working for NASA for 35 years. She developed complex equations that directly enabled manned space missions. She was one of the first Black women to be a NASA scientist by profession, and her story was told in the popular film Hidden Figures.",/*2*/

"Only About a Quarter of STEM Workers Are Female. While women constitute almost 50% of the labor market, there are only 28% of women in STEM fields as opposed to 72% of men.",/*3*/

"The number of women who are awarded STEM degrees every year has increased by over 50,000 in the past decade.",/*4*/

"Female engineers earn 90 cents for every one dollar ($1) male engineers earn.",/*5*/

"Women's enrollment in STEM college courses rises 6% yearly.",/*6*/

"Women have won only 19 of over 600 Nobel Prizes in STEM since 1901.",/*7*/

" Women Of Color Are Severely Underrepresented In STEM.",/*8*/

"In 1842, Ada Lovelace  was commissioned to translate a French transcript of one of Charles Babbage’s lectures into English. Adding her own section simply titled ‘Notes’, Ada went on to write a detailed collection of her own ideas on Babbage’s computing machines that ended up being more extensive than the transcript itself! Within these pages of notes, Lovelace made history. In note G, she wrote an algorithm for the Analytical Engine to compute Bernoulli numbers, the first published algorithm ever specifically tailored for implementation on a computer, or in simple terms – the first computer program.",/*9*/
];


var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote);
quote.innerHTML = quoteList[count];

function displayQuote() {
  quote.innerHTML = quoteList[count];
  count++;
  if (count == quoteList.length){
    count = 0;
  }
}
