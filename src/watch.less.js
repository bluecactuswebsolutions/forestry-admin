const fs = require('fs');

const exec = require('child_process').exec;

// eslint-disable-next-line
const colors = require('colors');

const files = `${__dirname}/less`;

fs.watch(files, handleChanges);

// eslint-disable-next-line
function handleChanges(event, file) {
  exec('yarn run build-css', afterWrites);
}

// eslint-disable-next-line
function afterWrites(err, stdout, out) {
// eslint-disable-next-line
  if (err) console.log(`${err}`.red);
// eslint-disable-next-line
  if (out) console.log(`${out}`.dim);
  // eslint-disable-next-line
  console.log(`compiled less files bro...`.green);
}
