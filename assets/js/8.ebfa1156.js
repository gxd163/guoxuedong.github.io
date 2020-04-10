(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{251:function(a,e,s){"use strict";s.r(e);var t=s(28),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"前端测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端测试"}},[a._v("#")]),a._v(" 前端测试")]),a._v(" "),s("h2",{attrs:{id:"为什么我们自己要做测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们自己要做测试"}},[a._v("#")]),a._v(" 为什么我们自己要做测试")]),a._v(" "),s("ol",[s("li",[a._v("正确性：验证代码正确性")]),a._v(" "),s("li",[a._v("自动化：console，debugger调试测试复用性差。通过编写测试用例脚本，可以做到一次编写，多处运行，多次测试。")]),a._v(" "),s("li",[a._v("驱动开发，指导设计：写测试用例的前提是代码的可测试性，为了保证代码的可测试性，就要尽量做到抽象。")]),a._v(" "),s("li",[a._v("保证重构：业务迭代会带来版本迭代，版本迭代必然会带来重构，之前的测试用例可以保证重构后的代码依然正确。")]),a._v(" "),s("li",[a._v("解释性：可以起到文档的作用，通过查看单元测试、接口测试用例，可以知道函数，组件，接口的使用方式。")]),a._v(" "),s("li",[a._v("开源库：做开源库必须要做单元测试。")])]),a._v(" "),s("h2",{attrs:{id:"单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[a._v("#")]),a._v(" 单元测试")]),a._v(" "),s("ul",[s("li",[a._v("目的：单元测试可以让我们明确知道代码运行结果")]),a._v(" "),s("li",[a._v("原则：单一职责，接口抽象，层次分离")]),a._v(" "),s("li",[a._v("断言库：保证最小单元是否正常运行的检测方法")]),a._v(" "),s("li",[a._v("测试风格：\n"),s("ol",[s("li",[a._v("TDD：测试驱动开发（Test-Driven Development）测试驱动开发是敏捷开发中的一项核心实践和技术，也是一种设计方法论，TDD首先考虑使用需求（对象、功能、过程、接口等）。主要是编写测试用例框架对功能的过程和接口进行设计，而测试框架可以持续进行验证。")]),a._v(" "),s("li",[a._v("BDD：行为驱动开发（Behavior Driven Development）它是一种敏捷软件开发的技术。它对TDD的理念进行了扩展，在TDD中侧重点偏向开发，通过测试用例来规范约束开发者编写出质量更高、bug更少的代码。而BDD更加侧重设计，其要求在设计测试用例的时候对系统进行定义，倡导使用通用的语言将系统的行为描述出来，将系统设计和测试用例结合起来，从而以此为驱动进行开发工作")]),a._v(" "),s("li",[a._v("ATDD：验收测试驱动开发（Acceptance Test Driven Development）通过单元测试用例来驱动功能代码的实现，团队需要定义出期望的质量标准和验收细则，以明确而且达成共识的验收测试计划（包含一系列测试场景）来驱动开发人员的TDD实践和测试人员的测试脚本开发。面向开发人员，强调如何实现系统以及如何检验")]),a._v(" "),s("li",[a._v("DDD：领域驱动开发（Domain Drive Design）着重于业务的实现,将分析和设计结合起来，不再使他们处于分裂的状态，这对于我们正确完整的实现客户的需求，以及建立一个具有业务伸缩性的模型")])])]),a._v(" "),s("li",[a._v("测试框架：Jest、Karma")]),a._v(" "),s("li",[a._v("断言库：Jasmine、Mocha、QUnit、chai")]),a._v(" "),s("li",[a._v("钩子函数：beforeAll、beforeEach、afterEach、afterAll")]),a._v(" "),s("li",[a._v("运行流程：beforeAll -> beforeEach -> it -> afterEach -> beforeEach -> it -> afterEach -> afterAll")])]),a._v(" "),s("h3",{attrs:{id:"karma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#karma"}},[a._v("#")]),a._v(" karma")]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 安装karma\n$ npm install karma --save-dev\n\n// 全局安装karma-cli\n$ npm install karma-cli -g\n\n// 通过karma init命令，简单的回答一些问题来生成配置文件,全部默认就好\n$ karma init\n\n// 配置文件karma.conf.js中files属性是要执行测试的文件列表或者正则表达式\n// 修改files属性为(改为自己的测试文件就好)： files: ['tests/**/*.spec.js'],\n\n// 如果没有全局安装karma-cli,使用下面命令\n$ ./node_modules/.bin/karma init\n\n// 安装断言库和浏览器启动器,断言库和启动器有很多，这里以默认配置文件来安装 \n$ npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev\n\n")])])]),s("p",[a._v("添加公共函数文件 src/utis/math.js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export const sum = (num1, num2) => {\n  return num1 + num2;\n};\n")])])]),s("p",[a._v("添加测试文件 tests/unit/math.spec.js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("import { sum } from '../../../src/utils/math';\n\ndescribe('测试math.js', function() {\n  it('测试sum函数：', function() {\n    expect(sum(1, 2)).toBe(3);\n    expect(sum('1', '2')).toBe(3);\n  });\n});\n")])])]),s("p",[a._v("执行测试命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("karma start\n")])])]),s("p",[a._v("有报错，发现是不支持es6，继续安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 安装karma-webpack\n$ npm install karma-webpack --save-dev\n\n// 安装karma-sourcemap-loader，获取依赖映射\n$ npm install karma-sourcemap-loader --save-dev\n\n// 修改配置文件karma.conf.js中的属性\npreprocessors: {\n    'tests/**/*.spec.js': ['webpack', 'sourcemap']\n},\nwebpack: webpackConfig, // webpackConfig是webapck的配置文件\nwebpackMiddleware: {\n    stats: 'errors-only'\n},\n")])])]),s("p",[a._v("执行测试命令 karma start")]),a._v(" "),s("p",[a._v("执行测试成功，总共2个，成功1个，失败一个（如果执行测试失败，检查webpack配置是否正确）")]),a._v(" "),s("p",[a._v("接下来安装karma-corvage来检查测试覆盖率")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 安装karma-coverage\n$ npm install karma-coverage --save-dev\n\n\n// 修改配置文件karma.conf.js中的属性\nreporters: ['progress', 'coverage'],\npreprocessors: {\n    'tests/**/*.spec.js': ['webpack', 'sourcemap', 'coverage' ]\n},\ncoverageReporter: {\n    dir : 'coverage/',\n    reporters: [\n        { type: 'lcov', subdir: '.' },\n        { type: 'text-summary' }\n    ]\n}\n")])])]),s("p",[a._v("执行 karma start，生成了测试报告的html文件，但发现babel编译后的覆盖率报告，继续安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 安装 babel-plugin-istanbul，并且在babel配置中的plugins添加istanbul\n$ npm istall babel-plugin-istanbul --save-dev\n\n// 修改配置文件karma.conf.js中的属性\npreprocessors: {\n    'tests/**/*.spec.js': ['webpack', 'sourcemap' ]\n},\n")])])]),s("p",[a._v("添加 karma-spec-reporter来使终端测试报告更漂亮")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 安装 karma-spec-reporter\n$ npm install karma-spec-reporter --save-dev\n\n// 修改配置文件karma.conf.js中的属性\nreporters: ['spec', 'coverage']\n")])])]),s("p",[a._v("到这里，karma做单元测试的基础配置就完成了")]),a._v(" "),s("h2",{attrs:{id:"性能测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("压力测试")]),a._v(" "),s("blockquote",[s("p",[a._v("对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力。")])]),a._v(" "),s("p",[a._v("常见概念：PV UV QPS")]),a._v(" "),s("p",[a._v("测试工具：wrk")])]),a._v(" "),s("li",[s("p",[a._v("负载测试")]),a._v(" "),s("blockquote",[s("p",[a._v("负载测试是模拟实际软件系统所承受的负载条件的系统负荷，通过不断加载（如逐渐增加模拟用户的数量）或其它加载方式来观察不同负载下系统的响应时间和数据吞吐量、系统占用的资源（如CPU、内存）等，以检验系统的行为和特性，以发现系统可能存在的性能瓶颈、内存泄漏、不能实时同步等问题。负载测试更多地体现了一种方法或一种技术。")])])]),a._v(" "),s("li",[s("p",[a._v("基准测试")]),a._v(" "),s("blockquote",[s("p",[a._v("Benchmark基准测试方法，它并不是简单地统计 执行多少次测试代码后对比时间，它对测试有着 严密的抽样过程。执行多少次取决于采样到的数 据能否完成统计。根据统计次数计算方差。")])]),a._v(" "),s("p",[a._v("测试工具：benchmark.js")])])]),a._v(" "),s("h2",{attrs:{id:"功能测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能测试"}},[a._v("#")]),a._v(" 功能测试")]),a._v(" "),s("ul",[s("li",[a._v("冒烟测试 SmokeTest 自由测试的一种，找到一个BUG，然后专门针对此BUG开发修复。优点节省时间， 缺点是覆盖率极低。")]),a._v(" "),s("li",[a._v("回归测试 修改一处对整体功能全部测试，一般配合自动化测试")])]),a._v(" "),s("p",[a._v("测试工具：nightWatch.js、UIRecoder、rize.js + puppeteer")])])}),[],!1,null,null,null);e.default=r.exports}}]);