xtag.extensions.src={mixin:e=>class extends e{set"src::attr"(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onload=(()=>xtag.fireEvent(this,"load",{detail:t.response})),t.onerror=(()=>xtag.fireEvent(this,"error",{detail:t.response})),t.send(null)}}};