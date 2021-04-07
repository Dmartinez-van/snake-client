// DM IP -> '192.168.1.81'
// Zoom game - > 135.23.222.131
const IP = 'localhost';
const PORT = 50541;
// Zoom Game -> 50542
// DM Game -> 50541

const INPUTS = {
  w: 'Move: up',
  wSpeed: 50,
  a: 'Move: left',
  s: 'Move: down',
  sSpeed: 50,
  d: 'Move: right'
};

const EMOTE = {
  g: 'Say: GG EZ',
  e: 'Say: Winner Coming Thru!',
  f: 'Say: :)',
  t: "Say: I'm lost, plz help :(",
  r: 'Say: <(^ v ^ <)'
};

const ANTI = {
  w: 's',
  a: 'd',
  s: 'w: down',
  d: "a",
};

module.exports = {
  IP,
  PORT,
  INPUTS,
  EMOTE,
  ANTI
};