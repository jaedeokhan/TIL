(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{518:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"pass-data-through-redirection-in-django"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pass-data-through-redirection-in-django"}},[e._v("#")]),e._v(" Pass data through redirection in Django")]),e._v(" "),r("h2",{attrs:{id:"상황"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#상황"}},[e._v("#")]),e._v(" 상황")]),e._v(" "),r("p",[e._v("페이스북 로그인을 하고, "),r("code",[e._v("페이스북 연결 해제")]),e._v("버튼을 눌렀을 때 비밀번호가 설정이 되어있지 않다면 "),r("code",[e._v("비밀번호 설정 페이지")]),e._v("로 리다이렉트 시키고 싶다.\n이로 인해서 들어온 "),r("code",[e._v("비밀번호 설정 페이지")]),e._v('에서는 그냥 들어왔을 때와는 다르게 "페이스북 연결을 해제하려면 비밀번호를 설정해주셔야 합니다"라는 안내멘트를 보여주고 싶은데, 이를 위해 리다이렉트 시켰을 때 데이터를 넘기고 싶다.')]),e._v(" "),r("h2",{attrs:{id:"첫-시도"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#첫-시도"}},[e._v("#")]),e._v(" 첫 시도")]),e._v(" "),r("p",[e._v("Django docs에서 "),r("a",{attrs:{href:"https://docs.djangoproject.com/en/1.9/topics/http/shortcuts/#examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("redirect"),r("OutboundLink")],1),e._v("섹션을 보고,")]),e._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("my_view")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("request"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" redirect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'some-view-name'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" foo"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'bar'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),r("p",[e._v("이렇게 뒤에 foo='bar'로 넘기면 되겠다 생각했다. "),r("em",[e._v("(허접이 스키밍을 했을때의 폐해)")]),e._v(" "),r("em",[e._v("(여기서 뒤에 붙는 인자는 kwargs이다.)")]),e._v("\n하지만 인자는 넘어가지 않았고, 'django pass data with redirect' 키워드로 구글링을 해보았다.\n"),r("a",{attrs:{href:"http://stackoverflow.com/questions/9488874/django-redirect-with-parameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("스택오버플로우"),r("OutboundLink")],1),e._v("링크의 답변을 보았는데,")]),e._v(" "),r("blockquote",[r("p",[e._v("redirect is merely a wrapper around HttpResponseRedirect that automatically calls reverse for you to create the URL to redirect to. As a result, the parameters you pass to it, aren't arbitrary, they must be same you would pass to reverse and, specifically, only those required to create the URL.")]),e._v(" "),r("p",[e._v('Many people seem to have troubles understanding that data can\'t just be arbitrarily passed to a view. HTTP is a stateless protocol: each request exists on it\'s own, as if user had never been to any other page of the site. The concept of a session was created to provide a sense of "state" to a cohesive unit such as a site. With sessions, data is stored in some form of persistent storage and a "key" to look up that data is given to the client (typically the user\'s browser). On the next page load, the client sends the key back to the server, and the server uses it to look up the data to give the appearance of state.')]),e._v(" "),r("p",[e._v("As a result, if you need data from one view available in another, you need to add it to the session, do your redirect, and look up the data in the session from the next view.")])]),e._v(" "),r("p",[e._v("내가 찾던 답변같은데 이해하기 쉽지 않았다.\n대략 HTTP의 stateless한 특성으로 reverse로는 데이터를 넘길 수 없어, 다른 방안을 찾으라는 것 같아 또 이것 저것 읽어본 결과,")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("Session")]),e._v("을 사용하여 넘기기")]),e._v(" "),r("li",[r("code",[e._v("GET")]),e._v("으로 뒤에 Parameter달아 넘기기")]),e._v(" "),r("li",[e._v("django "),r("code",[e._v("messages")]),e._v(" 사용하기")])]),e._v(" "),r("p",[e._v("정도의 방법이 있는데, 지금 상황에서 어떤 방법을 써야 좀 더 세련될지 조언을 구하고자 P모님께 질문을 하였다. 결론은 역시 나의 "),r("code",[e._v("HTTP")]),e._v("에 대한 이해부족에서 나온 삽질이었다는 것이다.")]),e._v(" "),r("h2",{attrs:{id:"http의-stateless성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http의-stateless성"}},[e._v("#")]),e._v(" HTTP의 Stateless성")]),e._v(" "),r("blockquote",[r("p",[e._v("P모님: HTTP는 왜 상태가 없죠?\n나: (???)")])]),e._v(" "),r("p",[e._v("한 초밥집이 있다. 이 초밥집은")]),e._v(" "),r("ol",[r("li",[e._v("손님이 30분간 밥을 먹을동안 주방장이 계속 붙어서 손님에게 초밥을 내어줌")]),e._v(" "),r("li",[e._v("테이크아웃\n두가지 방식으로 운영될 수 있다.\n1은 서로가 서로의 상태를 바로바로 알 수 있지만 한 손님이 먹는동안 주방장이 다른 손님을 응대하지 못한다는 단점이 있다.\n2는 서로의 상태를 유지하고 있지 않지만, 한 주방장이 여러 손님을 순차적으로 응대할 수 있다는 장점이 있다.")])]),e._v(" "),r("p",[e._v("보통 채팅이나 게임같은 실시간성 서비스가 1의 형태, 웹은 2의 형태를 취한다.")]),e._v(" "),r("p",[e._v("만약 2 방식에서 주방장이 손님의 단골메뉴를 기억해야 한다 해보자.\n주방장이 손님별로 단골메뉴를 적어두거나, 손님이 각자 "),r("code",[e._v("단골메뉴 쿠폰")]),e._v("을 들고있다가 주방장에게 주어 기억하는 방법이 있을것이다. "),r("code",[e._v("session")]),e._v("을 사용하는것이 여기에 속한다. 이 방식의 특징은 서버의 디비와 사용자의 브라우저에 데이터를 저장한다는 것이다. 굳이 세션에 저장할 필요 없는 데이터를 저장하면 불필요하게 디비를 한 번 더 다녀오는 비용이 들게 된다. 그리고 django의 "),r("code",[e._v("messages")]),e._v("도 세션을 사용해서 구현한 것이니 위의 3가지 방법 중 1은 3을 포함하게 된다.\n그리고 2번, "),r("code",[e._v("GET")]),e._v("으로 뒤에 파라미터를 달아 넘기는 것은, 아예 처음부터 다른 주소로 들어가는 것이다. 지금 상황처럼 이 url자체로 사람들이 많이 들어올 걱정을 안 해도 된다면 충분히 "),r("code",[e._v("GET")]),e._v("으로 데이터를 넘겨도 되겠다.")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://hoonihoon.tistory.com/entry/%EC%BF%A0%ED%82%A4Cookie-%EC%99%80-%EC%84%B8%EC%85%98Session-%EA%B0%9C%EB%85%90",target:"_blank",rel:"noopener noreferrer"}},[e._v("참고 - 쿠키와 세션 개념"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"render-redirect-reverse의-차이"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render-redirect-reverse의-차이"}},[e._v("#")]),e._v(" render, redirect, reverse의 차이")]),e._v(" "),r("p",[e._v("그렇다면 왜 redirect에서 데이터를 인자로 넘기는게 안되는 것일까? 이는 HTTP의 response때문이다.\nHTTP의 "),r("code",[e._v("request")]),e._v("엔 "),r("code",[e._v("POST")]),e._v("혹은 "),r("code",[e._v("GET")]),e._v("등으로 데이터를 뭍혀서 보낸다.\n그리고 온 "),r("code",[e._v("response")]),e._v("엔 200, 404 등 많은 종류가 있다. 여기서 200 ok같은 경우는 헤더영역에 200 등이 써있고, 그 밑에 html문서가 오던지, 혹은 요청한 데이터들이 좌라락 오던지 한다. 하지만 300번대인 "),r("code",[e._v("redirect")]),e._v("는, 밑에 redirect될 주소만 띡 하고 온다. 데이터를 뭍힐 곳이 없는것이다. ("),r("a",{attrs:{href:"https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C",target:"_blank",rel:"noopener noreferrer"}},[e._v("참고: HTTP 상태 코드"),r("OutboundLink")],1),e._v(")\n(참고: 301은 permanent한 이동, 302는 임시 이동)")]),e._v(" "),r("p",[e._v("그리고 redirect, reverse의 관계는 아래와 같다.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("redirect(‘welcome’)")]),e._v(" : 원래 "),r("code",[e._v("redirect('/some/url/')")]),e._v("처럼 url을 주소로 써주는데, url name을 쓰면 redirect 내부에서 자동으로 reverse를 호출하여 이름을 매칭해서 보내준다.")]),e._v(" "),r("li",[r("strong",[e._v("reverse(‘welcome’)")]),e._v(": url name welcome을 찾아서 보내준다.")]),e._v(" "),r("li",[r("strong",[e._v("redirect(reverse(‘welcome’))")]),e._v(": 즉 이렇게 안쓰고 그냥 "),r("code",[e._v("redirect")]),e._v("만 써도 된다.")])]),e._v(" "),r("p",[r("code",[e._v("render")]),e._v("는 템플릿과 컨텍스트를 합쳐서 "),r("code",[e._v("HttpResponse")]),e._v(" 오브젝트를 리턴한다. 여기서 "),r("code",[e._v("합친다")]),e._v("는 말은, 예를 들어 컨텍스트에서 "),r("code",[e._v('{"foo": "bar"}')]),e._v("를 넘겼다고 하면, html template에서 "),r("code",[e._v(e._s(e.foo))]),e._v("를 찾아서 "),r("code",[e._v("bar")]),e._v("로 치환해 섞어서 "),r("code",[e._v("HttpResponse")]),e._v("로 리턴해준다는 말이다.")]),e._v(" "),r("p",[e._v("그래서 "),r("code",[e._v("HttpResponseRedirect")]),e._v("를 리턴하는 "),r("code",[e._v("redirect()")]),e._v("는 합칠 컨텍스트를 못 받는 것이다.")]),e._v(" "),r("h2",{attrs:{id:"결론"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[e._v("#")]),e._v(" 결론")]),e._v(" "),r("p",[e._v("HTTP 부들부들")])])}),[],!1,null,null,null);t.default=a.exports}}]);