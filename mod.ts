#!/usr/bin/env -S deno run --unstable --allow-net --allow-read
import { serve } from "https://deno.land/std/http/server.ts";
import createHtml from "./createHtml.ts";

const file = await Deno.open("data.txt", { read: true });
const data = await Deno.readAll(file);
Deno.close(file.rid);

const decoder = new TextDecoder("utf-8");
const content = decoder.decode(data).trim();

const words = content.split("\n");
const count = words.length;

const server = serve({ port: 8000 });

for await (const req of server) {
  const index = Math.floor(Math.random() * count);
  const body = createHtml(words[index]);
  req.respond({ body });
}
