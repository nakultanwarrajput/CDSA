"use strict";
// Global API
Object.defineProperty(exports, "__esModule", { value: true });
export const SpeechRecognitionEvent = exports.SpeechGrammarList = exports.SpeechRecognition = void 0;
var _SpeechRecognition = window['webkitSpeechRecognition'] || window["SpeechRecognition"];
export const SpeechRecognition = _SpeechRecognition;
var _SpeechGrammarList = window['webkitSpeechGrammarList'] || window["SpeechGrammarList"];
export const SpeechGrammarList = _SpeechGrammarList;
var _SpeechRecognitionEvent = window['webkitSpeechRecognitionEvent'] || window["SpeechRecognitionEvent"];
export const SpeechRecognitionEvent = _SpeechRecognitionEvent;
