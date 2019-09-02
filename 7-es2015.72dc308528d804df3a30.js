(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HD7M:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var r=t("pMnS"),a=t("TSSN"),o=t("HsOI"),i=t("SVse"),s=t("VDRc"),b=t("/q54"),c=t("dJrM"),h=t("Xd0L"),d=t("IP0z"),m=t("/HVE"),g=t("omvX"),f=t("s7LF"),p=t("ZwOa"),D=t("oapL"),v=t("bujt"),_=t("Fwaw"),B=t("5GAg"),x=t("Mr+X"),y=t("Gi4r"),I=t("XNiG"),w=t("1G5W");class C{constructor(l){this.gameService=l,this.letterGuessControl=new f.e(""),this.destroy$=new I.a}ngOnInit(){this.gameService.hangman$.pipe(Object(w.a)(this.destroy$)).subscribe(l=>{this.hangman=l,this.letterGuessControl.setValidators([f.q.required,f.q.pattern(new RegExp(/[^\s]/)),G(this.hangman)])}),this.currentHighscore$=this.gameService.currentHighscore$,this.startGame()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}guess(){this.gameService.guess(this.letterGuessControl.value),this.letterGuessControl.reset()}startGame(){this.gameService.startGame(),this.maxIncorrectGuessCount=this.gameService.maxIncorrectGuessCount}}function G(l){return n=>l&&(l.incorrectLetters.includes(n.value)||l.correctLetters.includes(n.value))?{alreadyUsed:{value:!0}}:null}var S=t("AytR");class q{constructor(){this.victory=!1,this.lost=!1}get gameOver(){return this.victory||this.lost}}class j{constructor(l){this.word=l,this.correctLetters=[],this.incorrectLetters=[],this.gameState=new q}}var k=t("2Vo4");let L=(()=>{class l{constructor(){}getRandomWord(){const l=S.a.words;return l[Math.floor(Math.random()*l.length)]}}return l.ngInjectableDef=e.Ob({factory:function(){return new l},token:l,providedIn:"root"}),l})();var F=t("kmKP");let K=(()=>{class l{constructor(l,n){this.wordService=l,this.userService=n,this.hangman$=new k.a(void 0),this.currentHighscore$=new k.a(0),this.maxIncorrectGuessCount=S.a.maxIncorrectGuessCount,this.emptyChar=S.a.emptyChar,this.currentHighscore=0}startGame(){const l=this.wordService.getRandomWord();this.hangman=new j(l),this.guess()}guess(l){const n=this.hangman.word.toLowerCase().split("");let t="",e=!1,u=!1;for(let r=0;r<n.length;r++){const a=n[r];l&&a===l.toLowerCase()&&(e=!0,this.hangman.correctLetters.push(a)),this.hangman.correctLetters.indexOf(a)>-1?t+=a:(u=!0,t+=this.emptyChar),r!==n.length&&(t+=" ")}l&&!e&&this.hangman.incorrectLetters.push(l),this.hangman.wordGuess=u?t:this.hangman.word,this.updateGameState(),this.updateHighScore()}updateGameState(){const l=this.hangman.gameState;l.victory=this.hangman.word===this.hangman.wordGuess,l.lost=this.hangman.incorrectLetters.length>=this.maxIncorrectGuessCount,this.hangman$.next(this.hangman)}updateHighScore(){const l=this.hangman.gameState;if(l.victory){this.currentHighscore++;const l=this.userService.CurrentUser;this.currentHighscore>l.highscore&&(l.highscore=this.currentHighscore,this.userService.update(l))}l.lost&&(this.currentHighscore=0),this.currentHighscore$.next(this.currentHighscore)}}return l.ngInjectableDef=e.Ob({factory:function(){return new l(e.Pb(L),e.Pb(F.a))},token:l,providedIn:"root"}),l})();var E=e.pb({encapsulation:0,styles:[[".game[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{margin:2% 0}"]],data:{}});function N(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Ib(1,null,["",""])),e.Eb(131072,a.i,[a.j,e.h])],null,function(l,n){l(n,1,0,e.Jb(n,1,0,e.Db(n,2).transform("invalid_guess")))})}function O(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Ib(1,null,["",""])),e.Eb(131072,a.i,[a.j,e.h])],null,function(l,n){l(n,1,0,e.Jb(n,1,0,e.Db(n,2).transform("already_used_letter")))})}function H(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,5,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.qb(1,16384,[[6,4]],0,o.b,[],null,null),(l()(),e.gb(16777216,null,null,1,null,N)),e.qb(3,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(5,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,t.letterGuessControl.errors.pattern),l(n,5,0,t.letterGuessControl.errors.alreadyUsed)},function(l,n){l(n,0,0,e.Db(n,1).id)})}function J(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,33,"div",[["fxLayout","column"]],null,null,null,null,null)),e.qb(1,671744,null,0,s.c,[e.k,b.i,[2,s.i],b.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.rb(2,0,null,null,24,"mat-form-field",[["class","mat-form-field"],["fxFlex",""]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,c.b,c.a)),e.qb(3,671744,null,0,s.a,[e.k,b.i,b.e,s.f,b.f],{fxFlex:[0,"fxFlex"]},null),e.qb(4,7520256,null,9,o.c,[e.k,e.h,[2,h.f],[2,d.b],[2,o.a],m.a,e.x,[2,g.a]],null,null),e.Gb(603979776,1,{_controlNonStatic:0}),e.Gb(335544320,2,{_controlStatic:0}),e.Gb(603979776,3,{_labelChildNonStatic:0}),e.Gb(335544320,4,{_labelChildStatic:0}),e.Gb(603979776,5,{_placeholderChild:0}),e.Gb(603979776,6,{_errorChildren:1}),e.Gb(603979776,7,{_hintChildren:1}),e.Gb(603979776,8,{_prefixChildren:1}),e.Gb(603979776,9,{_suffixChildren:1}),(l()(),e.rb(14,0,null,1,10,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["maxlength","1"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==e.Db(l,15)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e.Db(l,15).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Db(l,15)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Db(l,15)._compositionEnd(t.target.value)&&u),"blur"===n&&(u=!1!==e.Db(l,22)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==e.Db(l,22)._focusChanged(!0)&&u),"input"===n&&(u=!1!==e.Db(l,22)._onInput()&&u),u},null,null)),e.qb(15,16384,null,0,f.c,[e.C,e.k,[2,f.a]],null,null),e.qb(16,540672,null,0,f.i,[],{maxlength:[0,"maxlength"]},null),e.Fb(1024,null,f.j,function(l){return[l]},[f.i]),e.Fb(1024,null,f.k,function(l){return[l]},[f.c]),e.qb(19,540672,null,0,f.f,[[6,f.j],[8,null],[6,f.k],[2,f.t]],{form:[0,"form"]},null),e.Fb(2048,null,f.l,null,[f.f]),e.qb(21,16384,null,0,f.m,[[4,f.l]],null,null),e.qb(22,999424,null,0,p.a,[e.k,m.a,[6,f.l],[2,f.o],[2,f.g],h.b,[8,null],D.a,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Eb(131072,a.i,[a.j,e.h]),e.Fb(2048,[[1,4],[2,4]],o.d,null,[p.a]),(l()(),e.gb(16777216,null,5,1,null,H)),e.qb(26,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(27,0,null,null,6,"div",[["fxFlex",""],["fxLayoutGap","10px"]],null,null,null,null,null)),e.qb(28,1720320,null,0,s.d,[e.k,e.x,d.b,b.i,[2,s.h],b.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),e.qb(29,671744,null,0,s.a,[e.k,b.i,b.e,s.f,b.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(30,0,null,null,3,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.guess()&&e),e},v.d,v.b)),e.qb(31,180224,null,0,_.b,[e.k,B.b,[2,g.a]],{disabled:[0,"disabled"]},null),(l()(),e.Ib(32,0,["",""])),e.Eb(131072,a.i,[a.j,e.h])],function(l,n){var t=n.component;l(n,1,0,"column"),l(n,3,0,""),l(n,16,0,"1"),l(n,19,0,t.letterGuessControl),l(n,22,0,e.vb(1,"",e.Jb(n,22,0,e.Db(n,23).transform("enter_your_letter_guess")),""),"text"),l(n,26,0,t.letterGuessControl.errors),l(n,28,0,"10px"),l(n,29,0,""),l(n,31,0,t.letterGuessControl.invalid||t.hangman.gameState.gameOver)},function(l,n){l(n,2,1,["standard"==e.Db(n,4).appearance,"fill"==e.Db(n,4).appearance,"outline"==e.Db(n,4).appearance,"legacy"==e.Db(n,4).appearance,e.Db(n,4)._control.errorState,e.Db(n,4)._canLabelFloat,e.Db(n,4)._shouldLabelFloat(),e.Db(n,4)._hasFloatingLabel(),e.Db(n,4)._hideControlPlaceholder(),e.Db(n,4)._control.disabled,e.Db(n,4)._control.autofilled,e.Db(n,4)._control.focused,"accent"==e.Db(n,4).color,"warn"==e.Db(n,4).color,e.Db(n,4)._shouldForward("untouched"),e.Db(n,4)._shouldForward("touched"),e.Db(n,4)._shouldForward("pristine"),e.Db(n,4)._shouldForward("dirty"),e.Db(n,4)._shouldForward("valid"),e.Db(n,4)._shouldForward("invalid"),e.Db(n,4)._shouldForward("pending"),!e.Db(n,4)._animationsEnabled]),l(n,14,1,[e.Db(n,16).maxlength?e.Db(n,16).maxlength:null,e.Db(n,21).ngClassUntouched,e.Db(n,21).ngClassTouched,e.Db(n,21).ngClassPristine,e.Db(n,21).ngClassDirty,e.Db(n,21).ngClassValid,e.Db(n,21).ngClassInvalid,e.Db(n,21).ngClassPending,e.Db(n,22)._isServer,e.Db(n,22).id,e.Db(n,22).placeholder,e.Db(n,22).disabled,e.Db(n,22).required,e.Db(n,22).readonly&&!e.Db(n,22)._isNativeSelect||null,e.Db(n,22)._ariaDescribedby||null,e.Db(n,22).errorState,e.Db(n,22).required.toString()]),l(n,30,0,e.Db(n,31).disabled||null,"NoopAnimations"===e.Db(n,31)._animationMode),l(n,32,0,e.Jb(n,32,0,e.Db(n,33).transform("guess")))})}function M(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),e.Ib(1,null,["",""])),e.Eb(131072,a.i,[a.j,e.h])],null,function(l,n){l(n,1,0,e.Jb(n,1,0,e.Db(n,2).transform("you_won")))})}function P(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),e.Ib(1,null,["",""])),e.Eb(131072,a.i,[a.j,e.h])],null,function(l,n){l(n,1,0,e.Jb(n,1,0,e.Db(n,2).transform("you_lost")))})}function $(l){return e.Kb(0,[(l()(),e.gb(16777216,null,null,1,null,M)),e.qb(1,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,P)),e.qb(3,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(4,0,null,null,6,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.startGame()&&e),e},v.d,v.b)),e.qb(5,180224,null,0,_.b,[e.k,B.b,[2,g.a]],null,null),(l()(),e.Ib(6,0,[" "," "])),e.Eb(131072,a.i,[a.j,e.h]),(l()(),e.rb(8,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),e.qb(9,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],null,null),(l()(),e.Ib(-1,0,["refresh"]))],function(l,n){var t=n.component;l(n,1,0,t.hangman.gameState.victory),l(n,3,0,t.hangman.gameState.lost),l(n,9,0)},function(l,n){l(n,4,0,e.Db(n,5).disabled||null,"NoopAnimations"===e.Db(n,5)._animationMode),l(n,6,0,e.Jb(n,6,0,e.Db(n,7).transform("click_to_restart"))),l(n,8,0,e.Db(n,9).inline,"primary"!==e.Db(n,9).color&&"accent"!==e.Db(n,9).color&&"warn"!==e.Db(n,9).color)})}function R(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,17,"div",[["fxLayout","column"]],null,null,null,null,null)),e.qb(1,671744,null,0,s.c,[e.k,b.i,[2,s.i],b.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.rb(2,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),e.Ib(3,null,["","",""])),e.Eb(131072,a.i,[a.j,e.h]),e.Eb(131072,i.b,[e.h]),(l()(),e.rb(6,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.Ib(7,null,["","",""])),e.Eb(131072,a.i,[a.j,e.h]),(l()(),e.rb(9,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.Ib(10,null,["","","/",""])),e.Eb(131072,a.i,[a.j,e.h]),(l()(),e.rb(12,0,null,null,5,"div",[["class","game"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Ib(14,null,["",""])),(l()(),e.gb(16777216,null,null,1,null,J)),e.qb(16,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.gb(0,[["gameOver",2]],null,0,null,$))],function(l,n){var t=n.component;l(n,1,0,"column"),l(n,16,0,!t.hangman.gameState.gameOver,e.Db(n,17))},function(l,n){var t=n.component;l(n,3,0,e.Jb(n,3,0,e.Db(n,4).transform("current_highscore")),e.Jb(n,3,1,e.Db(n,5).transform(t.currentHighscore$))),l(n,7,0,e.Jb(n,7,0,e.Db(n,8).transform("correct_guesses")),t.hangman.correctLetters.length),l(n,10,0,e.Jb(n,10,0,e.Db(n,11).transform("incorrect_guesses")),t.hangman.incorrectLetters.length,t.maxIncorrectGuessCount),l(n,14,0,t.hangman.wordGuess)})}function T(l){return e.Kb(0,[(l()(),e.gb(16777216,null,null,1,null,R)),e.qb(1,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.hangman)},null)}function V(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-game-widget",[],null,null,null,T,E)),e.qb(1,245760,null,0,C,[K],null,null)],function(l,n){l(n,1,0)},null)}var X=e.nb("app-game-widget",C,V,{},{},[]),z=t("IheW"),A=t("POq0"),U=t("iInd");class W{}var Z=t("ura0"),Q=t("Nhcz"),Y=t("u9T3"),ll=t("cUpR"),nl=t("hOhj"),tl=t("BV1i"),el=t("02hT"),ul=t("Q+lL"),rl=t("PCNd");t.d(n,"HangmanGameModuleNgFactory",function(){return al});var al=e.ob(u,[],function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,X]],[3,e.j],e.v]),e.Bb(4608,i.l,i.k,[e.s,[2,i.z]]),e.Bb(5120,e.b,function(l,n){return[b.j(l,n)]},[i.d,e.z]),e.Bb(4608,z.h,z.n,[i.d,e.z,z.l]),e.Bb(4608,z.o,z.o,[z.h,z.m]),e.Bb(5120,z.a,function(l){return[l]},[z.o]),e.Bb(4608,z.k,z.k,[]),e.Bb(6144,z.i,null,[z.k]),e.Bb(4608,z.g,z.g,[z.i]),e.Bb(6144,z.b,null,[z.g]),e.Bb(4608,z.f,z.j,[z.b,e.p]),e.Bb(4608,z.c,z.c,[z.f]),e.Bb(4608,f.s,f.s,[]),e.Bb(4608,f.d,f.d,[]),e.Bb(4608,A.c,A.c,[]),e.Bb(4608,h.b,h.b,[]),e.Bb(1073742336,U.n,U.n,[[2,U.s],[2,U.k]]),e.Bb(1073742336,W,W,[]),e.Bb(1073742336,i.c,i.c,[]),e.Bb(1073742336,a.g,a.g,[]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,d.a,d.a,[]),e.Bb(1073742336,s.e,s.e,[]),e.Bb(1073742336,Z.a,Z.a,[]),e.Bb(1073742336,Q.a,Q.a,[]),e.Bb(1073742336,Y.a,Y.a,[[2,b.g],e.z]),e.Bb(1073742336,z.e,z.e,[]),e.Bb(1073742336,z.d,z.d,[]),e.Bb(1073742336,f.r,f.r,[]),e.Bb(1073742336,f.h,f.h,[]),e.Bb(1073742336,f.p,f.p,[]),e.Bb(1073742336,m.b,m.b,[]),e.Bb(1073742336,D.c,D.c,[]),e.Bb(1073742336,A.d,A.d,[]),e.Bb(1073742336,o.e,o.e,[]),e.Bb(1073742336,p.b,p.b,[]),e.Bb(1073742336,h.j,h.j,[[2,h.c],[2,ll.f]]),e.Bb(1073742336,h.t,h.t,[]),e.Bb(1073742336,_.c,_.c,[]),e.Bb(1073742336,y.c,y.c,[]),e.Bb(1073742336,nl.c,nl.c,[]),e.Bb(1073742336,tl.h,tl.h,[]),e.Bb(1073742336,h.l,h.l,[]),e.Bb(1073742336,h.r,h.r,[]),e.Bb(1073742336,el.a,el.a,[]),e.Bb(1073742336,ul.d,ul.d,[]),e.Bb(1073742336,rl.a,rl.a,[]),e.Bb(1073742336,u,u,[]),e.Bb(1024,U.i,function(){return[[{path:"",component:C}]]},[]),e.Bb(256,z.l,"XSRF-TOKEN",[]),e.Bb(256,z.m,"X-XSRF-TOKEN",[])])})}}]);