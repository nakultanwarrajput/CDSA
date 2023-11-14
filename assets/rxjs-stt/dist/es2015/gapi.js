// Global API
const _SpeechRecognition = window['webkitSpeechRecognition'] || window["SpeechRecognition"];
const _SpeechGrammarList = window['webkitSpeechGrammarList'] || window["SpeechGrammarList"];
const _SpeechRecognitionEvent = window['webkitSpeechRecognitionEvent'] || window["SpeechRecognitionEvent"];
export { _SpeechRecognition as SpeechRecognition, _SpeechGrammarList as SpeechGrammarList, _SpeechRecognitionEvent as SpeechRecognitionEvent };
