# Playwright QA Automation

This repo runs a GitHub Action that uses Playwright to scrape tables from multiple seed URLs, sums all numbers, and prints the total in the Action logs.

## How it works

1. On every push to `main` (or manual trigger), the workflow runs
2. It installs Node.js and Playwright
3. Runs `scrape.js` which visits each seed URL and sums all numbers in all tables
4. Prints the grand total in the logs

## Manual trigger

Go to **Actions** tab → Select the workflow → Click **Run workflow**
