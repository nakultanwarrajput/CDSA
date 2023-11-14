import { fromEvent, merge, Observable, throwError, timer } from 'rxjs';
import { mergeMap, mergeMapTo, takeUntil, delay } from 'rxjs/operators';
import { SpeechRecognition } from './gapi';
;
const optionsKeys = ['grammars', 'continuous', 'lang', 'interimResults', 'maxAlternatives', 'serviceURI'];
export function listen(value = {}) {
    const recognition$ = new Observable((observer) => {
        let recognition;
        if (value instanceof SpeechRecognition) {
            recognition = value;
        }
        else {
            recognition = new SpeechRecognition();
            optionsKeys.forEach(key => {
                if (key in value) {
                    recognition[key] = value[key];
                }
            });
        }
        // error -- as errors on Observable
        const error$ = fromEvent(recognition, 'error').pipe(mergeMap(event => throwError(event)));
        // listen to results
        const nomatch$ = fromEvent(recognition, 'nomatch');
        const result$ = fromEvent(recognition, 'result');
        // audio, sound and speech recognition marks
        const audiostart$ = fromEvent(recognition, 'audiostart');
        const audioend$ = fromEvent(recognition, 'audioend');
        const soundstart$ = fromEvent(recognition, 'soundstart');
        const soundend$ = fromEvent(recognition, 'soundend');
        const speechstart$ = fromEvent(recognition, 'speechstart');
        const speechend$ = fromEvent(recognition, 'speechend');
        // end -- completes Observable
        const end$ = fromEvent(recognition, 'end');
        // start listening to events
        const subscription = merge(audiostart$, audioend$, soundstart$, soundend$, speechstart$, speechend$, nomatch$, result$, error$)
            .pipe(takeUntil(
        // delay fix for FF:
        // it seem to fire 'end' event BEFORE the 'result'
        // (tested on: 78.0.2 (64-bit) MacOS, w/ recognise.enabled + force_enabled)
        end$.pipe(delay(1))))
            .subscribe(observer);
        recognition.start();
        // NOTE: not sure if to use abort() or stop() here
        // TODO: triage more
        subscription.add(() => recognition.abort());
        return subscription;
    });
    return timer(4).pipe(mergeMapTo(recognition$));
    // TODO: consider using share() for result since there would always be only
    // one running instance at a given time
}
