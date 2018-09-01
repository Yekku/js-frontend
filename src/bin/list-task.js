#!/usr/bin/env node
import { toString } from '../sequences/seguences'

const dom1 = make();
const dom2 = append(dom1, node("h1", "Hello, world!"));
const dom3 = append(dom2, node("h2", "List of courses"));
const tag = node("h3", "list.js");
const dom = append(dom3, tag);
toString(dom);
