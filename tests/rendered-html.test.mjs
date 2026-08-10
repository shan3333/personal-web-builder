import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio home page", async () => {
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
