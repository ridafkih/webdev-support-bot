import { Message } from 'discord.js';
import { point_up, paintbrush } from '../../utils/emojis';

const getRandomArbitrary = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const LINE_SEPARATOR = '\n';

function formatFn(fn: Function) {
  return fn
    .toString()
    .split(LINE_SEPARATOR)
    .map((line) => '> ' + line)
    .join(LINE_SEPARATOR);
}

function annoyTitan() {
  console.log('react > vue');
}

function getActualName(user: string) {
  const map = {
    gerrit: 'gerratata',
    innovati: 'innevada',
    emnudge: 'imnudeguy',
  };

  return map[user] ?? 'no match found';
}

function typeOfNestor() {
  return 'naab';
}

function getTheBestOfSteves() {
  return 'DLSteve';
}

const typeMap = {};

function getEstimatedPayment(type, rate, hours) {
  if (type === 'equity') {
    return 0;
  }

  return rate * hours * typeMap[type];
}

function getBenzFavoriteWord() {
  return 'oop';
}

const exampleFns = [
  formatFn,
  annoyTitan,
  getActualName,
  typeOfNestor,
  getTheBestOfSteves,
  getBenzFavoriteWord,
  getEstimatedPayment,
];

const getSnippetElements = () =>
  [
    '> \\`\\`\\`js',
    '> // copy this and enter your code instead',
    exampleFns[getRandomArbitrary(0, exampleFns.length - 1)]
      .toString()
      .split(LINE_SEPARATOR)
      .map((line) => `> ${line}`)
      .join(LINE_SEPARATOR),
    '> \\`\\`\\`',
  ].join(LINE_SEPARATOR);

const otherLanguageExamples = ['php', 'css', 'html', 'ts', 'sql', 'md']
  .map((str) => `\`${str}\``)
  .join(', ');

const handleFormattingRequest = async (msg: Message) => {
  await msg.channel.send(`
${point_up} Did you know you can add ${paintbrush} syntax highlighting to your code in Discord? Try this snippet:

${getSnippetElements()}

You can replace \`js\` with other languages too, e.g. ${otherLanguageExamples} and so on...
To properly _format_ your code, try pasting it in here first: https://prettier.io/playground/
`);
};

export default handleFormattingRequest;