import { fromEvent, merge, Observable, throwError, timer } from 'rxjs';
import { mergeMap, mergeMapTo, takeUntil, delay } from 'rxjs/operators';
import { SpeechRecognition } from './gapi';
;
var optionsKeys = ['grammars', 'continuous', 'lang', 'interimResults', 'maxAlternatives', 'serviceURI'];
export function listen(value) {
    if (value === void 0) { value = {}; }
    var recognition$ = new Observable(function (observer) {
        var recognition;
        if (value instanceof SpeechRecognition) {
            recognition = value;
        }
        else {
            recognition = new SpeechRecognition();
            optionsKeys.forEach(function (key) {
                if (key in value) {
                    recognition[key] = value[key];
                }
            });
        }
        // error -- as errors on Observable
        var error$ = fromEvent(recognition, 'error').pipe(mergeMap(function (event) { return throwError(event); }));
        // listen to results
        var nomatch$ = fromEvent(recognition, 'nomatch');
        var result$ = fromEvent(recognition, 'result');
        // audio, sound and speech recognition marks
        var audiostart$ = fromEvent(recognition, 'audiostart');
        var audioend$ = fromEvent(recognition, 'audioend');
        var soundstart$ = fromEvent(recognition, 'soundstart');
        var soundend$ = fromEvent(recognition, 'soundend');
        var speechstart$ = fromEvent(recognition, 'speechstart');
        var speechend$ = fromEvent(recognition, 'speechend');
        // end -- completes Observable
        var end$ = fromEvent(recognition, 'end');
        // start listening to events
        var subscription = merge(audiostart$, audioend$, soundstart$, soundend$, speechstart$, speechend$, nomatch$, result$, error$)
            .pipe(takeUntil(
        // delay fix for FF:
        // it seem to fire 'end' event BEFORE the 'result'
        // (tested on: 78.0.2 (64-bit) MacOS, w/ recognise.enabled + force_enabled)
        end$.pipe(delay(1))))
            .subscribe(observer);
        recognition.start();
        // NOTE: not sure if to use abort() or stop() here
        // TODO: triage more
        subscription.add(function () { return recognition.abort(); });
        return subscription;
    });
    return timer(4).pipe(mergeMapTo(recognition$));
    // TODO: consider using share() for result since there would always be only
    // one running instance at a given time
}
