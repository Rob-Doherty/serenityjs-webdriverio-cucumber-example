import { Actor, Cast } from '@serenity-js/core';
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio';
import { browser } from '@wdio/globals';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        console.log('### Preparing actor!')
        return actor.whoCan(
            BrowseTheWebWithWebdriverIO.using(browser),
        );
    }
}
