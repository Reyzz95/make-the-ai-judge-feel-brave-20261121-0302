const { mkdirSync, writeFileSync } = require('node:fs');

const entry = 'The old ferry nudges the landing. A rope settles round a post, and the water goes on moving beneath it. For a while, no one steps off. Then a woman lifts her basket. The boat tips a little toward her foot, and holds.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
