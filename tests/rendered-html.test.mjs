import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import test from "node:test";

async function render() {
  const html = await readFile(new URL("../out/index.html", import.meta.url));
  const server = createServer((request, response) => {
    if (request.url !== "/") {
      response.writeHead(404).end("Not found");
      return;
    }

    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(html);
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();

  try {
    return await fetch(`http://127.0.0.1:${address.port}/`);
  } finally {
    server.close();
  }
}

test("static export renders the portfolio home page", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Shan Liu/);
  assert.match(html, /Software Engineer/);
  assert.match(html, /Builder/);
  assert.match(html, /The Hague Appointment Alert/);
  assert.match(html, /API Change Assistant/);
});

test("renders portfolio links and main sections", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href=["']https:\/\/github\.com\/shan3333["']/);
  assert.match(
    html,
    /href=["']https:\/\/www\.linkedin\.com\/in\/shan-liu-6b5800195\/["']/,
  );
  assert.match(html, /href=["']mailto:sliu10133@gmail\.com["']/);
  assert.match(html, /href=["']\/shan-liu-cv\.pdf["']/);

  for (const section of [
    "projects",
    "impact",
    "experience",
    "skills",
    "about",
    "contact",
  ]) {
    assert.match(html, new RegExp(`(?:id=["']${section}["']|href=["']#${section}["'])`, "i"));
  }
});
