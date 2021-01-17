import '../App.css';

var quotes = [{
id: 0,
text: "Expresarse es tocar puerto dentro de uno."},
{id: 1,
text: "Metanoia."},
{id: 2,
text: "There's a time and place for everything."},
{id: 3,
text: "You've been busy, huh?"},
{id: 4,
text: "this is an odd thing to say, but... if you have some sort of special power... isn't it your responsibility to do the right thing?"},
{
id: 5,
text: 'What is better? To be born good or to overcome your evil nature through great effort?'
}
,
{ id: 6, text: "Despite everything, it's still you." }
,
{ id: 7, text: 'Determination.' }
,
{
id: 8,
text: 'You seek meaning, shelter in knowledge. You will not find it.'
}
,
{
id: 9,
text: 'Hasta un reloj parado da bien la hora dos veces por día.'
}
,
{ id: 10, text: 'Confiar y esperar.' }
,
{
id: 11,
text: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
}
,
{ id: 12, text: 'Tiempo al tiempo.' },
{
id: 13,
text: 'Quien salva al lobo causa la muerte de las ovejas.'
}
,
{
id: 14,
text: 'Tenía la certidumbre ciega de la flecha que no ve más que al blanco y va directo a el.'
}
,
{
id: 15,
text: 'Cualquier cosa deja de ser un placer si se hace con mucha frequencia.'
}
,
{
id: 16,
text: 'El aficionado tiene una ventaja sobre el profesional: puede prescindir de toda prudencia.'
}
,
{
id: 17,
text: 'Lunas borrosas con las que los malos pintores disimulan sus obras.'
}
,
{
id: 18,
text: 'Vous êtes des paresseux ! votre drapeau est une guenille, une impuissance.'
}
,
{ id: 19, text: 'La esperanza es el sueño de los despiertos.' }
,
{
id: 20,
text: 'Quien se apresura a cobrar sus deudas se conforma con menos de lo que merece.'
}
,
{ id: 21, text: 'No son los muertos...' }
,
{
id: 22,
text: 'Justifica tus limitaciones y te quedarás con ellas.'
}
,
{
id: 23,
text: 'Vous êtes belles, mais vous êtes vides. On ne peut pas mourir pour vous.'
}
,
]
var max = quotes.length -1


export default function quoteOfTheDay(){
const n = Math.round(Math.random() * max)
return <p className="Quote">" {quotes[n].text} "</p>
}

