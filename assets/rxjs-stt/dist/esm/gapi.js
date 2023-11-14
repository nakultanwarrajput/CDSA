// Global API
var _SpeechRecognition = window['webkitSpeechRecognition'] || window["SpeechRecognition"];
var _SpeechGrammarList = window['webkitSpeechGrammarList'] || window["SpeechGrammarList"];
var _SpeechRecognitionEvent = window['webkitSpeechRecognitionEvent'] || window["SpeechRecognitionEvent"];
export { _SpeechRecognition as SpeechRecognition, _SpeechGrammarList as SpeechGrammarList, _SpeechRecognitionEvent as SpeechRecognitionEvent };
