(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{253:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变量声明总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量声明总结"}},[t._v("#")]),t._v(" 变量声明总结")]),t._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("ul",[a("li",[t._v("var 语句声明一个变量，并可选地将其初始化为一个值。")]),t._v(" "),a("li",[t._v("let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值，不可重新声明。")]),t._v(" "),a("li",[t._v("const 语句声明一个块级作用域的本地变量，并且初始化的值是必要的，并且不能重新声明。常量的值不能通过重新赋值来改变。")])]),t._v(" "),a("h2",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("h3",{attrs:{id:"浏览器解释代码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解释代码流程"}},[t._v("#")]),t._v(" 浏览器解释代码流程")]),t._v(" "),a("p",[t._v("浏览器在解释代码的时候，分为2个阶段。第一个阶段为编译阶段，第二个为执行阶段。编译阶段，浏览器会生成两部分内容：执行上下文（Execution context）和可执行代码。执行上下文以栈的形式存储在栈空间。执行代码时候，首先将全局上下文压入栈。遇到函数的时候，再进行编译和执行2个阶段，编译阶段生成函数执行上下文和该函数可执行代码，执行阶段将压入函数上下文栈，也就是函数调用栈。等函数执行完后，将该函数执行上下文从调用栈弹出。全局执行上下文始终在栈顶，关闭页面的时候将全局执行上下文弹出。")]),t._v(" "),a("h3",{attrs:{id:"执行上下文分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文分类"}},[t._v("#")]),t._v(" 执行上下文分类")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文")]),t._v(" "),a("li",[t._v("函数执行上下文")]),t._v(" "),a("li",[t._v("eval执行上下文")])]),t._v(" "),a("h3",{attrs:{id:"执行上下文中的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文中的内容"}},[t._v("#")]),t._v(" 执行上下文中的内容")]),t._v(" "),a("ul",[a("li",[t._v("变量环境\n"),a("ul",[a("li",[t._v("存放var声明的变量，并初始化为undefinded。")]),t._v(" "),a("li",[t._v("存放function 声明的变量，并初始化为函数本身引用")])])]),t._v(" "),a("li",[t._v("词法环境\n"),a("ul",[a("li",[t._v("存放let, const, class声明的变量")])])]),t._v(" "),a("li",[t._v("this，this的绑定是在编译阶段就决定的")]),t._v(" "),a("li",[t._v("outer，指向父级执行上下文的引用。浏览器也是通过该属性实现作用域链的机制。")])]),t._v(" "),a("h2",{attrs:{id:"变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[t._v("#")]),t._v(" 变量提升")]),t._v(" "),a("p",[t._v("var, let, const 在声明变量的时候，都会有变量提升。浏览器在编译阶段初始化变量的行为，就是变量提升。")]),t._v(" "),a("h2",{attrs:{id:"块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),a("p",[t._v("es6以前，作用域分为2种，全局作用域和函数作用域。es6新增了块级作用域。")]),t._v(" "),a("h3",{attrs:{id:"浏览器是如何实现块级作用域的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是如何实现块级作用域的"}},[t._v("#")]),t._v(" 浏览器是如何实现块级作用域的")]),t._v(" "),a("p",[t._v("let,const,class声明的变量会存入执行上下文的词法环境。词法环境内部也维护一个栈结构，每遇到一个块结构，就会将该块内的变量或者常量作为一个块，压如词法环境栈，等该块级代码执行完后，把该块从栈中弹出。")]),t._v(" "),a("h3",{attrs:{id:"如何查找一个变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何查找一个变量"}},[t._v("#")]),t._v(" 如何查找一个变量")]),t._v(" "),a("p",[t._v("浏览器在查找一个变量的时候，首先会在当前执行上下文中的词法环境中查找，没找到再从变量环境中查找。还没有找到就通过执行上下文的outer属性找到父级执行上下文，一直找到全局执行上下文。")]),t._v(" "),a("h2",{attrs:{id:"暂存死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存死区"}},[t._v("#")]),t._v(" 暂存死区")]),t._v(" "),a("p",[t._v("通过let, const, class 声明的变量或者常量，在编译阶段的时候，只声明，不初始化，直到代码执行到该声明的代码片段时候，才初始化。所以从代码块顶部到初始化这段区间，都是暂存死区。在暂存死区或者变量或者常量的时候，浏览器都会抛出错误。、")]),t._v(" "),a("h2",{attrs:{id:"重复声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复声明"}},[t._v("#")]),t._v(" 重复声明")]),t._v(" "),a("p",[t._v("在同一个块级作用域内，let,const,class不允许声明相同变量名的变量")]),t._v(" "),a("h2",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("ul",[a("li",[t._v("typeof 可以判断一个变量是否被声明，但如果一个是let，const，class声明，也会抛出暂存死区的错误")]),t._v(" "),a("li",[t._v("switch case语句中，如果在不同的case中用let声明相同变量，会抛出重复声明的错误，通过case:{}增加块级作用域来解决。")]),t._v(" "),a("li",[t._v("可以通过块级作用域来模仿私有成员，而不是闭包的形式")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" privateScope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someProperty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          privateScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            hidden"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("showPublic")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("showPrivate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" privateScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" privateScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" thing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Thing {someProperty: "foo"}')]),t._v("\n\n      thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showPublic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "foo"')]),t._v("\n\n      thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showPrivate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);