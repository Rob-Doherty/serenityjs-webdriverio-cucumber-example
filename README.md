# serenityjs-webdriverio-cucumber-example
Example a SerenityJS test framework using WebdriverIO and Cucumber.

## RUNNING:
- `yarn test` runs tests and saves reports in "target/site/serenity/[_timestamp_]/..."
- `yarn test:pipeline` runs tests and saves reports in "target/site/serenity/..." for easier retrieval in test pipeline

## DONE:
- setup of SerenityJS
    - WebdriverIO
    - TypeScript
    - Serenity reporting
- basic Cucumber example = `yarn test`
  - creates report at `./target/site/serenity/[timestamp]/index.html`
- wdio.conf.ts usage
- screenshots on failure
- setup linting (Eslint) = `yarn lint`
  - auto triggered on pre-commit

## TODO:
- Screenplay pattern example
- parallel test example
- CircleCI test pipelines
