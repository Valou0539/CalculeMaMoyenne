import {defineConfig} from 'vitest/config';
import {ofetch} from "ofetch";

export default defineConfig({
  test: {
      globals: true
  }
});

export const ApiFetch = ofetch.create({
    baseURL: 'http://localhost:3000/api'
});