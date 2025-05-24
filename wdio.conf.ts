import { WebdriverIOConfig } from '@serenity-js/webdriverio';
import { Actors } from './test_source';

export const config: WebdriverIOConfig = {
    framework: '@serenity-js/webdriverio',

    serenity: {
        actors: new Actors(),
        runner: 'cucumber',
        crew: [
            '@serenity-js/console-reporter',
            '@serenity-js/serenity-bdd',
            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
            [ '@serenity-js/web:Photographer', {
                strategy: 'TakePhotosOfFailures',
                // strategy: 'TakePhotosOfInteractions',
            } ]        ]
    },

    cucumberOpts: {
        require: [
            './features/step_definitions/*.ts',
        ],
        format: [ ],
    },

    specs: [
        './features/**/*.feature',
    ],

    reporters: [
        'spec',
        // [ Inspector, { outputDir: `./log/tmp` } ]
    ],

    runner: 'local',

    maxInstances: 1,

    baseUrl: 'https://www.whiteboxitsolutions.com',

    capabilities: [{

        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                // '--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1024x768',
            ],
        }
    }],

    logLevel: 'info',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

};
