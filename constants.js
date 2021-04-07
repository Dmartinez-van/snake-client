// DM IP -> '192.168.1.81'
// Zoom game - > 135.23.222.131
const IP = '135.23.222.131';
const PORT = 50542;
// Zoom Game -> 50542
// DM Game -> 50541

const INPUTS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  g: 'Say: GG EZ',
  e: 'Say: Winner Coming Thru!',
  f: 'Say: :)',
  t: "Say: I'm lost, plz help :(",
  r: 'Say: <(^ v ^ <)'
};

module.exports = {
  IP,
  PORT,
  INPUTS
};