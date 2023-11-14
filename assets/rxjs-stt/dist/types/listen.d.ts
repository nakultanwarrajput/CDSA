import { Observable } from 'rxjs';
declare var SpeechRecognition:any;
declare var SpeechGrammarList:any
declare var SpeechRecognitionEvent:any;
declare var webkitSpeechRecognition:any;
export interface SpeechRecognitionConfig {
    grammars?: typeof SpeechGrammarList;
    continuous?: boolean;
    lang?: string;
    interimResults?: boolean;
    maxAlternatives?: number;
    serviceURI?: string;
}
export declare function listen(value?:  typeof webkitSpeechRecognition | typeof SpeechRecognition | SpeechRecognitionConfig): Observable<typeof SpeechRecognitionEvent>;
//# sourceMappingURL=listen.d.ts.map