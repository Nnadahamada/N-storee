(self.webpackChunkneu=self.webpackChunkneu||[]).push([[888],{5561:function(e,t,n){var a,r=n(2122).default,o=n(6690).default,l=n(9728).default,u=n(6115).default,i=n(1655).default,p=n(6389).default,s=n(4704).default,c=Object.create,y=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,h=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,m=function(e,t,n,a){if(t&&"object"===typeof t||"function"===typeof t){var r,o=s(f(t));try{var l=function(){var o=r.value;v.call(e,o)||o===n||y(e,o,{get:function(){return t[o]},enumerable:!(a=d(t,o))||a.enumerable})};for(o.s();!(r=o.n()).done;)l()}catch(u){o.e(u)}finally{o.f()}}return e},P=function(e,t,n){return function(e,t,n){t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},k={};!function(e,t){for(var n in t)y(e,n,{get:t[n],enumerable:!0})}(k,{default:function(){return O}}),e.exports=(a=k,m(y({},"__esModule",{value:!0}),a));var b=function(e,t,n){return n=null!=e?c(h(e)):{},m(!t&&e&&e.__esModule?n:y(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),g=n(135),V=n(365),O=function(e){"use strict";i(n,e);var t=p(n);function n(){var e;return o(this,n),e=t.apply(this,arguments),P(u(e),"callPlayer",g.callPlayer),P(u(e),"mute",(function(){e.setVolume(0)})),P(u(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),P(u(e),"ref",(function(t){e.container=t})),e}return l(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,a=n.playing,o=n.config,l=n.onError,u=n.onDuration,i=e&&e.match(V.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,g.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((function(e){t.container&&(e.api.addReadyListener((function(e,n){t.player||(t.player=n,t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seek",t.props.onSeek),t.player.on("playerComplete",t.props.onEnded))}),i),e.api.renderPlayer(r({uuid:i,container:t.container,autoplay:a?1:0},o.options)),e.api.getPlayerMetadata(i).then((function(e){t.duration=e.length_in_seconds,u(e.length_in_seconds)})))}),l)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackSpeed",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return b.default.createElement("div",{style:e},b.default.createElement("div",{ref:this.ref}))}}]),n}(b.Component);P(O,"displayName","Vidyard"),P(O,"canPlay",V.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.0c87b52b.chunk.js.map