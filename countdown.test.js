
const { test } = require("node:test");
const assert = require("node:assert/strict");

const {
  daysUntilRelease,
  releaseDate
} = require("./countdown.js");

// Test 1: Laskurin toiminta ennen julkaisupäivää
test("Countdown shows correct days before release", () => {
  const result = daysUntilRelease("2026-11-01", releaseDate);
  assert.equal(result, 4);
});

// Test 2: Laskurin toiminta julkaisupäivänä
test("Countdown shows zero on release day", () => {
  const result = daysUntilRelease("2026-11-05", releaseDate);
  assert.equal(result, 0);
});

// Test 3: Laskurin toiminta julkaisun jälkeen 
test("Countdown never shows negative days", () => {
  const result = daysUntilRelease("2026-11-10", releaseDate);
  assert.equal(result, 0);
});
