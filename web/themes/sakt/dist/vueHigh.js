/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_TRANSITION: () => (/* binding */ BASE_TRANSITION),
/* harmony export */   CAMELIZE: () => (/* binding */ CAMELIZE),
/* harmony export */   CAPITALIZE: () => (/* binding */ CAPITALIZE),
/* harmony export */   CREATE_BLOCK: () => (/* binding */ CREATE_BLOCK),
/* harmony export */   CREATE_COMMENT: () => (/* binding */ CREATE_COMMENT),
/* harmony export */   CREATE_ELEMENT_BLOCK: () => (/* binding */ CREATE_ELEMENT_BLOCK),
/* harmony export */   CREATE_ELEMENT_VNODE: () => (/* binding */ CREATE_ELEMENT_VNODE),
/* harmony export */   CREATE_SLOTS: () => (/* binding */ CREATE_SLOTS),
/* harmony export */   CREATE_STATIC: () => (/* binding */ CREATE_STATIC),
/* harmony export */   CREATE_TEXT: () => (/* binding */ CREATE_TEXT),
/* harmony export */   CREATE_VNODE: () => (/* binding */ CREATE_VNODE),
/* harmony export */   FRAGMENT: () => (/* binding */ FRAGMENT),
/* harmony export */   GUARD_REACTIVE_PROPS: () => (/* binding */ GUARD_REACTIVE_PROPS),
/* harmony export */   IS_MEMO_SAME: () => (/* binding */ IS_MEMO_SAME),
/* harmony export */   IS_REF: () => (/* binding */ IS_REF),
/* harmony export */   KEEP_ALIVE: () => (/* binding */ KEEP_ALIVE),
/* harmony export */   MERGE_PROPS: () => (/* binding */ MERGE_PROPS),
/* harmony export */   NORMALIZE_CLASS: () => (/* binding */ NORMALIZE_CLASS),
/* harmony export */   NORMALIZE_PROPS: () => (/* binding */ NORMALIZE_PROPS),
/* harmony export */   NORMALIZE_STYLE: () => (/* binding */ NORMALIZE_STYLE),
/* harmony export */   OPEN_BLOCK: () => (/* binding */ OPEN_BLOCK),
/* harmony export */   POP_SCOPE_ID: () => (/* binding */ POP_SCOPE_ID),
/* harmony export */   PUSH_SCOPE_ID: () => (/* binding */ PUSH_SCOPE_ID),
/* harmony export */   RENDER_LIST: () => (/* binding */ RENDER_LIST),
/* harmony export */   RENDER_SLOT: () => (/* binding */ RENDER_SLOT),
/* harmony export */   RESOLVE_COMPONENT: () => (/* binding */ RESOLVE_COMPONENT),
/* harmony export */   RESOLVE_DIRECTIVE: () => (/* binding */ RESOLVE_DIRECTIVE),
/* harmony export */   RESOLVE_DYNAMIC_COMPONENT: () => (/* binding */ RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   RESOLVE_FILTER: () => (/* binding */ RESOLVE_FILTER),
/* harmony export */   SET_BLOCK_TRACKING: () => (/* binding */ SET_BLOCK_TRACKING),
/* harmony export */   SUSPENSE: () => (/* binding */ SUSPENSE),
/* harmony export */   TELEPORT: () => (/* binding */ TELEPORT),
/* harmony export */   TO_DISPLAY_STRING: () => (/* binding */ TO_DISPLAY_STRING),
/* harmony export */   TO_HANDLERS: () => (/* binding */ TO_HANDLERS),
/* harmony export */   TO_HANDLER_KEY: () => (/* binding */ TO_HANDLER_KEY),
/* harmony export */   TS_NODE_TYPES: () => (/* binding */ TS_NODE_TYPES),
/* harmony export */   UNREF: () => (/* binding */ UNREF),
/* harmony export */   WITH_CTX: () => (/* binding */ WITH_CTX),
/* harmony export */   WITH_DIRECTIVES: () => (/* binding */ WITH_DIRECTIVES),
/* harmony export */   WITH_MEMO: () => (/* binding */ WITH_MEMO),
/* harmony export */   advancePositionWithClone: () => (/* binding */ advancePositionWithClone),
/* harmony export */   advancePositionWithMutation: () => (/* binding */ advancePositionWithMutation),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   baseCompile: () => (/* binding */ baseCompile),
/* harmony export */   baseParse: () => (/* binding */ baseParse),
/* harmony export */   buildDirectiveArgs: () => (/* binding */ buildDirectiveArgs),
/* harmony export */   buildProps: () => (/* binding */ buildProps),
/* harmony export */   buildSlots: () => (/* binding */ buildSlots),
/* harmony export */   checkCompatEnabled: () => (/* binding */ checkCompatEnabled),
/* harmony export */   convertToBlock: () => (/* binding */ convertToBlock),
/* harmony export */   createArrayExpression: () => (/* binding */ createArrayExpression),
/* harmony export */   createAssignmentExpression: () => (/* binding */ createAssignmentExpression),
/* harmony export */   createBlockStatement: () => (/* binding */ createBlockStatement),
/* harmony export */   createCacheExpression: () => (/* binding */ createCacheExpression),
/* harmony export */   createCallExpression: () => (/* binding */ createCallExpression),
/* harmony export */   createCompilerError: () => (/* binding */ createCompilerError),
/* harmony export */   createCompoundExpression: () => (/* binding */ createCompoundExpression),
/* harmony export */   createConditionalExpression: () => (/* binding */ createConditionalExpression),
/* harmony export */   createForLoopParams: () => (/* binding */ createForLoopParams),
/* harmony export */   createFunctionExpression: () => (/* binding */ createFunctionExpression),
/* harmony export */   createIfStatement: () => (/* binding */ createIfStatement),
/* harmony export */   createInterpolation: () => (/* binding */ createInterpolation),
/* harmony export */   createObjectExpression: () => (/* binding */ createObjectExpression),
/* harmony export */   createObjectProperty: () => (/* binding */ createObjectProperty),
/* harmony export */   createReturnStatement: () => (/* binding */ createReturnStatement),
/* harmony export */   createRoot: () => (/* binding */ createRoot),
/* harmony export */   createSequenceExpression: () => (/* binding */ createSequenceExpression),
/* harmony export */   createSimpleExpression: () => (/* binding */ createSimpleExpression),
/* harmony export */   createStructuralDirectiveTransform: () => (/* binding */ createStructuralDirectiveTransform),
/* harmony export */   createTemplateLiteral: () => (/* binding */ createTemplateLiteral),
/* harmony export */   createTransformContext: () => (/* binding */ createTransformContext),
/* harmony export */   createVNodeCall: () => (/* binding */ createVNodeCall),
/* harmony export */   extractIdentifiers: () => (/* binding */ extractIdentifiers),
/* harmony export */   findDir: () => (/* binding */ findDir),
/* harmony export */   findProp: () => (/* binding */ findProp),
/* harmony export */   generate: () => (/* binding */ generate),
/* harmony export */   generateCodeFrame: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   getBaseTransformPreset: () => (/* binding */ getBaseTransformPreset),
/* harmony export */   getConstantType: () => (/* binding */ getConstantType),
/* harmony export */   getInnerRange: () => (/* binding */ getInnerRange),
/* harmony export */   getMemoedVNodeCall: () => (/* binding */ getMemoedVNodeCall),
/* harmony export */   getVNodeBlockHelper: () => (/* binding */ getVNodeBlockHelper),
/* harmony export */   getVNodeHelper: () => (/* binding */ getVNodeHelper),
/* harmony export */   hasDynamicKeyVBind: () => (/* binding */ hasDynamicKeyVBind),
/* harmony export */   hasScopeRef: () => (/* binding */ hasScopeRef),
/* harmony export */   helperNameMap: () => (/* binding */ helperNameMap),
/* harmony export */   injectProp: () => (/* binding */ injectProp),
/* harmony export */   isBuiltInType: () => (/* binding */ isBuiltInType),
/* harmony export */   isCoreComponent: () => (/* binding */ isCoreComponent),
/* harmony export */   isFunctionType: () => (/* binding */ isFunctionType),
/* harmony export */   isInDestructureAssignment: () => (/* binding */ isInDestructureAssignment),
/* harmony export */   isMemberExpression: () => (/* binding */ isMemberExpression),
/* harmony export */   isMemberExpressionBrowser: () => (/* binding */ isMemberExpressionBrowser),
/* harmony export */   isMemberExpressionNode: () => (/* binding */ isMemberExpressionNode),
/* harmony export */   isReferencedIdentifier: () => (/* binding */ isReferencedIdentifier),
/* harmony export */   isSimpleIdentifier: () => (/* binding */ isSimpleIdentifier),
/* harmony export */   isSlotOutlet: () => (/* binding */ isSlotOutlet),
/* harmony export */   isStaticArgOf: () => (/* binding */ isStaticArgOf),
/* harmony export */   isStaticExp: () => (/* binding */ isStaticExp),
/* harmony export */   isStaticProperty: () => (/* binding */ isStaticProperty),
/* harmony export */   isStaticPropertyKey: () => (/* binding */ isStaticPropertyKey),
/* harmony export */   isTemplateNode: () => (/* binding */ isTemplateNode),
/* harmony export */   isText: () => (/* binding */ isText$1),
/* harmony export */   isVSlot: () => (/* binding */ isVSlot),
/* harmony export */   locStub: () => (/* binding */ locStub),
/* harmony export */   noopDirectiveTransform: () => (/* binding */ noopDirectiveTransform),
/* harmony export */   processExpression: () => (/* binding */ processExpression),
/* harmony export */   processFor: () => (/* binding */ processFor),
/* harmony export */   processIf: () => (/* binding */ processIf),
/* harmony export */   processSlotOutlet: () => (/* binding */ processSlotOutlet),
/* harmony export */   registerRuntimeHelpers: () => (/* binding */ registerRuntimeHelpers),
/* harmony export */   resolveComponentType: () => (/* binding */ resolveComponentType),
/* harmony export */   stringifyExpression: () => (/* binding */ stringifyExpression),
/* harmony export */   toValidAssetId: () => (/* binding */ toValidAssetId),
/* harmony export */   trackSlotScopes: () => (/* binding */ trackSlotScopes),
/* harmony export */   trackVForSlotScopes: () => (/* binding */ trackVForSlotScopes),
/* harmony export */   transform: () => (/* binding */ transform),
/* harmony export */   transformBind: () => (/* binding */ transformBind),
/* harmony export */   transformElement: () => (/* binding */ transformElement),
/* harmony export */   transformExpression: () => (/* binding */ transformExpression),
/* harmony export */   transformModel: () => (/* binding */ transformModel),
/* harmony export */   transformOn: () => (/* binding */ transformOn),
/* harmony export */   traverseNode: () => (/* binding */ traverseNode),
/* harmony export */   walkBlockDeclarations: () => (/* binding */ walkBlockDeclarations),
/* harmony export */   walkFunctionParams: () => (/* binding */ walkFunctionParams),
/* harmony export */   walkIdentifiers: () => (/* binding */ walkIdentifiers),
/* harmony export */   warnDeprecation: () => (/* binding */ warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");



function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
   true && console.warn(`[Vue warn] ${msg.message}`);
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg =  true ? (messages || errorMessages)[code] + (additionalMessage || ``) : 0;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
const errorMessages = {
  // parse errors
  [0]: "Illegal comment.",
  [1]: "CDATA section is allowed only in XML context.",
  [2]: "Duplicate attribute.",
  [3]: "End tag cannot have attributes.",
  [4]: "Illegal '/' in tags.",
  [5]: "Unexpected EOF in tag.",
  [6]: "Unexpected EOF in CDATA section.",
  [7]: "Unexpected EOF in comment.",
  [8]: "Unexpected EOF in script.",
  [9]: "Unexpected EOF in tag.",
  [10]: "Incorrectly closed comment.",
  [11]: "Incorrectly opened comment.",
  [12]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13]: "Attribute value was expected.",
  [14]: "End tag name was expected.",
  [15]: "Whitespace was expected.",
  [16]: "Unexpected '<!--' in comment.",
  [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [19]: "Attribute name cannot start with '='.",
  [21]: "'<?' is allowed only in XML context.",
  [20]: `Unexpected null character.`,
  [22]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [23]: "Invalid end tag.",
  [24]: "Element is missing end tag.",
  [25]: "Interpolation end sign was not found.",
  [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [26]: "Legal directive name was expected.",
  // transform errors
  [28]: `v-if/v-else-if is missing expression.`,
  [29]: `v-if/else branches must use unique keys.`,
  [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
  [31]: `v-for is missing expression.`,
  [32]: `v-for has invalid expression.`,
  [33]: `<template v-for> key should be placed on the <template> tag.`,
  [34]: `v-bind is missing expression.`,
  [35]: `v-on is missing expression.`,
  [36]: `Unexpected custom directive on <slot> outlet.`,
  [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
  [38]: `Duplicate slot names found. `,
  [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
  [40]: `v-slot can only be used on components or <template> tags.`,
  [41]: `v-model is missing expression.`,
  [42]: `v-model value must be a valid JavaScript member expression.`,
  [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
  [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  [45]: `Error parsing JavaScript expression: `,
  [46]: `<KeepAlive> expects exactly one child component.`,
  // generic errors
  [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
  [48]: `ES module mode is not supported in this build of compiler.`,
  [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
  [50]: `"scopeId" option is only supported in module mode.`,
  // deprecations
  [51]: `@vnode-* hooks in templates are deprecated. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support will be removed in 3.4.`,
  [52]: `v-is="component-name" has been deprecated. Use is="vue:component-name" instead. v-is support will be removed in 3.4.`,
  // just to fulfill types
  [53]: ``
};

const FRAGMENT = Symbol( true ? `Fragment` : 0);
const TELEPORT = Symbol( true ? `Teleport` : 0);
const SUSPENSE = Symbol( true ? `Suspense` : 0);
const KEEP_ALIVE = Symbol( true ? `KeepAlive` : 0);
const BASE_TRANSITION = Symbol( true ? `BaseTransition` : 0);
const OPEN_BLOCK = Symbol( true ? `openBlock` : 0);
const CREATE_BLOCK = Symbol( true ? `createBlock` : 0);
const CREATE_ELEMENT_BLOCK = Symbol( true ? `createElementBlock` : 0);
const CREATE_VNODE = Symbol( true ? `createVNode` : 0);
const CREATE_ELEMENT_VNODE = Symbol( true ? `createElementVNode` : 0);
const CREATE_COMMENT = Symbol( true ? `createCommentVNode` : 0);
const CREATE_TEXT = Symbol( true ? `createTextVNode` : 0);
const CREATE_STATIC = Symbol( true ? `createStaticVNode` : 0);
const RESOLVE_COMPONENT = Symbol( true ? `resolveComponent` : 0);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(
   true ? `resolveDynamicComponent` : 0
);
const RESOLVE_DIRECTIVE = Symbol( true ? `resolveDirective` : 0);
const RESOLVE_FILTER = Symbol( true ? `resolveFilter` : 0);
const WITH_DIRECTIVES = Symbol( true ? `withDirectives` : 0);
const RENDER_LIST = Symbol( true ? `renderList` : 0);
const RENDER_SLOT = Symbol( true ? `renderSlot` : 0);
const CREATE_SLOTS = Symbol( true ? `createSlots` : 0);
const TO_DISPLAY_STRING = Symbol( true ? `toDisplayString` : 0);
const MERGE_PROPS = Symbol( true ? `mergeProps` : 0);
const NORMALIZE_CLASS = Symbol( true ? `normalizeClass` : 0);
const NORMALIZE_STYLE = Symbol( true ? `normalizeStyle` : 0);
const NORMALIZE_PROPS = Symbol( true ? `normalizeProps` : 0);
const GUARD_REACTIVE_PROPS = Symbol( true ? `guardReactiveProps` : 0);
const TO_HANDLERS = Symbol( true ? `toHandlers` : 0);
const CAMELIZE = Symbol( true ? `camelize` : 0);
const CAPITALIZE = Symbol( true ? `capitalize` : 0);
const TO_HANDLER_KEY = Symbol( true ? `toHandlerKey` : 0);
const SET_BLOCK_TRACKING = Symbol( true ? `setBlockTracking` : 0);
const PUSH_SCOPE_ID = Symbol( true ? `pushScopeId` : 0);
const POP_SCOPE_ID = Symbol( true ? `popScopeId` : 0);
const WITH_CTX = Symbol( true ? `withCtx` : 0);
const UNREF = Symbol( true ? `unref` : 0);
const IS_REF = Symbol( true ? `isRef` : 0);
const WITH_MEMO = Symbol( true ? `withMemo` : 0);
const IS_MEMO_SAME = Symbol( true ? `isMemoSame` : 0);
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}

const locStub = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function createRoot(children, loc = locStub) {
  return {
    type: 0,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createInterpolation(content, loc) {
  return {
    type: 5,
    loc,
    content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index, value, isVNode = false) {
  return {
    type: 20,
    index,
    value,
    isVNode,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function createTemplateLiteral(elements) {
  return {
    type: 22,
    elements,
    loc: locStub
  };
}
function createIfStatement(test, consequent, alternate) {
  return {
    type: 23,
    test,
    consequent,
    alternate,
    loc: locStub
  };
}
function createAssignmentExpression(left, right) {
  return {
    type: 24,
    left,
    right,
    loc: locStub
  };
}
function createSequenceExpression(expressions) {
  return {
    type: 25,
    expressions,
    loc: locStub
  };
}
function createReturnStatement(returns) {
  return {
    type: 26,
    returns,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}

const isStaticExp = (p) => p.type === 4 && p.isStatic;
const isBuiltInType = (tag, expected) => tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
function isCoreComponent(tag) {
  if (isBuiltInType(tag, "Teleport")) {
    return TELEPORT;
  } else if (isBuiltInType(tag, "Suspense")) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, "KeepAlive")) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, "BaseTransition")) {
    return BASE_TRANSITION;
  }
}
const nonIdentifierRE = /^\d|[^\$\w]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const isMemberExpressionBrowser = (path) => {
  path = path.trim().replace(whitespaceRE, (s) => s.trim());
  let state = 0 /* inMemberExp */;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state) {
      case 0 /* inMemberExp */:
        if (char === "[") {
          stateStack.push(state);
          state = 1 /* inBrackets */;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state);
          state = 2 /* inParens */;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1 /* inBrackets */:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3 /* inString */;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 2 /* inParens */:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3 /* inString */;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 3 /* inString */:
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpressionNode = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP ;
const isMemberExpression = isMemberExpressionBrowser ;
function getInnerRange(loc, offset, length) {
  const source = loc.source.slice(offset, offset + length);
  const newLoc = {
    source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };
  if (length != null) {
    newLoc.end = advancePositionWithClone(
      loc.start,
      loc.source,
      offset + length
    );
  }
  return newLoc;
}
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
  return advancePositionWithMutation(
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos),
    source,
    numberOfCharacters
  );
}
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 7 && (allowEmpty || p.exp) && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (dynamicOnly)
        continue;
      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p) => p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
    p.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVSlot(p) {
  return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14) {
    const callee = props.callee;
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p) => p.key.type === 4 && p.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }
  switch (node.type) {
    case 1:
      for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 11:
      if (hasScopeRef(node.source, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 9:
      return node.branches.some((b) => hasScopeRef(b, ids));
    case 10:
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 4:
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
    case 8:
      return node.children.some((c) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids));
    case 5:
    case 12:
      return hasScopeRef(node.content, ids);
    case 2:
    case 3:
      return false;
    default:
      if (true) ;
      return false;
  }
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}

const deprecationData = {
  ["COMPILER_IS_ON_ELEMENT"]: {
    message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
    link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
  },
  ["COMPILER_V_BIND_SYNC"]: {
    message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
  },
  ["COMPILER_V_BIND_PROP"]: {
    message: `.prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate.`
  },
  ["COMPILER_V_BIND_OBJECT_ORDER"]: {
    message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
  },
  ["COMPILER_V_ON_NATIVE"]: {
    message: `.native modifier for v-on has been removed as is no longer necessary.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
  },
  ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
    message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
  },
  ["COMPILER_NATIVE_TEMPLATE"]: {
    message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
  },
  ["COMPILER_INLINE_TEMPLATE"]: {
    message: `"inline-template" has been removed in Vue 3.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
  },
  ["COMPILER_FILTER"]: {
    message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
  }
};
function getCompatValue(key, context) {
  const config = context.options ? context.options.compatConfig : context.compatConfig;
  const value = config && config[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  if ( true && enabled) {
    warnDeprecation(key, context, loc, ...args);
  }
  return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
  const val = getCompatValue(key, context);
  if (val === "suppress-warning") {
    return;
  }
  const { message, link } = deprecationData[key];
  const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
  const err = new SyntaxError(msg);
  err.code = key;
  if (loc)
    err.loc = loc;
  context.onWarn(err);
}

const decodeRE = /&(gt|lt|amp|apos|quot);/g;
const decodeMap = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
const defaultParserOptions = {
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  getTextMode: () => 0,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: !!("development" !== "production")
};
function baseParse(content, options = {}) {
  const context = createParserContext(content, options);
  const start = getCursor(context);
  return createRoot(
    parseChildren(context, 0, []),
    getSelection(context, start)
  );
}
function createParserContext(content, rawOptions) {
  const options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);
  let key;
  for (key in rawOptions) {
    options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
  }
  return {
    options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}
function parseChildren(context, mode, ancestors) {
  const parent = last(ancestors);
  const ns = parent ? parent.ns : 0;
  const nodes = [];
  while (!isEnd(context, mode, ancestors)) {
    const s = context.source;
    let node = void 0;
    if (mode === 0 || mode === 1) {
      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
        node = parseInterpolation(context, mode);
      } else if (mode === 0 && s[0] === "<") {
        if (s.length === 1) {
          emitError(context, 5, 1);
        } else if (s[1] === "!") {
          if (startsWith(s, "<!--")) {
            node = parseComment(context);
          } else if (startsWith(s, "<!DOCTYPE")) {
            node = parseBogusComment(context);
          } else if (startsWith(s, "<![CDATA[")) {
            if (ns !== 0) {
              node = parseCDATA(context, ancestors);
            } else {
              emitError(context, 1);
              node = parseBogusComment(context);
            }
          } else {
            emitError(context, 11);
            node = parseBogusComment(context);
          }
        } else if (s[1] === "/") {
          if (s.length === 2) {
            emitError(context, 5, 2);
          } else if (s[2] === ">") {
            emitError(context, 14, 2);
            advanceBy(context, 3);
            continue;
          } else if (/[a-z]/i.test(s[2])) {
            emitError(context, 23);
            parseTag(context, TagType.End, parent);
            continue;
          } else {
            emitError(
              context,
              12,
              2
            );
            node = parseBogusComment(context);
          }
        } else if (/[a-z]/i.test(s[1])) {
          node = parseElement(context, ancestors);
          if (isCompatEnabled(
            "COMPILER_NATIVE_TEMPLATE",
            context
          ) && node && node.tag === "template" && !node.props.some(
            (p) => p.type === 7 && isSpecialTemplateDirective(p.name)
          )) {
             true && warnDeprecation(
              "COMPILER_NATIVE_TEMPLATE",
              context,
              node.loc
            );
            node = node.children;
          }
        } else if (s[1] === "?") {
          emitError(
            context,
            21,
            1
          );
          node = parseBogusComment(context);
        } else {
          emitError(context, 12, 1);
        }
      }
    }
    if (!node) {
      node = parseText(context, mode);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      for (let i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  }
  let removedWhitespace = false;
  if (mode !== 2 && mode !== 1) {
    const shouldCondense = context.options.whitespace !== "preserve";
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.type === 2) {
        if (!context.inPre) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            if (!prev || !next || shouldCondense && (prev.type === 3 && next.type === 3 || prev.type === 3 && next.type === 1 || prev.type === 1 && next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content))) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else if (shouldCondense) {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        } else {
          node.content = node.content.replace(/\r\n/g, "\n");
        }
      } else if (node.type === 3 && !context.options.comments) {
        removedWhitespace = true;
        nodes[i] = null;
      }
    }
    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
      const first = nodes[0];
      if (first && first.type === 2) {
        first.content = first.content.replace(/^\r?\n/, "");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function pushNode(nodes, node) {
  if (node.type === 2) {
    const prev = last(nodes);
    if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
      prev.content += node.content;
      prev.loc.end = node.loc.end;
      prev.loc.source += node.loc.source;
      return;
    }
  }
  nodes.push(node);
}
function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  const nodes = parseChildren(context, 3, ancestors);
  if (context.source.length === 0) {
    emitError(context, 6);
  } else {
    advanceBy(context, 3);
  }
  return nodes;
}
function parseComment(context) {
  const start = getCursor(context);
  let content;
  const match = /--(\!)?>/.exec(context.source);
  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7);
  } else {
    if (match.index <= 3) {
      emitError(context, 0);
    }
    if (match[1]) {
      emitError(context, 10);
    }
    content = context.source.slice(4, match.index);
    const s = context.source.slice(0, match.index);
    let prevIndex = 1, nestedIndex = 0;
    while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);
      if (nestedIndex + 4 < s.length) {
        emitError(context, 16);
      }
      prevIndex = nestedIndex + 1;
    }
    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }
  return {
    type: 3,
    content,
    loc: getSelection(context, start)
  };
}
function parseBogusComment(context) {
  const start = getCursor(context);
  const contentStart = context.source[1] === "?" ? 1 : 2;
  let content;
  const closeIndex = context.source.indexOf(">");
  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }
  return {
    type: 3,
    content,
    loc: getSelection(context, start)
  };
}
function parseElement(context, ancestors) {
  const wasInPre = context.inPre;
  const wasInVPre = context.inVPre;
  const parent = last(ancestors);
  const element = parseTag(context, TagType.Start, parent);
  const isPreBoundary = context.inPre && !wasInPre;
  const isVPreBoundary = context.inVPre && !wasInVPre;
  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  ancestors.push(element);
  const mode = context.options.getTextMode(element, parent);
  const children = parseChildren(context, mode, ancestors);
  ancestors.pop();
  {
    const inlineTemplateProp = element.props.find(
      (p) => p.type === 6 && p.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      context,
      inlineTemplateProp.loc
    )) {
      const loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2,
        content: loc.source,
        loc
      };
    }
  }
  element.children = children;
  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, TagType.End, parent);
  } else {
    emitError(context, 24, 0, element.loc.start);
    if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
      const first = children[0];
      if (first && startsWith(first.loc.source, "<!--")) {
        emitError(context, 8);
      }
    }
  }
  element.loc = getSelection(context, element.loc.start);
  if (isPreBoundary) {
    context.inPre = false;
  }
  if (isVPreBoundary) {
    context.inVPre = false;
  }
  return element;
}
var TagType = /* @__PURE__ */ ((TagType2) => {
  TagType2[TagType2["Start"] = 0] = "Start";
  TagType2[TagType2["End"] = 1] = "End";
  return TagType2;
})(TagType || {});
const isSpecialTemplateDirective = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(
  `if,else,else-if,for,slot`
);
function parseTag(context, type, parent) {
  const start = getCursor(context);
  const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  const tag = match[1];
  const ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context);
  const cursor = getCursor(context);
  const currentSource = context.source;
  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  }
  let props = parseAttributes(context, type);
  if (type === 0 /* Start */ && !context.inVPre && props.some((p) => p.type === 7 && p.name === "pre")) {
    context.inVPre = true;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
    context.source = currentSource;
    props = parseAttributes(context, type).filter((p) => p.name !== "v-pre");
  }
  let isSelfClosing = false;
  if (context.source.length === 0) {
    emitError(context, 9);
  } else {
    isSelfClosing = startsWith(context.source, "/>");
    if (type === 1 /* End */ && isSelfClosing) {
      emitError(context, 4);
    }
    advanceBy(context, isSelfClosing ? 2 : 1);
  }
  if (type === 1 /* End */) {
    return;
  }
  if ( true && isCompatEnabled(
    "COMPILER_V_IF_V_FOR_PRECEDENCE",
    context
  )) {
    let hasIf = false;
    let hasFor = false;
    for (let i = 0; i < props.length; i++) {
      const p = props[i];
      if (p.type === 7) {
        if (p.name === "if") {
          hasIf = true;
        } else if (p.name === "for") {
          hasFor = true;
        }
      }
      if (hasIf && hasFor) {
        warnDeprecation(
          "COMPILER_V_IF_V_FOR_PRECEDENCE",
          context,
          getSelection(context, start)
        );
        break;
      }
    }
  }
  let tagType = 0;
  if (!context.inVPre) {
    if (tag === "slot") {
      tagType = 2;
    } else if (tag === "template") {
      if (props.some(
        (p) => p.type === 7 && isSpecialTemplateDirective(p.name)
      )) {
        tagType = 3;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1;
    }
  }
  return {
    type: 1,
    ns,
    tag,
    tagType,
    props,
    isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: void 0
    // to be created during transform phase
  };
}
function isComponent(tag, props, context) {
  const options = context.options;
  if (options.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (p.type === 6) {
      if (p.name === "is" && p.value) {
        if (p.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          context,
          p.loc
        )) {
          return true;
        }
      }
    } else {
      if (p.name === "is") {
        return true;
      } else if (
        // :is on plain element - only treat as component in compat mode
        p.name === "bind" && isStaticArgOf(p.arg, "is") && true && checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          context,
          p.loc
        )
      ) {
        return true;
      }
    }
  }
}
function parseAttributes(context, type) {
  const props = [];
  const attributeNames = /* @__PURE__ */ new Set();
  while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
    if (startsWith(context.source, "/")) {
      emitError(context, 22);
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }
    if (type === 1 /* End */) {
      emitError(context, 3);
    }
    const attr = parseAttribute(context, attributeNames);
    if (attr.type === 6 && attr.value && attr.name === "class") {
      attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
    }
    if (type === 0 /* Start */) {
      props.push(attr);
    }
    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15);
    }
    advanceSpaces(context);
  }
  return props;
}
function parseAttribute(context, nameSet) {
  var _a;
  const start = getCursor(context);
  const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  const name = match[0];
  if (nameSet.has(name)) {
    emitError(context, 2);
  }
  nameSet.add(name);
  if (name[0] === "=") {
    emitError(context, 19);
  }
  {
    const pattern = /["'<]/g;
    let m;
    while (m = pattern.exec(name)) {
      emitError(
        context,
        17,
        m.index
      );
    }
  }
  advanceBy(context, name.length);
  let value = void 0;
  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);
    if (!value) {
      emitError(context, 13);
    }
  }
  const loc = getSelection(context, start);
  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
    const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
      name
    );
    let isPropShorthand = startsWith(name, ".");
    let dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
    let arg;
    if (match2[2]) {
      const isSlot = dirName === "slot";
      const startOffset = name.lastIndexOf(
        match2[2],
        name.length - (((_a = match2[3]) == null ? void 0 : _a.length) || 0)
      );
      const loc2 = getSelection(
        context,
        getNewPosition(context, start, startOffset),
        getNewPosition(
          context,
          start,
          startOffset + match2[2].length + (isSlot && match2[3] || "").length
        )
      );
      let content = match2[2];
      let isStatic = true;
      if (content.startsWith("[")) {
        isStatic = false;
        if (!content.endsWith("]")) {
          emitError(
            context,
            27
          );
          content = content.slice(1);
        } else {
          content = content.slice(1, content.length - 1);
        }
      } else if (isSlot) {
        content += match2[3] || "";
      }
      arg = {
        type: 4,
        content,
        isStatic,
        constType: isStatic ? 3 : 0,
        loc: loc2
      };
    }
    if (value && value.isQuoted) {
      const valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }
    const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
    if (isPropShorthand)
      modifiers.push("prop");
    if (dirName === "bind" && arg) {
      if (modifiers.includes("sync") && checkCompatEnabled(
        "COMPILER_V_BIND_SYNC",
        context,
        loc,
        arg.loc.source
      )) {
        dirName = "model";
        modifiers.splice(modifiers.indexOf("sync"), 1);
      }
      if ( true && modifiers.includes("prop")) {
        checkCompatEnabled(
          "COMPILER_V_BIND_PROP",
          context,
          loc
        );
      }
    }
    return {
      type: 7,
      name: dirName,
      exp: value && {
        type: 4,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0,
        loc: value.loc
      },
      arg,
      modifiers,
      loc
    };
  }
  if (!context.inVPre && startsWith(name, "v-")) {
    emitError(context, 26);
  }
  return {
    type: 6,
    name,
    value: value && {
      type: 2,
      content: value.content,
      loc: value.loc
    },
    loc
  };
}
function parseAttributeValue(context) {
  const start = getCursor(context);
  let content;
  const quote = context.source[0];
  const isQuoted = quote === `"` || quote === `'`;
  if (isQuoted) {
    advanceBy(context, 1);
    const endIndex = context.source.indexOf(quote);
    if (endIndex === -1) {
      content = parseTextData(
        context,
        context.source.length,
        4
      );
    } else {
      content = parseTextData(context, endIndex, 4);
      advanceBy(context, 1);
    }
  } else {
    const match = /^[^\t\r\n\f >]+/.exec(context.source);
    if (!match) {
      return void 0;
    }
    const unexpectedChars = /["'<=`]/g;
    let m;
    while (m = unexpectedChars.exec(match[0])) {
      emitError(
        context,
        18,
        m.index
      );
    }
    content = parseTextData(context, match[0].length, 4);
  }
  return { content, isQuoted, loc: getSelection(context, start) };
}
function parseInterpolation(context, mode) {
  const [open, close] = context.options.delimiters;
  const closeIndex = context.source.indexOf(close, open.length);
  if (closeIndex === -1) {
    emitError(context, 25);
    return void 0;
  }
  const start = getCursor(context);
  advanceBy(context, open.length);
  const innerStart = getCursor(context);
  const innerEnd = getCursor(context);
  const rawContentLength = closeIndex - open.length;
  const rawContent = context.source.slice(0, rawContentLength);
  const preTrimContent = parseTextData(context, rawContentLength, mode);
  const content = preTrimContent.trim();
  const startOffset = preTrimContent.indexOf(content);
  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }
  const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5,
    content: {
      type: 4,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0,
      content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}
function parseText(context, mode) {
  const endTokens = mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
  let endIndex = context.source.length;
  for (let i = 0; i < endTokens.length; i++) {
    const index = context.source.indexOf(endTokens[i], 1);
    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }
  const start = getCursor(context);
  const content = parseTextData(context, endIndex, mode);
  return {
    type: 2,
    content,
    loc: getSelection(context, start)
  };
}
function parseTextData(context, length, mode) {
  const rawText = context.source.slice(0, length);
  advanceBy(context, length);
  if (mode === 2 || mode === 3 || !rawText.includes("&")) {
    return rawText;
  } else {
    return context.options.decodeEntities(
      rawText,
      mode === 4
    );
  }
}
function getCursor(context) {
  const { column, line, offset } = context;
  return { column, line, offset };
}
function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start,
    end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}
function last(xs) {
  return xs[xs.length - 1];
}
function startsWith(source, searchString) {
  return source.startsWith(searchString);
}
function advanceBy(context, numberOfCharacters) {
  const { source } = context;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}
function advanceSpaces(context) {
  const match = /^[\t\r\n\f ]+/.exec(context.source);
  if (match) {
    advanceBy(context, match[0].length);
  }
}
function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(
    start,
    context.originalSource.slice(start.offset, numberOfCharacters),
    numberOfCharacters
  );
}
function emitError(context, code, offset, loc = getCursor(context)) {
  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }
  context.options.onError(
    createCompilerError(code, {
      start: loc,
      end: loc,
      source: ""
    })
  );
}
function isEnd(context, mode, ancestors) {
  const s = context.source;
  switch (mode) {
    case 0:
      if (startsWith(s, "</")) {
        for (let i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }
      break;
    case 1:
    case 2: {
      const parent = last(ancestors);
      if (parent && startsWithEndTagOpen(s, parent.tag)) {
        return true;
      }
      break;
    }
    case 3:
      if (startsWith(s, "]]>")) {
        return true;
      }
      break;
  }
  return !s;
}
function startsWithEndTagOpen(source, tag) {
  return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
}

function hoistStatic(root, context) {
  walk(
    root,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    isSingleElementRoot(root, root.children[0])
  );
}
function isSingleElementRoot(root, child) {
  const { children } = root;
  return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
}
function walk(node, context, doNotHoistNode = false) {
  const { children } = node;
  const originalCount = children.length;
  let hoistedCount = 0;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1 + ( true ? ` /* HOISTED */` : 0);
          child.codegenNode = context.hoist(child.codegenNode);
          hoistedCount++;
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = getPatchFlag(codegenNode);
          if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    }
    if (child.type === 1) {
      const isComponent = child.tagType === 1;
      if (isComponent) {
        context.scopes.vSlot++;
      }
      walk(child, context);
      if (isComponent) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, context, child.children.length === 1);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          context,
          child.branches[i2].children.length === 1
        );
      }
    }
  }
  if (hoistedCount && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
  if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node.codegenNode.children)) {
    node.codegenNode.children = context.hoist(
      createArrayExpression(node.codegenNode.children)
    );
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") {
        return 0;
      }
      const flag = getPatchFlag(codegenNode);
      if (!flag) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7 && p.name === "bind" && p.exp) {
              const expType = getConstantType(p.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    default:
      if (true) ;
      return 0;
  }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function getPatchFlag(node) {
  const flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : void 0;
}

function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic: hoistStatic2 = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP,
  isCustomElement = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic: hoistStatic2,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new Map(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      if (true) {
        if (!context.currentNode) {
          throw new Error(`Node being replaced is already removed.`);
        }
        if (!context.parent) {
          throw new Error(`Cannot replace root node.`);
        }
      }
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      if ( true && !context.parent) {
        throw new Error(`Cannot remove root node.`);
      }
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if ( true && removalIndex < 0) {
        throw new Error(`node being removed is not a child of current parent`);
      }
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: () => {
    },
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(exp))
        exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode = false) {
      return createCacheExpression(context.cached++, exp, isVNode);
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    hoistStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const child = children[0];
    if (isSingleElementRoot(root, child) && child.codegenNode) {
      const codegenNode = child.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    let patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64];
    if ( true && children.filter((c) => c.type !== 3).length === 1) {
      patchFlag |= 2048;
      patchFlagText += `, ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]}`;
    }
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag + ( true ? ` /* ${patchFlagText} */` : 0),
      void 0,
      void 0,
      true,
      void 0,
      false
      /* isComponent */
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child))
      continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit)
            exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}

const PURE_ANNOTATION = `/*#__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.loc.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push("\n" + `  `.repeat(n));
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated)
    options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const isSetupInlined = false;
  const preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(`const { ${helpers.map(aliasHelper).join(", ")} } = _Vue`);
      push(`
`);
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(`
`);
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: isSetupInlined ? preambleContext.code : ``,
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(`const _Vue = ${VueBinding}
`);
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(`const { ${staticHelpers} } = _Vue
`);
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
  const resolver = helper(
    type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline, helper, scopeId, mode } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(
        `const _hoisted_${i + 1} = ${``}`
      );
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function isText(n) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 ||  true && nodes.some((n) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText(n));
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
      push(node);
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
    context.push(node);
    return;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
       true && assert(
        node.codegenNode != null,
        `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`
      );
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (true) {
        assert(false, `unhandled codegen node type: ${node.type}`);
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure)
    push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push(`[${node.content}]`, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent
  } = node;
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
  push(helper(callHelper) + `(`, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlag, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null)
      break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, node);
    return;
  }
  const multilines = properties.length > 1 ||  true && properties.some((p) => p.value.type !== 4);
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, node);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  push(`_cache[${node.index}] || (`);
  if (node.isVNode) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
    newline();
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (node.isVNode) {
    push(`,`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
}

function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {
  {
    return;
  }
}
function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}
function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
    let i = parentStack.length;
    while (i--) {
      const p = parentStack[i];
      if (p.type === "AssignmentExpression") {
        return true;
      } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
        break;
      }
    }
  }
  return false;
}
function walkFunctionParams(node, onIdent) {
  for (const p of node.params) {
    for (const id of extractIdentifiers(p)) {
      onIdent(id);
    }
  }
}
function walkBlockDeclarations(block, onIdent) {
  for (const stmt of block.body) {
    if (stmt.type === "VariableDeclaration") {
      if (stmt.declare)
        continue;
      for (const decl of stmt.declarations) {
        for (const id of extractIdentifiers(decl.id)) {
          onIdent(id);
        }
      }
    } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
      if (stmt.declare || !stmt.id)
        continue;
      onIdent(stmt.id);
    }
  }
}
function extractIdentifiers(param, nodes = []) {
  switch (param.type) {
    case "Identifier":
      nodes.push(param);
      break;
    case "MemberExpression":
      let object = param;
      while (object.type === "MemberExpression") {
        object = object.object;
      }
      nodes.push(object);
      break;
    case "ObjectPattern":
      for (const prop of param.properties) {
        if (prop.type === "RestElement") {
          extractIdentifiers(prop.argument, nodes);
        } else {
          extractIdentifiers(prop.value, nodes);
        }
      }
      break;
    case "ArrayPattern":
      param.elements.forEach((element) => {
        if (element)
          extractIdentifiers(element, nodes);
      });
      break;
    case "RestElement":
      extractIdentifiers(param.argument, nodes);
      break;
    case "AssignmentPattern":
      extractIdentifiers(param.left, nodes);
      break;
  }
  return nodes;
}
const isFunctionType = (node) => {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};
const isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
const isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
const TS_NODE_TYPES = [
  "TSAsExpression",
  // foo as number
  "TSTypeAssertion",
  // (<number>foo)
  "TSNonNullExpression",
  // foo!
  "TSInstantiationExpression",
  // foo<string>
  "TSSatisfiesExpression"
  // foo satisfies T
];

const prohibitedKeywordRE = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
  const exp = node.content;
  if (!exp.trim()) {
    return;
  }
  try {
    new Function(
      asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`
    );
  } catch (e) {
    let message = e.message;
    const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
    if (keywordMatch) {
      message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
    }
    context.onError(
      createCompilerError(
        45,
        node.loc,
        void 0,
        message
      )
    );
  }
}

const transformExpression = (node, context) => {
  if (node.type === 5) {
    node.content = processExpression(
      node.content,
      context
    );
  } else if (node.type === 1) {
    for (let i = 0; i < node.props.length; i++) {
      const dir = node.props[i];
      if (dir.type === 7 && dir.name !== "for") {
        const exp = dir.exp;
        const arg = dir.arg;
        if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
          dir.exp = processExpression(
            exp,
            context,
            // slot args must be processed as function params
            dir.name === "slot"
          );
        }
        if (arg && arg.type === 4 && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
};
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
  {
    if (true) {
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }
    return node;
  }
}
function stringifyExpression(exp) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(exp)) {
    return exp;
  } else if (exp.type === 4) {
    return exp.content;
  } else {
    return exp.children.map(stringifyExpression).join("");
  }
}

const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    const comments = [];
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && sibling.type === 3) {
        context.removeNode(sibling);
         true && comments.unshift(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) {
          branch.children = [...comments, ...branch.children];
        }
        if (true) {
          const key = branch.userKey;
          if (key) {
            sibling.branches.forEach(({ userKey }) => {
              if (isSameKey(userKey, key)) {
                context.onError(
                  createCompilerError(
                    29,
                    branch.userKey.loc
                  )
                );
              }
            });
          }
        }
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit)
          onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
         true ? '"v-if"' : 0,
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      let patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64];
      if ( true && !branch.isTemplateIf && children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
        patchFlagText += `, ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]}`;
      }
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag + ( true ? ` /* ${patchFlagText} */` : 0),
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }
  if (a.type === 6) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    const exp = a.exp;
    const branchExp = b.exp;
    if (exp.type !== branchExp.type) {
      return false;
    }
    if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }
  return true;
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}

const transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`);
      const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
      const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag + ( true ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag]} */` : 0),
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        if (( true) && isTemplate) {
          node.children.some((c) => {
            if (c.type === 1) {
              const key = findProp(c, "key");
              if (key) {
                context.onError(
                  createCompilerError(
                    33,
                    key.loc
                  )
                );
                return true;
              }
            }
          });
        }
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64 + ( true ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]} */` : 0),
            void 0,
            void 0,
            true,
            void 0,
            false
            /* isComponent */
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached++))
          );
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
              /* force newline */
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = parseForExpression(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    dir.exp,
    context
  );
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit)
      onExit();
  };
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input, context) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch)
    return;
  const [, LHS, RHS] = inMatch;
  const result = {
    source: createAliasExpression(
      loc,
      RHS.trim(),
      exp.indexOf(RHS, LHS.length)
    ),
    value: void 0,
    key: void 0,
    index: void 0
  };
  if (true) {
    validateBrowserExpression(result.source, context);
  }
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);
      if (true) {
        validateBrowserExpression(
          result.key,
          context,
          true
        );
      }
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          loc,
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          )
        );
        if (true) {
          validateBrowserExpression(
            result.index,
            context,
            true
          );
        }
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);
    if (true) {
      validateBrowserExpression(
        result.value,
        context,
        true
      );
    }
  }
  return result;
}
function createAliasExpression(range, content, offset) {
  return createSimpleExpression(
    content,
    false,
    getInnerRange(range, offset, content.length)
  );
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
  return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i])
      break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}

const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
const trackVForSlotScopes = (node, context) => {
  let vFor;
  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
    const result = vFor.parseResult = parseForExpression(
      vFor.exp,
      context
    );
    if (result) {
      const { value, key, index } = result;
      const { addIdentifiers, removeIdentifiers } = context;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return () => {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};
const buildClientSlotFn = (props, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
    let vIf;
    let vElse;
    let vFor;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
        children.splice(i, 1);
        i--;
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor = findDir(slotElement, "for")) {
      hasDynamicSlots = true;
      const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
      if (parseResult) {
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
              /* force newline */
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(32, vFor.loc)
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + ( true ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag]} */` : 0),
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches))
          return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children))
          return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}

const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent = node.tagType === 1;
    let vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let vnodePatchFlag;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
        if ( true && node.children.length > 1) {
          context.onError(
            createCompilerError(46, {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ""
            })
          );
        }
      }
      const shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type = child.type;
        const hasDynamicTextChild = type === 5 || type === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          vnodePatchFlag = patchFlag + ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag]} */`;
        } else {
          const flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n]).join(`, `);
          vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
        }
      } else {}
      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      vnodePatchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(node, "is");
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const isDir = !isExplicitDynamic && findDir(node, "is");
  if (isDir && isDir.exp) {
    if (true) {
      context.onWarn(
        createCompilerError(52, isDir.loc)
      );
    }
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
      isDir.exp
    ]);
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr)
      context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg)
      mergeArgs.push(arg);
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);
      if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasVnodeHook = true;
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        if (context.scopes.vFor > 0) {
          properties.push(
            createObjectProperty(
              createSimpleExpression("ref_for", true),
              createSimpleExpression("true")
            )
          );
        }
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(
            name,
            true,
            getInnerRange(loc, 0, name.length)
          ),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
        properties.push(
          createObjectProperty(
            createSimpleExpression("ref_for", true),
            createSimpleExpression("true")
          )
        );
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            pushMergeArg();
            {
              if (true) {
                const hasOverridableKeys = mergeArgs.some((arg2) => {
                  if (arg2.type === 15) {
                    return arg2.properties.some(({ key }) => {
                      if (key.type !== 4 || !key.isStatic) {
                        return true;
                      }
                      return key.content !== "class" && key.content !== "style" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(key.content);
                    });
                  } else {
                    return true;
                  }
                });
                if (hasOverridableKeys) {
                  checkCompatEnabled(
                    "COMPILER_V_BIND_OBJECT_ORDER",
                    context,
                    loc
                  );
                }
              }
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isBuiltInDirective)(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp)
    dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1)
      propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}

const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (p.value) {
        if (p.name === "name") {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
        if (p.exp)
          slotName = p.exp;
      } else {
        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
          p.arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(p.arg.content);
        }
        nonNameProps.push(p);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}

const fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const transformOn = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if ( true && rawName.startsWith("vnode")) {
        context.onWarn(
          createCompilerError(51, arg.loc)
        );
      }
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp.content);
    const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (true) {
      validateBrowserExpression(
        exp,
        context,
        false,
        hasMultipleStatements
      );
    }
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p) => p.key.isHandlerKey = true);
  return ret;
};

const transformBind = (dir, _node, context) => {
  const { exp, modifiers, loc } = dir;
  const arg = dir.arg;
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = `${arg.content} || ""`;
  }
  if (modifiers.includes("camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.includes("prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.includes("attr")) {
      injectPrefix(arg, "^");
    }
  }
  if (!exp || exp.type === 4 && !exp.content.trim()) {
    context.onError(createCompilerError(34, loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
    };
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
const injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};

const transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p) => p.type === 7 && !context.directiveTransforms[p.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              1 + ( true ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1]} */` : 0)
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};

const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true
          /* isVNode */
        );
      }
    };
  }
};

const transformModel = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source;
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  const maybeRef = false;
  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}

const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTER", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  }
  if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object")
        continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92)
        inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92)
        inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92)
        inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92)
        inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        case 39:
          inSingle = true;
          break;
        case 96:
          inTemplateString = true;
          break;
        case 40:
          paren++;
          break;
        case 41:
          paren--;
          break;
        case 91:
          square++;
          break;
        case 93:
          square--;
          break;
        case 123:
          curly++;
          break;
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p;
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== " ")
            break;
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
     true && warnDeprecation(
      "COMPILER_FILTER",
      context,
      node.loc
    );
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}

const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node)) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached++)
        ]);
      }
    };
  }
};

function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter] ,
      ... true ? [transformExpression] : 0,
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn,
      bind: transformBind,
      model: transformModel
    }
  ];
}
function baseCompile(template, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(47));
    } else if (isModuleMode) {
      onError(createCompilerError(48));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(49));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(50));
  }
  const ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
      prefixIdentifiers,
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(
    ast,
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
      prefixIdentifiers
    })
  );
}

const noopDirectiveTransform = () => ({ props: [] });




/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_TRANSITION: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION),
/* harmony export */   CAMELIZE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE),
/* harmony export */   CAPITALIZE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE),
/* harmony export */   CREATE_BLOCK: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK),
/* harmony export */   CREATE_COMMENT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT),
/* harmony export */   CREATE_ELEMENT_BLOCK: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_BLOCK),
/* harmony export */   CREATE_ELEMENT_VNODE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_ELEMENT_VNODE),
/* harmony export */   CREATE_SLOTS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS),
/* harmony export */   CREATE_STATIC: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC),
/* harmony export */   CREATE_TEXT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT),
/* harmony export */   CREATE_VNODE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE),
/* harmony export */   DOMDirectiveTransforms: () => (/* binding */ DOMDirectiveTransforms),
/* harmony export */   DOMNodeTransforms: () => (/* binding */ DOMNodeTransforms),
/* harmony export */   FRAGMENT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT),
/* harmony export */   GUARD_REACTIVE_PROPS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.GUARD_REACTIVE_PROPS),
/* harmony export */   IS_MEMO_SAME: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_MEMO_SAME),
/* harmony export */   IS_REF: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF),
/* harmony export */   KEEP_ALIVE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE),
/* harmony export */   MERGE_PROPS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS),
/* harmony export */   NORMALIZE_CLASS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_CLASS),
/* harmony export */   NORMALIZE_PROPS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_PROPS),
/* harmony export */   NORMALIZE_STYLE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.NORMALIZE_STYLE),
/* harmony export */   OPEN_BLOCK: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK),
/* harmony export */   POP_SCOPE_ID: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID),
/* harmony export */   PUSH_SCOPE_ID: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID),
/* harmony export */   RENDER_LIST: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST),
/* harmony export */   RENDER_SLOT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT),
/* harmony export */   RESOLVE_COMPONENT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT),
/* harmony export */   RESOLVE_DIRECTIVE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE),
/* harmony export */   RESOLVE_DYNAMIC_COMPONENT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   RESOLVE_FILTER: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_FILTER),
/* harmony export */   SET_BLOCK_TRACKING: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING),
/* harmony export */   SUSPENSE: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE),
/* harmony export */   TELEPORT: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT),
/* harmony export */   TO_DISPLAY_STRING: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
/* harmony export */   TO_HANDLERS: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS),
/* harmony export */   TO_HANDLER_KEY: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY),
/* harmony export */   TRANSITION: () => (/* binding */ TRANSITION),
/* harmony export */   TRANSITION_GROUP: () => (/* binding */ TRANSITION_GROUP),
/* harmony export */   TS_NODE_TYPES: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TS_NODE_TYPES),
/* harmony export */   UNREF: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF),
/* harmony export */   V_MODEL_CHECKBOX: () => (/* binding */ V_MODEL_CHECKBOX),
/* harmony export */   V_MODEL_DYNAMIC: () => (/* binding */ V_MODEL_DYNAMIC),
/* harmony export */   V_MODEL_RADIO: () => (/* binding */ V_MODEL_RADIO),
/* harmony export */   V_MODEL_SELECT: () => (/* binding */ V_MODEL_SELECT),
/* harmony export */   V_MODEL_TEXT: () => (/* binding */ V_MODEL_TEXT),
/* harmony export */   V_ON_WITH_KEYS: () => (/* binding */ V_ON_WITH_KEYS),
/* harmony export */   V_ON_WITH_MODIFIERS: () => (/* binding */ V_ON_WITH_MODIFIERS),
/* harmony export */   V_SHOW: () => (/* binding */ V_SHOW),
/* harmony export */   WITH_CTX: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX),
/* harmony export */   WITH_DIRECTIVES: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES),
/* harmony export */   WITH_MEMO: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_MEMO),
/* harmony export */   advancePositionWithClone: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone),
/* harmony export */   advancePositionWithMutation: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation),
/* harmony export */   assert: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   baseCompile: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile),
/* harmony export */   baseParse: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse),
/* harmony export */   buildDirectiveArgs: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildDirectiveArgs),
/* harmony export */   buildProps: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps),
/* harmony export */   buildSlots: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots),
/* harmony export */   checkCompatEnabled: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   convertToBlock: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.convertToBlock),
/* harmony export */   createArrayExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression),
/* harmony export */   createAssignmentExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression),
/* harmony export */   createBlockStatement: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement),
/* harmony export */   createCacheExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression),
/* harmony export */   createCallExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression),
/* harmony export */   createCompilerError: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError),
/* harmony export */   createCompoundExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression),
/* harmony export */   createConditionalExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression),
/* harmony export */   createDOMCompilerError: () => (/* binding */ createDOMCompilerError),
/* harmony export */   createForLoopParams: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams),
/* harmony export */   createFunctionExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression),
/* harmony export */   createIfStatement: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement),
/* harmony export */   createInterpolation: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation),
/* harmony export */   createObjectExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression),
/* harmony export */   createObjectProperty: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty),
/* harmony export */   createReturnStatement: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement),
/* harmony export */   createRoot: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot),
/* harmony export */   createSequenceExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression),
/* harmony export */   createSimpleExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression),
/* harmony export */   createStructuralDirectiveTransform: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform),
/* harmony export */   createTemplateLiteral: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral),
/* harmony export */   createTransformContext: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext),
/* harmony export */   createVNodeCall: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall),
/* harmony export */   extractIdentifiers: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.extractIdentifiers),
/* harmony export */   findDir: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir),
/* harmony export */   findProp: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp),
/* harmony export */   generate: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate),
/* harmony export */   generateCodeFrame: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   getBaseTransformPreset: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset),
/* harmony export */   getConstantType: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getConstantType),
/* harmony export */   getInnerRange: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange),
/* harmony export */   getMemoedVNodeCall: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getMemoedVNodeCall),
/* harmony export */   getVNodeBlockHelper: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeBlockHelper),
/* harmony export */   getVNodeHelper: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getVNodeHelper),
/* harmony export */   hasDynamicKeyVBind: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind),
/* harmony export */   hasScopeRef: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef),
/* harmony export */   helperNameMap: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap),
/* harmony export */   injectProp: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp),
/* harmony export */   isBuiltInType: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType),
/* harmony export */   isCoreComponent: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent),
/* harmony export */   isFunctionType: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isFunctionType),
/* harmony export */   isInDestructureAssignment: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isInDestructureAssignment),
/* harmony export */   isMemberExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression),
/* harmony export */   isMemberExpressionBrowser: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionBrowser),
/* harmony export */   isMemberExpressionNode: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpressionNode),
/* harmony export */   isReferencedIdentifier: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isReferencedIdentifier),
/* harmony export */   isSimpleIdentifier: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier),
/* harmony export */   isSlotOutlet: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet),
/* harmony export */   isStaticArgOf: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticArgOf),
/* harmony export */   isStaticExp: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp),
/* harmony export */   isStaticProperty: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticProperty),
/* harmony export */   isStaticPropertyKey: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticPropertyKey),
/* harmony export */   isTemplateNode: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode),
/* harmony export */   isText: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText),
/* harmony export */   isVSlot: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot),
/* harmony export */   locStub: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub),
/* harmony export */   noopDirectiveTransform: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parserOptions: () => (/* binding */ parserOptions),
/* harmony export */   processExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression),
/* harmony export */   processFor: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor),
/* harmony export */   processIf: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf),
/* harmony export */   processSlotOutlet: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet),
/* harmony export */   registerRuntimeHelpers: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers),
/* harmony export */   resolveComponentType: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType),
/* harmony export */   stringifyExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.stringifyExpression),
/* harmony export */   toValidAssetId: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId),
/* harmony export */   trackSlotScopes: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes),
/* harmony export */   trackVForSlotScopes: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes),
/* harmony export */   transform: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform),
/* harmony export */   transformBind: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind),
/* harmony export */   transformElement: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement),
/* harmony export */   transformExpression: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression),
/* harmony export */   transformModel: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel),
/* harmony export */   transformOn: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn),
/* harmony export */   transformStyle: () => (/* binding */ transformStyle),
/* harmony export */   traverseNode: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode),
/* harmony export */   walkBlockDeclarations: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkBlockDeclarations),
/* harmony export */   walkFunctionParams: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkFunctionParams),
/* harmony export */   walkIdentifiers: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.walkIdentifiers),
/* harmony export */   warnDeprecation: () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");




const V_MODEL_RADIO = Symbol( true ? `vModelRadio` : 0);
const V_MODEL_CHECKBOX = Symbol( true ? `vModelCheckbox` : 0);
const V_MODEL_TEXT = Symbol( true ? `vModelText` : 0);
const V_MODEL_SELECT = Symbol( true ? `vModelSelect` : 0);
const V_MODEL_DYNAMIC = Symbol( true ? `vModelDynamic` : 0);
const V_ON_WITH_MODIFIERS = Symbol( true ? `vOnModifiersGuard` : 0);
const V_ON_WITH_KEYS = Symbol( true ? `vOnKeysGuard` : 0);
const V_SHOW = Symbol( true ? `vShow` : 0);
const TRANSITION = Symbol( true ? `Transition` : 0);
const TRANSITION_GROUP = Symbol( true ? `TransitionGroup` : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});

let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

const isRawTextContainer = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  "style,iframe,script,noscript",
  true
);
const parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
  isNativeTag: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
  isPreTag: (tag) => tag === "pre",
  decodeEntities: decodeHtmlBrowser ,
  isBuiltInComponent: (tag) => {
    if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, `Transition`)) {
      return TRANSITION;
    } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, `TransitionGroup`)) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent) {
    let ns = parent ? parent.ns : 0;
    if (parent && ns === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns = 0;
      }
    } else if (parent && ns === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns = 0;
      }
    }
    if (ns === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode({ tag, ns }) {
    if (ns === 0) {
      if (tag === "textarea" || tag === "title") {
        return 1;
      }
      if (isRawTextContainer(tag)) {
        return 2;
      }
    }
    return 0;
  }
};

const transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p, i) => {
      if (p.type === 6 && p.name === "style" && p.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`style`, true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};
const parseInlineCSS = (cssText, loc) => {
  const normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};

function createDOMCompilerError(code, loc) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(
    code,
    loc,
     true ? DOMErrorMessages : 0
  );
}
const DOMErrorMessages = {
  [53]: `v-html is missing expression.`,
  [54]: `v-html will override element children.`,
  [55]: `v-text is missing expression.`,
  [56]: `v-text will override element children.`,
  [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
  [58]: `v-model argument is not supported on plain elements.`,
  [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
  [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
  [61]: `v-show is missing expression.`,
  [62]: `<Transition> expects exactly one child element or component.`,
  [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};

const transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(53, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(
        (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`innerHTML`, true, loc),
        exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("", true)
      )
    ]
  };
};

const transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(
        (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`textContent`, true),
        exp ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getConstantType)(exp, context) > 0 ? exp : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(
          context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
          [exp],
          loc
        ) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("", true)
      )
    ]
  };
};

const transformModel = (dir, node, context) => {
  const baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        58,
        dir.arg.loc
      )
    );
  }
  function checkDuplicatedValue() {
    const value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, "value");
    if (value) {
      context.onError(
        createDOMCompilerError(
          60,
          value.loc
        )
      );
    }
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, `type`);
      if (type) {
        if (type.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  59,
                  dir.loc
                )
              );
              break;
            default:
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
         true && checkDuplicatedValue();
      }
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else {
       true && checkDuplicatedValue();
    }
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        57,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p) => !(p.key.type === 4 && p.key.content === "modelValue")
  );
  return baseResult;
};

const isEventOptionModifier = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
const maybeKeyModifier = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("left,right");
const isKeyboardEvent = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  `onkeyup,onkeydown,onkeypress`,
  true
);
const resolveModifiers = (key, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i];
    if (modifier === "native" && (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled)(
      "COMPILER_V_ON_NATIVE",
      context,
      loc
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
const transformClick = (key, event) => {
  const isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === "onclick";
  return isStaticClick ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true) : key.type !== 4 ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)([
    `(`,
    key,
    `) === "onClick" ? "${event}" : (`,
    key,
    `)`
  ]) : key;
};
const transformOn = (dir, node, context) => {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length)
      return baseResult;
    let { key, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key = transformClick(key, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key = transformClick(key, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join("");
      key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`${key.content}${modifierPostfix}`, true) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)([`(`, key, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
    };
  });
};

const transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(61, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

const transformTransition = (node, context) => {
  if (node.type === 1 && node.tagType === 1) {
    const component = context.isBuiltInComponent(node.tag);
    if (component === TRANSITION) {
      return () => {
        if (!node.children.length) {
          return;
        }
        if (hasMultipleChildren(node)) {
          context.onError(
            createDOMCompilerError(
              62,
              {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              }
            )
          );
        }
        const child = node.children[0];
        if (child.type === 1) {
          for (const p of child.props) {
            if (p.type === 7 && p.name === "show") {
              node.props.push({
                type: 6,
                name: "persisted",
                value: void 0,
                loc: node.loc
              });
            }
          }
        }
      };
    }
  }
};
function hasMultipleChildren(node) {
  const children = node.children = node.children.filter(
    (c) => c.type !== 3 && !(c.type === 2 && !c.content.trim())
  );
  const child = children[0];
  return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
}

const ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
     true && context.onError(
      createDOMCompilerError(
        63,
        node.loc
      )
    );
    context.removeNode();
  }
};

const DOMNodeTransforms = [
  transformStyle,
  ... true ? [transformTransition] : 0
];
const DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  // override compiler-core
  on: transformOn,
  // override compiler-core
  show: transformShow
};
function compile(template, options = {}) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(
    template,
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null 
    })
  );
}
function parse(template, options = {}) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}




/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* binding */ EffectScope),
/* harmony export */   ITERATE_KEY: () => (/* binding */ ITERATE_KEY),
/* harmony export */   ReactiveEffect: () => (/* binding */ ReactiveEffect),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   customRef: () => (/* binding */ customRef),
/* harmony export */   deferredComputed: () => (/* binding */ deferredComputed),
/* harmony export */   effect: () => (/* binding */ effect),
/* harmony export */   effectScope: () => (/* binding */ effectScope),
/* harmony export */   enableTracking: () => (/* binding */ enableTracking),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   isProxy: () => (/* binding */ isProxy),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   isReadonly: () => (/* binding */ isReadonly),
/* harmony export */   isRef: () => (/* binding */ isRef),
/* harmony export */   isShallow: () => (/* binding */ isShallow),
/* harmony export */   markRaw: () => (/* binding */ markRaw),
/* harmony export */   onScopeDispose: () => (/* binding */ onScopeDispose),
/* harmony export */   pauseTracking: () => (/* binding */ pauseTracking),
/* harmony export */   proxyRefs: () => (/* binding */ proxyRefs),
/* harmony export */   reactive: () => (/* binding */ reactive),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   resetTracking: () => (/* binding */ resetTracking),
/* harmony export */   shallowReactive: () => (/* binding */ shallowReactive),
/* harmony export */   shallowReadonly: () => (/* binding */ shallowReadonly),
/* harmony export */   shallowRef: () => (/* binding */ shallowRef),
/* harmony export */   stop: () => (/* binding */ stop),
/* harmony export */   toRaw: () => (/* binding */ toRaw),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   toValue: () => (/* binding */ toValue),
/* harmony export */   track: () => (/* binding */ track),
/* harmony export */   trigger: () => (/* binding */ trigger),
/* harmony export */   triggerRef: () => (/* binding */ triggerRef),
/* harmony export */   unref: () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");


function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    /**
     * @internal
     */
    this._active = true;
    /**
     * @internal
     */
    this.effects = [];
    /**
     * @internal
     */
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}

const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};

const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol( true ? "iterate" : 0);
const MAP_KEY_ITERATE_KEY = Symbol( true ? "Map key iterate" : 0);
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }
  const _effect = new ReactiveEffect(fn);
  if (options) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(_effect, options);
    if (options.scope)
      recordEffectScope(_effect, options.scope);
  }
  if (!options || !options.lazy) {
    _effect.run();
  }
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo =  true ? { effect: activeEffect, target, type, key } : 0;
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if ( true && activeEffect.onTrack) {
      activeEffect.onTrack(
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
          {
            effect: activeEffect
          },
          debuggerEventExtraInfo
        )
      );
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo =  true ? { target, type, key, newValue, oldValue, oldTarget } : 0;
  if (deps.length === 1) {
    if (deps[0]) {
      if (true) {
        triggerEffects(deps[0], eventInfo);
      } else {}
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    if (true) {
      triggerEffects(createDep(effects), eventInfo);
    } else {}
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(dep) ? dep : [...dep];
  for (const effect2 of effects) {
    if (effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
  for (const effect2 of effects) {
    if (!effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  if (effect2 !== activeEffect || effect2.allowRecurse) {
    if ( true && effect2.onTrigger) {
      effect2.onTrigger((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({ effect: effect2 }, debuggerEventExtraInfo));
    }
    if (effect2.scheduler) {
      effect2.scheduler();
    } else {
      effect2.run();
    }
  }
}
function getDepFromReactive(object, key) {
  var _a;
  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
}

const isNonTrackableKeys = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    if (!isReadonly2) {
      if (targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? res : res.value;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      warn(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
  {},
  mutableHandlers,
  {
    get: shallowGet,
    set: shallowSet
  }
);
const shallowReadonlyHandlers = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
  {},
  readonlyHandlers,
  {
    get: shallowReadonlyGet
  }
);

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(
        `${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    console.warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}

const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1 /* COMMON */;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2 /* COLLECTION */;
    default:
      return 0 /* INVALID */;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0 /* INVALID */) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;

function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    if (true) {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    } else {}
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    if (true) {
      triggerEffects(dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    } else {}
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function triggerRef(ref2) {
  triggerRefValue(ref2,  true ? ref2.value : 0);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this.dep = void 0;
    this.__v_isRef = true;
    const { get, set } = factory(
      () => trackRefValue(this),
      () => triggerRefValue(this)
    );
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source)) {
    return new GetterRefImpl(source);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(
    source,
    key,
    defaultValue
  );
}

class ComputedRefImpl {
  constructor(getter, _setter, isReadonly, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly;
  }
  get value() {
    const self = toRaw(this);
    trackRefValue(self);
    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run();
    }
    return self._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  true ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if ( true && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}

const tick = /* @__PURE__ */ Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn) => {
  queue.push(fn);
  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};
const flush = () => {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue.length = 0;
  queued = false;
};
class DeferredComputedRefImpl {
  constructor(getter) {
    this.dep = void 0;
    this._dirty = true;
    this.__v_isRef = true;
    this["__v_isReadonly"] = true;
    let compareTarget;
    let hasCompareTarget = false;
    let scheduled = false;
    this.effect = new ReactiveEffect(getter, (computedTrigger) => {
      if (this.dep) {
        if (computedTrigger) {
          compareTarget = this._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          const valueToCompare = hasCompareTarget ? compareTarget : this._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(() => {
            if (this.effect.active && this._get() !== valueToCompare) {
              triggerRefValue(this);
            }
            scheduled = false;
          });
        }
        for (const e of this.dep) {
          if (e.computed instanceof DeferredComputedRefImpl) {
            e.scheduler(
              true
              /* computedTrigger */
            );
          }
        }
      }
      this._dirty = true;
    });
    this.effect.computed = this;
  }
  _get() {
    if (this._dirty) {
      this._dirty = false;
      return this._value = this.effect.run();
    }
    return this._value;
  }
  get value() {
    trackRefValue(this);
    return toRaw(this)._get();
  }
}
function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}




/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* binding */ BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* binding */ BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   KeepAlive: () => (/* binding */ KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* binding */ Static),
/* harmony export */   Suspense: () => (/* binding */ Suspense),
/* harmony export */   Teleport: () => (/* binding */ Teleport),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   assertNumber: () => (/* binding */ assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* binding */ callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   cloneVNode: () => (/* binding */ cloneVNode),
/* harmony export */   compatUtils: () => (/* binding */ compatUtils),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   createBlock: () => (/* binding */ createBlock),
/* harmony export */   createCommentVNode: () => (/* binding */ createCommentVNode),
/* harmony export */   createElementBlock: () => (/* binding */ createElementBlock),
/* harmony export */   createElementVNode: () => (/* binding */ createBaseVNode),
/* harmony export */   createHydrationRenderer: () => (/* binding */ createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* binding */ createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* binding */ createRenderer),
/* harmony export */   createSlots: () => (/* binding */ createSlots),
/* harmony export */   createStaticVNode: () => (/* binding */ createStaticVNode),
/* harmony export */   createTextVNode: () => (/* binding */ createTextVNode),
/* harmony export */   createVNode: () => (/* binding */ createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* binding */ defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* binding */ defineComponent),
/* harmony export */   defineEmits: () => (/* binding */ defineEmits),
/* harmony export */   defineExpose: () => (/* binding */ defineExpose),
/* harmony export */   defineModel: () => (/* binding */ defineModel),
/* harmony export */   defineOptions: () => (/* binding */ defineOptions),
/* harmony export */   defineProps: () => (/* binding */ defineProps),
/* harmony export */   defineSlots: () => (/* binding */ defineSlots),
/* harmony export */   devtools: () => (/* binding */ devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* binding */ getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* binding */ getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* binding */ guardReactiveProps),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   handleError: () => (/* binding */ handleError),
/* harmony export */   hasInjectionContext: () => (/* binding */ hasInjectionContext),
/* harmony export */   initCustomFormatter: () => (/* binding */ initCustomFormatter),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isMemoSame: () => (/* binding */ isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* binding */ isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* binding */ isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* binding */ mergeDefaults),
/* harmony export */   mergeModels: () => (/* binding */ mergeModels),
/* harmony export */   mergeProps: () => (/* binding */ mergeProps),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle),
/* harmony export */   onActivated: () => (/* binding */ onActivated),
/* harmony export */   onBeforeMount: () => (/* binding */ onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* binding */ onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* binding */ onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* binding */ onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* binding */ onErrorCaptured),
/* harmony export */   onMounted: () => (/* binding */ onMounted),
/* harmony export */   onRenderTracked: () => (/* binding */ onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* binding */ onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* binding */ onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* binding */ onUnmounted),
/* harmony export */   onUpdated: () => (/* binding */ onUpdated),
/* harmony export */   openBlock: () => (/* binding */ openBlock),
/* harmony export */   popScopeId: () => (/* binding */ popScopeId),
/* harmony export */   provide: () => (/* binding */ provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* binding */ pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* binding */ queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   renderList: () => (/* binding */ renderList),
/* harmony export */   renderSlot: () => (/* binding */ renderSlot),
/* harmony export */   resolveComponent: () => (/* binding */ resolveComponent),
/* harmony export */   resolveDirective: () => (/* binding */ resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* binding */ resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* binding */ resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* binding */ resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* binding */ setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* binding */ setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* binding */ setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* binding */ ssrContextKey),
/* harmony export */   ssrUtils: () => (/* binding */ ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* binding */ toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* binding */ transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* binding */ useAttrs),
/* harmony export */   useModel: () => (/* binding */ useModel),
/* harmony export */   useSSRContext: () => (/* binding */ useSSRContext),
/* harmony export */   useSlots: () => (/* binding */ useSlots),
/* harmony export */   useTransitionState: () => (/* binding */ useTransitionState),
/* harmony export */   version: () => (/* binding */ version),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   watch: () => (/* binding */ watch),
/* harmony export */   watchEffect: () => (/* binding */ watchEffect),
/* harmony export */   watchPostEffect: () => (/* binding */ watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* binding */ watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* binding */ withAsyncContext),
/* harmony export */   withCtx: () => (/* binding */ withCtx),
/* harmony export */   withDefaults: () => (/* binding */ withDefaults),
/* harmony export */   withDirectives: () => (/* binding */ withDirectives),
/* harmony export */   withMemo: () => (/* binding */ withMemo),
/* harmony export */   withScopeId: () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");





const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn(msg, ...args) {
  if (false)
    {}
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  if (false)
    {}
  if (val === void 0) {
    return;
  } else if (typeof val !== "number") {
    warn(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn(`${type} is NaN - the duration expression might be incorrect.`);
  }
}

const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo =  true ? ErrorTypeStrings[type] : 0;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  if (true) {
    const info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check =  true ? (job) => checkRecursiveUpdates(seen, job) : 0;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if ( true && check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}

let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
if (true) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}

let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version) {
  emit$1("app:init" /* APP_INIT */, app, version, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added" /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed" /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start" /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end" /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit" /* COMPONENT_EMIT */,
    component.appContext.app,
    component,
    event,
    params
  );
}

function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (true) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener = event.startsWith("update:");
  const modelArg = isModelListener && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event)}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))];
  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}

let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}

let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render.call(
          proxyToUse,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if ( true && attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render2.length > 1 ? render2(
          props,
           true ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit
          } : 0
        ) : render2(
          props,
          null
          /* we know it doesn't need it */
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if ( true && result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn(
            `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
          );
        }
        if (eventAttrs.length) {
          warn(
            `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
          );
        }
      }
    }
  }
  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn(
        `Runtime directive used on component with non-element root node. The directives will not function as intended.`
      );
    }
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn(
        `Component inside <Transition> renders non-element root node that cannot be animated.`
      );
    }
    root.transition = vnode.transition;
  }
  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

const isSuspense = (type) => type.__isSuspense;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        isSVG,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl ;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    isSVG,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    isSVG,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      isSVG,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        isSVG,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(
          activeBranch,
          newFallback,
          container,
          anchor,
          parentComponent,
          null,
          // fallback tree will not have suspense context
          isSVG,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, newFallback);
      }
    } else {
      suspense.pendingId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        isSVG,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        isSVG,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  if ( true && !hasWarned) {
    hasWarned = true;
    console[console.info ? "info" : "log"](
      `<Suspense> is an experimental feature and its API will likely change.`
    );
  }
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: { parentNode, remove }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props.timeout) : void 0;
  if (true) {
    assertNumber(timeout, `Suspense timeout`);
  }
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    isSVG,
    container,
    hiddenContainer,
    anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error(
            `suspense.resolve() is called without a pending branch.`
          );
        }
        if (suspense.isUnmounted) {
          throw new Error(
            `suspense.resolve() is called on an already unmounted suspense boundary.`
          );
        }
      }
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(pendingBranch, container2, anchor2, 0);
            }
          };
        }
        let { anchor: anchor2 } = suspense;
        if (activeBranch) {
          anchor2 = next(activeBranch);
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor2, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          isSVG2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        if (true) {
          pushWarningContext(vnode2);
        }
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          isSVG,
          optimized
        );
        if (placeholder) {
          remove(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (true) {
          popWarningContext();
        }
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    document.createElement("div"),
    null,
    isSVG,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
    /* hydrating */
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    const singleChild = filterSingleRoot(s);
    if ( true && !singleChild) {
      warn(`<Suspense> slots expect a single root node.`);
    }
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  const el = vnode.el = branch.el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  var _a;
  return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
}

function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "post" }) : 0
  );
}
function watchSyncEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "sync" }) : 0
  );
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
  var _a;
  if ( true && !cb) {
    if (immediate !== void 0) {
      warn(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s) => {
    warn(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = () => source.value;
    forceTrigger = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(source);
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = () => source;
    deep = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(s));
    getter = () => source.map((s) => {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
        return s.value;
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
        return traverse(s);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
         true && warnInvalidSource(s);
      }
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(
        (v, i) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i])
      ) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(getter, scheduler);
  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}

function validateDirectiveName(name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBuiltInDirective)(name)) {
    warn("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
     true && warn(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
    if (dir) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if ( true && hasFound) {
              warn(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            child = c;
            hasFound = true;
            if (false)
              {}
          }
        }
      }
      const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      const { mode } = rawProps;
      if ( true && mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook(hook, args);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove();
      }
      callHook(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}

function defineComponent(options, extraOptions) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve, reject) => {
          const userRetry = () => resolve(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if ( true && !comp) {
        warn(
          `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
        );
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
          /* do not throw in dev if user provided error component */
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    if (true) {
      instance.__v_cache = cache;
    }
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        isSVG,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (!current || !isSameVNodeType(cached, current)) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        if (true) {
          warn(`KeepAlive should contain exactly one component child.`);
        }
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some((p) => matches(p, name));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(",").includes(name);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRegExp)(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ""));
    warn(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.` )
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}

const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
        /* do not include inferred name to avoid breaking existing code */
      );
      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if ( true && warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else if (true) {
    warn(
      `resolve${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if ( true && !Number.isInteger(source)) {
      warn(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}

function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res)
          res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}

function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if ( true && slot && slot.length > 1) {
    warn(
      `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
    );
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}

function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn(`v-on with no argument expects an object value.`);
    return ret;
  }
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }
  return ret;
}

const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0,
    $attrs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0,
    $slots: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0,
    $refs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) =>  true ? resolveMergedOptions(i) : 0,
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) =>  true ? instanceWatch.bind(i) : 0
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && !state.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if ( true && key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1 /* SETUP */:
            return setupState[key];
          case 2 /* DATA */:
            return data[key];
          case 4 /* CONTEXT */:
            return ctx[key];
          case 3 /* PROPS */:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1 /* SETUP */;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 2 /* DATA */;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)
      ) {
        accessCache[key] = 3 /* PROPS */;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 4 /* CONTEXT */;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 0 /* OTHER */;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", key);
         true && markAttrsAccessed();
      } else if ( true && key === "$slots") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      accessCache[key] = 4 /* CONTEXT */;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && isReservedPrefix(key[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if ( true && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      warn(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
      return true;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
       true && warn(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
  {},
  PublicInstanceProxyHandlers,
  {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return;
      }
      return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
      const has = key[0] !== "_" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);
      if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
        warn(
          `Property ${JSON.stringify(
            key
          )} should not start with _ which is a reserved prefix for Vue internals.`
        );
      }
      return has;
    }
  }
);
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    }
  });
}

const warnRuntimeUsage = (method) => warn(
  `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function defineProps() {
  if (true) {
    warnRuntimeUsage(`defineProps`);
  }
  return null;
}
function defineEmits() {
  if (true) {
    warnRuntimeUsage(`defineEmits`);
  }
  return null;
}
function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage(`defineExpose`);
  }
}
function defineOptions(options) {
  if (true) {
    warnRuntimeUsage(`defineOptions`);
  }
}
function defineSlots() {
  if (true) {
    warnRuntimeUsage(`defineSlots`);
  }
  return null;
}
function defineModel() {
  if (true) {
    warnRuntimeUsage("defineModel");
  }
}
function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage(`withDefaults`);
  }
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function useModel(props, name, options) {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn(`useModel() called without active instance.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  if ( true && !i.propsOptions[0][name]) {
    warn(`useModel() called with prop "${name}" which is not declared.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  if (options && options.local) {
    const proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(props[name]);
    watch(
      () => props[name],
      (v) => proxy.value = v
    );
    watch(proxy, (value) => {
      if (value !== props[name]) {
        i.emit(`update:${name}`, value);
      }
    });
    return proxy;
  } else {
    return {
      __v_isRef: true,
      get value() {
        return props[name];
      },
      set value(value) {
        i.emit(`update:${name}`, value);
      }
    };
  }
}
function getContext() {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn(`useContext() called without active instance.`);
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props.reduce(
    (normalized, p) => (normalized[p] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults) {
    if (key.startsWith("__skip"))
      continue;
    let opt = props[key];
    if (opt) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
        opt = props[key] = { type: opt, default: defaults[key] };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = { default: defaults[key] };
    } else if (true) {
      warn(`props default key "${key}" has no corresponding declaration.`);
    }
    if (opt && defaults[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b)
    return a || b;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(a) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(b))
    return a.concat(b);
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  if ( true && !ctx) {
    warn(
      `withAsyncContext called without active current instance. This is likely a bug.`
    );
  }
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}

function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties =  true ? createDuplicateChecker() : 0;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props" /* PROPS */, key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}
        if (true) {
          checkDuplicateProperties("Methods" /* METHODS */, key);
        }
      } else if (true) {
        warn(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
      warn(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
      warn(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
       true && warn(`data() should return an object.`);
    } else {
      instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data" /* DATA */, key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn(`Computed property "${key}" has no getter.`);
      }
      const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? () => {
        warn(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      } : 0;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed" /* COMPUTED */, key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
          /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject" /* INJECT */, key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    const handler = ctx[raw];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
        watch(getter, handler, raw);
      } else if (true) {
        warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
       true && warn(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend))(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to,
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(to) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rootComponent)) {
      rootComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, rootComponent);
    }
    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    if (true) {
      Object.defineProperty(context.config, "unwrapInjectedRef", {
        get() {
          return true;
        },
        set() {
          warn(
            `app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.`
          );
        }
      });
    }
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
           true && warn(`Plugin has already been applied to target app.`);
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (true) {
          warn(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        if (true) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        } else {}
        return app;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if ( true && context.components[name]) {
          warn(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if ( true && context.directives[name]) {
          warn(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          if ( true && rootContainer.__vue_app__) {
            warn(
              `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
            );
          }
          const vnode = createVNode(
            rootComponent,
            rootProps
          );
          vnode.appContext = context;
          if (true) {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else if (true) {
          warn(
            `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
          );
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (true) {
          warn(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if ( true && key in context.provides) {
          warn(
            `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
          );
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = null;
        }
      }
    };
    return app;
  };
}
let currentApp = null;

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (true) {
      warn(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn(`inject() can only be used inside setup() or functional components.`);
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}

function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !( true && isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
              /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
              /* isAbsent */
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set", "$attrs");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0 /* shouldCast */]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    }
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0 /* shouldCast */] = booleanIndex > -1;
          prop[1 /* shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else if (true) {
    warn(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))
    );
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === "Array") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}

const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if ( true && currentInstance) {
      warn(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn(
          `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
        );
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if ( true && !isKeepAlive(instance.vnode) && true) {
    warn(
      `Non-function value encountered for default slot. Prefer function slots for better performance.`
    );
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(children);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, "_", type);
    } else {
      normalizeObjectSlots(
        children,
        instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if ( true && isHmrUpdating) {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};

function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref } = rawRef;
  if ( true && !owner) {
    warn(
      `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
    );
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12, [value, refs]);
  } else {
    const _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);
    const _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else if (true) {
          warn("Invalid template ref type:", ref, `(${typeof ref})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn("Invalid template ref type:", ref, `(${typeof ref})`);
    }
  }
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp,
      createText,
      nextSibling,
      parentNode,
      remove,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
       true && warn(
        `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
      );
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3 /* TEXT */) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn(
              `Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`
            );
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 /* COMMENT */ || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 /* ELEMENT */ || domType === 3 /* TEXT */) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 /* ELEMENT */ ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 /* ELEMENT */ || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVGContainer(container),
            optimized
          );
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8 /* COMMENT */) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            isSVGContainer(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else if (true) {
          warn("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    if (true) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
              patchProp(
                el,
                key,
                null,
                props[key],
                false,
                void 0,
                parentComponent
              );
            }
          }
        } else if (props.onClick) {
          patchProp(
            el,
            "onClick",
            null,
            props.onClick,
            false,
            void 0,
            parentComponent
          );
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        let hasWarned = false;
        while (next) {
          hasMismatch = true;
          if ( true && !hasWarned) {
            warn(
              `Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`
            );
            hasWarned = true;
          }
          const cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
           true && warn(
            `Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`
          );
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if ( true && !hasWarned) {
          warn(
            `Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
          );
          hasWarned = true;
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVGContainer(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
     true && warn(
      `Hydration node mismatch:
- Client vnode:`,
      vnode.type,
      `
- Server rendered DOM:`,
      node,
      node.nodeType === 3 /* TEXT */ ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``
    );
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      isSVGContainer(container),
      slotScopeIds
    );
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}

let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}

function initFeatureFlags() {
  const needWarn = [];
  if (false) {}
  if (false) {}
  if ( true && needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}

const queuePostRenderEffect = queueEffectWithSuspense ;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized =  true && isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (true) {
          warn("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      isSVG,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, isSVG) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        isSVG
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      isSVG,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        isSVG && type !== "foreignObject",
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (true) {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if ( true && isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds
      );
      if (true) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                isSVG,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              isSVG,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(
            el,
            key,
            prev,
            next,
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if ( true && // #5523 dev root fragment may inherit directives
    (isHmrUpdating || patchFlag & 2048)) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        } else {}
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          isSVG,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ));
    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    );
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (true) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
            if (true) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    const effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    if (true) {
      effect.onTrack = instance.rtc ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    flushPreFlushCbs();
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove2 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove2();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove2, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if ( true && vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn(
        `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
      );
      return null;
    } else {
      const target = select(targetSelector);
      if (!target) {
         true && warn(
          `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
        );
      }
      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn(`Invalid Teleport target: ${targetSelector}`);
    }
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }
    if (n1 == null) {
      const placeholder = n2.el =  true ? createComment("teleport start") : 0;
      const mainAnchor = n2.anchor =  true ? createComment("teleport end") : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          } else if (true) {
            warn(
              "Invalid Teleport target on update:",
              target,
              `(${typeof target})`
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(
            child,
            parentComponent,
            parentSuspense,
            true,
            !!child.dynamicChildren
          );
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(
          targetNode,
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node = vnode.children[0].el;
    while (node !== vnode.targetAnchor) {
      if (node.nodeType === 1)
        node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}

const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    n1.shapeFlag &= ~256;
    n2.shapeFlag &= ~512;
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
  );
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref,
  ref_key,
  ref_for
}) => {
  if (typeof ref === "number") {
    ref = "" + ref;
  }
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children) ? 8 : 16;
  }
  if ( true && vnode.key !== vnode.key) {
    warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode =  true ? createVNodeWithArgsTransform : 0;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }
      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  }
  const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2 : 0;
  if ( true && shapeFlag & 4 && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn(
      `Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}

const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {}
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let globalCurrentInstanceSetters;
let settersKey = "__VUE_INSTANCE_SETTERS__";
{
  if (!(globalCurrentInstanceSetters = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)()[settersKey])) {
    globalCurrentInstanceSetters = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)()[settersKey] = [];
  }
  globalCurrentInstanceSetters.push((i) => currentInstance = i);
  internalSetCurrentInstance = (instance) => {
    if (globalCurrentInstanceSetters.length > 1) {
      globalCurrentInstanceSetters.forEach((s) => s(instance));
    } else {
      globalCurrentInstanceSetters[0](instance);
    }
  };
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [ true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]
    );
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if ( true && !instance.suspense) {
          const name = (_a = Component.name) != null ? _a : "Anonymous";
          warn(
            `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          );
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== void 0) {
    warn(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        if (true) {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
        if (true) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (true) {
    setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    applyOptions(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    unsetCurrentInstance();
  }
  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    if (!compile && Component.template) {
      warn(
        `Component provided template option but runtime compilation is not supported in this build of Vue.` + (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".` )
        /* should not happen */
      );
    } else {
      warn(`Component is missing template or render function.`);
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
     true ? {
      get(target, key) {
        markAttrsAccessed();
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      }
    } : 0
  ));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (true) {
      if (instance.exposed) {
        warn(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(exposed)) {
            exposedType = "array";
          } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (true) {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {}
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && "__vccOpts" in value;
}

const computed = (getterOrOptions, debugOptions) => {
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
};

function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}

const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
       true && warn(
        `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
      );
    }
    return ctx;
  }
};

function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}

function initCustomFormatter() {
  if ( false || typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? ` (readonly)` : ``}`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }
    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }
    const computed = extractKeys(instance, "computed");
    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ["object", { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  const cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render();
  ret.memo = memo.slice();
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}

const version = "3.3.4";
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode
};
const ssrUtils = _ssrUtils ;
const resolveFilter = null;
const compatUtils = null;




/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   Fragment: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   KeepAlive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   Suspense: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   Teleport: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   Text: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   Transition: () => (/* binding */ Transition),
/* harmony export */   TransitionGroup: () => (/* binding */ TransitionGroup),
/* harmony export */   VueElement: () => (/* binding */ VueElement),
/* harmony export */   assertNumber: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   cloneVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   compatUtils: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   computed: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* binding */ createApp),
/* harmony export */   createBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   createCommentVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   createElementBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   createElementVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   createHydrationRenderer: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   createSSRApp: () => (/* binding */ createSSRApp),
/* harmony export */   createSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   createStaticVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   createTextVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   createVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement),
/* harmony export */   defineEmits: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   defineExpose: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   defineModel: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineModel),
/* harmony export */   defineOptions: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineOptions),
/* harmony export */   defineProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   defineSSRCustomElement: () => (/* binding */ defineSSRCustomElement),
/* harmony export */   defineSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineSlots),
/* harmony export */   devtools: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   h: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   handleError: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   hasInjectionContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext),
/* harmony export */   hydrate: () => (/* binding */ hydrate),
/* harmony export */   initCustomFormatter: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   initDirectivesForSSR: () => (/* binding */ initDirectivesForSSR),
/* harmony export */   inject: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isMemoSame: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   mergeModels: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeModels),
/* harmony export */   mergeProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   nextTick: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   onActivated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   openBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   popScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   provide: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderList: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   renderSlot: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   resolveComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   resolveDirective: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   ssrUtils: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* binding */ useCssModule),
/* harmony export */   useCssVars: () => (/* binding */ useCssVars),
/* harmony export */   useModel: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useModel),
/* harmony export */   useSSRContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   useSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   useTransitionState: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   vModelCheckbox: () => (/* binding */ vModelCheckbox),
/* harmony export */   vModelDynamic: () => (/* binding */ vModelDynamic),
/* harmony export */   vModelRadio: () => (/* binding */ vModelRadio),
/* harmony export */   vModelSelect: () => (/* binding */ vModelSelect),
/* harmony export */   vModelText: () => (/* binding */ vModelText),
/* harmony export */   vShow: () => (/* binding */ vShow),
/* harmony export */   version: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   watch: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   withCtx: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   withDefaults: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   withDirectives: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   withKeys: () => (/* binding */ withKeys),
/* harmony export */   withMemo: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   withModifiers: () => (/* binding */ withModifiers),
/* harmony export */   withScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");




const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};

function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next);
  if (next && !isCssString) {
    if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Unexpected semicolon at the end of '${name}' style value: '${val}'`
        );
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}

const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);
    if (value == null || isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}

function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    el._value = value;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
    const newValue = value == null ? "" : value;
    if (oldValue !== newValue) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if ( true && !needRemove) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(key);
}

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}

const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }
  return key in el;
}

function defineCustomElement(options, hydrate2) {
  const Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(options);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, hydrate2);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
const defineSSRCustomElement = (options) => {
  return defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, hydrate2) {
    super();
    this._def = _def;
    this._props = _props;
    /**
     * @internal
     */
    this._instance = null;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    if (this.shadowRoot && hydrate2) {
      hydrate2(this._createVNode(), this.shadowRoot);
    } else {
      if ( true && this.shadowRoot) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
        );
      }
      this.attachShadow({ mode: "open" });
      if (!this._def.__asyncLoader) {
        this._resolveProps(this._def);
      }
    }
  }
  connectedCallback() {
    this._connected = true;
    if (!this._instance) {
      if (this._resolved) {
        this._update();
      } else {
        this._resolveDef();
      }
    }
  }
  disconnectedCallback() {
    this._connected = false;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      if (!this._connected) {
        render(null, this.shadowRoot);
        this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = true;
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    new MutationObserver((mutations) => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    }).observe(this, { attributes: true });
    const resolve = (def, isAsync = false) => {
      const { props, styles } = def;
      let numberProps;
      if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      if (isAsync) {
        this._resolveProps(def);
      }
      this._applyStyles(styles);
      this._update();
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      asyncDef().then((def) => resolve(def, true));
    } else {
      resolve(this._def);
    }
  }
  _resolveProps(def) {
    const { props } = def;
    const declaredPropKeys = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key], true, false);
      }
    }
    for (const key of declaredPropKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val);
        }
      });
    }
  }
  _setAttr(key) {
    let value = this.getAttribute(key);
    const camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
    if (this._numberProps && this._numberProps[camelKey]) {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
    }
    this._setProp(camelKey, value, false);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
    if (val !== this._props[key]) {
      this._props[key] = val;
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        if (val === true) {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + "");
        } else if (!val) {
          this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
        }
      }
    }
  }
  _update() {
    render(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.isCE = true;
        if (true) {
          instance.ceReload = (newStyles) => {
            if (this._styles) {
              this._styles.forEach((s) => this.shadowRoot.removeChild(s));
              this._styles.length = 0;
            }
            this._applyStyles(newStyles);
            this._instance = null;
            this._update();
          };
        }
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(event, {
              detail: args
            })
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event) !== event) {
            dispatch((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), args);
          }
        };
        let parent = this;
        while (parent = parent && (parent.parentNode || parent.host)) {
          if (parent instanceof VueElement) {
            instance.parent = parent._instance;
            instance.provides = parent._instance.provides;
            break;
          }
        }
      };
    }
    return vnode;
  }
  _applyStyles(styles) {
    if (styles) {
      styles.forEach((css) => {
        const s = document.createElement("style");
        s.textContent = css;
        this.shadowRoot.appendChild(s);
        if (true) {
          (this._styles || (this._styles = [])).push(s);
        }
      });
    }
  }
}

function useCssModule(name = "$style") {
  {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    return mod;
  }
}

function useCssVars(getter) {
  const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  const setVars = () => {
    const vars = getter(instance.proxy);
    setVarsOnVNode(instance.subTree, vars);
    updateTeleports(vars);
  };
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect)(setVars);
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}

const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
  {},
  _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber)(res, "<transition> explicit duration");
  }
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}

const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    let prevChildren;
    let children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el._moveCb = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = children;
      children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
            child,
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance)
          );
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
        }
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
            child,
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance)
          );
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
const removeMode = (props) => delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}

const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(domValue);
      }
      el._assign(domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing)
      return;
    if (document.activeElement === el && el.type !== "range") {
      if (lazy) {
        return;
      }
      if (trim && el.value.trim() === value) {
        return;
      }
      if ((number || el.type === "number") && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(el.value) === value) {
        return;
      }
    }
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el._assign;
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el._assign(getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(getValue(o)) : getValue(o)
      );
      el._assign(
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    setSelected(el, value);
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i)
          el.selectedIndex = i;
        return;
      }
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};

const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}

const rendererOptions = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
        );
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    const res = document.querySelector(container);
    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed to mount app: mount target selector "${container}" returned null.`
      );
    }
    return res;
  }
  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
    );
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
} ;




/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_ARR: () => (/* binding */ EMPTY_ARR),
/* harmony export */   EMPTY_OBJ: () => (/* binding */ EMPTY_OBJ),
/* harmony export */   NO: () => (/* binding */ NO),
/* harmony export */   NOOP: () => (/* binding */ NOOP),
/* harmony export */   PatchFlagNames: () => (/* binding */ PatchFlagNames),
/* harmony export */   camelize: () => (/* binding */ camelize),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   def: () => (/* binding */ def),
/* harmony export */   escapeHtml: () => (/* binding */ escapeHtml),
/* harmony export */   escapeHtmlComment: () => (/* binding */ escapeHtmlComment),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   genPropsAccessExp: () => (/* binding */ genPropsAccessExp),
/* harmony export */   generateCodeFrame: () => (/* binding */ generateCodeFrame),
/* harmony export */   getGlobalThis: () => (/* binding */ getGlobalThis),
/* harmony export */   hasChanged: () => (/* binding */ hasChanged),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   hyphenate: () => (/* binding */ hyphenate),
/* harmony export */   includeBooleanAttr: () => (/* binding */ includeBooleanAttr),
/* harmony export */   invokeArrayFns: () => (/* binding */ invokeArrayFns),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBooleanAttr: () => (/* binding */ isBooleanAttr),
/* harmony export */   isBuiltInDirective: () => (/* binding */ isBuiltInDirective),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isGloballyWhitelisted: () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   isHTMLTag: () => (/* binding */ isHTMLTag),
/* harmony export */   isIntegerKey: () => (/* binding */ isIntegerKey),
/* harmony export */   isKnownHtmlAttr: () => (/* binding */ isKnownHtmlAttr),
/* harmony export */   isKnownSvgAttr: () => (/* binding */ isKnownSvgAttr),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isModelListener: () => (/* binding */ isModelListener),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isOn: () => (/* binding */ isOn),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isReservedProp: () => (/* binding */ isReservedProp),
/* harmony export */   isSSRSafeAttrName: () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isSpecialBooleanAttr: () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isVoidTag: () => (/* binding */ isVoidTag),
/* harmony export */   looseEqual: () => (/* binding */ looseEqual),
/* harmony export */   looseIndexOf: () => (/* binding */ looseIndexOf),
/* harmony export */   looseToNumber: () => (/* binding */ looseToNumber),
/* harmony export */   makeMap: () => (/* binding */ makeMap),
/* harmony export */   normalizeClass: () => (/* binding */ normalizeClass),
/* harmony export */   normalizeProps: () => (/* binding */ normalizeProps),
/* harmony export */   normalizeStyle: () => (/* binding */ normalizeStyle),
/* harmony export */   objectToString: () => (/* binding */ objectToString),
/* harmony export */   parseStringStyle: () => (/* binding */ parseStringStyle),
/* harmony export */   propsToAttrMap: () => (/* binding */ propsToAttrMap),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   slotFlagsText: () => (/* binding */ slotFlagsText),
/* harmony export */   stringifyStyle: () => (/* binding */ stringifyStyle),
/* harmony export */   toDisplayString: () => (/* binding */ toDisplayString),
/* harmony export */   toHandlerKey: () => (/* binding */ toHandlerKey),
/* harmony export */   toNumber: () => (/* binding */ toNumber),
/* harmony export */   toRawType: () => (/* binding */ toRawType),
/* harmony export */   toTypeString: () => (/* binding */ toTypeString)
/* harmony export */ });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}

const EMPTY_OBJ =  true ? Object.freeze({}) : 0;
const EMPTY_ARR =  true ? Object.freeze([]) : 0;
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
const toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ``
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}

const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};

const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};

const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number") {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}

const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);

const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}

const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default()((highcharts__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: String,
      "default": ''
    },
    type: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    },
    id: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      chartOptions: {
        chart: {
          type: this.type // Replace 'chartType' with the desired chart type (e.g., 'line', 'bar', 'pie', etc.)
          // Additional chart-wide options can be added here
        },

        title: {
          text: this.name,
          align: 'center'
          // Additional title options can be added here
        },

        subtitle: {
          text: 'Chart Subtitle',
          align: 'center'
          // Additional subtitle options can be added here
        },

        xAxis: {
          title: {
            text: 'XC-axis Title'
          },
          categories: this.getId() // Replace with your X-axis categories
          // Additional X-axis options can be added here
        },

        yAxis: {
          title: {
            text: 'Y-axis Title'
          }
          // Additional Y-axis options can be added here
        },

        legend: {
          enabled: true
          // Additional legend options can be added here
        },

        tooltip: {
          enabled: true
          // Additional tooltip options can be added here
        },

        plotOptions: {
          // Additional plot options can be added here
        },
        series: this.getSeries()
        // Additional chart-wide options can be added here
      }
    };
  },

  computed: {
    structuredObj: function structuredObj() {
      var data = JSON.parse(this.data);
      var result = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        labels: [],
        datasets: []
      });
      var dynamicKeys = Object.keys(data[0]).filter(function (key) {
        return key !== 'id';
      });
      var setColours = data.map(function (item) {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
      data.forEach(function (item) {
        var id = item.id,
          values = _objectWithoutProperties(item, _excluded);
        result.labels.push(id);
        // Create a function to generate a random hex color
        var getRandomColor = function getRandomColor() {
          return "#" + Math.floor(Math.random() * 16777215).toString(16);
        };
        dynamicKeys.forEach(function (key) {
          var existingDataset = result.datasets.find(function (dataset) {
            return dataset.label === key;
          });
          if (!existingDataset) {
            var newDataset = {
              label: key,
              backgroundColor: setColours,
              // Start with a single random color
              data: [parseInt(values[key])]
            };
            result.datasets.push(newDataset);
          } else {
            existingDataset.data.push(parseInt(values[key]));
            existingDataset.backgroundColor.push(getRandomColor());
          }
        });
      });
      console.log(result, "<- reuslt");
      return result;
    }
  },
  methods: {
    getId: function getId() {
      var data = JSON.parse(this.data);
      // console.log(data.map(item => item.id));
      return data.map(function (item) {
        return item.id;
      });
    },
    getSeries: function getSeries() {
      var data = JSON.parse(this.data);
      var idKey = "id"; // Change this to the actual key that represents the id in your data objects
      var series = [];
      for (var key in data[0]) {
        if (key !== idKey) {
          var seriesObj = {
            name: key,
            data: data.map(function (item) {
              return parseFloat(item[key].replace(/,/g, ''));
            })
            // Additional series options can be added here
          };

          series.push(seriesObj);
        }
      }
      return series.map(function (seriesObj) {
        return _objectSpread({}, seriesObj);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=template&id=0e4c836c":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=template&id=0e4c836c ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_highcharts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("highcharts");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_highcharts, {
    "class": "hc",
    options: $data.chartOptions,
    ref: "chart"
  }, null, 8 /* PROPS */, ["options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.getSeries()), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/highcharts-vue/dist/highcharts-vue.min.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"),__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js")):0}(window,function(r,n){return i=[function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e,r){"use strict";r.r(e),r.d(e,"Chart",function(){return h}),r.d(e,"default",function(){return y});var e=r(0),c=r.n(e);function i(t,e){return function r(n,o,i){function t(t,e){!c.a.isObject(t,!i)||c.a.isClass(t)||c.a.isDOMElement(t)?n[e]=o[e]:n[e]=r(n[e]||c.a.isArray(t)?[]:{},t,i)}return c.a.isArray(o)?o.forEach(t):c.a.objectEach(o,t),n}({},t,e)}var u=r(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){var r;if(t)return"string"==typeof t?n(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function o(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach(function(t){var e,r;e=n,r=o[t=t],(t=function(t){t=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}var f={template:'<div ref="chart"></div>',props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}}},l=function(r,t){return t.split(".")[0]<3?o(o({},f),{},{render:function(t){return t("div",{ref:"chart"})},beforeDestroy:function(){this.chart&&this.chart.destroy()},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[i(t,this.deepCopyOnUpdate)].concat(s(this.updateArgs)))},deep:!0}},mounted:function(){var t=this.highcharts||r;this.options&&t[this.constructorType]?this.chart=t[this.constructorType](this.$refs.chart,i(this.options,!0),this.callback||null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')}}):o(o({},f),{},{render:function(){return Object(u.h)("div",{ref:"chartContainer"})},setup:function(n){var e=Object(u.ref)(null),o=Object(u.shallowRef)({});return Object(u.onMounted)(function(){var t=n.highcharts||r;n.options&&t[n.constructorType]?o.value=t[n.constructorType](e.value,i(n.options,!0),n.callback||null):n.options?console.warn("'".concat(n.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')}),Object(u.watch)(function(){return n.options},function(t,e){var r;(r=o.value).update.apply(r,[i(t,n.deepCopyOnUpdate)].concat(s(n.updateArgs)))},{deep:!0}),Object(u.onBeforeUnmount)(function(){o.value&&o.value.destroy()}),{chart:o,chartContainer:e,props:n}}})},h=l(c.a,u.version||r.n(u).a.version);function y(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",l(e.highcharts||c.a,t.version))}}],c={},o.m=i,o.c=c,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2);function o(t){var e;return(c[t]||(e=c[t]={i:t,l:!1,exports:{}},i[t].call(e.exports,e,e.exports,o),e.l=!0,e)).exports}var i,c});

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v11.1.0 (2023-06-05)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(U,M){ true&&module.exports?(M["default"]=M,module.exports=U.document?M(U):M): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return M(U)}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(0)})("undefined"!==typeof window?window:this,function(U){function M(a,y,I,L){a.hasOwnProperty(y)||(a[y]=L.apply(null,I),"function"===typeof CustomEvent&&U.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:y,module:a[y]}})))}
var a={};M(a,"Core/Globals.js",[],function(){var a;(function(a){a.SVG_NS="http://www.w3.org/2000/svg";a.product="Highcharts";a.version="11.1.0";a.win="undefined"!==typeof U?U:{};a.doc=a.win.document;a.svg=a.doc&&a.doc.createElementNS&&!!a.doc.createElementNS(a.SVG_NS,"svg").createSVGRect;a.userAgent=a.win.navigator&&a.win.navigator.userAgent||"";a.isChrome=-1!==a.userAgent.indexOf("Chrome");a.isFirefox=-1!==a.userAgent.indexOf("Firefox");a.isMS=/(edge|msie|trident)/i.test(a.userAgent)&&!a.win.opera;
a.isSafari=!a.isChrome&&-1!==a.userAgent.indexOf("Safari");a.isTouchDevice=/(Mobile|Android|Windows Phone)/.test(a.userAgent);a.isWebKit=-1!==a.userAgent.indexOf("AppleWebKit");a.deg2rad=2*Math.PI/360;a.hasBidiBug=a.isFirefox&&4>parseInt(a.userAgent.split("Firefox/")[1],10);a.hasTouch=!!a.win.TouchEvent;a.marginNames=["plotTop","marginRight","marginBottom","plotLeft"];a.noop=function(){};a.supportsPassiveEvents=function(){let x=!1;if(!a.isMS){const y=Object.defineProperty({},"passive",{get:function(){x=
!0}});a.win.addEventListener&&a.win.removeEventListener&&(a.win.addEventListener("testPassive",a.noop,y),a.win.removeEventListener("testPassive",a.noop,y))}return x}();a.charts=[];a.dateFormats={};a.seriesTypes={};a.symbolSizes={};a.chartCount=0})(a||(a={}));"";return a});M(a,"Core/Utilities.js",[a["Core/Globals.js"]],function(a){function x(c,b,f,k){const n=b?"Highcharts error":"Highcharts warning";32===c&&(c=`${n}: Deprecated member`);const r=u(c);let e=r?`${n} #${c}: www.highcharts.com/errors/${c}/`:
c.toString();if("undefined"!==typeof k){let c="";r&&(e+="?");E(k,function(b,n){c+=`\n - ${n}: ${b}`;r&&(e+=encodeURI(n)+"="+encodeURI(b))});e+=c}d(a,"displayError",{chart:f,code:c,message:e,params:k},function(){if(b)throw Error(e);q.console&&-1===x.messages.indexOf(e)&&console.warn(e)});x.messages.push(e)}function I(c,b){return parseInt(c,b||10)}function L(c){return"string"===typeof c}function C(c){c=Object.prototype.toString.call(c);return"[object Array]"===c||"[object Array Iterator]"===c}function z(c,
b){return!!c&&"object"===typeof c&&(!b||!C(c))}function H(c){return z(c)&&"number"===typeof c.nodeType}function B(c){const b=c&&c.constructor;return!(!z(c,!0)||H(c)||!b||!b.name||"Object"===b.name)}function u(c){return"number"===typeof c&&!isNaN(c)&&Infinity>c&&-Infinity<c}function v(c){return"undefined"!==typeof c&&null!==c}function l(c,b,f){const n=L(b)&&!v(f);let d;const k=(b,f)=>{v(b)?c.setAttribute(f,b):n?(d=c.getAttribute(f))||"class"!==f||(d=c.getAttribute(f+"Name")):c.removeAttribute(f)};
L(b)?k(f,b):E(b,k);return d}function p(c){return C(c)?c:[c]}function t(c,b){let n;c||(c={});for(n in b)c[n]=b[n];return c}function m(){const c=arguments,b=c.length;for(let n=0;n<b;n++){const b=c[n];if("undefined"!==typeof b&&null!==b)return b}}function h(c,b){a.isMS&&!a.svg&&b&&v(b.opacity)&&(b.filter=`alpha(opacity=${100*b.opacity})`);t(c.style,b)}function g(c){return Math.pow(10,Math.floor(Math.log(c)/Math.LN10))}function e(c,b){return 1E14<c?c:parseFloat(c.toPrecision(b||14))}function w(c,b,f){let n;
if("width"===b)return b=Math.min(c.offsetWidth,c.scrollWidth),f=c.getBoundingClientRect&&c.getBoundingClientRect().width,f<b&&f>=b-1&&(b=Math.floor(f)),Math.max(0,b-(w(c,"padding-left",!0)||0)-(w(c,"padding-right",!0)||0));if("height"===b)return Math.max(0,Math.min(c.offsetHeight,c.scrollHeight)-(w(c,"padding-top",!0)||0)-(w(c,"padding-bottom",!0)||0));if(c=q.getComputedStyle(c,void 0))n=c.getPropertyValue(b),m(f,"opacity"!==b)&&(n=I(n));return n}function E(c,b,f){for(const n in c)Object.hasOwnProperty.call(c,
n)&&b.call(f||c[n],c[n],n,c)}function F(c,b,f){function n(b,n){const f=c.removeEventListener;f&&f.call(c,b,n,!1)}function d(f){let d,K;c.nodeName&&(b?(d={},d[b]=!0):d=f,E(d,function(c,b){if(f[b])for(K=f[b].length;K--;)n(b,f[b][K].fn)}))}var k="function"===typeof c&&c.prototype||c;if(Object.hasOwnProperty.call(k,"hcEvents")){const c=k.hcEvents;b?(k=c[b]||[],f?(c[b]=k.filter(function(c){return f!==c.fn}),n(b,f)):(d(c),c[b]=[])):(d(c),delete k.hcEvents)}}function d(c,b,f,d){f=f||{};if(r.createEvent&&
(c.dispatchEvent||c.fireEvent&&c!==a)){var n=r.createEvent("Events");n.initEvent(b,!0,!0);f=t(n,f);c.dispatchEvent?c.dispatchEvent(f):c.fireEvent(b,f)}else if(c.hcEvents){f.target||t(f,{preventDefault:function(){f.defaultPrevented=!0},target:c,type:b});n=[];let d=c,K=!1;for(;d.hcEvents;)Object.hasOwnProperty.call(d,"hcEvents")&&d.hcEvents[b]&&(n.length&&(K=!0),n.unshift.apply(n,d.hcEvents[b])),d=Object.getPrototypeOf(d);K&&n.sort((c,b)=>c.order-b.order);n.forEach(b=>{!1===b.fn.call(c,f)&&f.preventDefault()})}d&&
!f.defaultPrevented&&d.call(c,f)}const {charts:k,doc:r,win:q}=a;(x||(x={})).messages=[];Math.easeInOutSine=function(c){return-.5*(Math.cos(Math.PI*c)-1)};var G=Array.prototype.find?function(c,b){return c.find(b)}:function(c,b){let f;const n=c.length;for(f=0;f<n;f++)if(b(c[f],f))return c[f]};E({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(c,b){a[b]=function(f){x(32,!1,void 0,{[`Highcharts.${b}`]:`use Array.${c}`});return Array.prototype[c].apply(f,[].slice.call(arguments,
1))}});let b;const f=function(){const c=Math.random().toString(36).substring(2,9)+"-";let f=0;return function(){return"highcharts-"+(b?"":c)+f++}}();q.jQuery&&(q.jQuery.fn.highcharts=function(){const c=[].slice.call(arguments);if(this[0])return c[0]?(new (a[L(c[0])?c.shift():"Chart"])(this[0],c[0],c[1]),this):k[l(this[0],"data-highcharts-chart")]});G={addEvent:function(c,b,f,d={}){var n="function"===typeof c&&c.prototype||c;Object.hasOwnProperty.call(n,"hcEvents")||(n.hcEvents={});n=n.hcEvents;a.Point&&
c instanceof a.Point&&c.series&&c.series.chart&&(c.series.chart.runTrackerClick=!0);const k=c.addEventListener;k&&k.call(c,b,f,a.supportsPassiveEvents?{passive:void 0===d.passive?-1!==b.indexOf("touch"):d.passive,capture:!1}:!1);n[b]||(n[b]=[]);n[b].push({fn:f,order:"number"===typeof d.order?d.order:Infinity});n[b].sort((c,b)=>c.order-b.order);return function(){F(c,b,f)}},arrayMax:function(c){let b=c.length,f=c[0];for(;b--;)c[b]>f&&(f=c[b]);return f},arrayMin:function(c){let b=c.length,f=c[0];for(;b--;)c[b]<
f&&(f=c[b]);return f},attr:l,clamp:function(c,b,f){return c>b?c<f?c:f:b},clearTimeout:function(c){v(c)&&clearTimeout(c)},correctFloat:e,createElement:function(c,b,f,d,K){c=r.createElement(c);b&&t(c,b);K&&h(c,{padding:"0",border:"none",margin:"0"});f&&h(c,f);d&&d.appendChild(c);return c},css:h,defined:v,destroyObjectProperties:function(c,b){E(c,function(f,n){f&&f!==b&&f.destroy&&f.destroy();delete c[n]})},diffObjects:function(c,b,f,d){function n(b,c,K,k){const A=f?c:b;E(b,function(f,q){if(!k&&d&&-1<
d.indexOf(q)&&c[q]){f=p(f);K[q]=[];for(let b=0;b<Math.max(f.length,c[q].length);b++)c[q][b]&&(void 0===f[b]?K[q][b]=c[q][b]:(K[q][b]={},n(f[b],c[q][b],K[q][b],k+1)))}else if(z(f,!0)&&!f.nodeType)K[q]=C(f)?[]:{},n(f,c[q]||{},K[q],k+1),0!==Object.keys(K[q]).length||"colorAxis"===q&&0===k||delete K[q];else if(b[q]!==c[q]||q in b&&!(q in c))K[q]=A[q]})}const k={};n(c,b,k,0);return k},discardElement:function(b){b&&b.parentElement&&b.parentElement.removeChild(b)},erase:function(b,f){let c=b.length;for(;c--;)if(b[c]===
f){b.splice(c,1);break}},error:x,extend:t,extendClass:function(b,f){const c=function(){};c.prototype=new b;t(c.prototype,f);return c},find:G,fireEvent:d,getClosestDistance:function(b,f){const c=!f;let d,n,k,q;b.forEach(b=>{if(1<b.length)for(q=n=b.length-1;0<q;q--)k=b[q]-b[q-1],0>k&&!c?(null===f||void 0===f?void 0:f(),f=void 0):k&&("undefined"===typeof d||k<d)&&(d=k)});return d},getMagnitude:g,getNestedProperty:function(b,f){for(b=b.split(".");b.length&&v(f);){const c=b.shift();if("undefined"===typeof c||
"__proto__"===c)return;if("this"===c){let b;z(f)&&(b=f["@this"]);return null!==b&&void 0!==b?b:f}f=f[c];if(!v(f)||"function"===typeof f||"number"===typeof f.nodeType||f===q)return}return f},getStyle:w,inArray:function(b,f,d){x(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return f.indexOf(b,d)},insertItem:function(b,f){const c=b.options.index,d=f.length;let n;for(n=b.options.isInternal?d:0;n<d+1;n++)if(!f[n]||u(c)&&c<m(f[n].options.index,f[n]._i)||f[n].options.isInternal){f.splice(n,0,
b);break}return n},isArray:C,isClass:B,isDOMElement:H,isFunction:function(b){return"function"===typeof b},isNumber:u,isObject:z,isString:L,keys:function(b){x(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)},merge:function(){let b,f=arguments,d={};const k=function(b,c){"object"!==typeof b&&(b={});E(c,function(f,d){"__proto__"!==d&&"constructor"!==d&&(!z(f,!0)||B(f)||H(f)?b[d]=c[d]:b[d]=k(b[d]||{},f))});return b};!0===f[0]&&(d=f[1],f=Array.prototype.slice.call(f,2));const K=
f.length;for(b=0;b<K;b++)d=k(d,f[b]);return d},normalizeTickInterval:function(b,f,d,k,K){let c=b;d=m(d,g(b));const n=b/d;f||(f=K?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===k&&(1===d?f=f.filter(function(b){return 0===b%1}):.1>=d&&(f=[1/d])));for(k=0;k<f.length&&!(c=f[k],K&&c*d>=b||!K&&n<=(f[k]+(f[k+1]||f[k]))/2);k++);return c=e(c*d,-Math.round(Math.log(.001)/Math.LN10))},objectEach:E,offset:function(b){const c=r.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,
left:0,width:0,height:0};return{top:b.top+(q.pageYOffset||c.scrollTop)-(c.clientTop||0),left:b.left+(q.pageXOffset||c.scrollLeft)-(c.clientLeft||0),width:b.width,height:b.height}},pad:function(b,f,d){return Array((f||2)+1-String(b).replace("-","").length).join(d||"0")+b},pick:m,pInt:I,pushUnique:function(b,f){return 0>b.indexOf(f)&&!!b.push(f)},relativeLength:function(b,f,d){return/%$/.test(b)?f*parseFloat(b)/100+(d||0):parseFloat(b)},removeEvent:F,splat:p,stableSort:function(b,f){const c=b.length;
let d,k;for(k=0;k<c;k++)b[k].safeI=k;b.sort(function(b,c){d=f(b,c);return 0===d?b.safeI-c.safeI:d});for(k=0;k<c;k++)delete b[k].safeI},syncTimeout:function(b,f,d){if(0<f)return setTimeout(b,f,d);b.call(0,d);return-1},timeUnits:{millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},uniqueKey:f,useSerialIds:function(c){return b=m(c,b)},wrap:function(b,f,d){const c=b[f];b[f]=function(){const b=arguments,f=this;return d.apply(this,[function(){return c.apply(f,
arguments.length?arguments:b)}].concat([].slice.call(arguments)))}}};"";return G});M(a,"Core/Chart/ChartDefaults.js",[],function(){return{alignThresholds:!1,panning:{enabled:!1,type:"x"},styledMode:!1,borderRadius:0,colorCount:10,allowMutatingData:!0,ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},reflow:!0,type:"line",zooming:{singleTouch:!1,resetButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}}},width:null,height:null,
borderColor:"#334eff",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"}});M(a,"Core/Color/Color.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y){const {isNumber:x,merge:L,pInt:C}=y;class z{static parse(a){return a?new z(a):z.None}constructor(x){this.rgba=[NaN,NaN,NaN,NaN];this.input=x;const B=a.Color;if(B&&B!==z)return new B(x);this.init(x)}init(a){let B;let u;if("object"===typeof a&&"undefined"!==typeof a.stops)this.stops=a.stops.map(l=>new z(l[1]));else if("string"===typeof a){this.input=
a=z.names[a.toLowerCase()]||a;if("#"===a.charAt(0)){var v=a.length;var l=parseInt(a.substr(1),16);7===v?B=[(l&16711680)>>16,(l&65280)>>8,l&255,1]:4===v&&(B=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])}if(!B)for(l=z.parsers.length;l--&&!B;)u=z.parsers[l],(v=u.regex.exec(a))&&(B=u.parse(v))}B&&(this.rgba=B)}get(a){const B=this.input,u=this.rgba;if("object"===typeof B&&"undefined"!==typeof this.stops){const v=L(B);v.stops=[].slice.call(v.stops);this.stops.forEach((l,p)=>{v.stops[p]=[v.stops[p][0],
l.get(a)]});return v}return u&&x(u[0])?"rgb"===a||!a&&1===u[3]?"rgb("+u[0]+","+u[1]+","+u[2]+")":"a"===a?`${u[3]}`:"rgba("+u.join(",")+")":B}brighten(a){const B=this.rgba;if(this.stops)this.stops.forEach(function(u){u.brighten(a)});else if(x(a)&&0!==a)for(let u=0;3>u;u++)B[u]+=C(255*a),0>B[u]&&(B[u]=0),255<B[u]&&(B[u]=255);return this}setOpacity(a){this.rgba[3]=a;return this}tweenTo(a,B){const u=this.rgba,v=a.rgba;if(!x(u[0])||!x(v[0]))return a.input||"none";a=1!==v[3]||1!==u[3];return(a?"rgba(":
"rgb(")+Math.round(v[0]+(u[0]-v[0])*(1-B))+","+Math.round(v[1]+(u[1]-v[1])*(1-B))+","+Math.round(v[2]+(u[2]-v[2])*(1-B))+(a?","+(v[3]+(u[3]-v[3])*(1-B)):"")+")"}}z.names={white:"#ffffff",black:"#000000"};z.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),
C(a[3]),1]}}];z.None=new z("");"";return z});M(a,"Core/Color/Palettes.js",[],function(){return{colors:"#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(" ")}});M(a,"Core/Time.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y){const {win:x}=a,{defined:L,error:C,extend:z,isObject:H,merge:B,objectEach:u,pad:v,pick:l,splat:p,timeUnits:t}=y,m=a.isSafari&&x.Intl&&x.Intl.DateTimeFormat.prototype.formatRange,h=a.isSafari&&x.Intl&&!x.Intl.DateTimeFormat.prototype.formatRange;
class g{constructor(e){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=x.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(e)}get(e,g){if(this.variableTimezone||this.timezoneOffset){const h=g.getTime(),m=h-this.getTimezoneOffset(g);g.setTime(m);e=g["getUTC"+e]();g.setTime(h);return e}return this.useUTC?g["getUTC"+e]():g["get"+e]()}set(e,g,h){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===e||"Seconds"===e||"Minutes"===e&&0===this.getTimezoneOffset(g)%
36E5)return g["setUTC"+e](h);var w=this.getTimezoneOffset(g);w=g.getTime()-w;g.setTime(w);g["setUTC"+e](h);e=this.getTimezoneOffset(g);w=g.getTime()+e;return g.setTime(w)}return this.useUTC||m&&"FullYear"===e?g["setUTC"+e](h):g["set"+e](h)}update(e={}){const g=l(e.useUTC,!0);this.options=e=B(!0,this.options,e);this.Date=e.Date||x.Date||Date;this.timezoneOffset=(this.useUTC=g)&&e.timezoneOffset||void 0;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=g&&!(!e.getTimezoneOffset&&
!e.timezone)}makeTime(e,g,m,p,d,k){let r,q,w;this.useUTC?(r=this.Date.UTC.apply(0,arguments),q=this.getTimezoneOffset(r),r+=q,w=this.getTimezoneOffset(r),q!==w?r+=w-q:q-36E5!==this.getTimezoneOffset(r-36E5)||h||(r-=36E5)):r=(new this.Date(e,g,l(m,1),l(p,0),l(d,0),l(k,0))).getTime();return r}timezoneOffsetFunction(){const e=this,g=this.options,h=g.getTimezoneOffset,m=g.moment||x.moment;if(!this.useUTC)return function(d){return 6E4*(new Date(d.toString())).getTimezoneOffset()};if(g.timezone){if(m)return function(d){return 6E4*
-m.tz(d,g.timezone).utcOffset()};C(25)}return this.useUTC&&h?function(d){return 6E4*h(d.valueOf())}:function(){return 6E4*(e.timezoneOffset||0)}}dateFormat(e,g,h){if(!L(g)||isNaN(g))return a.defaultOptions.lang&&a.defaultOptions.lang.invalidDate||"";e=l(e,"%Y-%m-%d %H:%M:%S");const m=this;var d=new this.Date(g);const k=this.get("Hours",d),r=this.get("Day",d),q=this.get("Date",d),w=this.get("Month",d),b=this.get("FullYear",d),f=a.defaultOptions.lang,c=f&&f.weekdays,n=f&&f.shortWeekdays;d=z({a:n?n[r]:
c[r].substr(0,3),A:c[r],d:v(q),e:v(q,2," "),w:r,b:f.shortMonths[w],B:f.months[w],m:v(w+1),o:w+1,y:b.toString().substr(2,2),Y:b,H:v(k),k,I:v(k%12||12),l:k%12||12,M:v(this.get("Minutes",d)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:v(d.getSeconds()),L:v(Math.floor(g%1E3),3)},a.dateFormats);u(d,function(b,c){for(;-1!==e.indexOf("%"+c);)e=e.replace("%"+c,"function"===typeof b?b.call(m,g):b)});return h?e.substr(0,1).toUpperCase()+e.substr(1):e}resolveDTLFormat(e){return H(e,!0)?e:(e=p(e),{main:e[0],from:e[1],
to:e[2]})}getTimeTicks(e,g,h,m){const d=this,k=[],r={};var q=new d.Date(g);const w=e.unitRange,b=e.count||1;let f;m=l(m,1);if(L(g)){d.set("Milliseconds",q,w>=t.second?0:b*Math.floor(d.get("Milliseconds",q)/b));w>=t.second&&d.set("Seconds",q,w>=t.minute?0:b*Math.floor(d.get("Seconds",q)/b));w>=t.minute&&d.set("Minutes",q,w>=t.hour?0:b*Math.floor(d.get("Minutes",q)/b));w>=t.hour&&d.set("Hours",q,w>=t.day?0:b*Math.floor(d.get("Hours",q)/b));w>=t.day&&d.set("Date",q,w>=t.month?1:Math.max(1,b*Math.floor(d.get("Date",
q)/b)));if(w>=t.month){d.set("Month",q,w>=t.year?0:b*Math.floor(d.get("Month",q)/b));var c=d.get("FullYear",q)}w>=t.year&&d.set("FullYear",q,c-c%b);w===t.week&&(c=d.get("Day",q),d.set("Date",q,d.get("Date",q)-c+m+(c<m?-7:0)));c=d.get("FullYear",q);m=d.get("Month",q);const n=d.get("Date",q),e=d.get("Hours",q);g=q.getTime();!d.variableTimezone&&d.useUTC||!L(h)||(f=h-g>4*t.month||d.getTimezoneOffset(g)!==d.getTimezoneOffset(h));g=q.getTime();for(q=1;g<h;)k.push(g),g=w===t.year?d.makeTime(c+q*b,0):w===
t.month?d.makeTime(c,m+q*b):!f||w!==t.day&&w!==t.week?f&&w===t.hour&&1<b?d.makeTime(c,m,n,e+q*b):g+w*b:d.makeTime(c,m,n+q*b*(w===t.day?1:7)),q++;k.push(g);w<=t.hour&&1E4>k.length&&k.forEach(function(b){0===b%18E5&&"000000000"===d.dateFormat("%H%M%S%L",b)&&(r[b]="day")})}k.info=z(e,{higherRanks:r,totalRange:w*b});return k}getDateFormat(e,g,h,m){const d=this.dateFormat("%m-%d %H:%M:%S.%L",g),k={millisecond:15,second:12,minute:9,hour:6,day:3};let r,q="millisecond";for(r in t){if(e===t.week&&+this.dateFormat("%w",
g)===h&&"00:00:00.000"===d.substr(6)){r="week";break}if(t[r]>e){r=q;break}if(k[r]&&d.substr(k[r])!=="01-01 00:00:00.000".substr(k[r]))break;"week"!==r&&(q=r)}return this.resolveDTLFormat(m[r]).main}}"";return g});M(a,"Core/Defaults.js",[a["Core/Chart/ChartDefaults.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Color/Palettes.js"],a["Core/Time.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z){const {isTouchDevice:x,svg:B}=I,{merge:u}=z,v={colors:L.colors,symbols:["circle","diamond","square",
"triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,
timezoneOffset:0,useUTC:!0},chart:a,title:{style:{color:"#333333",fontWeight:"bold"},text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{style:{color:"#666666",fontSize:"0.8em"},text:"",align:"center",widthAdjust:-44},caption:{margin:15,style:{color:"#666666",fontSize:"0.8em"},text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},legend:{enabled:!0,align:"center",alignColumns:!0,className:"highcharts-no-tooltip",layout:"horizontal",itemMarginBottom:2,itemMarginTop:2,labelFormatter:function(){return this.name},
borderColor:"#999999",borderRadius:0,navigation:{style:{fontSize:"0.8em"},activeColor:"#0022ff",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"0.8em",textDecoration:"none",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#666666",textDecoration:"line-through"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontSize:"0.8em",fontWeight:"bold"}}},
loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:B,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %e %b, %H:%M:%S.%L",second:"%A, %e %b, %H:%M:%S",minute:"%A, %e %b, %H:%M",hour:"%A, %e %b, %H:%M",day:"%A, %e %b %Y",week:"Week from %A, %e %b %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerShape:"callout",hideDelay:500,padding:8,shape:"callout",shared:!1,
snap:x?25:10,headerFormat:'<span style="font-size: 0.8em">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:"#ffffff",borderWidth:void 0,shadow:!0,stickOnContact:!1,style:{color:"#333333",cursor:"default",fontSize:"0.8em"},useHTML:!1},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"0.6em"},
text:"Highcharts.com"}};v.chart.styledMode=!1;"";const l=new C(v.time);a={defaultOptions:v,defaultTime:l,getOptions:function(){return v},setOptions:function(a){u(!0,v,a);if(a.time||a.global)I.time?I.time.update(u(v.global,v.time,a.global,a.time)):I.time=l;return v}};"";return a});M(a,"Core/Animation/Fx.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y,I){const {parse:x}=a,{win:C}=y,{isNumber:z,objectEach:H}=I;class B{constructor(a,v,l){this.pos=NaN;this.options=
v;this.elem=a;this.prop=l}dSetter(){var a=this.paths;const v=a&&a[0];a=a&&a[1];const l=this.now||0;let p=[];if(1!==l&&v&&a)if(v.length===a.length&&1>l)for(let t=0;t<a.length;t++){const m=v[t],h=a[t],g=[];for(let e=0;e<h.length;e++){const w=m[e],a=h[e];z(w)&&z(a)&&("A"!==h[0]||4!==e&&5!==e)?g[e]=w+l*(a-w):g[e]=a}p.push(g)}else p=a;else p=this.toD||[];this.elem.attr("d",p,void 0,!0)}update(){const a=this.elem,v=this.prop,l=this.now,p=this.options.step;if(this[v+"Setter"])this[v+"Setter"]();else a.attr?
a.element&&a.attr(v,l,null,!0):a.style[v]=l+this.unit;p&&p.call(a,l,this)}run(a,v,l){const p=this,t=p.options,m=function(e){return m.stopped?!1:p.step(e)},h=C.requestAnimationFrame||function(e){setTimeout(e,13)},g=function(){for(let e=0;e<B.timers.length;e++)B.timers[e]()||B.timers.splice(e--,1);B.timers.length&&h(g)};a!==v||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=a,this.end=v,this.unit=l,this.now=this.start,this.pos=0,m.elem=this.elem,m.prop=this.prop,m()&&1===B.timers.push(m)&&
h(g)):(delete t.curAnim[this.prop],t.complete&&0===Object.keys(t.curAnim).length&&t.complete.call(this.elem))}step(a){const v=+new Date,l=this.options,p=this.elem,t=l.complete,m=l.duration,h=l.curAnim;let g;p.attr&&!p.element?a=!1:a||v>=m+this.startTime?(this.now=this.end,this.pos=1,this.update(),g=h[this.prop]=!0,H(h,function(e){!0!==e&&(g=!1)}),g&&t&&t.call(p),a=!1):(this.pos=l.easing((v-this.startTime)/m),this.now=this.start+(this.end-this.start)*this.pos,this.update(),a=!0);return a}initPath(a,
v,l){function p(d,k){for(;d.length<E;){var r=d[0];const q=k[E-d.length];q&&"M"===r[0]&&(d[0]="C"===q[0]?["C",r[1],r[2],r[1],r[2],r[1],r[2]]:["L",r[1],r[2]]);d.unshift(r);g&&(r=d.pop(),d.push(d[d.length-1],r))}}function t(d,k){for(;d.length<E;)if(k=d[Math.floor(d.length/e)-1].slice(),"C"===k[0]&&(k[1]=k[5],k[2]=k[6]),g){const r=d[Math.floor(d.length/e)].slice();d.splice(d.length/2,0,k,r)}else d.push(k)}const m=a.startX,h=a.endX;l=l.slice();const g=a.isArea,e=g?2:1;let w,E,F;v=v&&v.slice();if(!v)return[l,
l];if(m&&h&&h.length){for(a=0;a<m.length;a++)if(m[a]===h[0]){w=a;break}else if(m[0]===h[h.length-m.length+a]){w=a;F=!0;break}else if(m[m.length-1]===h[h.length-m.length+a]){w=m.length-a;break}"undefined"===typeof w&&(v=[])}v.length&&z(w)&&(E=l.length+w*e,F?(p(v,l),t(l,v)):(p(l,v),t(v,l)));return[v,l]}fillSetter(){B.prototype.strokeSetter.apply(this,arguments)}strokeSetter(){this.elem.attr(this.prop,x(this.start).tweenTo(x(this.end),this.pos),void 0,!0)}}B.timers=[];return B});M(a,"Core/Animation/AnimationUtilities.js",
[a["Core/Animation/Fx.js"],a["Core/Utilities.js"]],function(a,y){function x(a){return u(a)?v({duration:500,defer:0},a):{duration:a?500:0,defer:0}}function L(l,m){let h=a.timers.length;for(;h--;)a.timers[h].elem!==l||m&&m!==a.timers[h].prop||(a.timers[h].stopped=!0)}const {defined:C,getStyle:z,isArray:H,isNumber:B,isObject:u,merge:v,objectEach:l,pick:p}=y;return{animate:function(p,m,h){let g,e="",w,E,F;u(h)||(F=arguments,h={duration:F[2],easing:F[3],complete:F[4]});B(h.duration)||(h.duration=400);
h.easing="function"===typeof h.easing?h.easing:Math[h.easing]||Math.easeInOutSine;h.curAnim=v(m);l(m,function(d,k){L(p,k);E=new a(p,h,k);w=void 0;"d"===k&&H(m.d)?(E.paths=E.initPath(p,p.pathArray,m.d),E.toD=m.d,g=0,w=1):p.attr?g=p.attr(k):(g=parseFloat(z(p,k))||0,"opacity"!==k&&(e="px"));w||(w=d);"string"===typeof w&&w.match("px")&&(w=w.replace(/px/g,""));E.run(g,w,e)})},animObject:x,getDeferredAnimation:function(a,m,h){const g=x(m);let e=0,w=0;(h?[h]:a.series).forEach(h=>{h=x(h.options.animation);
e=m&&C(m.defer)?g.defer:Math.max(e,h.duration+h.defer);w=Math.min(g.duration,h.duration)});a.renderer.forExport&&(e=0);return{defer:Math.max(0,e-w),duration:Math.min(e,w)}},setAnimation:function(a,m){m.renderer.globalAnimation=p(a,m.options.chart.animation,!0)},stop:L}});M(a,"Core/Renderer/HTML/AST.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y){const {SVG_NS:x,win:L}=a,{attr:C,createElement:z,css:H,error:B,isFunction:u,isString:v,objectEach:l,splat:p}=y;({trustedTypes:y}=L);const t=
y&&u(y.createPolicy)&&y.createPolicy("highcharts",{createHTML:e=>e});y=t?t.createHTML(""):"";try{var m=!!(new DOMParser).parseFromString(y,"text/html")}catch(e){m=!1}const h=m;class g{static filterUserAttributes(e){l(e,(h,m)=>{let a=!0;-1===g.allowedAttributes.indexOf(m)&&(a=!1);-1!==["background","dynsrc","href","lowsrc","src"].indexOf(m)&&(a=v(h)&&g.allowedReferences.some(d=>0===h.indexOf(d)));a||(B(33,!1,void 0,{"Invalid attribute in config":`${m}`}),delete e[m]);v(h)&&e[m]&&(e[m]=h.replace(/</g,
"&lt;"))});return e}static parseStyle(e){return e.split(";").reduce((e,g)=>{g=g.split(":").map(d=>d.trim());const h=g.shift();h&&g.length&&(e[h.replace(/-([a-z])/g,d=>d[1].toUpperCase())]=g.join(":"));return e},{})}static setElementHTML(e,h){e.innerHTML=g.emptyHTML;h&&(new g(h)).addToDOM(e)}constructor(e){this.nodes="string"===typeof e?this.parseMarkup(e):e}addToDOM(e){function h(e,m){let d;p(e).forEach(function(k){var e=k.tagName;const q=k.textContent?a.doc.createTextNode(k.textContent):void 0,w=
g.bypassHTMLFiltering;let b;if(e)if("#text"===e)b=q;else if(-1!==g.allowedTags.indexOf(e)||w){e=a.doc.createElementNS("svg"===e?x:m.namespaceURI||x,e);const f=k.attributes||{};l(k,function(b,d){"tagName"!==d&&"attributes"!==d&&"children"!==d&&"style"!==d&&"textContent"!==d&&(f[d]=b)});C(e,w?f:g.filterUserAttributes(f));k.style&&H(e,k.style);q&&e.appendChild(q);h(k.children||[],e);b=e}else B(33,!1,void 0,{"Invalid tagName in config":e});b&&m.appendChild(b);d=b});return d}return h(this.nodes,e)}parseMarkup(e){const m=
[];e=e.trim().replace(/ style=(["'])/g," data-style=$1");if(h)e=(new DOMParser).parseFromString(t?t.createHTML(e):e,"text/html");else{const g=z("div");g.innerHTML=e;e={body:g}}const a=(e,d)=>{var k=e.nodeName.toLowerCase();const r={tagName:k};"#text"===k&&(r.textContent=e.textContent||"");if(k=e.attributes){const d={};[].forEach.call(k,k=>{"data-style"===k.name?r.style=g.parseStyle(k.value):d[k.name]=k.value});r.attributes=d}if(e.childNodes.length){const d=[];[].forEach.call(e.childNodes,k=>{a(k,
d)});d.length&&(r.children=d)}d.push(r)};[].forEach.call(e.body.childNodes,e=>a(e,m));return m}}g.allowedAttributes="alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
g.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" ");g.allowedTags="a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" ");g.emptyHTML=y;g.bypassHTMLFiltering=
!1;"";return g});M(a,"Core/Templating.js",[a["Core/Defaults.js"],a["Core/Utilities.js"]],function(a,y){function x(h="",g,e){const a=/\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g,l=/\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g,v=[],d=/f$/,k=/\.([0-9])/,r=C.lang,q=e&&e.time||z,G=e&&e.numberFormatter||L,b=(b="")=>{let c;return"true"===b?!0:"false"===b?!1:(c=Number(b)).toString()===b?c:B(b,g)};let f,c,n=0,P;for(;null!==(f=a.exec(h));){const b=l.exec(f[1]);b&&(f=b,P=!0);c&&c.isBlock||(c={ctx:g,expression:f[1],
find:f[0],isBlock:"#"===f[1].charAt(0),start:f.index,startInner:f.index+f[0].length,length:f[0].length});var D=f[1].split(" ")[0].replace("#","");m[D]&&(c.isBlock&&D===c.fn&&n++,c.fn||(c.fn=D));D="else"===f[1];if(c.isBlock&&c.fn&&(f[1]===`/${c.fn}`||D))if(n)D||n--;else{var K=c.startInner;K=h.substr(K,f.index-K);void 0===c.body?(c.body=K,c.startInner=f.index+f[0].length):c.elseBody=K;c.find+=K+f[0];D||(v.push(c),c=void 0)}else c.isBlock||v.push(c);if(b&&(null===c||void 0===c||!c.isBlock))break}v.forEach(c=>
{const {body:f,elseBody:n,expression:K,fn:e}=c;var A;if(e){var a=[c],w=K.split(" ");for(A=m[e].length;A--;)a.unshift(b(w[A+1]));A=m[e].apply(g,a);c.isBlock&&"boolean"===typeof A&&(A=x(A?f:n,g))}else a=K.split(":"),A=b(a.shift()||""),a.length&&"number"===typeof A&&(a=a.join(":"),d.test(a)?(w=parseInt((a.match(k)||["","-1"])[1],10),null!==A&&(A=G(A,w,r.decimalPoint,-1<a.indexOf(",")?r.thousandsSep:""))):A=q.dateFormat(a,A));h=h.replace(c.find,p(A,""))});return P?x(h,g,e):h}function L(h,g,e,a){h=+h||
0;g=+g;const m=C.lang;var w=(h.toString().split(".")[1]||"").split("e")[0].length;const d=h.toString().split("e"),k=g;if(-1===g)g=Math.min(w,20);else if(!v(g))g=2;else if(g&&d[1]&&0>d[1]){var r=g+ +d[1];0<=r?(d[0]=(+d[0]).toExponential(r).split("e")[0],g=r):(d[0]=d[0].split(".")[0]||0,h=20>g?(d[0]*Math.pow(10,d[1])).toFixed(g):0,d[1]=0)}r=(Math.abs(d[1]?d[0]:h)+Math.pow(10,-Math.max(g,w)-1)).toFixed(g);w=String(t(r));const q=3<w.length?w.length%3:0;e=p(e,m.decimalPoint);a=p(a,m.thousandsSep);h=(0>
h?"-":"")+(q?w.substr(0,q)+a:"");h=0>+d[1]&&!k?"0":h+w.substr(q).replace(/(\d{3})(?=\d)/g,"$1"+a);g&&(h+=e+r.slice(-g));d[1]&&0!==+h&&(h+="e"+d[1]);return h}const {defaultOptions:C,defaultTime:z}=a,{extend:H,getNestedProperty:B,isArray:u,isNumber:v,isObject:l,pick:p,pInt:t}=y,m={add:(h,g)=>h+g,divide:(h,g)=>0!==g?h/g:"",eq:(h,g)=>h==g,each:function(h){const g=arguments[arguments.length-1];return u(h)?h.map((e,a)=>x(g.body,H(l(e)?e:{"@this":e},{"@index":a,"@first":0===a,"@last":a===h.length-1}))).join(""):
!1},ge:(h,g)=>h>=g,gt:(h,g)=>h>g,"if":h=>!!h,le:(h,g)=>h<=g,lt:(h,g)=>h<g,multiply:(h,g)=>h*g,ne:(h,g)=>h!=g,subtract:(h,g)=>h-g,unless:h=>!h};return{dateFormat:function(h,g,e){return z.dateFormat(h,g,e)},format:x,helpers:m,numberFormat:L}});M(a,"Core/Renderer/RendererUtilities.js",[a["Core/Utilities.js"]],function(a){const {clamp:x,pick:I,stableSort:L}=a;var C;(function(a){function y(a,u,v){const l=a;var p=l.reducedLen||u,t=(e,g)=>(g.rank||0)-(e.rank||0);const m=(e,g)=>e.target-g.target;let h,g=
!0,e=[],w=0;for(h=a.length;h--;)w+=a[h].size;if(w>p){L(a,t);for(w=h=0;w<=p;)w+=a[h].size,h++;e=a.splice(h-1,a.length)}L(a,m);for(a=a.map(e=>({size:e.size,targets:[e.target],align:I(e.align,.5)}));g;){for(h=a.length;h--;)p=a[h],t=(Math.min.apply(0,p.targets)+Math.max.apply(0,p.targets))/2,p.pos=x(t-p.size*p.align,0,u-p.size);h=a.length;for(g=!1;h--;)0<h&&a[h-1].pos+a[h-1].size>a[h].pos&&(a[h-1].size+=a[h].size,a[h-1].targets=a[h-1].targets.concat(a[h].targets),a[h-1].align=.5,a[h-1].pos+a[h-1].size>
u&&(a[h-1].pos=u-a[h-1].size),a.splice(h,1),g=!0)}l.push.apply(l,e);h=0;a.some(e=>{let g=0;return(e.targets||[]).some(()=>{l[h].pos=e.pos+g;if("undefined"!==typeof v&&Math.abs(l[h].pos-l[h].target)>v)return l.slice(0,h+1).forEach(d=>delete d.pos),l.reducedLen=(l.reducedLen||u)-.1*u,l.reducedLen>.1*u&&y(l,u,v),!0;g+=l[h].size;h++;return!1})});L(l,m);return l}a.distribute=y})(C||(C={}));return C});M(a,"Core/Renderer/SVG/SVGElement.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Color/Color.js"],
a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y,I,L){const {animate:x,animObject:z,stop:H}=a,{deg2rad:B,doc:u,svg:v,SVG_NS:l,win:p}=I,{addEvent:t,attr:m,createElement:h,css:g,defined:e,erase:w,extend:E,fireEvent:F,isArray:d,isFunction:k,isObject:r,isString:q,merge:G,objectEach:b,pick:f,pInt:c,syncTimeout:n,uniqueKey:P}=L;class D{constructor(){this.element=void 0;this.onEvents={};this.opacity=1;this.renderer=void 0;this.SVG_NS=l}_defaultGetter(b){b=f(this[b+"Value"],this[b],this.element?
this.element.getAttribute(b):null,0);/^[\-0-9\.]+$/.test(b)&&(b=parseFloat(b));return b}_defaultSetter(b,c,f){f.setAttribute(c,b)}add(b){const c=this.renderer,f=this.element;let d;b&&(this.parentGroup=b);"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&c.buildText(this);this.added=!0;if(!b||b.handleZ||this.zIndex)d=this.zIndexSetter();d||(b?b.element:c.box).appendChild(f);if(this.onAdd)this.onAdd();return this}addClass(b,c){const f=c?"":this.attr("class")||"";b=(b||"").split(/ /g).reduce(function(b,
c){-1===f.indexOf(c)&&b.push(c);return b},f?[f]:[]).join(" ");b!==f&&this.attr("class",b);return this}afterSetters(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)}align(b,c,d){const k={};var n=this.renderer,e=n.alignedObjects,A;let K,g;if(b){if(this.alignOptions=b,this.alignByTranslate=c,!d||q(d))this.alignTo=A=d||"renderer",w(e,this),e.push(this),d=void 0}else b=this.alignOptions,c=this.alignByTranslate,A=this.alignTo;d=f(d,n[A],"scrollablePlotBox"===A?n.plotBox:void 0,n);A=b.align;
const a=b.verticalAlign;n=(d.x||0)+(b.x||0);e=(d.y||0)+(b.y||0);"right"===A?K=1:"center"===A&&(K=2);K&&(n+=(d.width-(b.width||0))/K);k[c?"translateX":"x"]=Math.round(n);"bottom"===a?g=1:"middle"===a&&(g=2);g&&(e+=(d.height-(b.height||0))/g);k[c?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](k);this.placed=!0;this.alignAttr=k;return this}alignSetter(b){const c={left:"start",center:"middle",right:"end"};c[b]&&(this.alignValue=b,this.element.setAttribute("text-anchor",c[b]))}animate(c,
d,k){const e=z(f(d,this.renderer.globalAnimation,!0));d=e.defer;u.hidden&&(e.duration=0);0!==e.duration?(k&&(e.complete=k),n(()=>{this.element&&x(this,c,e)},d)):(this.attr(c,void 0,k||e.complete),b(c,function(b,c){e.step&&e.step.call(this,b,{prop:c,pos:1,elem:this})},this));return this}applyTextOutline(b){const c=this.element;-1!==b.indexOf("contrast")&&(b=b.replace(/contrast/g,this.renderer.getContrast(c.style.fill)));var f=b.split(" ");b=f[f.length-1];if((f=f[0])&&"none"!==f&&I.svg){this.fakeTS=
!0;f=f.replace(/(^[\d\.]+)(.*?)$/g,function(b,c,f){return 2*Number(c)+f});this.removeTextOutline();const d=u.createElementNS(l,"tspan");m(d,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":f,"stroke-linejoin":"round"});b=c.querySelector("textPath")||c;[].forEach.call(b.childNodes,b=>{const c=b.cloneNode(!0);c.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(b=>c.removeAttribute(b));d.appendChild(c)});let k=0;[].forEach.call(b.querySelectorAll("text tspan"),b=>{k+=
Number(b.getAttribute("dy"))});f=u.createElementNS(l,"tspan");f.textContent="\u200b";m(f,{x:Number(c.getAttribute("x")),dy:-k});d.appendChild(f);b.insertBefore(d,b.firstChild)}}attr(c,f,d,k){const n=this.element,e=D.symbolCustomAttribs;let A,q,g=this,a,K;"string"===typeof c&&"undefined"!==typeof f&&(A=c,c={},c[A]=f);"string"===typeof c?g=(this[c+"Getter"]||this._defaultGetter).call(this,c,n):(b(c,function(b,f){a=!1;k||H(this,f);this.symbolName&&-1!==e.indexOf(f)&&(q||(this.symbolAttr(c),q=!0),a=!0);
!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);a||(K=this[f+"Setter"]||this._defaultSetter,K.call(this,b,f,n))},this),this.afterSetters());d&&d.call(this);return g}clip(b){return this.attr("clip-path",b?"url("+this.renderer.url+"#"+b.id+")":"none")}crisp(b,c){c=c||b.strokeWidth||0;const f=Math.round(c)%2/2;b.x=Math.floor(b.x||this.x||0)+f;b.y=Math.floor(b.y||this.y||0)+f;b.width=Math.floor((b.width||this.width||0)-2*f);b.height=Math.floor((b.height||this.height||0)-2*f);e(b.strokeWidth)&&
(b.strokeWidth=c);return b}complexColor(c,f,k){const n=this.renderer;let q,g,A,a,r,K,h,J,m,O,w=[],l;F(this.renderer,"complexColor",{args:arguments},function(){c.radialGradient?g="radialGradient":c.linearGradient&&(g="linearGradient");if(g){A=c[g];r=n.gradients;K=c.stops;m=k.radialReference;d(A)&&(c[g]=A={x1:A[0],y1:A[1],x2:A[2],y2:A[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===g&&m&&!e(A.gradientUnits)&&(a=A,A=G(A,n.getRadialAttr(m,a),{gradientUnits:"userSpaceOnUse"}));b(A,function(b,c){"id"!==
c&&w.push(c,b)});b(K,function(b){w.push(b)});w=w.join(",");if(r[w])O=r[w].attr("id");else{A.id=O=P();const b=r[w]=n.createElement(g).attr(A).add(n.defs);b.radAttr=a;b.stops=[];K.forEach(function(c){0===c[1].indexOf("rgba")?(q=y.parse(c[1]),h=q.get("rgb"),J=q.get("a")):(h=c[1],J=1);c=n.createElement("stop").attr({offset:c[0],"stop-color":h,"stop-opacity":J}).add(b);b.stops.push(c)})}l="url("+n.url+"#"+O+")";k.setAttribute(f,l);k.gradient=w;c.toString=function(){return l}}})}css(f){const d=this.styles,
k={},n=this.element;let e,q=!d;d&&b(f,function(b,c){d&&d[c]!==b&&(k[c]=b,q=!0)});if(q){d&&(f=E(d,k));null===f.width||"auto"===f.width?delete this.textWidth:"text"===n.nodeName.toLowerCase()&&f.width&&(e=this.textWidth=c(f.width));this.styles=f;e&&!v&&this.renderer.forExport&&delete f.width;const b=G(f);n.namespaceURI===this.SVG_NS&&(["textOutline","textOverflow","width"].forEach(c=>b&&delete b[c]),b.color&&(b.fill=b.color));g(n,b)}this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),
f.textOutline&&this.applyTextOutline(f.textOutline));return this}dashstyleSetter(b){let d=this["stroke-width"];"inherit"===d&&(d=1);if(b=b&&b.toLowerCase()){const k=b.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=k.length;b--;)k[b]=""+c(k[b])*f(d,NaN);b=k.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
b)}}destroy(){const c=this;var f=c.element||{};const d=c.renderer;var k=f.ownerSVGElement;let n="SPAN"===f.nodeName&&c.parentGroup||void 0;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;H(c);if(c.clipPath&&k){const b=c.clipPath;[].forEach.call(k.querySelectorAll("[clip-path],[CLIP-PATH]"),function(c){-1<c.getAttribute("clip-path").indexOf(b.element.id)&&c.removeAttribute("clip-path")});c.clipPath=b.destroy()}if(c.stops){for(k=0;k<c.stops.length;k++)c.stops[k].destroy();c.stops.length=
0;c.stops=void 0}for(c.safeRemoveChild(f);n&&n.div&&0===n.div.childNodes.length;)f=n.parentGroup,c.safeRemoveChild(n.div),delete n.div,n=f;c.alignTo&&w(d.alignedObjects,c);b(c,function(b,f){c[f]&&c[f].parentGroup===c&&c[f].destroy&&c[f].destroy();delete c[f]})}dSetter(b,c,f){d(b)&&("string"===typeof b[0]&&(b=this.renderer.pathToSegments(b)),this.pathArray=b,b=b.reduce((b,c,f)=>c&&c.join?(f?b+" ":"")+c.join(" "):(c||"").toString(),""));/(NaN| {2}|^$)/.test(b)&&(b="M 0 0");this[c]!==b&&(f.setAttribute(c,
b),this[c]=b)}fadeOut(b){const c=this;c.animate({opacity:0},{duration:f(b,150),complete:function(){c.hide()}})}fillSetter(b,c,f){"string"===typeof b?f.setAttribute(c,b):b&&this.complexColor(b,c,f)}getBBox(b,c){const {alignValue:d,element:n,renderer:q,styles:a,textStr:A}=this,{cache:r,cacheKeys:h}=q;var m=n.namespaceURI===this.SVG_NS;c=f(c,this.rotation,0);var K=q.styledMode?n&&D.prototype.getStyle.call(n,"font-size"):a&&a.fontSize;let J;let N;e(A)&&(N=A.toString(),-1===N.indexOf("<")&&(N=N.replace(/[0-9]/g,
"0")),N+=["",q.rootFontSize,K,c,this.textWidth,d,a&&a.textOverflow,a&&a.fontWeight].join());N&&!b&&(J=r[N]);if(!J){if(m||q.forExport){try{var O=this.fakeTS&&function(b){const c=n.querySelector(".highcharts-text-outline");c&&g(c,{display:b})};k(O)&&O("none");J=n.getBBox?E({},n.getBBox()):{width:n.offsetWidth,height:n.offsetHeight,x:0,y:0};k(O)&&O("")}catch(fa){""}if(!J||0>J.width)J={x:0,y:0,width:0,height:0}}else J=this.htmlGetBBox();O=J.width;b=J.height;m&&(J.height=b={"11px,17":14,"13px,20":16}[`${K||
""},${Math.round(b)}`]||b);if(c){m=Number(n.getAttribute("y")||0)-J.y;K={right:1,center:.5}[d||0]||0;var w=c*B,l=(c-90)*B,p=O*Math.cos(w);c=O*Math.sin(w);var G=Math.cos(l);w=Math.sin(l);O=J.x+K*(O-p)+m*G;l=O+p;G=l-b*G;p=G-p;m=J.y+m-K*c+m*w;K=m+c;b=K-b*w;c=b-c;J.x=Math.min(O,l,G,p);J.y=Math.min(m,K,b,c);J.width=Math.max(O,l,G,p)-J.x;J.height=Math.max(m,K,b,c)-J.y}}if(N&&(""===A||0<J.height)){for(;250<h.length;)delete r[h.shift()];r[N]||h.push(N);r[N]=J}return J}getStyle(b){return p.getComputedStyle(this.element||
this,"").getPropertyValue(b)}hasClass(b){return-1!==(""+this.attr("class")).split(" ").indexOf(b)}hide(){return this.attr({visibility:"hidden"})}htmlGetBBox(){return{height:0,width:0,x:0,y:0}}init(b,c){this.element="span"===c?h(c):u.createElementNS(this.SVG_NS,c);this.renderer=b;F(this,"afterInit")}on(b,c){const {onEvents:f}=this;if(f[b])f[b]();f[b]=t(this.element,b,c);return this}opacitySetter(b,c,f){this.opacity=b=Number(Number(b).toFixed(3));f.setAttribute(c,b)}removeClass(b){return this.attr("class",
(""+this.attr("class")).replace(q(b)?new RegExp(`(^| )${b}( |$)`):b," ").replace(/ +/g," ").trim())}removeTextOutline(){const b=this.element.querySelector("tspan.highcharts-text-outline");b&&this.safeRemoveChild(b)}safeRemoveChild(b){const c=b.parentNode;c&&c.removeChild(b)}setRadialReference(b){const c=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=b;c&&c.radAttr&&c.animate(this.renderer.getRadialAttr(b,c.radAttr));return this}setTextPath(b,c){c=
G(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},c);const f=this.renderer.url,d=this.text||this,k=d.textPath,{attributes:n,enabled:A}=c;b=b||k&&k.path;k&&k.undo();b&&A?(c=t(d,"afterModifyTree",c=>{if(b&&A){let A=b.attr("id");A||b.attr("id",A=P());var k={x:0,y:0};e(n.dx)&&(k.dx=n.dx,delete n.dx);e(n.dy)&&(k.dy=n.dy,delete n.dy);d.attr(k);this.attr({transform:""});this.box&&(this.box=this.box.destroy());k=c.nodes.slice(0);c.nodes.length=0;c.nodes[0]={tagName:"textPath",attributes:E(n,
{"text-anchor":n.textAnchor,href:`${f}#${A}`}),children:k}}}),d.textPath={path:b,undo:c}):(d.attr({dx:0,dy:0}),delete d.textPath);this.added&&(d.textCache="",this.renderer.buildText(d));return this}shadow(b){var c;const {renderer:f}=this,d=G(90===(null===(c=this.parentGroup)||void 0===c?void 0:c.rotation)?{offsetX:-1,offsetY:-1}:{},r(b)?b:{});c=f.shadowDefinition(d);return this.attr({filter:b?`url(${f.url}#${c})`:"none"})}show(b=!0){return this.attr({visibility:b?"inherit":"visible"})}["stroke-widthSetter"](b,
c,f){this[c]=b;f.setAttribute(c,b)}strokeWidth(){if(!this.renderer.styledMode)return this["stroke-width"]||0;const b=this.getStyle("stroke-width");let f=0,d;b.indexOf("px")===b.length-2?f=c(b):""!==b&&(d=u.createElementNS(l,"rect"),m(d,{width:b,"stroke-width":0}),this.element.parentNode.appendChild(d),f=d.getBBox().width,d.parentNode.removeChild(d));return f}symbolAttr(b){const c=this;D.symbolCustomAttribs.forEach(function(d){c[d]=f(b[d],c[d])});c.attr({d:c.renderer.symbols[c.symbolName](c.x,c.y,
c.width,c.height,c)})}textSetter(b){b!==this.textStr&&(delete this.textPxLength,this.textStr=b,this.added&&this.renderer.buildText(this))}titleSetter(b){const c=this.element,d=c.getElementsByTagName("title")[0]||u.createElementNS(this.SVG_NS,"title");c.insertBefore?c.insertBefore(d,c.firstChild):c.appendChild(d);d.textContent=String(f(b,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")}toFront(){const b=this.element;b.parentNode.appendChild(b);return this}translate(b,c){return this.attr({translateX:b,
translateY:c})}updateTransform(){const {element:b,matrix:c,rotation:d=0,scaleX:k,scaleY:n,translateX:q=0,translateY:A=0}=this,g=["translate("+q+","+A+")"];e(c)&&g.push("matrix("+c.join(",")+")");d&&g.push("rotate("+d+" "+f(this.rotationOriginX,b.getAttribute("x"),0)+" "+f(this.rotationOriginY,b.getAttribute("y")||0)+")");(e(k)||e(n))&&g.push("scale("+f(k,1)+" "+f(n,1)+")");g.length&&!(this.text||this).textPath&&b.setAttribute("transform",g.join(" "))}visibilitySetter(b,c,f){"inherit"===b?f.removeAttribute(c):
this[c]!==b&&f.setAttribute(c,b);this[c]=b}xGetter(b){"circle"===this.element.nodeName&&("x"===b?b="cx":"y"===b&&(b="cy"));return this._defaultGetter(b)}zIndexSetter(b,f){var d=this.renderer,k=this.parentGroup;const n=(k||d).element||d.box,q=this.element;d=n===d.box;let A=!1,g;var a=this.added;let r;e(b)?(q.setAttribute("data-z-index",b),b=+b,this[f]===b&&(a=!1)):e(this[f])&&q.removeAttribute("data-z-index");this[f]=b;if(a){(b=this.zIndex)&&k&&(k.handleZ=!0);f=n.childNodes;for(r=f.length-1;0<=r&&
!A;r--)if(k=f[r],a=k.getAttribute("data-z-index"),g=!e(a),k!==q)if(0>b&&g&&!d&&!r)n.insertBefore(q,f[r]),A=!0;else if(c(a)<=b||g&&(!e(b)||0<=b))n.insertBefore(q,f[r+1]),A=!0;A||(n.insertBefore(q,f[d?3:0]),A=!0)}return A}}D.symbolCustomAttribs="anchorX anchorY clockwise end height innerR r start width x y".split(" ");D.prototype.strokeSetter=D.prototype.fillSetter;D.prototype.yGetter=D.prototype.xGetter;D.prototype.matrixSetter=D.prototype.rotationOriginXSetter=D.prototype.rotationOriginYSetter=D.prototype.rotationSetter=
D.prototype.scaleXSetter=D.prototype.scaleYSetter=D.prototype.translateXSetter=D.prototype.translateYSetter=D.prototype.verticalAlignSetter=function(b,c){this[c]=b;this.doTransform=!0};"";return D});M(a,"Core/Renderer/RendererRegistry.js",[a["Core/Globals.js"]],function(a){var x;(function(x){x.rendererTypes={};let y;x.getRendererType=function(a=y){return x.rendererTypes[a]||x.rendererTypes[y]};x.registerRendererType=function(C,z,H){x.rendererTypes[C]=z;if(!y||H)y=C,a.Renderer=z}})(x||(x={}));return x});
M(a,"Core/Renderer/SVG/SVGLabel.js",[a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,y){const {defined:x,extend:L,isNumber:C,merge:z,pick:H,removeEvent:B}=y;class u extends a{constructor(a,l,p,t,m,h,g,e,w,E){super();this.paddingRightSetter=this.paddingLeftSetter=this.paddingSetter;this.init(a,"g");this.textStr=l;this.x=p;this.y=t;this.anchorX=h;this.anchorY=g;this.baseline=w;this.className=E;this.addClass("button"===E?"highcharts-no-tooltip":"highcharts-label");E&&this.addClass("highcharts-"+
E);this.text=a.text(void 0,0,0,e).attr({zIndex:1});let v;"string"===typeof m&&((v=/^url\((.*?)\)$/.test(m))||this.renderer.symbols[m])&&(this.symbolKey=m);this.bBox=u.emptyBBox;this.padding=3;this.baselineOffset=0;this.needsBox=a.styledMode||v;this.deferredAttr={};this.alignFactor=0}alignSetter(a){a={left:0,center:.5,right:1}[a];a!==this.alignFactor&&(this.alignFactor=a,this.bBox&&C(this.xSetting)&&this.attr({x:this.xSetting}))}anchorXSetter(a,l){this.anchorX=a;this.boxAttr(l,Math.round(a)-this.getCrispAdjust()-
this.xSetting)}anchorYSetter(a,l){this.anchorY=a;this.boxAttr(l,a-this.ySetting)}boxAttr(a,l){this.box?this.box.attr(a,l):this.deferredAttr[a]=l}css(v){if(v){const a={};v=z(v);u.textProps.forEach(l=>{"undefined"!==typeof v[l]&&(a[l]=v[l],delete v[l])});this.text.css(a);"fontSize"in a||"fontWeight"in a?this.updateTextPadding():("width"in a||"textOverflow"in a)&&this.updateBoxSize()}return a.prototype.css.call(this,v)}destroy(){B(this.element,"mouseenter");B(this.element,"mouseleave");this.text&&this.text.destroy();
this.box&&(this.box=this.box.destroy());a.prototype.destroy.call(this)}fillSetter(a,l){a&&(this.needsBox=!0);this.fill=a;this.boxAttr(l,a)}getBBox(){this.textStr&&0===this.bBox.width&&0===this.bBox.height&&this.updateBoxSize();const a=this.padding,l=H(this.paddingLeft,a);return{width:this.width,height:this.height,x:this.bBox.x-l,y:this.bBox.y-a}}getCrispAdjust(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2}heightSetter(a){this.heightSetting=
a}onAdd(){this.text.add(this);this.attr({text:H(this.textStr,""),x:this.x||0,y:this.y||0});this.box&&x(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})}paddingSetter(a,l){C(a)?a!==this[l]&&(this[l]=a,this.updateTextPadding()):this[l]=void 0}rSetter(a,l){this.boxAttr(l,a)}strokeSetter(a,l){this.stroke=a;this.boxAttr(l,a)}["stroke-widthSetter"](a,l){a&&(this.needsBox=!0);this["stroke-width"]=a;this.boxAttr(l,a)}["text-alignSetter"](a){this.textAlign=a}textSetter(a){"undefined"!==
typeof a&&this.text.attr({text:a});this.updateTextPadding()}updateBoxSize(){var a=this.text;const l={},p=this.padding,t=this.bBox=C(this.widthSetting)&&C(this.heightSetting)&&!this.textAlign||!x(a.textStr)?u.emptyBBox:a.getBBox();this.width=this.getPaddedWidth();this.height=(this.heightSetting||t.height||0)+2*p;const m=this.renderer.fontMetrics(a);this.baselineOffset=p+Math.min((this.text.firstLineMetrics||m).b,t.height||Infinity);this.heightSetting&&(this.baselineOffset+=(this.heightSetting-m.h)/
2);this.needsBox&&!a.textPath&&(this.box||(a=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),a.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),a.add(this)),a=this.getCrispAdjust(),l.x=a,l.y=(this.baseline?-this.baselineOffset:0)+a,l.width=Math.round(this.width),l.height=Math.round(this.height),this.box.attr(L(l,this.deferredAttr)),this.deferredAttr={})}updateTextPadding(){const a=this.text;if(!a.textPath){this.updateBoxSize();
const l=this.baseline?0:this.baselineOffset;let p=H(this.paddingLeft,this.padding);x(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(p+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(p!==a.x||l!==a.y)a.attr("x",p),a.hasBoxWidthChanged&&(this.bBox=a.getBBox(!0)),"undefined"!==typeof l&&a.attr("y",l);a.x=p;a.y=l}}widthSetter(a){this.widthSetting=C(a)?a:void 0}getPaddedWidth(){var a=this.padding;const l=H(this.paddingLeft,a);a=H(this.paddingRight,
a);return(this.widthSetting||this.bBox.width||0)+l+a}xSetter(a){this.x=a;this.alignFactor&&(a-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0);this.xSetting=Math.round(a);this.attr("translateX",this.xSetting)}ySetter(a){this.ySetting=this.y=Math.round(a);this.attr("translateY",this.ySetting)}}u.emptyBBox={width:0,height:0,x:0,y:0};u.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(" ");
return u});M(a,"Core/Renderer/SVG/Symbols.js",[a["Core/Utilities.js"]],function(a){function x(a,u,v,l,p){const t=[];if(p){const m=p.start||0,h=H(p.r,v);v=H(p.r,l||v);l=(p.end||0)-.001;const g=p.innerR,e=H(p.open,.001>Math.abs((p.end||0)-m-2*Math.PI)),w=Math.cos(m),E=Math.sin(m),F=Math.cos(l),d=Math.sin(l),k=H(p.longArc,.001>l-m-Math.PI?0:1);let r=["A",h,v,0,k,H(p.clockwise,1),a+h*F,u+v*d];r.params={start:m,end:l,cx:a,cy:u};t.push(["M",a+h*w,u+v*E],r);C(g)&&(r=["A",g,g,0,k,C(p.clockwise)?1-p.clockwise:
0,a+g*w,u+g*E],r.params={start:l,end:m,cx:a,cy:u},t.push(e?["M",a+g*F,u+g*d]:["L",a+g*F,u+g*d],r));e||t.push(["Z"])}return t}function I(a,u,v,l,p){return p&&p.r?L(a,u,v,l,p):[["M",a,u],["L",a+v,u],["L",a+v,u+l],["L",a,u+l],["Z"]]}function L(a,u,v,l,p){p=(null===p||void 0===p?void 0:p.r)||0;return[["M",a+p,u],["L",a+v-p,u],["A",p,p,0,0,1,a+v,u+p],["L",a+v,u+l-p],["A",p,p,0,0,1,a+v-p,u+l],["L",a+p,u+l],["A",p,p,0,0,1,a,u+l-p],["L",a,u+p],["A",p,p,0,0,1,a+p,u],["Z"]]}const {defined:C,isNumber:z,pick:H}=
a;return{arc:x,callout:function(a,u,v,l,p){const t=Math.min(p&&p.r||0,v,l),m=t+6,h=p&&p.anchorX;p=p&&p.anchorY||0;const g=L(a,u,v,l,{r:t});if(!z(h))return g;a+h>=v?p>u+m&&p<u+l-m?g.splice(3,1,["L",a+v,p-6],["L",a+v+6,p],["L",a+v,p+6],["L",a+v,u+l-t]):g.splice(3,1,["L",a+v,l/2],["L",h,p],["L",a+v,l/2],["L",a+v,u+l-t]):0>=a+h?p>u+m&&p<u+l-m?g.splice(7,1,["L",a,p+6],["L",a-6,p],["L",a,p-6],["L",a,u+t]):g.splice(7,1,["L",a,l/2],["L",h,p],["L",a,l/2],["L",a,u+t]):p&&p>l&&h>a+m&&h<a+v-m?g.splice(5,1,["L",
h+6,u+l],["L",h,u+l+6],["L",h-6,u+l],["L",a+t,u+l]):p&&0>p&&h>a+m&&h<a+v-m&&g.splice(1,1,["L",h-6,u],["L",h,u-6],["L",h+6,u],["L",v-t,u]);return g},circle:function(a,u,v,l){return x(a+v/2,u+l/2,v/2,l/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},diamond:function(a,u,v,l){return[["M",a+v/2,u],["L",a+v,u+l/2],["L",a+v/2,u+l],["L",a,u+l/2],["Z"]]},rect:I,roundedRect:L,square:I,triangle:function(a,u,v,l){return[["M",a+v/2,u],["L",a+v,u+l],["L",a,u+l],["Z"]]},"triangle-down":function(a,u,v,l){return[["M",
a,u],["L",a+v,u],["L",a+v/2,u+l],["Z"]]}}});M(a,"Core/Renderer/SVG/TextBuilder.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y,I){const {doc:x,SVG_NS:C,win:z}=y,{attr:H,extend:B,fireEvent:u,isString:v,objectEach:l,pick:p}=I;class t{constructor(a){const h=a.styles;this.renderer=a.renderer;this.svgElement=a;this.width=a.textWidth;this.textLineHeight=h&&h.lineHeight;this.textOutline=h&&h.textOutline;this.ellipsis=!(!h||"ellipsis"!==h.textOverflow);this.noWrap=
!(!h||"nowrap"!==h.whiteSpace)}buildSVG(){const m=this.svgElement,h=m.element;var g=m.renderer,e=p(m.textStr,"").toString();const w=-1!==e.indexOf("<"),l=h.childNodes;g=!m.added&&g.box;const t=/<br.*?>/g;var d=[e,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,m.getStyle("font-size"),this.width].join();if(d!==m.textCache){m.textCache=d;delete m.actualWidth;for(d=l.length;d--;)h.removeChild(l[d]);w||this.ellipsis||this.width||m.textPath||-1!==e.indexOf(" ")&&(!this.noWrap||t.test(e))?
""!==e&&(g&&g.appendChild(h),e=new a(e),this.modifyTree(e.nodes),e.addToDOM(h),this.modifyDOM(),this.ellipsis&&-1!==(h.textContent||"").indexOf("\u2026")&&m.attr("title",this.unescapeEntities(m.textStr||"",["&lt;","&gt;"])),g&&g.removeChild(h)):h.appendChild(x.createTextNode(this.unescapeEntities(e)));v(this.textOutline)&&m.applyTextOutline&&m.applyTextOutline(this.textOutline)}}modifyDOM(){const a=this.svgElement,h=H(a.element,"x");a.firstLineMetrics=void 0;let g;for(;g=a.element.firstChild;)if(/^[\s\u200B]*$/.test(g.textContent||
" "))a.element.removeChild(g);else break;[].forEach.call(a.element.querySelectorAll("tspan.highcharts-br"),(e,d)=>{e.nextSibling&&e.previousSibling&&(0===d&&1===e.previousSibling.nodeType&&(a.firstLineMetrics=a.renderer.fontMetrics(e.previousSibling)),H(e,{dy:this.getLineHeight(e.nextSibling),x:h}))});const e=this.width||0;if(e){var w=(g,d)=>{var k=g.textContent||"";const r=k.replace(/([^\^])-/g,"$1- ").split(" ");var q=!this.noWrap&&(1<r.length||1<a.element.childNodes.length);const m=this.getLineHeight(d);
let b=0,f=a.actualWidth;if(this.ellipsis)k&&this.truncate(g,k,void 0,0,Math.max(0,e-.8*m),(b,f)=>b.substring(0,f)+"\u2026");else if(q){k=[];for(q=[];d.firstChild&&d.firstChild!==g;)q.push(d.firstChild),d.removeChild(d.firstChild);for(;r.length;)r.length&&!this.noWrap&&0<b&&(k.push(g.textContent||""),g.textContent=r.join(" ").replace(/- /g,"-")),this.truncate(g,void 0,r,0===b?f||0:0,e,(b,f)=>r.slice(0,f).join(" ").replace(/- /g,"-")),f=a.actualWidth,b++;q.forEach(b=>{d.insertBefore(b,g)});k.forEach(b=>
{d.insertBefore(x.createTextNode(b),g);b=x.createElementNS(C,"tspan");b.textContent="\u200b";H(b,{dy:m,x:h});d.insertBefore(b,g)})}},l=e=>{[].slice.call(e.childNodes).forEach(d=>{d.nodeType===z.Node.TEXT_NODE?w(d,e):(-1!==d.className.baseVal.indexOf("highcharts-br")&&(a.actualWidth=0),l(d))})};l(a.element)}}getLineHeight(a){a=a.nodeType===z.Node.TEXT_NODE?a.parentElement:a;return this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(a||this.svgElement.element).h}modifyTree(a){const h=
(g,e)=>{const {attributes:m={},children:l,style:p={},tagName:d}=g,k=this.renderer.styledMode;if("b"===d||"strong"===d)k?m["class"]="highcharts-strong":p.fontWeight="bold";else if("i"===d||"em"===d)k?m["class"]="highcharts-emphasized":p.fontStyle="italic";p&&p.color&&(p.fill=p.color);"br"===d?(m["class"]="highcharts-br",g.textContent="\u200b",(e=a[e+1])&&e.textContent&&(e.textContent=e.textContent.replace(/^ +/gm,""))):"a"===d&&l&&l.some(d=>"#text"===d.tagName)&&(g.children=[{children:l,tagName:"tspan"}]);
"#text"!==d&&"a"!==d&&(g.tagName="tspan");B(g,{attributes:m,style:p});l&&l.filter(d=>"#text"!==d.tagName).forEach(h)};a.forEach(h);u(this.svgElement,"afterModifyTree",{nodes:a})}truncate(a,h,g,e,l,p){const m=this.svgElement,{rotation:d}=m,k=[];let r=g?1:0,q=(h||g||"").length,w=q,b,f;const c=function(b,c){b=c||b;if((c=a.parentNode)&&"undefined"===typeof k[b]&&c.getSubStringLength)try{k[b]=e+c.getSubStringLength(0,g?b+1:b)}catch(D){""}return k[b]};m.rotation=0;f=c(a.textContent.length);if(e+f>l){for(;r<=
q;)w=Math.ceil((r+q)/2),g&&(b=p(g,w)),f=c(w,b&&b.length-1),r===q?r=q+1:f>l?q=w-1:r=w;0===q?a.textContent="":h&&q===h.length-1||(a.textContent=b||p(h||g,w))}g&&g.splice(0,w);m.actualWidth=f;m.rotation=d}unescapeEntities(a,h){l(this.renderer.escapes,function(g,e){h&&-1!==h.indexOf(g)||(a=a.toString().replace(new RegExp(g,"g"),e))});return a}}return t});M(a,"Core/Renderer/SVG/SVGRenderer.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Renderer/RendererRegistry.js"],
a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGLabel.js"],a["Core/Renderer/SVG/Symbols.js"],a["Core/Renderer/SVG/TextBuilder.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z,H,B,u){const {charts:v,deg2rad:l,doc:p,isFirefox:t,isMS:m,isWebKit:h,noop:g,SVG_NS:e,symbolSizes:w,win:E}=I,{addEvent:F,attr:d,createElement:k,css:r,defined:q,destroyObjectProperties:G,extend:b,isArray:f,isNumber:c,isObject:n,isString:P,merge:D,pick:K,pInt:x,uniqueKey:T}=u;let Z;class V{constructor(b,c,f,d,a,k,
n){this.width=this.url=this.style=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(b,c,f,d,a,k,n)}init(b,c,f,a,k,n,J){const A=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}),e=A.element;J||A.css(this.getStyle(a));b.appendChild(e);d(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&d(e,"xmlns",this.SVG_NS);this.box=e;this.boxWrapper=A;this.alignedObjects=
[];this.url=this.getReferenceURL();this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 11.1.0"));this.defs=this.createElement("defs").add();this.allowHTML=n;this.forExport=k;this.styledMode=J;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.rootFontSize=A.getStyle("font-size");this.setSize(c,f,!1);let q;t&&b.getBoundingClientRect&&(c=function(){r(b,{left:0,top:0});q=b.getBoundingClientRect();r(b,{left:Math.ceil(q.left)-q.left+"px",top:Math.ceil(q.top)-
q.top+"px"})},c(),this.unSubPixelFix=F(E,"resize",c))}definition(b){return(new a([b])).addToDOM(this.defs.element)}getReferenceURL(){if((t||h)&&p.getElementsByTagName("base").length){if(!q(Z)){var b=T();b=(new a([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:b},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":`url(#${b})`,fill:"rgba(0,0,0,0.001)"}}]}])).addToDOM(p.body);
r(b,{position:"fixed",top:0,left:0,zIndex:9E5});const c=p.elementFromPoint(6,6);Z="hitme"===(c&&c.id);p.body.removeChild(b)}if(Z)return E.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""}getStyle(c){return this.style=b({fontFamily:"Helvetica, Arial, sans-serif",fontSize:"1rem"},c)}setStyle(b){this.boxWrapper.css(this.getStyle(b))}isHidden(){return!this.boxWrapper.getBBox().width}destroy(){const b=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();
G(this.gradients||{});this.gradients=null;this.defs=b.destroy();this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null}createElement(b){const c=new this.Element;c.init(this,b);return c}getRadialAttr(b,c){return{cx:b[0]-b[2]/2+(c.cx||0)*b[2],cy:b[1]-b[2]/2+(c.cy||0)*b[2],r:(c.r||0)*b[2]}}shadowDefinition(b){const c=[`highcharts-drop-shadow-${this.chartIndex}`,...Object.keys(b).map(c=>b[c])].join("-").replace(/[^a-z0-9\-]/g,""),f=D({color:"#000000",offsetX:1,offsetY:1,opacity:.15,
width:5},b);this.defs.element.querySelector(`#${c}`)||this.definition({tagName:"filter",attributes:{id:c},children:[{tagName:"feDropShadow",attributes:{dx:f.offsetX,dy:f.offsetY,"flood-color":f.color,"flood-opacity":Math.min(5*f.opacity,1),stdDeviation:f.width/2}}]});return c}buildText(b){(new B(b)).buildSVG()}getContrast(b){b=y.parse(b).rgba.map(b=>{b/=255;return.03928>=b?b/12.92:Math.pow((b+.055)/1.055,2.4)});b=.2126*b[0]+.7152*b[1]+.0722*b[2];return 1.05/(b+.05)>(b+.05)/.05?"#FFFFFF":"#000000"}button(c,
f,d,k,e={},q,J,g,r,h){const A=this.label(c,f,d,r,void 0,void 0,h,void 0,"button"),O=this.styledMode;c=e.states||{};let N=0;e=D(e);delete e.states;const l=D({color:"#333333",cursor:"pointer",fontSize:"0.8em",fontWeight:"normal"},e.style);delete e.style;let w=a.filterUserAttributes(e);A.attr(D({padding:8,r:2},w));let p,G,R;O||(w=D({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1},w),q=D(w,{fill:"#e6e6e6"},a.filterUserAttributes(q||c.hover||{})),p=q.style,delete q.style,J=D(w,{fill:"#e6e9ff",style:{color:"#000000",
fontWeight:"bold"}},a.filterUserAttributes(J||c.select||{})),G=J.style,delete J.style,g=D(w,{style:{color:"#cccccc"}},a.filterUserAttributes(g||c.disabled||{})),R=g.style,delete g.style);F(A.element,m?"mouseover":"mouseenter",function(){3!==N&&A.setState(1)});F(A.element,m?"mouseout":"mouseleave",function(){3!==N&&A.setState(N)});A.setState=function(b){1!==b&&(A.state=N=b);A.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed",
"disabled"][b||0]);O||(A.attr([w,q,J,g][b||0]),b=[l,p,G,R][b||0],n(b)&&A.css(b))};O||(A.attr(w).css(b({cursor:"default"},l)),h&&A.text.css({pointerEvents:"none"}));return A.on("touchstart",b=>b.stopPropagation()).on("click",function(b){3!==N&&k.call(A,b)})}crispLine(b,c,f="round"){const d=b[0],a=b[1];q(d[1])&&d[1]===a[1]&&(d[1]=a[1]=Math[f](d[1])-c%2/2);q(d[2])&&d[2]===a[2]&&(d[2]=a[2]=Math[f](d[2])+c%2/2);return b}path(c){const d=this.styledMode?{}:{fill:"none"};f(c)?d.d=c:n(c)&&b(d,c);return this.createElement("path").attr(d)}circle(b,
c,f){b=n(b)?b:"undefined"===typeof b?{}:{x:b,y:c,r:f};c=this.createElement("circle");c.xSetter=c.ySetter=function(b,c,f){f.setAttribute("c"+c,b)};return c.attr(b)}arc(b,c,f,d,a,k){n(b)?(d=b,c=d.y,f=d.r,b=d.x):d={innerR:d,start:a,end:k};b=this.symbol("arc",b,c,f,f,d);b.r=f;return b}rect(c,f,a,k,e,q){c=n(c)?c:"undefined"===typeof c?{}:{x:c,y:f,r:e,width:Math.max(a||0,0),height:Math.max(k||0,0)};const A=this.createElement("rect");this.styledMode||("undefined"!==typeof q&&(c["stroke-width"]=q,b(c,A.crisp(c))),
c.fill="none");A.rSetter=function(b,c,f){A.r=b;d(f,{rx:b,ry:b})};A.rGetter=function(){return A.r||0};return A.attr(c)}roundedRect(b){return this.symbol("roundedRect").attr(b)}setSize(b,c,f){this.width=b;this.height=c;this.boxWrapper.animate({width:b,height:c},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:K(f,!0)?void 0:0});this.alignElements()}g(b){const c=this.createElement("g");return b?c.attr({"class":"highcharts-"+b}):c}image(b,f,d,a,k,n){const A=
{preserveAspectRatio:"none"};c(f)&&(A.x=f);c(d)&&(A.y=d);c(a)&&(A.width=a);c(k)&&(A.height=k);const e=this.createElement("image").attr(A);f=function(c){e.attr({href:b});n.call(e,c)};n?(e.attr({href:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}),d=new E.Image,F(d,"load",f),d.src=b,d.complete&&f({})):e.attr({href:b});return e}symbol(c,f,a,n,e,g){const A=this,h=/^url\((.*?)\)$/,O=h.test(c),m=!O&&(this.symbols[c]?c:"circle"),l=m&&this.symbols[m];let D,G,P,t;if(l)"number"===
typeof f&&(G=l.call(this.symbols,Math.round(f||0),Math.round(a||0),n||0,e||0,g)),D=this.path(G),A.styledMode||D.attr("fill","none"),b(D,{symbolName:m||void 0,x:f,y:a,width:n,height:e}),g&&b(D,g);else if(O){P=c.match(h)[1];const b=D=this.image(P);b.imgwidth=K(g&&g.width,w[P]&&w[P].width);b.imgheight=K(g&&g.height,w[P]&&w[P].height);t=b=>b.attr({width:b.width,height:b.height});["width","height"].forEach(function(c){b[c+"Setter"]=function(b,c){this[c]=b;const {alignByTranslate:f,element:a,width:k,height:A,
imgwidth:n,imgheight:e}=this;b=this["img"+c];if(q(b)){let J=1;g&&"within"===g.backgroundSize&&k&&A?(J=Math.min(k/n,A/e),d(a,{width:Math.round(n*J),height:Math.round(e*J)})):a&&a.setAttribute(c,b);f||this.translate(((k||0)-n*J)/2,((A||0)-e*J)/2)}}});q(f)&&b.attr({x:f,y:a});b.isImg=!0;q(b.imgwidth)&&q(b.imgheight)?t(b):(b.attr({width:0,height:0}),k("img",{onload:function(){const c=v[A.chartIndex];0===this.width&&(r(this,{position:"absolute",top:"-999em"}),p.body.appendChild(this));w[P]={width:this.width,
height:this.height};b.imgwidth=this.width;b.imgheight=this.height;b.element&&t(b);this.parentNode&&this.parentNode.removeChild(this);A.imgCount--;if(!A.imgCount&&c&&!c.hasLoaded)c.onload()},src:P}),this.imgCount++)}return D}clipRect(b,c,f,d){const a=T()+"-",k=this.createElement("clipPath").attr({id:a}).add(this.defs);b=this.rect(b,c,f,d,0).add(k);b.id=a;b.clipPath=k;b.count=0;return b}text(b,c,f,d){const a={};if(d&&(this.allowHTML||!this.forExport))return this.html(b,c,f);a.x=Math.round(c||0);f&&
(a.y=Math.round(f));q(b)&&(a.text=b);b=this.createElement("text").attr(a);if(!d||this.forExport&&!this.allowHTML)b.xSetter=function(b,c,f){const d=f.getElementsByTagName("tspan"),a=f.getAttribute(c);for(let f=0,k;f<d.length;f++)k=d[f],k.getAttribute(c)===a&&k.setAttribute(c,b);f.setAttribute(c,b)};return b}fontMetrics(b){b=x(C.prototype.getStyle.call(b,"font-size")||0);const c=24>b?b+3:Math.round(1.2*b);return{h:c,b:Math.round(.8*c),f:b}}rotCorr(b,c,f){let d=b;c&&f&&(d=Math.max(d*Math.cos(c*l),4));
return{x:-b/3*Math.sin(c*l),y:d}}pathToSegments(b){const f=[],d=[],a={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2};for(let k=0;k<b.length;k++)P(d[0])&&c(b[k])&&d.length===a[d[0].toUpperCase()]&&b.splice(k,0,d[0].replace("M","L").replace("m","l")),"string"===typeof b[k]&&(d.length&&f.push(d.slice(0)),d.length=0),d.push(b[k]);f.push(d.slice(0));return f}label(b,c,f,d,a,k,n,e,q){return new z(this,b,c,f,d,a,k,n,e,q)}alignElements(){this.alignedObjects.forEach(b=>b.align())}}b(V.prototype,{Element:C,SVG_NS:e,
escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},symbols:H,draw:g});L.registerRendererType("svg",V,!0);"";return V});M(a,"Core/Renderer/HTML/HTMLElement.js",[a["Core/Globals.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,y,I){const {isFirefox:x,isMS:C,isWebKit:z,win:H}=a,{css:B,defined:u,extend:v,pick:l,pInt:p}=I,t=[];class m extends y{static compose(a){if(I.pushUnique(t,a)){const g=m.prototype,e=a.prototype;e.getSpanCorrection=g.getSpanCorrection;
e.htmlCss=g.htmlCss;e.htmlGetBBox=g.htmlGetBBox;e.htmlUpdateTransform=g.htmlUpdateTransform;e.setSpanRotation=g.setSpanRotation}return a}getSpanCorrection(a,g,e){this.xCorr=-a*e;this.yCorr=-g}htmlCss(a){const g="SPAN"===this.element.tagName&&a&&"width"in a,e=l(g&&a.width,void 0);let h;g&&(delete a.width,this.textWidth=e,h=!0);a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=v(this.styles,a);B(this.element,a);h&&this.htmlUpdateTransform();return this}htmlGetBBox(){const a=
this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}htmlUpdateTransform(){if(this.added){var a=this.renderer,g=this.element,e=this.x||0,m=this.y||0,l=this.textAlign||"left",t={left:0,center:.5,right:1}[l],d=this.styles,k=d&&d.whiteSpace;B(g,{marginLeft:this.translateX||0,marginTop:this.translateY||0});if("SPAN"===g.tagName){d=this.rotation;const q=this.textWidth&&p(this.textWidth),h=[d,l,g.innerHTML,this.textWidth,this.textAlign].join();let b=!1;if(q!==this.oldTextWidth){if(this.textPxLength)var r=
this.textPxLength;else B(g,{width:"",whiteSpace:k||"nowrap"}),r=g.offsetWidth;(q>this.oldTextWidth||r>q)&&(/[ \-]/.test(g.textContent||g.innerText)||"ellipsis"===g.style.textOverflow)&&(B(g,{width:r>q||d?q+"px":"auto",display:"block",whiteSpace:k||"normal"}),this.oldTextWidth=q,b=!0)}this.hasBoxWidthChanged=b;h!==this.cTT&&(a=a.fontMetrics(g).b,!u(d)||d===(this.oldRotation||0)&&l===this.oldAlign||this.setSpanRotation(d,t,a),this.getSpanCorrection(!u(d)&&this.textPxLength||g.offsetWidth,a,t,d,l));
B(g,{left:e+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});this.cTT=h;this.oldRotation=d;this.oldAlign=l}}else this.alignOnAdd=!0}setSpanRotation(a,g,e){const h={},m=C&&!/Edge/.test(H.navigator.userAgent)?"-ms-transform":z?"-webkit-transform":x?"MozTransform":H.opera?"-o-transform":void 0;m&&(h[m]=h.transform="rotate("+a+"deg)",h[m+(x?"Origin":"-origin")]=h.transformOrigin=100*g+"% "+e+"px",B(this.element,h))}}return m});M(a,"Core/Renderer/HTML/HTMLRenderer.js",[a["Core/Renderer/HTML/AST.js"],
a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(a,y,I,L){const {attr:x,createElement:z,extend:H,pick:B}=L,u=[];class v extends I{static compose(a){L.pushUnique(u,a)&&(a.prototype.html=v.prototype.html);return a}html(l,p,t){const m=this.createElement("span"),h=m.element,g=m.renderer,e=function(a,e){["opacity","visibility"].forEach(function(g){a[g+"Setter"]=function(d,k,r){const q=a.div?a.div.style:e;y.prototype[g+"Setter"].call(this,d,k,r);
q&&(q[k]=d)}});a.addedSetters=!0};m.textSetter=function(e){e!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,a.setElementHTML(this.element,B(e,"")),this.textStr=e,m.doTransform=!0)};e(m,m.element.style);m.xSetter=m.ySetter=m.alignSetter=m.rotationSetter=function(a,e){"align"===e?m.alignValue=m.textAlign=a:m[e]=a;m.doTransform=!0};m.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};m.attr({text:l,x:Math.round(p),y:Math.round(t)}).css({position:"absolute"});
g.styledMode||m.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});h.style.whiteSpace="nowrap";m.css=m.htmlCss;m.add=function(a){const l=g.box.parentNode,w=[];let d;if(this.parentGroup=a){if(d=a.div,!d){for(;a;)w.push(a),a=a.parentGroup;w.reverse().forEach(function(a){function k(f,c){a[c]=f;"translateX"===c?b.left=f+"px":b.top=f+"px";a.doTransform=!0}const q=x(a.element,"class"),g=a.styles||{};d=a.div=a.div||z("div",q?{className:q}:void 0,{position:"absolute",left:(a.translateX||
0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,visibility:a.visibility},d||l);const b=d.style;H(a,{classSetter:function(b){return function(c){this.element.setAttribute("class",c);b.className=c}}(d),css:function(f){m.css.call(a,f);["cursor","pointerEvents"].forEach(c=>{f[c]&&(b[c]=f[c])});return a},on:function(){w[0].div&&m.on.apply({element:w[0].div,onEvents:a.onEvents},arguments);return a},translateXSetter:k,translateYSetter:k});a.addedSetters||e(a);a.css(g)})}}else d=l;d.appendChild(h);
m.added=!0;m.alignOnAdd&&m.htmlUpdateTransform();return m};return m}}return v});M(a,"Core/Axis/AxisDefaults.js",[],function(){var a;(function(a){a.defaultXAxisOptions={alignTicks:!0,allowDecimals:void 0,panningEnabled:!0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e %b"},week:{main:"%e %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",
gridZIndex:1,labels:{autoRotation:void 0,autoRotationLimit:80,distance:15,enabled:!0,indentation:10,overflow:"justify",padding:5,reserveSpace:void 0,rotation:void 0,staggerLines:0,step:0,useHTML:!1,zIndex:7,style:{color:"#333333",cursor:"default",fontSize:"0.8em"}},maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,minorTickPosition:"outside",minorTicksPerMajor:5,minPadding:.01,offset:void 0,opposite:!1,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,
startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",rotation:0,useHTML:!1,x:0,y:0,style:{color:"#666666",fontSize:"0.8em"}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#333333",lineWidth:1,gridLineColor:"#e6e6e6",gridLineWidth:void 0,tickColor:"#333333"};a.defaultYAxisOptions={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,
tickPixelInterval:72,showLastLabel:!0,labels:{x:void 0},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){const {numberFormatter:a}=this.axis.chart;return a(this.total||0,-1)},style:{color:"#000000",fontSize:"0.7em",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};a.defaultLeftAxisOptions={title:{rotation:270}};a.defaultRightAxisOptions={title:{rotation:90}};a.defaultBottomAxisOptions=
{labels:{autoRotation:[-45]},margin:15,title:{rotation:0}};a.defaultTopAxisOptions={labels:{autoRotation:[-45]},margin:15,title:{rotation:0}}})(a||(a={}));return a});M(a,"Core/Foundation.js",[a["Core/Utilities.js"]],function(a){const {addEvent:x,isFunction:I,objectEach:L,removeEvent:C}=a;var z;(function(a){a.registerEventOptions=function(a,u){a.eventOptions=a.eventOptions||{};L(u.events,function(v,l){a.eventOptions[l]!==v&&(a.eventOptions[l]&&(C(a,l,a.eventOptions[l]),delete a.eventOptions[l]),I(v)&&
(a.eventOptions[l]=v,x(a,l,v,{order:0})))})}})(z||(z={}));return z});M(a,"Core/Axis/Tick.js",[a["Core/Templating.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y,I){const {deg2rad:x}=y,{clamp:C,correctFloat:z,defined:H,destroyObjectProperties:B,extend:u,fireEvent:v,isNumber:l,merge:p,objectEach:t,pick:m}=I;class h{constructor(a,e,h,m,l){this.isNewLabel=this.isNew=!0;this.axis=a;this.pos=e;this.type=h||"";this.parameters=l||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=
this.parameters.options;v(this,"init");h||m||this.addLabel()}addLabel(){const g=this,e=g.axis;var h=e.options;const p=e.chart;var t=e.categories;const d=e.logarithmic,k=e.names,r=g.pos,q=m(g.options&&g.options.labels,h.labels);var G=e.tickPositions;const b=r===G[0],f=r===G[G.length-1],c=(!q.step||1===q.step)&&1===e.tickInterval;G=G.info;let n=g.label,P,D,K;t=this.parameters.category||(t?m(t[r],k[r],r):r);d&&l(t)&&(t=z(d.lin2log(t)));e.dateTime&&(G?(D=p.time.resolveDTLFormat(h.dateTimeLabelFormats[!h.grid&&
G.higherRanks[r]||G.unitName]),P=D.main):l(t)&&(P=e.dateTime.getXDateFormat(t,h.dateTimeLabelFormats||{})));g.isFirst=b;g.isLast=f;const x={axis:e,chart:p,dateTimeLabelFormat:P,isFirst:b,isLast:f,pos:r,tick:g,tickPositionInfo:G,value:t};v(this,"labelFormat",x);const B=b=>q.formatter?q.formatter.call(b,b):q.format?(b.text=e.defaultLabelFormatter.call(b,b),a.format(q.format,b,p)):e.defaultLabelFormatter.call(b,b);h=B.call(x,x);const y=D&&D.list;g.shortenLabel=y?function(){for(K=0;K<y.length;K++)if(u(x,
{dateTimeLabelFormat:y[K]}),n.attr({text:B.call(x,x)}),n.getBBox().width<e.getSlotWidth(g)-2*q.padding)return;n.attr({text:""})}:void 0;c&&e._addedPlotLB&&g.moveLabel(h,q);H(n)||g.movedLabel?n&&n.textStr!==h&&!c&&(!n.textWidth||q.style.width||n.styles.width||n.css({width:null}),n.attr({text:h}),n.textPxLength=n.getBBox().width):(g.label=n=g.createLabel({x:0,y:0},h,q),g.rotation=0)}createLabel(a,e,h){const g=this.axis,m=g.chart;if(a=H(e)&&h.enabled?m.renderer.text(e,a.x,a.y,h.useHTML).add(g.labelGroup):
null)m.styledMode||a.css(p(h.style)),a.textPxLength=a.getBBox().width;return a}destroy(){B(this,this.axis)}getPosition(a,e,h,m){const g=this.axis,d=g.chart,k=m&&d.oldChartHeight||d.chartHeight;a={x:a?z(g.translate(e+h,void 0,void 0,m)+g.transB):g.left+g.offset+(g.opposite?(m&&d.oldChartWidth||d.chartWidth)-g.right-g.left:0),y:a?k-g.bottom+g.offset-(g.opposite?g.height:0):z(k-g.translate(e+h,void 0,void 0,m)-g.transB)};a.y=C(a.y,-1E5,1E5);v(this,"afterGetPosition",{pos:a});return a}getLabelPosition(a,
e,h,l,p,d,k,r){const q=this.axis,g=q.transA,b=q.isLinked&&q.linkedParent?q.linkedParent.reversed:q.reversed,f=q.staggerLines,c=q.tickRotCorr||{x:0,y:0},n=l||q.reserveSpaceDefault?0:-q.labelOffset*("center"===q.labelAlign?.5:1),w=p.distance,D={};h=0===q.side?h.rotation?-w:-h.getBBox().height:2===q.side?c.y+w:Math.cos(h.rotation*x)*(c.y-h.getBBox(!1,0).height/2);H(p.y)&&(h=0===q.side&&q.horiz?p.y+h:p.y);a=a+m(p.x,[0,1,0,-1][q.side]*w)+n+c.x-(d&&l?d*g*(b?-1:1):0);e=e+h-(d&&!l?d*g*(b?1:-1):0);f&&(l=k/
(r||1)%f,q.opposite&&(l=f-l-1),e+=q.labelOffset/f*l);D.x=a;D.y=Math.round(e);v(this,"afterGetLabelPosition",{pos:D,tickmarkOffset:d,index:k});return D}getLabelSize(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0}getMarkPath(a,e,h,m,l,d){return d.crispLine([["M",a,e],["L",a+(l?0:-h),e+(l?h:0)]],m)}handleOverflow(a){const e=this.axis,g=e.options.labels,h=a.x;var l=e.chart.chartWidth,d=e.chart.spacing;const k=m(e.labelLeft,Math.min(e.pos,d[3]));d=m(e.labelRight,Math.max(e.isRadial?
0:e.pos+e.len,l-d[1]));const r=this.label,q=this.rotation,p={left:0,center:.5,right:1}[e.labelAlign||r.attr("align")],b=r.getBBox().width,f=e.getSlotWidth(this),c={};let n=f,t=1,D;if(q||"justify"!==g.overflow)0>q&&h-p*b<k?D=Math.round(h/Math.cos(q*x)-k):0<q&&h+p*b>d&&(D=Math.round((l-h)/Math.cos(q*x)));else if(l=h+(1-p)*b,h-p*b<k?n=a.x+n*(1-p)-k:l>d&&(n=d-a.x+n*p,t=-1),n=Math.min(f,n),n<f&&"center"===e.labelAlign&&(a.x+=t*(f-n-p*(f-Math.min(b,n)))),b>n||e.autoRotation&&(r.styles||{}).width)D=n;D&&
(this.shortenLabel?this.shortenLabel():(c.width=Math.floor(D)+"px",(g.style||{}).textOverflow||(c.textOverflow="ellipsis"),r.css(c)))}moveLabel(a,e){const g=this;var h=g.label;const m=g.axis;let d=!1;h&&h.textStr===a?(g.movedLabel=h,d=!0,delete g.label):t(m.ticks,function(k){d||k.isNew||k===g||!k.label||k.label.textStr!==a||(g.movedLabel=k.label,d=!0,k.labelPos=g.movedLabel.xy,delete k.label)});d||!g.labelPos&&!h||(h=g.labelPos||h.xy,g.movedLabel=g.createLabel(h,a,e),g.movedLabel&&g.movedLabel.attr({opacity:0}))}render(a,
e,h){var g=this.axis,l=g.horiz,d=this.pos,k=m(this.tickmarkOffset,g.tickmarkOffset);d=this.getPosition(l,d,k,e);k=d.x;const r=d.y;g=l&&k===g.pos+g.len||!l&&r===g.pos?-1:1;l=m(h,this.label&&this.label.newOpacity,1);h=m(h,1);this.isActive=!0;this.renderGridLine(e,h,g);this.renderMark(d,h,g);this.renderLabel(d,e,l,a);this.isNew=!1;v(this,"afterRender")}renderGridLine(a,e,h){const g=this.axis,l=g.options,d={},k=this.pos,r=this.type,q=m(this.tickmarkOffset,g.tickmarkOffset),p=g.chart.renderer;let b=this.gridLine,
f=l.gridLineWidth,c=l.gridLineColor,n=l.gridLineDashStyle;"minor"===this.type&&(f=l.minorGridLineWidth,c=l.minorGridLineColor,n=l.minorGridLineDashStyle);b||(g.chart.styledMode||(d.stroke=c,d["stroke-width"]=f||0,d.dashstyle=n),r||(d.zIndex=1),a&&(e=0),this.gridLine=b=p.path().attr(d).addClass("highcharts-"+(r?r+"-":"")+"grid-line").add(g.gridGroup));if(b&&(h=g.getPlotLinePath({value:k+q,lineWidth:b.strokeWidth()*h,force:"pass",old:a,acrossPanes:!1})))b[a||this.isNew?"attr":"animate"]({d:h,opacity:e})}renderMark(a,
e,h){const g=this.axis;var l=g.options;const d=g.chart.renderer,k=this.type,r=g.tickSize(k?k+"Tick":"tick"),q=a.x;a=a.y;const p=m(l["minor"!==k?"tickWidth":"minorTickWidth"],!k&&g.isXAxis?1:0);l=l["minor"!==k?"tickColor":"minorTickColor"];let b=this.mark;const f=!b;r&&(g.opposite&&(r[0]=-r[0]),b||(this.mark=b=d.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(g.axisGroup),g.chart.styledMode||b.attr({stroke:l,"stroke-width":p})),b[f?"attr":"animate"]({d:this.getMarkPath(q,a,r[0],b.strokeWidth()*
h,g.horiz,d),opacity:e}))}renderLabel(a,e,h,p){var g=this.axis;const d=g.horiz,k=g.options,r=this.label,q=k.labels,t=q.step;g=m(this.tickmarkOffset,g.tickmarkOffset);const b=a.x;a=a.y;let f=!0;r&&l(b)&&(r.xy=a=this.getLabelPosition(b,a,r,d,q,g,p,t),this.isFirst&&!this.isLast&&!k.showFirstLabel||this.isLast&&!this.isFirst&&!k.showLastLabel?f=!1:!d||q.step||q.rotation||e||0===h||this.handleOverflow(a),t&&p%t&&(f=!1),f&&l(a.y)?(a.opacity=h,r[this.isNewLabel?"attr":"animate"](a).show(!0),this.isNewLabel=
!1):(r.hide(),this.isNewLabel=!0))}replaceMovedLabel(){const a=this.label,e=this.axis;a&&!this.isNew&&(a.animate({opacity:0},void 0,a.destroy),delete this.label);e.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel}}"";return h});M(a,"Core/Axis/Axis.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/AxisDefaults.js"],a["Core/Color/Color.js"],a["Core/Defaults.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Axis/Tick.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z,H,B){const {animObject:u}=
a,{defaultOptions:v}=L,{registerEventOptions:l}=C,{deg2rad:p}=z,{arrayMax:t,arrayMin:m,clamp:h,correctFloat:g,defined:e,destroyObjectProperties:w,erase:x,error:F,extend:d,fireEvent:k,getClosestDistance:r,insertItem:q,isArray:G,isNumber:b,isString:f,merge:c,normalizeTickInterval:n,objectEach:P,pick:D,relativeLength:K,removeEvent:X,splat:T,syncTimeout:Z}=B,V=(b,c)=>n(c,void 0,void 0,D(b.options.allowDecimals,.5>c||void 0!==b.tickAmount),!!b.tickAmount);class Y{constructor(b,c,f){this.zoomEnabled=this.width=
this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=this.options=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=
this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.index=this.height=this.hasVisibleSeries=this.hasNames=this.eventOptions=this.coll=this.closestPointRange=this.chart=this.bottom=this.alternateBands=void 0;this.init(b,c,f)}init(c,f,a=this.coll){const d="xAxis"===a;this.chart=c;this.horiz=this.isZAxis||(c.inverted?!d:d);this.isXAxis=d;this.coll=a;k(this,"init",{userOptions:f});this.opposite=D(f.opposite,this.opposite);this.side=D(f.side,this.side,this.horiz?this.opposite?0:2:
this.opposite?1:3);this.setOptions(f);a=this.options;const A=a.labels,n=a.type;this.userOptions=f;this.minPixelPadding=0;this.reversed=D(a.reversed,this.reversed);this.visible=a.visible;this.zoomEnabled=a.zoomEnabled;this.hasNames="category"===n||!0===a.categories;this.categories=a.categories||(this.hasNames?[]:void 0);this.names||(this.names=[],this.names.keys={});this.plotLinesAndBandsGroups={};this.positiveValuesOnly=!!this.logarithmic;this.isLinked=e(a.linkedTo);this.ticks={};this.labelEdge=[];
this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=a.minRange||a.maxZoom;this.range=a.range;this.offset=a.offset||0;this.min=this.max=null;f=D(a.crosshair,T(c.options.tooltip.crosshairs)[d?0:1]);this.crosshair=!0===f?{}:f;-1===c.axes.indexOf(this)&&(d?c.axes.splice(c.xAxis.length,0,this):c.axes.push(this),q(this,c[this.coll]));c.orderItems(this.coll);this.series=this.series||[];c.inverted&&!this.isZAxis&&d&&"undefined"===typeof this.reversed&&
(this.reversed=!0);this.labelRotation=b(A.rotation)?A.rotation:void 0;l(this,a);k(this,"afterInit")}setOptions(b){this.options=c(y.defaultXAxisOptions,"yAxis"===this.coll&&y.defaultYAxisOptions,[y.defaultTopAxisOptions,y.defaultRightAxisOptions,y.defaultBottomAxisOptions,y.defaultLeftAxisOptions][this.side],c(v[this.coll],b));k(this,"afterSetOptions",{userOptions:b})}defaultLabelFormatter(c){var f=this.axis;({numberFormatter:c}=this.chart);const a=b(this.value)?this.value:NaN,d=f.chart.time,k=this.dateTimeLabelFormat;
var n=v.lang;const A=n.numericSymbols;n=n.numericSymbolMagnitude||1E3;const e=f.logarithmic?Math.abs(a):f.tickInterval;let q=A&&A.length,g;if(f.categories)g=`${this.value}`;else if(k)g=d.dateFormat(k,a);else if(q&&1E3<=e)for(;q--&&"undefined"===typeof g;)f=Math.pow(n,q+1),e>=f&&0===10*a%f&&null!==A[q]&&0!==a&&(g=c(a/f,-1)+A[q]);"undefined"===typeof g&&(g=1E4<=Math.abs(a)?c(a,-1):c(a,-1,void 0,""));return g}getSeriesExtremes(){const c=this,f=c.chart;let a;k(this,"getSeriesExtremes",null,function(){c.hasVisibleSeries=
!1;c.dataMin=c.dataMax=c.threshold=null;c.softThreshold=!c.isXAxis;c.series.forEach(function(d){if(d.visible||!f.options.chart.ignoreHiddenSeries){var k=d.options;let f=k.threshold,n,A;c.hasVisibleSeries=!0;c.positiveValuesOnly&&0>=f&&(f=null);if(c.isXAxis)(k=d.xData)&&k.length&&(k=c.logarithmic?k.filter(b=>0<b):k,a=d.getXExtremes(k),n=a.min,A=a.max,b(n)||n instanceof Date||(k=k.filter(b),a=d.getXExtremes(k),n=a.min,A=a.max),k.length&&(c.dataMin=Math.min(D(c.dataMin,n),n),c.dataMax=Math.max(D(c.dataMax,
A),A)));else if(d=d.applyExtremes(),b(d.dataMin)&&(n=d.dataMin,c.dataMin=Math.min(D(c.dataMin,n),n)),b(d.dataMax)&&(A=d.dataMax,c.dataMax=Math.max(D(c.dataMax,A),A)),e(f)&&(c.threshold=f),!k.softThreshold||c.positiveValuesOnly)c.softThreshold=!1}})});k(this,"afterGetSeriesExtremes")}translate(c,f,a,d,k,n){const e=this.linkedParent||this,A=d&&e.old?e.old.min:e.min;if(!b(A))return NaN;const q=e.minPixelPadding;k=(e.isOrdinal||e.brokenAxis&&e.brokenAxis.hasBreaks||e.logarithmic&&k)&&e.lin2val;let J=
1,h=0;d=d&&e.old?e.old.transA:e.transA;d||(d=e.transA);a&&(J*=-1,h=e.len);e.reversed&&(J*=-1,h-=J*(e.sector||e.len));f?(n=(c*J+h-q)/d+A,k&&(n=e.lin2val(n))):(k&&(c=e.val2lin(c)),c=J*(c-A)*d,n=(e.isRadial?c:g(c))+h+J*q+(b(n)?d*n:0));return n}toPixels(b,c){return this.translate(b,!1,!this.horiz,void 0,!0)+(c?0:this.pos)}toValue(b,c){return this.translate(b-(c?0:this.pos),!0,!this.horiz,void 0,!0)}getPlotLinePath(c){function f(b,c,f){"pass"!==t&&(b<c||b>f)&&(t?b=h(b,c,f):K=!0);return b}const a=this,
d=a.chart,n=a.left,e=a.top,A=c.old,q=c.value,g=c.lineWidth,r=A&&d.oldChartHeight||d.chartHeight,m=A&&d.oldChartWidth||d.chartWidth,l=a.transB;let p=c.translatedValue,t=c.force,P,w,R,Q,K;c={value:q,lineWidth:g,old:A,force:t,acrossPanes:c.acrossPanes,translatedValue:p};k(this,"getPlotLinePath",c,function(c){p=D(p,a.translate(q,void 0,void 0,A));p=h(p,-1E5,1E5);P=R=Math.round(p+l);w=Q=Math.round(r-p-l);b(p)?a.horiz?(w=e,Q=r-a.bottom,P=R=f(P,n,n+a.width)):(P=n,R=m-a.right,w=Q=f(w,e,e+a.height)):(K=!0,
t=!1);c.path=K&&!t?null:d.renderer.crispLine([["M",P,w],["L",R,Q]],g||1)});return c.path}getLinearTickPositions(b,c,f){const a=g(Math.floor(c/b)*b);f=g(Math.ceil(f/b)*b);const d=[];let k,n;g(a+b)===a&&(n=20);if(this.single)return[c];for(c=a;c<=f;){d.push(c);c=g(c+b,n);if(c===k)break;k=c}return d}getMinorTickInterval(){const b=this.options;return!0===b.minorTicks?D(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval}getMinorTickPositions(){var b=this.options;const c=this.tickPositions,
f=this.minorTickInterval;var a=this.pointRangePadding||0;const d=this.min-a;a=this.max+a;const k=a-d;let n=[];if(k&&k/f<this.len/3){const k=this.logarithmic;if(k)this.paddedTicks.forEach(function(b,c,a){c&&n.push.apply(n,k.getLogTickPositions(f,a[c-1],a[c],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())n=n.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(f),d,a,b.startOfWeek));else for(b=d+(c[0]-d)%f;b<=a&&b!==n[0];b+=f)n.push(b)}0!==n.length&&this.trimTicks(n);
return n}adjustForMinRange(){const b=this.options,c=this.logarithmic;let f=this.min;var a=this.max;let d,k;if(this.isXAxis&&"undefined"===typeof this.minRange&&!c)if(e(b.min)||e(b.max)||e(b.floor)||e(b.ceiling))this.minRange=null;else{var n=r(this.series.map(b=>{var c;return(b.xIncrement?null===(c=b.xData)||void 0===c?void 0:c.slice(0,2):b.xData)||[]}))||0;this.minRange=Math.min(5*n,this.dataMax-this.dataMin)}a-f<this.minRange&&(n=this.dataMax-this.dataMin>=this.minRange,k=this.minRange,a=(k-a+f)/
2,d=[f-a,D(b.min,f-a)],n&&(d[2]=c?c.log2lin(this.dataMin):this.dataMin),f=t(d),a=[f+k,D(b.max,f+k)],n&&(a[2]=c?c.log2lin(this.dataMax):this.dataMax),a=m(a),a-f<k&&(d[0]=a-k,d[1]=D(b.min,a-k),f=t(d)));this.min=f;this.max=a}getClosest(){let b,c;if(this.categories)c=1;else{const f=[];this.series.forEach(function(b){var a;const d=b.closestPointRange,k=b.visible||!b.chart.options.chart.ignoreHiddenSeries;1===(null===(a=b.xData)||void 0===a?void 0:a.length)?f.push(b.xData[0]):!b.noSharedTooltip&&e(d)&&
k&&(c=e(c)?Math.min(c,d):d)});f.length&&(f.sort((b,c)=>b-c),b=r([f]))}return b&&c?Math.min(b,c):b||c}nameToX(b){const c=G(this.options.categories),f=c?this.categories:this.names;let a=b.options.x,d;b.series.requireSorting=!1;e(a)||(a=this.options.uniqueNames&&f?c?f.indexOf(b.name):D(f.keys[b.name],-1):b.series.autoIncrement());-1===a?!c&&f&&(d=f.length):d=a;"undefined"!==typeof d?(this.names[d]=b.name,this.names.keys[b.name]=d):b.x&&(d=b.x);return d}updateNames(){const b=this,c=this.names;0<c.length&&
(Object.keys(c.keys).forEach(function(b){delete c.keys[b]}),c.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(c){c.xIncrement=null;if(!c.points||c.isDirtyData)b.max=Math.max(b.max,c.xData.length-1),c.processData(),c.generatePoints();c.data.forEach(function(f,a){let d;f&&f.options&&"undefined"!==typeof f.name&&(d=b.nameToX(f),"undefined"!==typeof d&&d!==f.x&&(f.x=d,c.xData[a]=d))})}))}setAxisTranslation(){const b=this,c=b.max-b.min;var a=b.linkedParent;const d=!!b.categories,
n=b.isXAxis;let e=b.axisPointRange||0,q,g=0,h=0,r=b.transA;if(n||d||e)q=b.getClosest(),a?(g=a.minPointOffset,h=a.pointRangePadding):b.series.forEach(function(c){const a=d?1:n?D(c.options.pointRange,q,0):b.axisPointRange||0,k=c.options.pointPlacement;e=Math.max(e,a);if(!b.single||d)c=c.is("xrange")?!n:n,g=Math.max(g,c&&f(k)?0:a/2),h=Math.max(h,c&&"on"===k?0:a)}),a=b.ordinal&&b.ordinal.slope&&q?b.ordinal.slope/q:1,b.minPointOffset=g*=a,b.pointRangePadding=h*=a,b.pointRange=Math.min(e,b.single&&d?1:
c),n&&q&&(b.closestPointRange=q);b.translationSlope=b.transA=r=b.staticScale||b.len/(c+h||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=r*g;k(this,"afterSetAxisTranslation")}minFromRange(){return this.max-this.range}setTickInterval(c){var f=this.chart;const a=this.logarithmic,d=this.options,n=this.isXAxis,q=this.isLinked,h=d.tickPixelInterval,A=this.categories,r=this.softThreshold;let m=d.maxPadding,l=d.minPadding;let p=b(d.tickInterval)&&0<=d.tickInterval?d.tickInterval:void 0,t=b(this.threshold)?
this.threshold:null,P,w,K;this.dateTime||A||q||this.getTickAmount();w=D(this.userMin,d.min);K=D(this.userMax,d.max);if(q){this.linkedParent=f[this.coll][d.linkedTo];var R=this.linkedParent.getExtremes();this.min=D(R.min,R.dataMin);this.max=D(R.max,R.dataMax);d.type!==this.linkedParent.options.type&&F(11,1,f)}else r&&e(t)&&(this.dataMin>=t?(R=t,l=0):this.dataMax<=t&&(P=t,m=0)),this.min=D(w,R,this.dataMin),this.max=D(K,P,this.dataMax);a&&(this.positiveValuesOnly&&!c&&0>=Math.min(this.min,D(this.dataMin,
this.min))&&F(10,1,f),this.min=g(a.log2lin(this.min),16),this.max=g(a.log2lin(this.max),16));this.range&&e(this.max)&&(this.userMin=this.min=w=Math.max(this.dataMin,this.minFromRange()),this.userMax=K=this.max,this.range=null);k(this,"foundExtremes");this.beforePadding&&this.beforePadding();this.adjustForMinRange();!b(this.userMin)&&b(d.softMin)&&d.softMin<this.min&&(this.min=w=d.softMin);!b(this.userMax)&&b(d.softMax)&&d.softMax>this.max&&(this.max=K=d.softMax);!(A||this.axisPointRange||this.stacking&&
this.stacking.usePercentage||q)&&e(this.min)&&e(this.max)&&(f=this.max-this.min)&&(!e(w)&&l&&(this.min-=f*l),!e(K)&&m&&(this.max+=f*m));!b(this.userMin)&&b(d.floor)&&(this.min=Math.max(this.min,d.floor));!b(this.userMax)&&b(d.ceiling)&&(this.max=Math.min(this.max,d.ceiling));r&&e(this.dataMin)&&(t=t||0,!e(w)&&this.min<t&&this.dataMin>=t?this.min=this.options.minRange?Math.min(t,this.max-this.minRange):t:!e(K)&&this.max>t&&this.dataMax<=t&&(this.max=this.options.minRange?Math.max(t,this.min+this.minRange):
t));b(this.min)&&b(this.max)&&!this.chart.polar&&this.min>this.max&&(e(this.options.min)?this.max=this.min:e(this.options.max)&&(this.min=this.max));this.tickInterval=this.min===this.max||"undefined"===typeof this.min||"undefined"===typeof this.max?1:q&&this.linkedParent&&!p&&h===this.linkedParent.options.tickPixelInterval?p=this.linkedParent.tickInterval:D(p,this.tickAmount?(this.max-this.min)/Math.max(this.tickAmount-1,1):void 0,A?1:(this.max-this.min)*h/Math.max(this.len,h));if(n&&!c){const b=
this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max);this.series.forEach(function(c){c.forceCrop=c.forceCropping&&c.forceCropping();c.processData(b)});k(this,"postProcessData",{hasExtremesChanged:b})}this.setAxisTranslation();k(this,"initialAxisTranslation");this.pointRange&&!p&&(this.tickInterval=Math.max(this.pointRange,this.tickInterval));c=D(d.minTickInterval,this.dateTime&&!this.series.some(b=>b.noSharedTooltip)?this.closestPointRange:0);!p&&this.tickInterval<c&&(this.tickInterval=
c);this.dateTime||this.logarithmic||p||(this.tickInterval=V(this,this.tickInterval));this.tickAmount||(this.tickInterval=this.unsquish());this.setTickPositions()}setTickPositions(){var c=this.options;const f=c.tickPositions,a=c.tickPositioner;var d=this.getMinorTickInterval(),n=this.hasVerticalPanning(),q="colorAxis"===this.coll;const g=(q||!n)&&c.startOnTick;n=(q||!n)&&c.endOnTick;q=[];let h;this.tickmarkOffset=this.categories&&"between"===c.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval=
"auto"===d&&this.tickInterval?this.tickInterval/c.minorTicksPerMajor:d;this.single=this.min===this.max&&e(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==c.allowDecimals);if(f)q=f.slice();else if(b(this.min)&&b(this.max)){if(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)))if(this.dateTime)q=this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,c.units),this.min,this.max,c.startOfWeek,this.ordinal&&this.ordinal.positions,
this.closestPointRange,!0);else if(this.logarithmic)q=this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max);else for(d=c=this.tickInterval;d<=2*c;)if(q=this.getLinearTickPositions(this.tickInterval,this.min,this.max),this.tickAmount&&q.length>this.tickAmount)this.tickInterval=V(this,d*=1.1);else break;else q=[this.min,this.max],F(19,!1,this.chart);q.length>this.len&&(q=[q[0],q[q.length-1]],q[0]===q[1]&&(q.length=1));a&&(this.tickPositions=q,(h=a.apply(this,[this.min,this.max]))&&
(q=h))}this.tickPositions=q;this.paddedTicks=q.slice(0);this.trimTicks(q,g,n);!this.isLinked&&b(this.min)&&b(this.max)&&(this.single&&2>q.length&&!this.categories&&!this.series.some(b=>b.is("heatmap")&&"between"===b.options.pointPlacement)&&(this.min-=.5,this.max+=.5),f||h||this.adjustTickAmount());k(this,"afterSetTickPositions")}trimTicks(b,c,f){const a=b[0],d=b[b.length-1],n=!this.isOrdinal&&this.minPointOffset||0;k(this,"trimTicks");if(!this.isLinked){if(c&&-Infinity!==a)this.min=a;else for(;this.min-
n>b[0];)b.shift();if(f)this.max=d;else for(;this.max+n<b[b.length-1];)b.pop();0===b.length&&e(a)&&!this.options.tickPositions&&b.push((d+a)/2)}}alignToOthers(){const c=this,f=[this],a=c.options,d="yAxis"===this.coll&&this.chart.options.chart.alignThresholds,k=[];let n;c.thresholdAlignment=void 0;if((!1!==this.chart.options.chart.alignTicks&&a.alignTicks||d)&&!1!==a.startOnTick&&!1!==a.endOnTick&&!c.logarithmic){const b=b=>{const {horiz:c,options:f}=b;return[c?f.left:f.top,f.width,f.height,f.pane].join()},
a=b(this);this.chart[this.coll].forEach(function(d){const {series:k}=d;k.length&&k.some(b=>b.visible)&&d!==c&&b(d)===a&&(n=!0,f.push(d))})}if(n&&d){f.forEach(f=>{f=f.getThresholdAlignment(c);b(f)&&k.push(f)});const a=1<k.length?k.reduce((b,c)=>b+c,0)/k.length:void 0;f.forEach(b=>{b.thresholdAlignment=a})}return n}getThresholdAlignment(c){(!b(this.dataMin)||this!==c&&this.series.some(b=>b.isDirty||b.isDirtyData))&&this.getSeriesExtremes();if(b(this.threshold))return c=h((this.threshold-(this.dataMin||
0))/((this.dataMax||0)-(this.dataMin||0)),0,1),this.options.reversed&&(c=1-c),c}getTickAmount(){const b=this.options,c=b.tickPixelInterval;let f=b.tickAmount;!e(b.tickInterval)&&!f&&this.len<c&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(f=2);!f&&this.alignToOthers()&&(f=Math.ceil(this.len/c)+1);4>f&&(this.finalTickAmt=f,f=5);this.tickAmount=f}adjustTickAmount(){const c=this,{finalTickAmt:f,max:a,min:d,options:k,tickPositions:n,tickAmount:q,thresholdAlignment:h}=c,r=n&&n.length;
var m=D(c.threshold,c.softThreshold?0:null);var l=c.tickInterval;let p;b(h)&&(p=.5>h?Math.ceil(h*(q-1)):Math.floor(h*(q-1)),k.reversed&&(p=q-1-p));if(c.hasData()&&b(d)&&b(a)){const h=()=>{c.transA*=(r-1)/(q-1);c.min=k.startOnTick?n[0]:Math.min(d,n[0]);c.max=k.endOnTick?n[n.length-1]:Math.max(a,n[n.length-1])};if(b(p)&&b(c.threshold)){for(;n[p]!==m||n.length!==q||n[0]>d||n[n.length-1]<a;){n.length=0;for(n.push(c.threshold);n.length<q;)void 0===n[p]||n[p]>c.threshold?n.unshift(g(n[0]-l)):n.push(g(n[n.length-
1]+l));if(l>8*c.tickInterval)break;l*=2}h()}else if(r<q){for(;n.length<q;)n.length%2||d===m?n.push(g(n[n.length-1]+l)):n.unshift(g(n[0]-l));h()}if(e(f)){for(l=m=n.length;l--;)(3===f&&1===l%2||2>=f&&0<l&&l<m-1)&&n.splice(l,1);c.finalTickAmt=void 0}}}setScale(){let b=!1,c=!1;this.series.forEach(function(f){b=b||f.isDirtyData||f.isDirty;c=c||f.xAxis&&f.xAxis.isDirty||!1});this.setAxisSize();const f=this.len!==(this.old&&this.old.len);f||b||c||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&
this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?(this.stacking&&(this.stacking.resetStacks(),this.stacking.buildStacks()),this.forceRedraw=!1,this.userMinRange||(this.minRange=void 0),this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=f||this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max))):this.stacking&&this.stacking.cleanStacks();b&&this.panningState&&(this.panningState.isDirty=!0);k(this,"afterSetScale")}setExtremes(b,
c,f,a,n){const e=this,q=e.chart;f=D(f,!0);e.series.forEach(function(b){delete b.kdTree});n=d(n,{min:b,max:c});k(e,"setExtremes",n,function(){e.userMin=b;e.userMax=c;e.eventArgs=n;f&&q.redraw(a)})}zoom(b,c){const f=this,a=this.dataMin,d=this.dataMax,n=this.options,q=Math.min(a,D(n.min,a)),g=Math.max(d,D(n.max,d));b={newMin:b,newMax:c};k(this,"zoom",b,function(b){let c=b.newMin,n=b.newMax;if(c!==f.min||n!==f.max)f.allowZoomOutside||(e(a)&&(c<q&&(c=q),c>g&&(c=g)),e(d)&&(n<q&&(n=q),n>g&&(n=g))),f.displayBtn=
"undefined"!==typeof c||"undefined"!==typeof n,f.setExtremes(c,n,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return b.zoomed}setAxisSize(){const b=this.chart;var c=this.options;const f=c.offsets||[0,0,0,0],a=this.horiz,d=this.width=Math.round(K(D(c.width,b.plotWidth-f[3]+f[1]),b.plotWidth)),n=this.height=Math.round(K(D(c.height,b.plotHeight-f[0]+f[2]),b.plotHeight)),k=this.top=Math.round(K(D(c.top,b.plotTop+f[0]),b.plotHeight,b.plotTop));c=this.left=Math.round(K(D(c.left,b.plotLeft+f[3]),b.plotWidth,
b.plotLeft));this.bottom=b.chartHeight-n-k;this.right=b.chartWidth-d-c;this.len=Math.max(a?d:n,0);this.pos=a?c:k}getExtremes(){const b=this.logarithmic;return{min:b?g(b.lin2log(this.min)):this.min,max:b?g(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}}getThreshold(b){var c=this.logarithmic;const f=c?c.lin2log(this.min):this.min;c=c?c.lin2log(this.max):this.max;null===b||-Infinity===b?b=f:Infinity===b?b=c:f>b?b=f:c<b&&(b=c);return this.translate(b,
0,1,0,1)}autoLabelAlign(b){const c=(D(b,0)-90*this.side+720)%360;b={align:"center"};k(this,"autoLabelAlign",b,function(b){15<c&&165>c?b.align="right":195<c&&345>c&&(b.align="left")});return b.align}tickSize(b){const c=this.options,f=D(c["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0);let a=c["tick"===b?"tickLength":"minorTickLength"],d;f&&a&&("inside"===c[b+"Position"]&&(a=-a),d=[a,f]);b={tickSize:d};k(this,"afterTickSize",b);return b.tickSize}labelMetrics(){const b=
this.chart.renderer;var c=this.ticks;c=c[Object.keys(c)[0]]||{};return this.chart.renderer.fontMetrics(c.label||c.movedLabel||b.box)}unsquish(){const c=this.options.labels;var f=this.horiz;const a=this.tickInterval,d=this.len/(((this.categories?1:0)+this.max-this.min)/a),n=c.rotation,k=.75*this.labelMetrics().h,e=Math.max(this.max-this.min,0),q=function(b){let c=b/(d||1);c=1<c?Math.ceil(c):1;c*a>e&&Infinity!==b&&Infinity!==d&&e&&(c=Math.ceil(e/a));return g(c*a)};let h=a,r,l=Number.MAX_VALUE,m;if(f){if(c.staggerLines||
(b(n)?m=[n]:d<c.autoRotationLimit&&(m=c.autoRotation)),m){let b;for(const c of m)if(c===n||c&&-90<=c&&90>=c)f=q(Math.abs(k/Math.sin(p*c))),b=f+Math.abs(c/360),b<l&&(l=b,r=c,h=f)}}else h=q(k);this.autoRotation=m;this.labelRotation=D(r,b(n)?n:0);return c.step?a:h}getSlotWidth(c){const f=this.chart,a=this.horiz,d=this.options.labels,n=Math.max(this.tickPositions.length-(this.categories?0:1),1),k=f.margin[3];if(c&&b(c.slotWidth))return c.slotWidth;if(a&&2>d.step)return d.rotation?0:(this.staggerLines||
1)*this.len/n;if(!a){c=d.style.width;if(void 0!==c)return parseInt(String(c),10);if(k)return k-f.spacing[3]}return.33*f.chartWidth}renderUnsquish(){const b=this.chart,c=b.renderer,a=this.tickPositions,d=this.ticks,n=this.options.labels,k=n.style,e=this.horiz,q=this.getSlotWidth();var g=Math.max(1,Math.round(q-2*n.padding));const h={},r=this.labelMetrics(),m=k.textOverflow;let l,p,D=0;f(n.rotation)||(h.rotation=n.rotation||0);a.forEach(function(b){b=d[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&
b.label.textPxLength>D&&(D=b.label.textPxLength)});this.maxLabelLength=D;if(this.autoRotation)D>g&&D>r.h?h.rotation=this.labelRotation:this.labelRotation=0;else if(q&&(l=g,!m))for(p="clip",g=a.length;!e&&g--;){var t=a[g];if(t=d[t].label)t.styles&&"ellipsis"===t.styles.textOverflow?t.css({textOverflow:"clip"}):t.textPxLength>q&&t.css({width:q+"px"}),t.getBBox().height>this.len/a.length-(r.h-r.f)&&(t.specificTextOverflow="ellipsis")}h.rotation&&(l=D>.5*b.chartHeight?.33*b.chartHeight:D,m||(p="ellipsis"));
if(this.labelAlign=n.align||this.autoLabelAlign(this.labelRotation))h.align=this.labelAlign;a.forEach(function(b){const c=(b=d[b])&&b.label,f=k.width,a={};c&&(c.attr(h),b.shortenLabel?b.shortenLabel():l&&!f&&"nowrap"!==k.whiteSpace&&(l<c.textPxLength||"SPAN"===c.element.tagName)?(a.width=l+"px",m||(a.textOverflow=c.specificTextOverflow||p),c.css(a)):c.styles&&c.styles.width&&!a.width&&!f&&c.css({width:null}),delete c.specificTextOverflow,b.rotation=h.rotation)},this);this.tickRotCorr=c.rotCorr(r.b,
this.labelRotation||0,0!==this.side)}hasData(){return this.series.some(function(b){return b.hasData()})||this.options.showEmpty&&e(this.min)&&e(this.max)}addTitle(b){const f=this.chart.renderer,a=this.horiz,d=this.opposite,n=this.options.title,k=this.chart.styledMode;let e;this.axisTitle||((e=n.textAlign)||(e=(a?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[n.align]),this.axisTitle=f.text(n.text||"",0,0,n.useHTML).attr({zIndex:7,rotation:n.rotation,
align:e}).addClass("highcharts-axis-title"),k||this.axisTitle.css(c(n.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||n.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[b?"show":"hide"](b)}generateTick(b){const c=this.ticks;c[b]?c[b].addLabel():c[b]=new H(this,b)}getOffset(){const c=this,{chart:f,horiz:a,options:d,side:n,ticks:q,tickPositions:g,coll:h,axisParent:r}=c,m=f.renderer,l=f.inverted&&!c.isZAxis?[1,0,3,2][n]:n;var p=c.hasData();const t=
d.title;var w=d.labels;const K=b(d.crossing);var G=f.axisOffset;const R=f.clipOffset,Q=[-1,1,1,-1][n],v=d.className;let ja,u=0,x;var E=0;let F=0;c.showAxis=ja=p||d.showEmpty;c.staggerLines=c.horiz&&w.staggerLines||void 0;if(!c.axisGroup){const b=(b,c,f)=>m.g(b).attr({zIndex:f}).addClass(`highcharts-${h.toLowerCase()}${c} `+(this.isRadial?`highcharts-radial-axis${c} `:"")+(v||"")).add(r);c.gridGroup=b("grid","-grid",d.gridZIndex);c.axisGroup=b("axis","",d.zIndex);c.labelGroup=b("axis-labels","-labels",
w.zIndex)}p||c.isLinked?(g.forEach(function(b){c.generateTick(b)}),c.renderUnsquish(),c.reserveSpaceDefault=0===n||2===n||{1:"left",3:"right"}[n]===c.labelAlign,D(w.reserveSpace,K?!1:null,"center"===c.labelAlign?!0:null,c.reserveSpaceDefault)&&g.forEach(function(b){F=Math.max(q[b].getLabelSize(),F)}),c.staggerLines&&(F*=c.staggerLines),c.labelOffset=F*(c.opposite?-1:1)):P(q,function(b,c){b.destroy();delete q[c]});t&&t.text&&!1!==t.enabled&&(c.addTitle(ja),ja&&!K&&!1!==t.reserveSpace&&(c.titleOffset=
u=c.axisTitle.getBBox()[a?"height":"width"],x=t.offset,E=e(x)?0:D(t.margin,a?5:10)));c.renderLine();c.offset=Q*D(d.offset,G[n]?G[n]+(d.margin||0):0);c.tickRotCorr=c.tickRotCorr||{x:0,y:0};p=0===n?-c.labelMetrics().h:2===n?c.tickRotCorr.y:0;E=Math.abs(F)+E;F&&(E=E-p+Q*(a?D(w.y,c.tickRotCorr.y+Q*w.distance):D(w.x,Q*w.distance)));c.axisTitleMargin=D(x,E);c.getMaxLabelDimensions&&(c.maxLabelDimensions=c.getMaxLabelDimensions(q,g));"colorAxis"!==h&&(w=this.tickSize("tick"),G[n]=Math.max(G[n],(c.axisTitleMargin||
0)+u+Q*c.offset,E,g&&g.length&&w?w[0]+Q*c.offset:0),G=!c.axisLine||d.offset?0:2*Math.floor(c.axisLine.strokeWidth()/2),R[l]=Math.max(R[l],G));k(this,"afterGetOffset")}getLinePath(b){const c=this.chart,f=this.opposite;var a=this.offset;const d=this.horiz,n=this.left+(f?this.width:0)+a;a=c.chartHeight-this.bottom-(f?this.height:0)+a;f&&(b*=-1);return c.renderer.crispLine([["M",d?this.left:n,d?a:this.top],["L",d?c.chartWidth-this.right:n,d?a:c.chartHeight-this.bottom]],b)}renderLine(){this.axisLine||
(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))}getTitlePosition(b){var c=this.horiz,f=this.left;const a=this.top;var d=this.len;const n=this.options.title,e=c?f:a,q=this.opposite,g=this.offset,h=n.x,r=n.y,l=this.chart.renderer.fontMetrics(b);b=b?Math.max(b.getBBox(!1,0).height-l.h-1,0):0;d={low:e+(c?0:d),middle:e+d/2,high:e+(c?d:
0)}[n.align];f=(c?a+this.height:f)+(c?1:-1)*(q?-1:1)*(this.axisTitleMargin||0)+[-b,b,l.f,-b][this.side];c={x:c?d+h:f+(q?this.width:0)+g+h,y:c?f+r-(q?this.height:0)+g:d+r};k(this,"afterGetTitlePosition",{titlePosition:c});return c}renderMinorTick(b,c){const f=this.minorTicks;f[b]||(f[b]=new H(this,b,"minor"));c&&f[b].isNew&&f[b].render(null,!0);f[b].render(null,!1,1)}renderTick(b,c,f){const a=this.ticks;if(!this.isLinked||b>=this.min&&b<=this.max||this.grid&&this.grid.isColumn)a[b]||(a[b]=new H(this,
b)),f&&a[b].isNew&&a[b].render(c,!0,-1),a[b].render(c)}render(){const c=this,f=c.chart,a=c.logarithmic,d=c.options,n=c.isLinked,e=c.tickPositions,q=c.axisTitle,g=c.ticks,h=c.minorTicks,r=c.alternateBands,l=d.stackLabels,m=d.alternateGridColor;var p=d.crossing;const D=c.tickmarkOffset,t=c.axisLine,w=c.showAxis,K=u(f.renderer.globalAnimation);let Q,G;c.labelEdge.length=0;c.overlap=!1;[g,h,r].forEach(function(b){P(b,function(b){b.isActive=!1})});if(b(p)){const b=this.isXAxis?f.yAxis[0]:f.xAxis[0],a=
[1,-1,-1,1][this.side];b&&(p=b.toPixels(p,!0),c.horiz&&(p=b.len-p),c.offset=a*p)}if(c.hasData()||n){const n=c.chart.hasRendered&&c.old&&b(c.old.min);c.minorTickInterval&&!c.categories&&c.getMinorTickPositions().forEach(function(b){c.renderMinorTick(b,n)});e.length&&(e.forEach(function(b,f){c.renderTick(b,f,n)}),D&&(0===c.min||c.single)&&(g[-1]||(g[-1]=new H(c,-1,null,!0)),g[-1].render(-1)));m&&e.forEach(function(b,d){G="undefined"!==typeof e[d+1]?e[d+1]+D:c.max-D;0===d%2&&b<c.max&&G<=c.max+(f.polar?
-D:D)&&(r[b]||(r[b]=new z.PlotLineOrBand(c)),Q=b+D,r[b].options={from:a?a.lin2log(Q):Q,to:a?a.lin2log(G):G,color:m,className:"highcharts-alternate-grid"},r[b].render(),r[b].isActive=!0)});c._addedPlotLB||(c._addedPlotLB=!0,(d.plotLines||[]).concat(d.plotBands||[]).forEach(function(b){c.addPlotBandOrLine(b)}))}[g,h,r].forEach(function(b){const c=[],a=K.duration;P(b,function(b,f){b.isActive||(b.render(f,!1,0),b.isActive=!1,c.push(f))});Z(function(){let f=c.length;for(;f--;)b[c[f]]&&!b[c[f]].isActive&&
(b[c[f]].destroy(),delete b[c[f]])},b!==r&&f.hasRendered&&a?a:0)});t&&(t[t.isPlaced?"animate":"attr"]({d:this.getLinePath(t.strokeWidth())}),t.isPlaced=!0,t[w?"show":"hide"](w));q&&w&&(q[q.isNew?"attr":"animate"](c.getTitlePosition(q)),q.isNew=!1);l&&l.enabled&&c.stacking&&c.stacking.renderStackTotals();c.old={len:c.len,max:c.max,min:c.min,transA:c.transA,userMax:c.userMax,userMin:c.userMin};c.isDirty=!1;k(this,"afterRender")}redraw(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));
this.series.forEach(function(b){b.isDirty=!0})}getKeepProps(){return this.keepProps||Y.keepProps}destroy(b){const c=this,f=c.plotLinesAndBands,a=this.eventOptions;k(this,"destroy",{keepEvents:b});b||X(c);[c.ticks,c.minorTicks,c.alternateBands].forEach(function(b){w(b)});if(f)for(b=f.length;b--;)f[b].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){c[b]&&(c[b]=c[b].destroy())});for(const b in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[b]=
c.plotLinesAndBandsGroups[b].destroy();P(c,function(b,f){-1===c.getKeepProps().indexOf(f)&&delete c[f]});this.eventOptions=a}drawCrosshair(b,c){const f=this.crosshair;var a=D(f&&f.snap,!0);const n=this.chart;let q,g=this.cross;k(this,"drawCrosshair",{e:b,point:c});b||(b=this.cross&&this.cross.e);if(f&&!1!==(e(c)||!a)){a?e(c)&&(q=D("colorAxis"!==this.coll?c.crosshairPos:null,this.isXAxis?c.plotX:this.len-c.plotY)):q=b&&(this.horiz?b.chartX-this.pos:this.len-b.chartY+this.pos);if(e(q)){var h={value:c&&
(this.isXAxis?c.x:D(c.stackY,c.y)),translatedValue:q};n.polar&&d(h,{isCrosshair:!0,chartX:b&&b.chartX,chartY:b&&b.chartY,point:c});h=this.getPlotLinePath(h)||null}if(!e(h)){this.hideCrosshair();return}a=this.categories&&!this.isRadial;g||(this.cross=g=n.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(a?"category ":"thin ")+(f.className||"")).attr({zIndex:D(f.zIndex,2)}).add(),n.styledMode||(g.attr({stroke:f.color||(a?I.parse("#ccd3ff").setOpacity(.25).get():"#cccccc"),"stroke-width":D(f.width,
1)}).css({"pointer-events":"none"}),f.dashStyle&&g.attr({dashstyle:f.dashStyle})));g.show().attr({d:h});a&&!f.width&&g.attr({"stroke-width":this.transA});this.cross.e=b}else this.hideCrosshair();k(this,"afterDrawCrosshair",{e:b,point:c})}hideCrosshair(){this.cross&&this.cross.hide();k(this,"afterHideCrosshair")}hasVerticalPanning(){const b=this.chart.options.chart.panning;return!!(b&&b.enabled&&/y/.test(b.type))}update(b,f){const a=this.chart;b=c(this.userOptions,b);this.destroy(!0);this.init(a,b);
a.isDirtyBox=!0;D(f,!0)&&a.redraw()}remove(b){const c=this.chart,f=this.coll,a=this.series;let d=a.length;for(;d--;)a[d]&&a[d].remove(!1);x(c.axes,this);x(c[f]||[],this);c.orderItems(f);this.destroy();c.isDirtyBox=!0;D(b,!0)&&c.redraw()}setTitle(b,c){this.update({title:b},c)}setCategories(b,c){this.update({categories:b},c)}}Y.defaultOptions=y.defaultXAxisOptions;Y.keepProps="coll extKey hcEvents names series userMax userMin".split(" ");"";return Y});M(a,"Core/Axis/DateTimeAxis.js",[a["Core/Utilities.js"]],
function(a){const {addEvent:x,getMagnitude:I,normalizeTickInterval:L,timeUnits:C}=a;var z;(function(y){function B(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)}function u(a){"datetime"!==a.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new l(this))}const v=[];y.compose=function(l){a.pushUnique(v,l)&&(l.keepProps.push("dateTime"),l.prototype.getTimeTicks=B,x(l,"init",u));return l};class l{constructor(a){this.axis=a}normalizeTimeTickInterval(a,l){const m=
l||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];l=m[m.length-1];let h=C[l[0]],g=l[1],e;for(e=0;e<m.length&&!(l=m[e],h=C[l[0]],g=l[1],m[e+1]&&a<=(h*g[g.length-1]+C[m[e+1][0]])/2);e++);h===C.year&&a<5*h&&(g=[1,2,5]);a=L(a/h,g,"year"===l[0]?Math.max(I(a/h),1):1);return{unitRange:h,count:a,unitName:l[0]}}getXDateFormat(a,l){const {axis:m}=this,h=m.chart.time;
return m.closestPointRange?h.getDateFormat(m.closestPointRange,a,m.options.startOfWeek,l)||h.resolveDTLFormat(l.year).main:h.resolveDTLFormat(l.day).main}}y.Additions=l})(z||(z={}));return z});M(a,"Core/Axis/LogarithmicAxis.js",[a["Core/Utilities.js"]],function(a){const {addEvent:x,normalizeTickInterval:I,pick:L}=a;var C;(function(y){function H(a){let l=this.logarithmic;"logarithmic"!==a.userOptions.type?this.logarithmic=void 0:l||(this.logarithmic=new v(this))}function B(){const a=this.logarithmic;
a&&(this.lin2val=function(l){return a.lin2log(l)},this.val2lin=function(l){return a.log2lin(l)})}const u=[];y.compose=function(l){a.pushUnique(u,l)&&(l.keepProps.push("logarithmic"),x(l,"init",H),x(l,"afterInit",B));return l};class v{constructor(a){this.axis=a}getLogTickPositions(a,p,t,m){const h=this.axis;var g=h.len,e=h.options;let l=[];m||(this.minorAutoInterval=void 0);if(.5<=a)a=Math.round(a),l=h.getLinearTickPositions(a,p,t);else if(.08<=a){e=Math.floor(p);let h,w,d,k,r;for(g=.3<a?[1,2,4]:.15<
a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<t+1&&!r;e++)for(w=g.length,h=0;h<w&&!r;h++)d=this.log2lin(this.lin2log(e)*g[h]),d>p&&(!m||k<=t)&&"undefined"!==typeof k&&l.push(k),k>t&&(r=!0),k=d}else p=this.lin2log(p),t=this.lin2log(t),a=m?h.getMinorTickInterval():e.tickInterval,a=L("auto"===a?null:a,this.minorAutoInterval,e.tickPixelInterval/(m?5:1)*(t-p)/((m?g/h.tickPositions.length:g)||1)),a=I(a),l=h.getLinearTickPositions(a,p,t).map(this.log2lin),m||(this.minorAutoInterval=a/5);m||(h.tickInterval=a);return l}lin2log(a){return Math.pow(10,
a)}log2lin(a){return Math.log(a)/Math.LN10}}y.Additions=v})(C||(C={}));return C});M(a,"Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",[a["Core/Utilities.js"]],function(a){const {erase:x,extend:I,isNumber:L}=a;var C;(function(y){function H(a){return this.addPlotBandOrLine(a,"plotBands")}function B(a,e){const g=this.userOptions;let l=new h(this,a);this.visible&&(l=l.render());if(l){this._addedPlotLB||(this._addedPlotLB=!0,(g.plotLines||[]).concat(g.plotBands||[]).forEach(a=>{this.addPlotBandOrLine(a)}));
if(e){const h=g[e]||[];h.push(a);g[e]=h}this.plotLinesAndBands.push(l)}return l}function u(a){return this.addPlotBandOrLine(a,"plotLines")}function v(a,e,h=this.options){const g=this.getPlotLinePath({value:e,force:!0,acrossPanes:h.acrossPanes}),l=[],d=this.horiz;e=!L(this.min)||!L(this.max)||a<this.min&&e<this.min||a>this.max&&e>this.max;a=this.getPlotLinePath({value:a,force:!0,acrossPanes:h.acrossPanes});h=1;let k;if(a&&g)for(e&&(k=a.toString()===g.toString(),h=0),e=0;e<a.length;e+=2){const r=a[e],
q=a[e+1],m=g[e],b=g[e+1];"M"!==r[0]&&"L"!==r[0]||"M"!==q[0]&&"L"!==q[0]||"M"!==m[0]&&"L"!==m[0]||"M"!==b[0]&&"L"!==b[0]||(d&&m[1]===r[1]?(m[1]+=h,b[1]+=h):d||m[2]!==r[2]||(m[2]+=h,b[2]+=h),l.push(["M",r[1],r[2]],["L",q[1],q[2]],["L",b[1],b[2]],["L",m[1],m[2]],["Z"]));l.isFlat=k}return l}function l(a){this.removePlotBandOrLine(a)}function p(a){const e=this.plotLinesAndBands,g=this.options,h=this.userOptions;if(e){let l=e.length;for(;l--;)e[l].id===a&&e[l].destroy();[g.plotLines||[],h.plotLines||[],
g.plotBands||[],h.plotBands||[]].forEach(function(d){for(l=d.length;l--;)(d[l]||{}).id===a&&x(d,d[l])})}}function t(a){this.removePlotBandOrLine(a)}const m=[];let h;y.compose=function(g,e){h||(h=g);a.pushUnique(m,e)&&I(e.prototype,{addPlotBand:H,addPlotLine:u,addPlotBandOrLine:B,getPlotBandPath:v,removePlotBand:l,removePlotLine:t,removePlotBandOrLine:p});return e}})(C||(C={}));return C});M(a,"Core/Axis/PlotLineOrBand/PlotLineOrBand.js",[a["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],a["Core/Utilities.js"]],
function(a,y){const {arrayMax:x,arrayMin:L,defined:C,destroyObjectProperties:z,erase:H,fireEvent:B,merge:u,objectEach:v,pick:l}=y;class p{static compose(l){return a.compose(p,l)}constructor(a,l){this.axis=a;l&&(this.options=l,this.id=l.id)}render(){B(this,"render");const a=this,m=a.axis,h=m.horiz;var g=m.logarithmic;const e=a.options,p=e.color,x=l(e.zIndex,0),F=e.events,d={},k=m.chart.renderer;let r=e.label,q=a.label,G=e.to,b=e.from,f=e.value,c=a.svgElem;var n=[];const P=C(b)&&C(G);n=C(f);const D=
!c,K={"class":"highcharts-plot-"+(P?"band ":"line ")+(e.className||"")};let X=P?"bands":"lines";g&&(b=g.log2lin(b),G=g.log2lin(G),f=g.log2lin(f));m.chart.styledMode||(n?(K.stroke=p||"#999999",K["stroke-width"]=l(e.width,1),e.dashStyle&&(K.dashstyle=e.dashStyle)):P&&(K.fill=p||"#e6e9ff",e.borderWidth&&(K.stroke=e.borderColor,K["stroke-width"]=e.borderWidth)));d.zIndex=x;X+="-"+x;(g=m.plotLinesAndBandsGroups[X])||(m.plotLinesAndBandsGroups[X]=g=k.g("plot-"+X).attr(d).add());D&&(a.svgElem=c=k.path().attr(K).add(g));
if(n)n=m.getPlotLinePath({value:f,lineWidth:c.strokeWidth(),acrossPanes:e.acrossPanes});else if(P)n=m.getPlotBandPath(b,G,e);else return;!a.eventsAdded&&F&&(v(F,function(b,f){c.on(f,function(b){F[f].apply(a,[b])})}),a.eventsAdded=!0);(D||!c.d)&&n&&n.length?c.attr({d:n}):c&&(n?(c.show(),c.animate({d:n})):c.d&&(c.hide(),q&&(a.label=q=q.destroy())));r&&(C(r.text)||C(r.formatter))&&n&&n.length&&0<m.width&&0<m.height&&!n.isFlat?(r=u({align:h&&P&&"center",x:h?!P&&4:10,verticalAlign:!h&&P&&"middle",y:h?
P?16:10:P?6:-4,rotation:h&&!P&&90},r),this.renderLabel(r,n,P,x)):q&&q.hide();return a}renderLabel(a,l,h,g){const e=this.axis;var m=e.chart.renderer;let p=this.label;p||(this.label=p=m.text(this.getLabelText(a),0,0,a.useHTML).attr({align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(a.className||""),zIndex:g}).add(),e.chart.styledMode||p.css(u({fontSize:"0.8em",textOverflow:"ellipsis"},a.style)));g=l.xBounds||[l[0][1],l[1][1],h?l[2][1]:l[0][1]];l=
l.yBounds||[l[0][2],l[1][2],h?l[2][2]:l[0][2]];h=L(g);m=L(l);p.align(a,!1,{x:h,y:m,width:x(g)-h,height:x(l)-m});p.alignValue&&"left"!==p.alignValue||(a=a.clip?e.width:e.chart.chartWidth,p.css({width:(90===p.rotation?e.height-(p.alignAttr.y-e.top):a-(p.alignAttr.x-e.left))+"px"}));p.show(!0)}getLabelText(a){return C(a.formatter)?a.formatter.call(this):a.text}destroy(){H(this.axis.plotLinesAndBands,this);delete this.axis;z(this)}}"";"";return p});M(a,"Core/Tooltip.js",[a["Core/Templating.js"],a["Core/Globals.js"],
a["Core/Renderer/RendererUtilities.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],function(a,y,I,L,C){const {format:x}=a,{doc:H,isSafari:B}=y,{distribute:u}=I,{addEvent:v,clamp:l,css:p,discardElement:t,extend:m,fireEvent:h,isArray:g,isNumber:e,isString:w,merge:E,pick:F,splat:d,syncTimeout:k}=C;class r{constructor(a,d){this.allowShared=!0;this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=
a;this.init(a,d)}bodyFormatter(a){return a.map(function(a){const b=a.series.tooltipOptions;return(b[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,b[(a.point.formatPrefix||"point")+"Format"]||"")})}cleanSplit(a){this.chart.series.forEach(function(d){const b=d&&d.tt;b&&(!b.isActive||a?d.tt=b.destroy():b.isActive=!1)})}defaultFormatter(a){const k=this.points||d(this);let b;b=[a.tooltipFooterHeaderFormatter(k[0])];b=b.concat(a.bodyFormatter(k));b.push(a.tooltipFooterHeaderFormatter(k[0],
!0));return b}destroy(){this.label&&(this.label=this.label.destroy());this.split&&(this.cleanSplit(!0),this.tt&&(this.tt=this.tt.destroy()));this.renderer&&(this.renderer=this.renderer.destroy(),t(this.container));C.clearTimeout(this.hideTimer);C.clearTimeout(this.tooltipTimeout)}getAnchor(a,k){var b=this.chart;const f=b.pointer,c=b.inverted,n=b.plotTop;b=b.plotLeft;a=d(a);a[0].series&&a[0].series.yAxis&&!a[0].series.yAxis.options.reversedStacks&&(a=a.slice().reverse());if(this.followPointer&&k)"undefined"===
typeof k.chartX&&(k=f.normalize(k)),a=[k.chartX-b,k.chartY-n];else if(a[0].tooltipPos)a=a[0].tooltipPos;else{let f=0,d=0;a.forEach(function(b){if(b=b.pos(!0))f+=b[0],d+=b[1]});f/=a.length;d/=a.length;this.shared&&1<a.length&&k&&(c?f=k.chartX:d=k.chartY);a=[f-b,d-n]}return a.map(Math.round)}getClassName(a,d,b){const f=a.series,c=f.options;return[this.options.className,"highcharts-label",b&&"highcharts-tooltip-header",d?"highcharts-tooltip-box":"highcharts-tooltip",!b&&"highcharts-color-"+F(a.colorIndex,
f.colorIndex),c&&c.className].filter(w).join(" ")}getLabel(){const a=this,d=this.chart.styledMode,b=this.options,f=this.split&&this.allowShared,c=b.style.pointerEvents||(this.shouldStickOnContact()?"auto":"none");let n,k=this.chart.renderer;if(this.label){var e=!this.label.hasClass("highcharts-label");(!f&&e||f&&!e)&&this.destroy()}if(!this.label){if(this.outside){e=this.chart.options.chart.style;const b=L.getRendererType();this.container=n=y.doc.createElement("div");n.className="highcharts-tooltip-container";
p(n,{position:"absolute",top:"1px",pointerEvents:c,zIndex:Math.max(this.options.style.zIndex||0,(e&&e.zIndex||0)+3)});y.doc.body.appendChild(n);this.renderer=k=new b(n,0,0,e,void 0,void 0,k.styledMode)}f?this.label=k.g("tooltip"):(this.label=k.label("",0,0,b.shape,void 0,void 0,b.useHTML,void 0,"tooltip").attr({padding:b.padding,r:b.borderRadius}),d||this.label.attr({fill:b.backgroundColor,"stroke-width":b.borderWidth||0}).css(b.style).css({pointerEvents:c}));if(a.outside){const b=this.label,{xSetter:c,
ySetter:f}=b;b.xSetter=function(f){c.call(b,a.distance);n.style.left=f+"px"};b.ySetter=function(c){f.call(b,a.distance);n.style.top=c+"px"}}this.label.attr({zIndex:8}).shadow(b.shadow).add()}return this.label}getPlayingField(){const {body:a,documentElement:d}=H,{chart:b,distance:f,outside:c}=this;return{width:c?Math.max(a.scrollWidth,d.scrollWidth,a.offsetWidth,d.offsetWidth,d.clientWidth)-2*f:b.chartWidth,height:c?Math.max(a.scrollHeight,d.scrollHeight,a.offsetHeight,d.offsetHeight,d.clientHeight):
b.chartHeight}}getPosition(a,d,b){const f=this.chart,c=this.distance,n={},k=f.inverted&&b.h||0,e=this.outside;var q=this.getPlayingField();const g=q.width,h=q.height,r=f.pointer.getChartPosition();q=n=>{const k="x"===n;return[n,k?g:h,k?a:d].concat(e?[k?a*r.scaleX:d*r.scaleY,k?r.left-c+(b.plotX+f.plotLeft)*r.scaleX:r.top-c+(b.plotY+f.plotTop)*r.scaleY,0,k?g:h]:[k?a:d,k?b.plotX+f.plotLeft:b.plotY+f.plotTop,k?f.plotLeft:f.plotTop,k?f.plotLeft+f.plotWidth:f.plotTop+f.plotHeight])};let l=q("y"),m=q("x"),
p;q=!!b.negative;!f.polar&&f.hoverSeries&&f.hoverSeries.yAxis&&f.hoverSeries.yAxis.reversed&&(q=!q);const t=!this.followPointer&&F(b.ttBelow,!f.inverted===q),w=function(b,a,f,d,q,g,h){const l=e?"y"===b?c*r.scaleY:c*r.scaleX:c,m=(f-d)/2,p=d<q-c,J=q+c+d<a,D=q-l-f+m;q=q+l-m;if(t&&J)n[b]=q;else if(!t&&p)n[b]=D;else if(p)n[b]=Math.min(h-d,0>D-k?D:D-k);else if(J)n[b]=Math.max(g,q+k+f>a?q:q+k);else return!1},G=function(b,a,f,d,k){let e;k<c||k>a-c?e=!1:n[b]=k<f/2?1:k>a-d/2?a-d-2:k-f/2;return e},v=function(b){const c=
l;l=m;m=c;p=b},J=function(){!1!==w.apply(0,l)?!1!==G.apply(0,m)||p||(v(!0),J()):p?n.x=n.y=0:(v(!0),J())};(f.inverted||1<this.len)&&v();J();return n}hide(a){const d=this;C.clearTimeout(this.hideTimer);a=F(a,this.options.hideDelay);this.isHidden||(this.hideTimer=k(function(){d.getLabel().fadeOut(a?void 0:a);d.isHidden=!0},a))}init(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted&&!a.polar;this.shared=d.shared||this.split;this.outside=
F(d.outside,!(!a.scrollablePixelsX&&!a.scrollablePixelsY))}shouldStickOnContact(a){return!(this.followPointer||!this.options.stickOnContact||a&&!this.chart.pointer.inClass(a.target,"highcharts-tooltip"))}move(a,d,b,f){const c=this,n=c.now,k=!1!==c.options.animation&&!c.isHidden&&(1<Math.abs(a-n.x)||1<Math.abs(d-n.y)),e=c.followPointer||1<c.len;m(n,{x:k?(2*n.x+a)/3:a,y:k?(n.y+d)/2:d,anchorX:e?void 0:k?(2*n.anchorX+b)/3:b,anchorY:e?void 0:k?(n.anchorY+f)/2:f});c.getLabel().attr(n);c.drawTracker();k&&
(C.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){c&&c.move(a,d,b,f)},32))}refresh(a,k){const b=this.chart,f=this.options,c=b.pointer,n=d(a),e=n[0],q=[];var r=f.format,l=f.formatter||this.defaultFormatter;const m=this.shared,p=b.styledMode;let t={};if(f.enabled&&e.series){C.clearTimeout(this.hideTimer);this.allowShared=!(!g(a)&&a.series&&a.series.noSharedTooltip);this.followPointer=!this.split&&e.series.tooltipOptions.followPointer;a=this.getAnchor(a,k);var v=a[0],G=a[1];
m&&this.allowShared?(c.applyInactiveState(n),n.forEach(function(b){b.setState("hover");q.push(b.getLabelConfig())}),t=e.getLabelConfig(),t.points=q):t=e.getLabelConfig();this.len=q.length;r=w(r)?x(r,t,b):l.call(t,this);l=e.series;this.distance=F(l.tooltipOptions.distance,16);if(!1===r)this.hide();else{if(this.split&&this.allowShared)this.renderSplit(r,n);else{let d=v,g=G;k&&c.isDirectTouch&&(d=k.chartX-b.plotLeft,g=k.chartY-b.plotTop);if(b.polar||!1===l.options.clip||n.some(b=>c.isDirectTouch||b.series.shouldShowTooltip(d,
g)))k=this.getLabel(),f.style.width&&!p||k.css({width:(this.outside?this.getPlayingField():b.spacingBox).width+"px"}),k.attr({text:r&&r.join?r.join(""):r}),k.addClass(this.getClassName(e),!0),p||k.attr({stroke:f.borderColor||e.color||l.color||"#666666"}),this.updatePosition({plotX:v,plotY:G,negative:e.negative,ttBelow:e.ttBelow,h:a[2]||0});else{this.hide();return}}this.isHidden&&this.label&&this.label.attr({opacity:1}).show();this.isHidden=!1}h(this,"refresh")}}renderSplit(a,d){function b(b,c,a,d,
n=!0){a?(c=S?0:z,b=l(b-d/2,J.left,J.right-d-(f.outside?W:0))):(c-=da,b=n?b-d-x:b+x,b=l(b,n?b:J.left,J.right));return{x:b,y:c}}const f=this,{chart:c,chart:{chartWidth:n,chartHeight:k,plotHeight:e,plotLeft:g,plotTop:h,pointer:q,scrollablePixelsY:r=0,scrollablePixelsX:p,scrollingContainer:{scrollLeft:t,scrollTop:v}={scrollLeft:0,scrollTop:0},styledMode:G},distance:x,options:E,options:{positioner:y}}=f,J=f.outside&&"number"!==typeof p?H.documentElement.getBoundingClientRect():{left:t,right:t+n,top:v,
bottom:v+k},N=f.getLabel(),O=this.renderer||c.renderer,S=!(!c.xAxis[0]||!c.xAxis[0].opposite),{left:W,top:ha}=q.getChartPosition();let da=h+v,C=0,z=e-r;w(a)&&(a=[!1,a]);a=a.slice(0,d.length+1).reduce(function(c,a,n){if(!1!==a&&""!==a){n=d[n-1]||{isHeader:!0,plotX:d[0].plotX,plotY:e,series:{}};const D=n.isHeader;var k=D?f:n.series,q;{var r=n;a=a.toString();var m=k.tt;const {isHeader:b,series:c}=r;m||(m={padding:E.padding,r:E.borderRadius},G||(m.fill=E.backgroundColor,m["stroke-width"]=null!==(q=E.borderWidth)&&
void 0!==q?q:1),m=O.label("",0,0,E[b?"headerShape":"shape"],void 0,void 0,E.useHTML).addClass(f.getClassName(r,!0,b)).attr(m).add(N));m.isActive=!0;m.attr({text:a});G||m.css(E.style).attr({stroke:E.borderColor||r.color||c.color||"#333333"});q=m}q=k.tt=q;r=q.getBBox();k=r.width+q.strokeWidth();D&&(C=r.height,z+=C,S&&(da-=C));{const {isHeader:b,plotX:c=0,plotY:f=0,series:d}=n;if(b){a=g+c;var p=h+e/2}else{const {xAxis:b,yAxis:n}=d;a=b.pos+l(c,-x,b.len+x);d.shouldShowTooltip(0,n.pos-h+f,{ignoreX:!0})&&
(p=n.pos+f)}a=l(a,J.left-x,J.right+x);p={anchorX:a,anchorY:p}}const {anchorX:t,anchorY:Q}=p;"number"===typeof Q?(p=r.height+1,r=y?y.call(f,k,p,n):b(t,Q,D,k),c.push({align:y?0:void 0,anchorX:t,anchorY:Q,boxWidth:k,point:n,rank:F(r.rank,D?1:0),size:p,target:r.y,tt:q,x:r.x})):q.isActive=!1}return c},[]);!y&&a.some(b=>{var {outside:c}=f;c=(c?W:0)+b.anchorX;return c<J.left&&c+b.boxWidth<J.right?!0:c<W-J.left+b.boxWidth&&J.right-c>c})&&(a=a.map(c=>{const {x:a,y:f}=b(c.anchorX,c.anchorY,c.point.isHeader,
c.boxWidth,!1);return m(c,{target:f,x:a})}));f.cleanSplit();u(a,z);var ca=W,L=W;a.forEach(function(b){const {x:c,boxWidth:a,isHeader:d}=b;d||(f.outside&&W+c<ca&&(ca=W+c),!d&&f.outside&&ca+a>L&&(L=W+c))});a.forEach(function(b){const {x:c,anchorX:a,anchorY:d,pos:n,point:{isHeader:k}}=b,e={visibility:"undefined"===typeof n?"hidden":"inherit",x:c,y:(n||0)+da,anchorX:a,anchorY:d};if(f.outside&&c<a){const b=W-ca;0<b&&(k||(e.x=c+b,e.anchorX=a+b),k&&(e.x=(L-ca)/2,e.anchorX=a+b))}b.tt.attr(e)});const {container:R,
outside:Q,renderer:la}=f;if(Q&&R&&la){const {width:b,height:c,x:a,y:f}=N.getBBox();la.setSize(b+a,c+f,!1);R.style.left=ca+"px";R.style.top=ha+"px"}B&&N.attr({opacity:1===N.opacity?.999:1})}drawTracker(){if(this.shouldStickOnContact()){var a=this.chart,d=this.label,b=this.shared?a.hoverPoints:a.hoverPoint;if(d&&b){var f={x:0,y:0,width:0,height:0};b=this.getAnchor(b);var c=d.getBBox();b[0]+=a.plotLeft-d.translateX;b[1]+=a.plotTop-d.translateY;f.x=Math.min(0,b[0]);f.y=Math.min(0,b[1]);f.width=0>b[0]?
Math.max(Math.abs(b[0]),c.width-b[0]):Math.max(Math.abs(b[0]),c.width);f.height=0>b[1]?Math.max(Math.abs(b[1]),c.height-Math.abs(b[1])):Math.max(Math.abs(b[1]),c.height);this.tracker?this.tracker.attr(f):(this.tracker=d.renderer.rect(f).addClass("highcharts-tracker").add(d),a.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}else this.tracker&&(this.tracker=this.tracker.destroy())}styledModeFormat(a){return a.replace('style="font-size: 0.8em"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,
'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')}tooltipFooterHeaderFormatter(a,d){const b=a.series,f=b.tooltipOptions;var c=b.xAxis;const n=c&&c.dateTime;c={isFooter:d,labelConfig:a};let k=f.xDateFormat,g=f[d?"footerFormat":"headerFormat"];h(this,"headerFormatter",c,function(c){n&&!k&&e(a.key)&&(k=n.getXDateFormat(a.key,f.dateTimeLabelFormats));n&&k&&(a.point&&a.point.tooltipDateKeys||["key"]).forEach(function(b){g=g.replace("{point."+b+"}","{point."+
b+":"+k+"}")});b.chart.styledMode&&(g=this.styledModeFormat(g));c.text=x(g,{point:a,series:b},this.chart)});return c.text}update(a){this.destroy();this.init(this.chart,E(!0,this.options,a))}updatePosition(a){const {chart:d,distance:b,options:f}=this;var c=d.pointer;const n=this.getLabel(),{left:k,top:e,scaleX:g,scaleY:h}=c.getChartPosition();c=(f.positioner||this.getPosition).call(this,n.width,n.height,a);let q=(a.plotX||0)+d.plotLeft;a=(a.plotY||0)+d.plotTop;let r;if(this.outside){f.positioner&&
(c.x+=k-b,c.y+=e-b);r=(f.borderWidth||0)+2*b;this.renderer.setSize(n.width+r,n.height+r,!1);if(1!==g||1!==h)p(this.container,{transform:`scale(${g}, ${h})`}),q*=g,a*=h;q+=k-c.x;a+=e-c.y}this.move(Math.round(c.x),Math.round(c.y||0),q,a)}}(function(a){const d=[];a.compose=function(b){C.pushUnique(d,b)&&v(b,"afterInit",function(){const b=this.chart;b.options.tooltip&&(b.tooltip=new a(b,b.options.tooltip))})}})(r||(r={}));"";return r});M(a,"Core/Series/Point.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Animation/AnimationUtilities.js"],
a["Core/Defaults.js"],a["Core/Templating.js"],a["Core/Utilities.js"]],function(a,y,I,L,C){const {animObject:x}=y,{defaultOptions:H}=I,{format:B}=L,{addEvent:u,defined:v,erase:l,extend:p,fireEvent:t,getNestedProperty:m,isArray:h,isFunction:g,isNumber:e,isObject:w,merge:E,objectEach:F,pick:d,syncTimeout:k,removeEvent:r,uniqueKey:q}=C;class G{constructor(){this.category=void 0;this.destroyed=!1;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=
!1;this.total=this.shapeArgs=this.series=void 0;this.visible=!0;this.x=void 0}animateBeforeDestroy(){const b=this,a={x:b.startXPos,opacity:0},c=b.getGraphicalProps();c.singular.forEach(function(c){b[c]=b[c].animate("dataLabel"===c?{x:b[c].startXPos,y:b[c].startYPos,opacity:0}:a)});c.plural.forEach(function(c){b[c].forEach(function(c){c.element&&c.animate(p({x:b.startXPos},c.startYPos?{x:c.startXPos,y:c.startYPos}:{}))})})}applyOptions(b,a){const c=this.series,f=c.options.pointValKey||c.pointValKey;
b=G.prototype.optionsToObject.call(this,b);p(this,b);this.options=this.options?p(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;f&&(this.y=G.prototype.getNestedProperty.call(this,f));this.formatPrefix=(this.isNull=this.isValid&&!this.isValid())?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof a&&c.xAxis&&c.xAxis.hasNames&&(this.x=c.xAxis.nameToX(this));"undefined"===typeof this.x&&c?this.x="undefined"===typeof a?c.autoIncrement():
a:e(b.x)&&c.options.relativeXValue&&(this.x=c.autoIncrement(b.x));return this}destroy(){if(!this.destroyed){const a=this;var b=a.series;const c=b.chart;b=b.options.dataSorting;const d=c.hoverPoints,e=x(a.series.chart.renderer.globalAnimation),g=()=>{if(a.graphic||a.graphics||a.dataLabel||a.dataLabels)r(a),a.destroyElements();for(const b in a)delete a[b]};a.legendItem&&c.legend.destroyItem(a);d&&(a.setState(),l(d,a),d.length||(c.hoverPoints=null));if(a===c.hoverPoint)a.onMouseOut();b&&b.enabled?(this.animateBeforeDestroy(),
k(g,e.duration)):g();c.pointCount--}this.destroyed=!0}destroyElements(b){const a=this;b=a.getGraphicalProps(b);b.singular.forEach(function(b){a[b]=a[b].destroy()});b.plural.forEach(function(b){a[b].forEach(function(b){b&&b.element&&b.destroy()});delete a[b]})}firePointEvent(b,a,c){const f=this,d=this.series.options;(d.point.events[b]||f.options&&f.options.events&&f.options.events[b])&&f.importEvents();"click"===b&&d.allowPointSelect&&(c=function(b){f.select&&f.select(null,b.ctrlKey||b.metaKey||b.shiftKey)});
t(f,b,a,c)}getClassName(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")}getGraphicalProps(b){const a=this,c=[],d={singular:[],plural:[]};let k,e;b=b||{graphic:1,dataLabel:1};
b.graphic&&c.push("graphic");b.dataLabel&&c.push("dataLabel","dataLabelPath","dataLabelUpper","connector");for(e=c.length;e--;)k=c[e],a[k]&&d.singular.push(k);["graphic","dataLabel","connector"].forEach(function(c){const f=c+"s";b[c]&&a[f]&&d.plural.push(f)});return d}getLabelConfig(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}}getNestedProperty(b){if(b)return 0===
b.indexOf("custom.")?m(b,this.options):this[b]}getZone(){var b=this.series;const a=b.zones;b=b.zoneAxis||"y";let c,d=0;for(c=a[d];this[b]>=c.value;)c=a[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=c&&c.color&&!this.options.color?c.color:this.nonZonedColor;return c}hasNewShapeType(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType}init(b,a,c){this.series=b;this.applyOptions(a,c);this.id=v(this.id)?this.id:q();this.resolveColor();
b.chart.pointCount++;t(this,"afterInit");return this}isValid(){return null!==this.x&&e(this.y)}optionsToObject(b){var a=this.series;const c=a.options.keys,d=c||a.pointArrayMap||["y"],k=d.length;let g={},q=0,r=0;if(e(b)||null===b)g[d[0]]=b;else if(h(b))for(!c&&b.length>k&&(a=typeof b[0],"string"===a?g.name=b[0]:"number"===a&&(g.x=b[0]),q++);r<k;)c&&"undefined"===typeof b[q]||(0<d[r].indexOf(".")?G.prototype.setNestedProperty(g,b[q],d[r]):g[d[r]]=b[q]),q++,r++;else"object"===typeof b&&(g=b,b.dataLabels&&
(a._hasPointLabels=!0),b.marker&&(a._hasPointMarkers=!0));return g}pos(b,a=this.plotY){if(!this.destroyed){const {plotX:c,series:f}=this,{chart:d,xAxis:k,yAxis:g}=f;let h=0,q=0;if(e(c)&&e(a))return b&&(h=k?k.pos:d.plotLeft,q=g?g.pos:d.plotTop),d.inverted&&k&&g?[g.len-a+q,k.len-c+h]:[c+h,a+q]}}resolveColor(){const b=this.series;var a=b.chart.styledMode;let c;var k=b.chart.options.chart.colorCount;delete this.nonZonedColor;b.options.colorByPoint?(a||(k=b.options.colors||b.chart.options.colors,c=k[b.colorCounter],
k=k.length),a=b.colorCounter,b.colorCounter++,b.colorCounter===k&&(b.colorCounter=0)):(a||(c=b.color),a=b.colorIndex);this.colorIndex=d(this.options.colorIndex,a);this.color=d(this.options.color,c)}setNestedProperty(b,a,c){c.split(".").reduce(function(b,c,f,d){b[c]=d.length-1===f?a:w(b[c],!0)?b[c]:{};return b[c]},b);return b}shouldDraw(){return!this.isNull}tooltipFormatter(b){const a=this.series,c=a.tooltipOptions,k=d(c.valueDecimals,""),e=c.valuePrefix||"",g=c.valueSuffix||"";a.chart.styledMode&&
(b=a.chart.tooltip.styledModeFormat(b));(a.pointArrayMap||["y"]).forEach(function(c){c="{point."+c;if(e||g)b=b.replace(RegExp(c+"}","g"),e+c+"}"+g);b=b.replace(RegExp(c+"}","g"),c+":,."+k+"f}")});return B(b,{point:this,series:this.series},a.chart)}update(b,a,c,k){function f(){n.applyOptions(b);var f=g&&n.hasMockGraphic;f=null===n.y?!f:f;g&&f&&(n.graphic=g.destroy(),delete n.hasMockGraphic);w(b,!0)&&(g&&g.element&&b&&b.marker&&"undefined"!==typeof b.marker.symbol&&(n.graphic=g.destroy()),b&&b.dataLabels&&
n.dataLabel&&(n.dataLabel=n.dataLabel.destroy()),n.connector&&(n.connector=n.connector.destroy()));r=n.index;e.updateParallelArrays(n,r);q.data[r]=w(q.data[r],!0)||w(b,!0)?n.options:d(b,q.data[r]);e.isDirty=e.isDirtyData=!0;!e.fixedBox&&e.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===q.legendType&&(h.isDirtyLegend=!0);a&&h.redraw(c)}const n=this,e=n.series,g=n.graphic,h=e.chart,q=e.options;let r;a=d(a,!0);!1===k?f():n.firePointEvent("update",{options:b},f)}remove(b,a){this.series.removePoint(this.series.data.indexOf(this),
b,a)}select(b,a){const c=this,f=c.series,k=f.chart;this.selectedStaging=b=d(b,!c.selected);c.firePointEvent(b?"select":"unselect",{accumulate:a},function(){c.selected=c.options.selected=b;f.options.data[f.data.indexOf(c)]=c.options;c.setState(b&&"select");a||k.getSelectedPoints().forEach(function(b){const a=b.series;b.selected&&b!==c&&(b.selected=b.options.selected=!1,a.options.data[a.data.indexOf(b)]=b.options,b.setState(k.hoverPoints&&a.options.inactiveOtherPoints?"inactive":""),b.firePointEvent("unselect"))})});
delete this.selectedStaging}onMouseOver(b){const a=this.series.chart,c=a.pointer;b=b?c.normalize(b):c.getChartCoordinatesFromPoint(this,a.inverted);c.runPointActions(b,this)}onMouseOut(){const b=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(b.hoverPoints||[]).forEach(function(b){b.setState()});b.hoverPoints=b.hoverPoint=null}importEvents(){if(!this.hasImportedEvents){const b=this,a=E(b.series.options.point,b.options).events;b.events=a;F(a,function(c,a){g(c)&&
u(b,a,c)});this.hasImportedEvents=!0}}setState(b,f){const c=this.series;var k=this.state,g=c.options.states[b||"normal"]||{},h=H.plotOptions[c.type].marker&&c.options.marker;const q=h&&!1===h.enabled,r=h&&h.states&&h.states[b||"normal"]||{},l=!1===r.enabled,m=this.marker||{},w=c.chart,v=h&&c.markerAttribs;let G=c.halo;var u;let x;var E=c.stateMarkerGraphic;b=b||"";if(!(b===this.state&&!f||this.selected&&"select"!==b||!1===g.enabled||b&&(l||q&&!1===r.enabled)||b&&m.states&&m.states[b]&&!1===m.states[b].enabled)){this.state=
b;v&&(u=c.markerAttribs(this,b));if(this.graphic&&!this.hasMockGraphic){k&&this.graphic.removeClass("highcharts-point-"+k);b&&this.graphic.addClass("highcharts-point-"+b);if(!w.styledMode){k=c.pointAttribs(this,b);x=d(w.options.chart.animation,g.animation);const a=k.opacity;c.options.inactiveOtherPoints&&e(a)&&((this.dataLabels||[]).forEach(function(b){b&&!b.hasClass("highcharts-data-label-hidden")&&b.animate({opacity:a},x)}),this.connector&&this.connector.animate({opacity:a},x));this.graphic.animate(k,
x)}u&&this.graphic.animate(u,d(w.options.chart.animation,r.animation,h.animation));E&&E.hide()}else{if(b&&r){h=m.symbol||c.symbol;E&&E.currentSymbol!==h&&(E=E.destroy());if(u)if(E)E[f?"animate":"attr"]({x:u.x,y:u.y});else h&&(c.stateMarkerGraphic=E=w.renderer.symbol(h,u.x,u.y,u.width,u.height).add(c.markerGroup),E.currentSymbol=h);!w.styledMode&&E&&"inactive"!==this.state&&E.attr(c.pointAttribs(this,b))}E&&(E[b&&this.isInside?"show":"hide"](),E.element.point=this,E.addClass(this.getClassName(),!0))}g=
g.halo;u=(E=this.graphic||E)&&E.visibility||"inherit";g&&g.size&&E&&"hidden"!==u&&!this.isCluster?(G||(c.halo=G=w.renderer.path().add(E.parentGroup)),G.show()[f?"animate":"attr"]({d:this.haloPath(g.size)}),G.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,c.colorIndex)+(this.className?" "+this.className:""),visibility:u,zIndex:-1}),G.point=this,w.styledMode||G.attr(p({fill:this.color||c.color,"fill-opacity":g.opacity},a.filterUserAttributes(g.attributes||{})))):G&&G.point&&G.point.haloPath&&
G.animate({d:G.point.haloPath(0)},null,G.hide);t(this,"afterSetState",{state:b})}}haloPath(b){const a=this.pos();return a?this.series.chart.renderer.symbols.circle(Math.floor(a[0])-b,a[1]-b,2*b,2*b):[]}}"";return G});M(a,"Core/Pointer.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,y,I){const {parse:x}=a,{charts:C,noop:z}=y,{addEvent:H,attr:B,css:u,defined:v,extend:l,find:p,fireEvent:t,isNumber:m,isObject:h,objectEach:g,offset:e,pick:w,splat:E}=I;class F{constructor(a,
k){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.eventsToUnbind=[];this.chart=a;this.hasDragged=!1;this.options=k;this.init(a,k)}applyInactiveState(a){let d=[],e;(a||[]).forEach(function(a){e=a.series;d.push(e);e.linkedParent&&d.push(e.linkedParent);e.linkedSeries&&(d=d.concat(e.linkedSeries));e.navigatorSeries&&d.push(e.navigatorSeries)});this.chart.series.forEach(function(a){-1===d.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})}destroy(){const a=
this;this.eventsToUnbind.forEach(a=>a());this.eventsToUnbind=[];y.chartCount||(F.unbindDocumentMouseUp&&(F.unbindDocumentMouseUp=F.unbindDocumentMouseUp()),F.unbindDocumentTouchEnd&&(F.unbindDocumentTouchEnd=F.unbindDocumentTouchEnd()));clearInterval(a.tooltipTimeout);g(a,function(d,e){a[e]=void 0})}getSelectionMarkerAttrs(a,k){const d={args:{chartX:a,chartY:k},attrs:{},shapeType:"rect"};t(this,"getSelectionMarkerAttrs",d,d=>{const {chart:e,mouseDownX:b=0,mouseDownY:f=0,zoomHor:c,zoomVert:n}=this;
d=d.attrs;let g;d.x=e.plotLeft;d.y=e.plotTop;d.width=c?1:e.plotWidth;d.height=n?1:e.plotHeight;c&&(g=a-b,d.width=Math.abs(g),d.x=(0<g?0:g)+b);n&&(g=k-f,d.height=Math.abs(g),d.y=(0<g?0:g)+f)});return d}drag(a){const d=this.chart,e=d.options.chart;var g=d.plotLeft;const l=d.plotTop,b=d.plotWidth,f=d.plotHeight,c=this.mouseDownX||0,n=this.mouseDownY||0,m=h(e.panning)?e.panning&&e.panning.enabled:e.panning,p=e.panKey&&a[e.panKey+"Key"];let t=a.chartX,w=a.chartY,v=this.selectionMarker;if(!v||!v.touch)if(t<
g?t=g:t>g+b&&(t=g+b),w<l?w=l:w>l+f&&(w=l+f),this.hasDragged=Math.sqrt(Math.pow(c-t,2)+Math.pow(n-w,2)),10<this.hasDragged){g=d.isInsidePlot(c-g,n-l,{visiblePlotOnly:!0});const {shapeType:b,attrs:f}=this.getSelectionMarkerAttrs(t,w);!d.hasCartesianSeries&&!d.mapView||!this.zoomX&&!this.zoomY||!g||p||v||(this.selectionMarker=v=d.renderer[b](),v.attr({"class":"highcharts-selection-marker",zIndex:7}).add(),d.styledMode||v.attr({fill:e.selectionMarkerFill||x("#334eff").setOpacity(.25).get()}));v&&v.attr(f);
g&&!v&&m&&d.pan(a,e.panning)}}dragStart(a){const d=this.chart;d.mouseIsDown=a.type;d.cancelClick=!1;d.mouseDownX=this.mouseDownX=a.chartX;d.mouseDownY=this.mouseDownY=a.chartY}getSelectionBox(a){const d={args:{marker:a},result:{}};t(this,"getSelectionBox",d,d=>{d.result={x:a.attr?+a.attr("x"):a.x,y:a.attr?+a.attr("y"):a.y,width:a.attr?a.attr("width"):a.width,height:a.attr?a.attr("height"):a.height}});return d.result}drop(a){const d=this,e=this.chart,g=this.hasPinched;if(this.selectionMarker){const {x:k,
y:b,width:f,height:c}=this.getSelectionBox(this.selectionMarker),n={originalEvent:a,xAxis:[],yAxis:[],x:k,y:b,width:f,height:c};let h=!!e.mapView;if(this.hasDragged||g)e.axes.forEach(function(e){if(e.zoomEnabled&&v(e.min)&&(g||d[{xAxis:"zoomX",yAxis:"zoomY"}[e.coll]])&&m(k)&&m(b)&&m(f)&&m(c)){var q=e.horiz;const d="touchend"===a.type?e.minPixelPadding:0,g=e.toValue((q?k:b)+d);q=e.toValue((q?k+f:b+c)-d);n[e.coll].push({axis:e,min:Math.min(g,q),max:Math.max(g,q)});h=!0}}),h&&t(e,"selection",n,function(b){e.zoom(l(b,
g?{animation:!1}:null))});m(e.index)&&(this.selectionMarker=this.selectionMarker.destroy());g&&this.scaleGroups()}e&&m(e.index)&&(u(e.container,{cursor:e._cursor}),e.cancelClick=10<this.hasDragged,e.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])}findNearestKDPoint(a,k,e){let d;a.forEach(function(a){var b=!(a.noSharedTooltip&&k)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(e,b);if((b=h(a,!0)&&a.series)&&!(b=!h(d,!0))){{b=d.distX-a.distX;const f=d.dist-a.dist,c=(a.series.group&&
a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex);b=0!==b&&k?b:0!==f?f:0!==c?c:d.series.index>a.series.index?-1:1}b=0<b}b&&(d=a)});return d}getChartCoordinatesFromPoint(a,k){var d=a.series;const e=d.xAxis;d=d.yAxis;const g=a.shapeArgs;if(e&&d){let b=w(a.clientX,a.plotX),f=a.plotY||0;a.isNode&&g&&m(g.x)&&m(g.y)&&(b=g.x,f=g.y);return k?{chartX:d.len+d.pos-f,chartY:e.len+e.pos-b}:{chartX:b+e.pos,chartY:f+d.pos}}if(g&&g.x&&g.y)return{chartX:g.x,chartY:g.y}}getChartPosition(){if(this.chartPosition)return this.chartPosition;
var {container:a}=this.chart;const k=e(a);this.chartPosition={left:k.left,top:k.top,scaleX:1,scaleY:1};const g=a.offsetWidth;a=a.offsetHeight;2<g&&2<a&&(this.chartPosition.scaleX=k.width/g,this.chartPosition.scaleY=k.height/a);return this.chartPosition}getCoordinates(a){const d={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(k){d[k.isXAxis?"xAxis":"yAxis"].push({axis:k,value:k.toValue(a[k.horiz?"chartX":"chartY"])})});return d}getHoverData(a,k,e,g,l,b){const f=[];g=!(!g||!a);const c=function(b){return b.visible&&
!(!l&&b.directTouch)&&w(b.options.enableMouseTracking,!0)};let d,q={chartX:b?b.chartX:void 0,chartY:b?b.chartY:void 0,shared:l};t(this,"beforeGetHoverData",q);d=k&&!k.stickyTracking?[k]:e.filter(b=>b.stickyTracking&&(q.filter||c)(b));const r=g||!b?a:this.findNearestKDPoint(d,l,b);k=r&&r.series;r&&(l&&!k.noSharedTooltip?(d=e.filter(function(b){return q.filter?q.filter(b):c(b)&&!b.noSharedTooltip}),d.forEach(function(b){let c=p(b.points,function(b){return b.x===r.x&&!b.isNull});h(c)&&(b.boosted&&b.boost&&
(c=b.boost.getPoint(c)),f.push(c))})):f.push(r));q={hoverPoint:r};t(this,"afterGetHoverData",q);return{hoverPoint:q.hoverPoint,hoverSeries:k,hoverPoints:f}}getPointFromEvent(a){a=a.target;let d;for(;a&&!d;)d=a.point,a=a.parentNode;return d}onTrackerMouseOut(a){a=a.relatedTarget;const d=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!d||!a||d.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+d.index)&&this.inClass(a,"highcharts-tracker")))d.onMouseOut()}inClass(a,
k){let d;for(;a;){if(d=B(a,"class")){if(-1!==d.indexOf(k))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentElement}}init(a,k){this.options=k;this.chart=a;this.runChartClick=!(!k.chart.events||!k.chart.events.click);this.pinchDown=[];this.lastValidTouch={};this.setDOMEvents();t(this,"afterInit")}normalize(a,k){var d=a.touches,e=d?d.length?d.item(0):w(d.changedTouches,a.changedTouches)[0]:a;k||(k=this.getChartPosition());d=e.pageX-k.left;e=e.pageY-k.top;d/=k.scaleX;e/=k.scaleY;
return l(a,{chartX:Math.round(d),chartY:Math.round(e)})}onContainerClick(a){const d=this.chart,e=d.hoverPoint;a=this.normalize(a);const g=d.plotLeft,h=d.plotTop;d.cancelClick||(e&&this.inClass(a.target,"highcharts-tracker")?(t(e.series,"click",l(a,{point:e})),d.hoverPoint&&e.firePointEvent("click",a)):(l(a,this.getCoordinates(a)),d.isInsidePlot(a.chartX-g,a.chartY-h,{visiblePlotOnly:!0})&&t(d,"click",a)))}onContainerMouseDown(a){const d=1===((a.buttons||a.button)&1);a=this.normalize(a);if(y.isFirefox&&
0!==a.button)this.onContainerMouseMove(a);if("undefined"===typeof a.button||d)this.zoomOption(a),d&&a.preventDefault&&a.preventDefault(),this.dragStart(a)}onContainerMouseLeave(a){const d=C[w(F.hoverChartIndex,-1)];a=this.normalize(a);d&&a.relatedTarget&&!this.inClass(a.relatedTarget,"highcharts-tooltip")&&(d.pointer.reset(),d.pointer.chartPosition=void 0)}onContainerMouseEnter(a){delete this.chartPosition}onContainerMouseMove(a){const d=this.chart,e=d.tooltip;a=this.normalize(a);this.setHoverChartIndex();
("mousedown"===d.mouseIsDown||this.touchSelect(a))&&this.drag(a);d.openMenu||!this.inClass(a.target,"highcharts-tracker")&&!d.isInsidePlot(a.chartX-d.plotLeft,a.chartY-d.plotTop,{visiblePlotOnly:!0})||e&&e.shouldStickOnContact(a)||(this.inClass(a.target,"highcharts-no-tooltip")?this.reset(!1,0):this.runPointActions(a))}onDocumentTouchEnd(a){const d=C[w(F.hoverChartIndex,-1)];d&&d.pointer.drop(a)}onContainerTouchMove(a){if(this.touchSelect(a))this.onContainerMouseMove(a);else this.touch(a)}onContainerTouchStart(a){if(this.touchSelect(a))this.onContainerMouseDown(a);
else this.zoomOption(a),this.touch(a,!0)}onDocumentMouseMove(a){const d=this.chart,e=d.tooltip,g=this.chartPosition;a=this.normalize(a,g);!g||d.isInsidePlot(a.chartX-d.plotLeft,a.chartY-d.plotTop,{visiblePlotOnly:!0})||e&&e.shouldStickOnContact(a)||this.inClass(a.target,"highcharts-tracker")||this.reset()}onDocumentMouseUp(a){const d=C[w(F.hoverChartIndex,-1)];d&&d.pointer.drop(a)}pinch(a){const d=this,e=d.chart,g=d.pinchDown,h=a.touches||[],b=h.length,f=d.lastValidTouch,c=d.hasZoom,n={},m=1===b&&
(d.inClass(a.target,"highcharts-tracker")&&e.runTrackerClick||d.runChartClick),p={};var v=d.chart.tooltip;v=1===b&&w(v&&v.options.followTouchMove,!0);let u=d.selectionMarker;1<b?d.initiated=!0:v&&(d.initiated=!1);c&&d.initiated&&!m&&!1!==a.cancelable&&a.preventDefault();[].map.call(h,function(b){return d.normalize(b)});"touchstart"===a.type?([].forEach.call(h,function(b,a){g[a]={chartX:b.chartX,chartY:b.chartY}}),f.x=[g[0].chartX,g[1]&&g[1].chartX],f.y=[g[0].chartY,g[1]&&g[1].chartY],e.axes.forEach(function(b){if(b.zoomEnabled){const a=
e.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,f=b.toPixels(Math.min(w(b.options.min,b.dataMin),b.dataMin)),d=b.toPixels(Math.max(w(b.options.max,b.dataMax),b.dataMax)),n=Math.max(f,d);a.min=Math.min(b.pos,Math.min(f,d)-c);a.max=Math.max(b.pos+b.len,n+c)}}),d.res=!0):v?this.runPointActions(d.normalize(a)):g.length&&(t(e,"touchpan",{originalEvent:a},()=>{u||(d.selectionMarker=u=l({destroy:z,touch:!0},e.plotBox));d.pinchTranslate(g,h,n,u,p,f);d.hasPinched=c;d.scaleGroups(n,p)}),d.res&&(d.res=!1,this.reset(!1,
0)))}pinchTranslate(a,e,g,h,l,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,g,h,l,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,g,h,l,b)}pinchTranslateDirection(a,e,g,h,l,b,f,c){const d=this.chart,k=a?"x":"y",q=a?"X":"Y",m="chart"+q,r=a?"width":"height",p=d["plot"+(a?"Left":"Top")],t=d.inverted,w=d.bounds[a?"h":"v"],v=1===e.length,u=e[0][m],x=!v&&e[1][m];e=function(){"number"===typeof N&&20<Math.abs(u-x)&&(F=c||Math.abs(J-N)/Math.abs(u-x));E=(p-J)/F+u;G=d["plot"+(a?"Width":"Height")]/
F};let G,E,F=c||1,J=g[0][m],N=!v&&g[1][m],O;e();g=E;g<w.min?(g=w.min,O=!0):g+G>w.max&&(g=w.max-G,O=!0);O?(J-=.8*(J-f[k][0]),"number"===typeof N&&(N-=.8*(N-f[k][1])),e()):f[k]=[J,N];t||(b[k]=E-p,b[r]=G);b=t?1/F:F;l[r]=G;l[k]=g;h[t?a?"scaleY":"scaleX":"scale"+q]=F;h["translate"+q]=b*p+(J-b*u)}reset(a,e){const d=this.chart,k=d.hoverSeries,g=d.hoverPoint,b=d.hoverPoints,f=d.tooltip,c=f&&f.shared?b:g;a&&c&&E(c).forEach(function(b){b.series.isCartesian&&"undefined"===typeof b.plotX&&(a=!1)});if(a)f&&c&&
E(c).length&&(f.refresh(c),f.shared&&b?b.forEach(function(b){b.setState(b.state,!0);b.series.isCartesian&&(b.series.xAxis.crosshair&&b.series.xAxis.drawCrosshair(null,b),b.series.yAxis.crosshair&&b.series.yAxis.drawCrosshair(null,b))}):g&&(g.setState(g.state,!0),d.axes.forEach(function(b){b.crosshair&&g.series[b.coll]===b&&b.drawCrosshair(null,g)})));else{if(g)g.onMouseOut();b&&b.forEach(function(b){b.setState()});if(k)k.onMouseOut();f&&f.hide(e);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());
d.axes.forEach(function(b){b.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}}runPointActions(a,e,g){const d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,b=k?k.shared:!1;let f=e||d.hoverPoint,c=f&&f.series||d.hoverSeries;e=this.getHoverData(f,c,d.series,(!a||"touchmove"!==a.type)&&(!!e||c&&c.directTouch&&this.isDirectTouch),b,a);f=e.hoverPoint;c=e.hoverSeries;const n=e.hoverPoints;e=c&&c.tooltipOptions.followPointer&&!c.tooltipOptions.split;const h=b&&c&&!c.noSharedTooltip;
if(f&&(g||f!==d.hoverPoint||k&&k.isHidden)){(d.hoverPoints||[]).forEach(function(b){-1===n.indexOf(b)&&b.setState()});if(d.hoverSeries!==c)c.onMouseOver();this.applyInactiveState(n);(n||[]).forEach(function(b){b.setState("hover")});d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!f.series)return;d.hoverPoints=n;d.hoverPoint=f;f.firePointEvent("mouseOver",void 0,()=>{k&&f&&k.refresh(h?n:f,a)})}else e&&k&&!k.isHidden&&(g=k.getAnchor([{}],a),d.isInsidePlot(g[0],g[1],{visiblePlotOnly:!0})&&k.updatePosition({plotX:g[0],
plotY:g[1]}));this.unDocMouseMove||(this.unDocMouseMove=H(d.container.ownerDocument,"mousemove",function(b){const a=C[F.hoverChartIndex];if(a)a.pointer.onDocumentMouseMove(b)}),this.eventsToUnbind.push(this.unDocMouseMove));d.axes.forEach(function(b){const c=w((b.crosshair||{}).snap,!0);let f;c&&((f=d.hoverPoint)&&f.series[b.coll]===b||(f=p(n,a=>a.series&&a.series[b.coll]===b)));f||!c?b.drawCrosshair(a,f):b.hideCrosshair()})}scaleGroups(a,e){const d=this.chart;d.series.forEach(function(k){const g=
a||k.getPlotBox();k.group&&(k.xAxis&&k.xAxis.zoomEnabled||d.mapView)&&(k.group.attr(g),k.markerGroup&&(k.markerGroup.attr(g),k.markerGroup.clip(e?d.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(g))});d.clipRect.attr(e||d.clipBox)}setDOMEvents(){const a=this.chart.container,e=a.ownerDocument;a.onmousedown=this.onContainerMouseDown.bind(this);a.onmousemove=this.onContainerMouseMove.bind(this);a.onclick=this.onContainerClick.bind(this);this.eventsToUnbind.push(H(a,"mouseenter",this.onContainerMouseEnter.bind(this)));
this.eventsToUnbind.push(H(a,"mouseleave",this.onContainerMouseLeave.bind(this)));F.unbindDocumentMouseUp||(F.unbindDocumentMouseUp=H(e,"mouseup",this.onDocumentMouseUp.bind(this)));let g=this.chart.renderTo.parentElement;for(;g&&"BODY"!==g.tagName;)this.eventsToUnbind.push(H(g,"scroll",()=>{delete this.chartPosition})),g=g.parentElement;y.hasTouch&&(this.eventsToUnbind.push(H(a,"touchstart",this.onContainerTouchStart.bind(this),{passive:!1})),this.eventsToUnbind.push(H(a,"touchmove",this.onContainerTouchMove.bind(this),
{passive:!1})),F.unbindDocumentTouchEnd||(F.unbindDocumentTouchEnd=H(e,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))}setHoverChartIndex(){const a=this.chart,e=y.charts[w(F.hoverChartIndex,-1)];if(e&&e!==a)e.pointer.onContainerMouseLeave({relatedTarget:a.container});e&&e.mouseIsDown||(F.hoverChartIndex=a.index)}touch(a,e){const d=this.chart;let g,k;this.setHoverChartIndex();1===a.touches.length?(a=this.normalize(a),(k=d.isInsidePlot(a.chartX-d.plotLeft,a.chartY-d.plotTop,{visiblePlotOnly:!0}))&&
!d.openMenu?(e&&this.runPointActions(a),"touchmove"===a.type&&(e=this.pinchDown,g=e[0]?4<=Math.sqrt(Math.pow(e[0].chartX-a.chartX,2)+Math.pow(e[0].chartY-a.chartY,2)):!1),w(g,!0)&&this.pinch(a)):e&&this.reset()):2===a.touches.length&&this.pinch(a)}touchSelect(a){return!(!this.chart.zooming.singleTouch||!a.touches||1!==a.touches.length)}zoomOption(a){const d=this.chart,e=d.inverted;var g=d.zooming.type||"";/touch/.test(a.type)&&(g=w(d.zooming.pinchType,g));this.zoomX=a=/x/.test(g);this.zoomY=g=/y/.test(g);
this.zoomHor=a&&!e||g&&e;this.zoomVert=g&&!e||a&&e;this.hasZoom=a||g}}(function(a){const d=[],e=[];a.compose=function(d){I.pushUnique(e,d)&&H(d,"beforeRender",function(){this.pointer=new a(this,this.options)})};a.dissolve=function(){for(let a=0,e=d.length;a<e;++a)d[a]();d.length=0}})(F||(F={}));"";return F});M(a,"Core/Legend/Legend.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Templating.js"],a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Renderer/RendererUtilities.js"],a["Core/Utilities.js"]],
function(a,y,I,L,C,z){const {animObject:x,setAnimation:B}=a,{format:u}=y,{marginNames:v}=I,{distribute:l}=C,{addEvent:p,createElement:t,css:m,defined:h,discardElement:g,find:e,fireEvent:w,isNumber:E,merge:F,pick:d,relativeLength:k,stableSort:r,syncTimeout:q}=z;class G{constructor(b,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=
this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options=void 0;this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=b;this.init(b,a)}init(b,a){this.chart=b;this.setOptions(a);a.enabled&&(this.render(),p(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),p(this.chart,"render",()=>{this.proximate&&(this.proximatePositions(),
this.positionItems())}))}setOptions(b){const a=d(b.padding,8);this.options=b;this.chart.styledMode||(this.itemStyle=b.itemStyle,this.itemHiddenStyle=F(this.itemStyle,b.itemHiddenStyle));this.itemMarginTop=b.itemMarginTop;this.itemMarginBottom=b.itemMarginBottom;this.padding=a;this.initialItemY=a-5;this.symbolWidth=d(b.symbolWidth,16);this.pages=[];this.proximate="proximate"===b.layout&&!this.chart.inverted;this.baseline=void 0}update(b,a){const c=this.chart;this.setOptions(F(!0,this.options,b));this.destroy();
c.isDirtyLegend=c.isDirtyBox=!0;d(a,!0)&&c.redraw();w(this,"afterUpdate")}colorizeItem(b,a){const {group:c,label:f,line:d,symbol:e}=b.legendItem||{};if(c)c[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){const {itemHiddenStyle:c}=this,g=c.color,k=a?b.color||g:g,n=b.options&&b.options.marker;let h={fill:k};null===f||void 0===f?void 0:f.css(F(a?this.itemStyle:c));null===d||void 0===d?void 0:d.attr({stroke:k});e&&(n&&e.isMarker&&(h=b.pointAttribs(),a||(h.stroke=
h.fill=g)),e.attr(h))}w(this,"afterColorizeItem",{item:b,visible:a})}positionItems(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()}positionItem(b){const {group:a,x:c=0,y:d=0}=b.legendItem||{};var e=this.options,g=e.symbolPadding;const k=!e.rtl;e=b.checkbox;a&&a.element&&(g={translateX:k?c:this.legendWidth-c-2*g-4,translateY:d},a[h(a.translateY)?"animate":"attr"](g,void 0,()=>{w(this,"afterPositionItem",{item:b})}));e&&(e.x=c,e.y=d)}destroyItem(b){const a=
b.checkbox,c=b.legendItem||{};for(const b of["group","label","line","symbol"])c[b]&&(c[b]=c[b].destroy());a&&g(a);b.legendItem=void 0}destroy(){for(const b of this.getAllItems())this.destroyItem(b);for(const b of"clipRect up down pager nav box title group".split(" "))this[b]&&(this[b]=this[b].destroy());this.display=null}positionCheckboxes(){const b=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,c=this.titleHeight;let d;b&&(d=b.translateY,this.allItems.forEach(function(f){const e=
f.checkbox;let g;e&&(g=d+c+e.y+(this.scrollOffset||0)+3,m(e,{left:b.translateX+f.checkboxOffset+e.x-20+"px",top:g+"px",display:this.proximate||g>d-6&&g<d+a-6?"":"none"}))},this))}renderTitle(){var b=this.options;const a=this.padding,c=b.title;let d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,void 0,void 0,void 0,b.useHTML,void 0,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+
"px"}),b=this.title.getBBox(),d=b.height,this.offsetWidth=b.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d}setText(b){const a=this.options;b.legendItem.label.attr({text:a.labelFormat?u(a.labelFormat,b,this.chart):a.labelFormatter.call(b)})}renderItem(b){const a=b.legendItem=b.legendItem||{};var c=this.chart,e=c.renderer;const g=this.options,k=this.symbolWidth,h=g.symbolPadding||0,l=this.itemStyle,m=this.itemHiddenStyle,q="horizontal"===g.layout?d(g.itemDistance,20):0,r=!g.rtl,p=
!b.series,t=!p&&b.series.drawLegendSymbol?b.series:b;var w=t.options;const v=this.createCheckboxForItem&&w&&w.showCheckbox,u=g.useHTML,x=b.options.className;let J=a.label;w=k+h+q+(v?20:0);J||(a.group=e.g("legend-item").addClass("highcharts-"+t.type+"-series highcharts-color-"+b.colorIndex+(x?" "+x:"")+(p?" highcharts-series-"+b.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.label=J=e.text("",r?k+h:-h,this.baseline||0,u),c.styledMode||J.css(F(b.visible?l:m)),J.attr({align:r?"left":"right",zIndex:2}).add(a.group),
this.baseline||(this.fontMetrics=e.fontMetrics(J),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,J.attr("y",this.baseline),this.symbolHeight=d(g.symbolHeight,this.fontMetrics.f),g.squareSymbol&&(this.symbolWidth=d(g.symbolWidth,Math.max(this.symbolHeight,16)),w=this.symbolWidth+h+q+(v?20:0),r&&J.attr("x",this.symbolWidth+h))),t.drawLegendSymbol(this,b),this.setItemEvents&&this.setItemEvents(b,J,u));v&&!b.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(b);this.colorizeItem(b,
b.visible);!c.styledMode&&l.width||J.css({width:(g.itemWidth||this.widthOption||c.spacingBox.width)-w+"px"});this.setText(b);c=J.getBBox();e=this.fontMetrics&&this.fontMetrics.h||0;b.itemWidth=b.checkboxOffset=g.itemWidth||a.labelWidth||c.width+w;this.maxItemWidth=Math.max(this.maxItemWidth,b.itemWidth);this.totalItemWidth+=b.itemWidth;this.itemHeight=b.itemHeight=Math.round(a.labelHeight||(c.height>1.5*e?c.height:e))}layoutItem(b){var a=this.options;const c=this.padding,e="horizontal"===a.layout,
g=b.itemHeight,k=this.itemMarginBottom,h=this.itemMarginTop,l=e?d(a.itemDistance,20):0,m=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>m?this.maxItemWidth:b.itemWidth;const q=b.legendItem||{};e&&this.itemX-c+a>m&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=h+this.lastLineHeight+k),this.lastLineHeight=0);this.lastItemY=h+this.itemY+k;this.lastLineHeight=Math.max(g,this.lastLineHeight);q.x=this.itemX;q.y=this.itemY;e?this.itemX+=a:(this.itemY+=h+g+k,this.lastLineHeight=g);this.offsetWidth=
this.widthOption||Math.max((e?this.itemX-c-(b.checkbox?0:l):a)+c,this.offsetWidth)}getAllItems(){let b=[];this.chart.series.forEach(function(a){const c=a&&a.options;a&&d(c.showInLegend,h(c.linkedTo)?!1:void 0,!0)&&(b=b.concat((a.legendItem||{}).labels||("point"===c.legendType?a.data:a)))});w(this,"afterGetAllItems",{allItems:b});return b}getAlignment(){const b=this.options;return this.proximate?b.align.charAt(0)+"tv":b.floating?"":b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0)}adjustMargins(b,
a){const c=this.chart,f=this.options,e=this.getAlignment();e&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,k){g.test(e)&&!h(b[k])&&(c[v[k]]=Math.max(c[v[k]],c.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*f[k%2?"x":"y"]+d(f.margin,12)+a[k]+(c.titleOffset[k]||0)))})}proximatePositions(){const b=this.chart,a=[],c="left"===this.options.align;this.allItems.forEach(function(d){var f;var g=c;let k;d.yAxis&&(d.xAxis.options.reversed&&(g=!g),d.points&&(f=
e(g?d.points:d.points.slice(0).reverse(),function(b){return E(b.plotY)})),g=this.itemMarginTop+d.legendItem.label.getBBox().height+this.itemMarginBottom,k=d.yAxis.top-b.plotTop,d.visible?(f=f?f.plotY:d.yAxis.height,f+=k-.3*g):f=k+d.yAxis.height,a.push({target:f,size:g,item:d}))},this);let d;for(const c of l(a,b.plotHeight))d=c.item.legendItem||{},E(c.pos)&&(d.y=b.plotTop-b.spacing[0]+c.pos)}render(){const b=this.chart,a=b.renderer,c=this.options,d=this.padding;var e=this.getAllItems();let g,h=this.group,
l=this.box;this.itemX=d;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=k(c.width,b.spacingBox.width-d);var m=b.spacingBox.width-2*d-c.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(m/=2);this.maxLegendWidth=this.widthOption||m;h||(this.group=h=a.g("legend").addClass(c.className||"").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(h),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();r(e,(b,a)=>(b.options&&b.options.legendIndex||
0)-(a.options&&a.options.legendIndex||0));c.reversed&&e.reverse();this.allItems=e;this.display=m=!!e.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;e.forEach(this.renderItem,this);e.forEach(this.layoutItem,this);e=(this.widthOption||this.offsetWidth)+d;g=this.lastItemY+this.lastLineHeight+this.titleHeight;g=this.handleOverflow(g);g+=d;l||(this.box=l=a.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(h));b.styledMode||l.attr({stroke:c.borderColor,
"stroke-width":c.borderWidth||0,fill:c.backgroundColor||"none"}).shadow(c.shadow);if(0<e&&0<g)l[l.placed?"animate":"attr"](l.crisp.call({},{x:0,y:0,width:e,height:g},l.strokeWidth()));h[m?"show":"hide"]();b.styledMode&&"none"===h.getStyle("display")&&(e=g=0);this.legendWidth=e;this.legendHeight=g;m&&this.align();this.proximate||this.positionItems();w(this,"afterRender")}align(b=this.chart.spacingBox){const a=this.chart,c=this.options;let d=b.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?
d+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(d-=a.titleOffset[2]);d!==b.y&&(b=F(b,{y:d}));a.hasRendered||(this.group.placed=!1);this.group.align(F(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,b)}handleOverflow(b){const a=this,c=this.chart,e=c.renderer,g=this.options;var k=g.y;const h="top"===g.verticalAlign,l=this.padding,m=g.maxHeight,q=g.navigation,r=d(q.animation,!0),p=q.arrowSize||12,t=this.pages,
w=this.allItems,v=function(b){"number"===typeof b?E.attr({height:b}):E&&(a.clipRect=E.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+l+"px,9999px,"+(l+b)+"px,0)":"auto")},u=function(b){a[b]=e.circle(0,0,1.3*p).translate(p/2,p/2).add(O);c.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]};let x,J,N;k=c.spacingBox.height+(h?-k:k)-l;let O=this.nav,E=this.clipRect;"horizontal"!==g.layout||"middle"===g.verticalAlign||g.floating||(k/=2);m&&(k=
Math.min(k,m));t.length=0;b&&0<k&&b>k&&!1!==q.enabled?(this.clipHeight=x=Math.max(k-20-this.titleHeight-l,0),this.currentPage=d(this.currentPage,1),this.fullHeight=b,w.forEach((b,a)=>{N=b.legendItem||{};b=N.y||0;const c=Math.round(N.label.getBBox().height);let d=t.length;if(!d||b-t[d-1]>x&&(J||b)!==t[d-1])t.push(J||b),d++;N.pageIx=d-1;J&&((w[a-1].legendItem||{}).pageIx=d-1);a===w.length-1&&b+c-t[d-1]>x&&b>t[d-1]&&(t.push(b),N.pageIx=d);b!==J&&(J=b)}),E||(E=a.clipRect=e.clipRect(0,l-2,9999,0),a.contentGroup.clip(E)),
v(x),O||(this.nav=O=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,p,p).add(O),u("upTracker").on("click",function(){a.scroll(-1,r)}),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation"),!c.styledMode&&q.style&&this.pager.css(q.style),this.pager.add(O),this.down=e.symbol("triangle-down",0,0,p,p).add(O),u("downTracker").on("click",function(){a.scroll(1,r)})),a.scroll(0),b=k):O&&(v(),this.nav=O.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);
return b}scroll(b,a){const c=this.chart,f=this.pages,e=f.length,g=this.clipHeight,k=this.options.navigation,h=this.pager,l=this.padding;let m=this.currentPage+b;m>e&&(m=e);0<m&&("undefined"!==typeof a&&B(a,c),this.nav.attr({translateX:l,translateY:g+this.padding+7+this.titleHeight,visibility:"inherit"}),[this.up,this.upTracker].forEach(function(b){b.attr({"class":1===m?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),h.attr({text:m+"/"+e}),[this.down,this.downTracker].forEach(function(b){b.attr({x:18+
this.pager.getBBox().width,"class":m===e?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),c.styledMode||(this.up.attr({fill:1===m?k.inactiveColor:k.activeColor}),this.upTracker.css({cursor:1===m?"default":"pointer"}),this.down.attr({fill:m===e?k.inactiveColor:k.activeColor}),this.downTracker.css({cursor:m===e?"default":"pointer"})),this.scrollOffset=-f[m-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=m,this.positionCheckboxes(),
b=x(d(a,c.renderer.globalAnimation,!0)),q(()=>{w(this,"afterScroll",{currentPage:m})},b.duration))}setItemEvents(b,a,c){const d=this,f=b.legendItem||{},e=d.chart.renderer.boxWrapper,g=b instanceof L,k="highcharts-legend-"+(g?"point":"series")+"-active",h=d.chart.styledMode;c=c?[a,f.symbol]:[f.group];const l=a=>{d.allItems.forEach(c=>{b!==c&&[c].concat(c.linkedSeries||[]).forEach(b=>{b.setState(a,!g)})})};for(const f of c)if(f)f.on("mouseover",function(){b.visible&&l("inactive");b.setState("hover");
b.visible&&e.addClass(k);h||a.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.chart.styledMode||a.css(F(b.visible?d.itemStyle:d.itemHiddenStyle));l("");e.removeClass(k);b.setState()}).on("click",function(a){const c=function(){b.setVisible&&b.setVisible();l(b.visible?"inactive":"")};e.removeClass(k);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",a,c):w(b,"legendItemClick",a,c)})}createCheckboxForItem(b){b.checkbox=t("input",{type:"checkbox",className:"highcharts-legend-checkbox",
checked:b.selected,defaultChecked:b.selected},this.options.itemCheckboxStyle,this.chart.container);p(b.checkbox,"click",function(a){w(b.series||b,"checkboxClick",{checked:a.target.checked,item:b},function(){b.select()})})}}(function(b){const a=[];b.compose=function(c){z.pushUnique(a,c)&&p(c,"beforeMargins",function(){this.legend=new b(this,this.options.legend)})}})(G||(G={}));"";return G});M(a,"Core/Legend/LegendSymbol.js",[a["Core/Utilities.js"]],function(a){const {extend:x,merge:I,pick:L}=a;var C;
(function(a){a.lineMarker=function(a,B){B=this.legendItem=this.legendItem||{};var u=this.options;const v=a.symbolWidth,l=a.symbolHeight,p=l/2,t=this.chart.renderer,m=B.group;a=a.baseline-Math.round(.3*a.fontMetrics.b);let h={},g=u.marker,e=0;this.chart.styledMode||(h={"stroke-width":Math.min(u.lineWidth||0,24)},u.dashStyle?h.dashstyle=u.dashStyle:"square"!==u.linecap&&(h["stroke-linecap"]="round"));B.line=t.path().addClass("highcharts-graph").attr(h).add(m);h["stroke-linecap"]&&(e=Math.min(B.line.strokeWidth(),
v)/2);v&&B.line.attr({d:[["M",e,a],["L",v-e,a]]});g&&!1!==g.enabled&&v&&(u=Math.min(L(g.radius,p),p),0===this.symbol.indexOf("url")&&(g=I(g,{width:l,height:l}),u=0),B.symbol=B=t.symbol(this.symbol,v/2-u,a-u,2*u,2*u,x({context:"legend"},g)).addClass("highcharts-point").add(m),B.isMarker=!0)};a.rectangle=function(a,x){x=x.legendItem||{};const u=a.symbolHeight,v=a.options.squareSymbol;x.symbol=this.chart.renderer.rect(v?(a.symbolWidth-u)/2:0,a.baseline-u+1,v?u:a.symbolWidth,u,L(a.options.symbolRadius,
u/2)).addClass("highcharts-point").attr({zIndex:3}).add(x.group)}})(C||(C={}));return C});M(a,"Core/Series/SeriesDefaults.js",[],function(){return{lineWidth:1,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},enableMouseTracking:!0,events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:150},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},
dataLabels:{animation:{},align:"center",borderWidth:0,defer:!0,formatter:function(){const {numberFormatter:a}=this.series.chart;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"0.7em",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:150},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},
inactive:{animation:{duration:150},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"}});M(a,"Core/Series/SeriesRegistry.js",[a["Core/Globals.js"],a["Core/Defaults.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,y,I,L){const {defaultOptions:x}=y,{extendClass:z,merge:H}=L;var B;(function(u){function v(a,p){const l=x.plotOptions||{},m=p.defaultOptions,h=p.prototype;h.type=a;h.pointClass||(h.pointClass=I);m&&(l[a]=m);u.seriesTypes[a]=p}u.seriesTypes=a.seriesTypes;
u.registerSeriesType=v;u.seriesType=function(a,p,t,m,h){const g=x.plotOptions||{};p=p||"";g[a]=H(g[p],t);v(a,z(u.seriesTypes[p]||function(){},m));u.seriesTypes[a].prototype.type=a;h&&(u.seriesTypes[a].prototype.pointClass=z(I,h));return u.seriesTypes[a]}})(B||(B={}));return B});M(a,"Core/Series/Series.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Defaults.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/Point.js"],a["Core/Series/SeriesDefaults.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z,H,B,u,v){const {animObject:l,setAnimation:p}=a,{defaultOptions:t}=y,{registerEventOptions:m}=I,{hasTouch:h,svg:g,win:e}=L,{seriesTypes:w}=B,{arrayMax:x,arrayMin:F,clamp:d,correctFloat:k,defined:r,diffObjects:q,erase:G,error:b,extend:f,find:c,fireEvent:n,getClosestDistance:P,getNestedProperty:D,insertItem:K,isArray:X,isNumber:T,isString:Z,merge:V,objectEach:Y,pick:A,removeEvent:M,splat:ia,
syncTimeout:ba}=v;class aa{constructor(){this.zones=this.yAxis=this.xAxis=this.userOptions=this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}init(b,a){n(this,"init",{options:a});const c=this,d=b.series;this.eventsToUnbind=[];c.chart=b;c.options=c.setOptions(a);a=c.options;c.linkedSeries=[];c.bindAxes();f(c,{name:a.name,state:"",visible:!1!==a.visible,selected:!0===
a.selected});m(this,a);const e=a.events;if(e&&e.click||a.point&&a.point.events&&a.point.events.click||a.allowPointSelect)b.runTrackerClick=!0;c.getColor();c.getSymbol();c.parallelArrays.forEach(function(b){c[b+"Data"]||(c[b+"Data"]=[])});c.isCartesian&&(b.hasCartesianSeries=!0);let g;d.length&&(g=d[d.length-1]);c._i=A(g&&g._i,-1)+1;c.opacity=c.options.opacity;b.orderItems("series",K(this,d));a.dataSorting&&a.dataSorting.enabled?c.setDataSortingOptions():c.points||c.data||c.setData(a.data,!1);n(this,
"afterInit")}is(b){return w[b]&&this instanceof w[b]}bindAxes(){const a=this,c=a.options,d=a.chart;let f;n(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){d[e].forEach(function(b){f=b.options;if(A(c[e],0)===b.index||"undefined"!==typeof c[e]&&c[e]===f.id)K(a,b.series),a[e]=b,b.isDirty=!0});a[e]||a.optionalAxis===e||b(18,!0,d)})});n(this,"afterBindAxes")}updateParallelArrays(b,a,c){const d=b.series,f=T(a)?function(c){const f="y"===c&&d.toYData?d.toYData(b):b[c];d[c+"Data"][a]=
f}:function(b){Array.prototype[a].apply(d[b+"Data"],c)};d.parallelArrays.forEach(f)}hasData(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length}autoIncrement(b){var a=this.options;const c=a.pointIntervalUnit,d=a.relativeXValue,f=this.chart.time;let e=this.xIncrement,g;e=A(e,a.pointStart,0);this.pointInterval=g=A(this.pointInterval,a.pointInterval,1);d&&T(b)&&(g*=b);c&&(a=new f.Date(e),"day"===c?f.set("Date",a,f.get("Date",
a)+g):"month"===c?f.set("Month",a,f.get("Month",a)+g):"year"===c&&f.set("FullYear",a,f.get("FullYear",a)+g),g=a.getTime()-e);if(d&&T(b))return e+g;this.xIncrement=e+g;return e}setDataSortingOptions(){const b=this.options;f(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});r(b.pointRange)||(b.pointRange=1)}setOptions(b){var a,c;const d=this.chart;var f=d.options.plotOptions,e=d.userOptions||{};const g=V(b);b=d.styledMode;const k={plotOptions:f,userOptions:g};n(this,"setOptions",
k);const h=k.plotOptions[this.type];e=e.plotOptions||{};const l=e.series||{},m=t.plotOptions[this.type]||{},q=e[this.type]||{};this.userOptions=k.userOptions;f=V(h,f.series,q,g);this.tooltipOptions=V(t.tooltip,null===(a=t.plotOptions.series)||void 0===a?void 0:a.tooltip,null===m||void 0===m?void 0:m.tooltip,d.userOptions.tooltip,null===(c=e.series)||void 0===c?void 0:c.tooltip,q.tooltip,g.tooltip);this.stickyTracking=A(g.stickyTracking,q.stickyTracking,l.stickyTracking,this.tooltipOptions.shared&&
!this.noSharedTooltip?!0:f.stickyTracking);null===h.marker&&delete f.marker;this.zoneAxis=f.zoneAxis;c=this.zones=(f.zones||[]).slice();!f.negativeColor&&!f.negativeFillColor||f.zones||(a={value:f[this.zoneAxis+"Threshold"]||f.threshold||0,className:"highcharts-negative"},b||(a.color=f.negativeColor,a.fillColor=f.negativeFillColor),c.push(a));c.length&&r(c[c.length-1].value)&&c.push(b?{}:{color:this.color,fillColor:this.fillColor});n(this,"afterSetOptions",{options:f});return f}getName(){return A(this.options.name,
"Series "+(this.index+1))}getCyclic(b,a,c){const d=this.chart,f=`${b}Index`,e=`${b}Counter`,g=(null===c||void 0===c?void 0:c.length)||d.options.chart.colorCount;if(!a){var k=A("color"===b?this.options.colorIndex:void 0,this[f]);r(k)||(d.series.length||(d[e]=0),k=d[e]%g,d[e]+=1);c&&(a=c[k])}"undefined"!==typeof k&&(this[f]=k);this[b]=a}getColor(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color="#cccccc":this.getCyclic("color",this.options.color||t.plotOptions[this.type].color,
this.chart.options.colors)}getPointsCollection(){return(this.hasGroupedData?this.points:this.data)||[]}getSymbol(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)}findPointIndex(b,a){const d=b.id,f=b.x,e=this.points;var g=this.options.dataSorting,k;let h,n;if(d)g=this.chart.get(d),g instanceof z&&(k=g);else if(this.linkedParent||this.enabledDataSorting||this.options.relativeXValue)if(k=a=>!a.touched&&a.index===b.index,g&&g.matchByName?k=a=>!a.touched&&a.name===b.name:
this.options.relativeXValue&&(k=a=>!a.touched&&a.options.x===b.x),k=c(e,k),!k)return;k&&(n=k&&k.index,"undefined"!==typeof n&&(h=!0));"undefined"===typeof n&&T(f)&&(n=this.xData.indexOf(f,a));-1!==n&&"undefined"!==typeof n&&this.cropped&&(n=n>=this.cropStart?n-this.cropStart:n);!h&&T(n)&&e[n]&&e[n].touched&&(n=void 0);return n}updateData(b,a){const c=this.options,d=c.dataSorting,f=this.points,e=[],g=this.requireSorting,k=b.length===f.length;let n,h,l,m=!0;this.xIncrement=null;b.forEach(function(b,
a){var h=r(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};const m=h.x;if(h.id||T(m)){if(h=this.findPointIndex(h,l),-1===h||"undefined"===typeof h?e.push(b):f[h]&&b!==c.data[h]?(f[h].update(b,!1,null,!1),f[h].touched=!0,g&&(l=h+1)):f[h]&&(f[h].touched=!0),!k||a!==h||d&&d.enabled||this.hasDerivedData)n=!0}else e.push(b)},this);if(n)for(b=f.length;b--;)(h=f[b])&&!h.touched&&h.remove&&h.remove(!1,a);else!k||d&&d.enabled?m=!1:(b.forEach(function(b,a){b===f[a].y||f[a].destroyed||
f[a].update(b,!1,null,!1)}),e.length=0);f.forEach(function(b){b&&(b.touched=!1)});if(!m)return!1;e.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=x(this.xData),this.autoIncrement());return!0}setData(a,c=!0,d,f){var e;const g=this,k=g.points,h=k&&k.length||0,n=g.options,l=g.chart,m=n.dataSorting,q=g.xAxis,p=n.turboThreshold,r=this.xData,t=this.yData;var w=g.pointArrayMap;w=w&&w.length;const J=n.keys;let v,u=0,O=1,
x=null;if(!l.options.chart.allowMutatingData){n.data&&delete g.options.data;g.userOptions.data&&delete g.userOptions.data;var N=V(!0,a)}a=N||a||[];N=a.length;m&&m.enabled&&(a=this.sortData(a));l.options.chart.allowMutatingData&&!1!==f&&N&&h&&!g.cropped&&!g.hasGroupedData&&g.visible&&!g.boosted&&(v=this.updateData(a,d));if(!v){g.xIncrement=null;g.colorCounter=0;this.parallelArrays.forEach(function(b){g[b+"Data"].length=0});if(p&&N>p)if(x=g.getFirstValidPoint(a),T(x))for(d=0;d<N;d++)r[d]=this.autoIncrement(),
t[d]=a[d];else if(X(x))if(w)if(x.length===w)for(d=0;d<N;d++)r[d]=this.autoIncrement(),t[d]=a[d];else for(d=0;d<N;d++)f=a[d],r[d]=f[0],t[d]=f.slice(1,w+1);else if(J&&(u=J.indexOf("x"),O=J.indexOf("y"),u=0<=u?u:0,O=0<=O?O:1),1===x.length&&(O=0),u===O)for(d=0;d<N;d++)r[d]=this.autoIncrement(),t[d]=a[d][O];else for(d=0;d<N;d++)f=a[d],r[d]=f[u],t[d]=f[O];else b(12,!1,l);else for(d=0;d<N;d++)f={series:g},g.pointClass.prototype.applyOptions.apply(f,[a[d]]),g.updateParallelArrays(f,d);t&&Z(t[0])&&b(14,!0,
l);g.data=[];g.options.data=g.userOptions.data=a;for(d=h;d--;)null===(e=k[d])||void 0===e?void 0:e.destroy();q&&(q.minRange=q.userMinRange);g.isDirty=l.isDirtyBox=!0;g.isDirtyData=!!k;d=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());c&&l.redraw(d)}sortData(b){const a=this,c=a.options.dataSorting.sortKey||"y",d=function(b,a){return r(a)&&b.pointClass.prototype.optionsToObject.call({series:b},a)||{}};b.forEach(function(c,f){b[f]=d(a,c);b[f].index=f},this);b.concat().sort((b,a)=>
{b=D(c,b);a=D(c,a);return a<b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);a.linkedSeries&&a.linkedSeries.forEach(function(a){const c=a.options,f=c.data;c.dataSorting&&c.dataSorting.enabled||!f||(f.forEach(function(c,e){f[e]=d(a,c);b[e]&&(f[e].x=b[e].x,f[e].index=e)}),a.setData(f,!1))});return b}getProcessedData(a){const c=this;var d=c.xAxis,f=c.options;const e=f.cropThreshold,g=a||c.getExtremesFromAll||f.getExtremesFromAll,k=null===d||void 0===d?void 0:d.logarithmic,h=c.isCartesian;let n=0;let l;
a=c.xData;f=c.yData;let m=!1;const q=a.length;if(d){var r=d.getExtremes();l=r.min;r=r.max;m=!(!d.categories||d.names.length)}if(h&&c.sorted&&!g&&(!e||q>e||c.forceCrop))if(a[q-1]<l||a[0]>r)a=[],f=[];else if(c.yData&&(a[0]<l||a[q-1]>r)){var p=this.cropData(c.xData,c.yData,l,r);a=p.xData;f=p.yData;n=p.start;p=!0}d=P([k?a.map(k.log2lin):a],()=>c.requireSorting&&!m&&b(15,!1,c.chart));return{xData:a,yData:f,cropped:p,cropStart:n,closestPointRange:d}}processData(b){const a=this.xAxis;if(this.isCartesian&&
!this.isDirty&&!a.isDirty&&!this.yAxis.isDirty&&!b)return!1;b=this.getProcessedData();this.cropped=b.cropped;this.cropStart=b.cropStart;this.processedXData=b.xData;this.processedYData=b.yData;this.closestPointRange=this.basePointRange=b.closestPointRange;n(this,"afterProcessData")}cropData(b,a,c,d,f){const e=b.length;let g,k=0,h=e;f=A(f,this.cropShoulder);for(g=0;g<e;g++)if(b[g]>=c){k=Math.max(0,g-f);break}for(c=g;c<e;c++)if(b[c]>d){h=c+f;break}return{xData:b.slice(k,h),yData:a.slice(k,h),start:k,
end:h}}generatePoints(){var b=this.options;const a=this.processedData||b.data,c=this.processedXData,d=this.processedYData,e=this.pointClass,g=c.length,k=this.cropStart||0,h=this.hasGroupedData,l=b.keys,m=[];b=b.dataGrouping&&b.dataGrouping.groupAll?k:0;let q;let r,p,t=this.data;if(!t&&!h){var w=[];w.length=a.length;t=this.data=w}l&&h&&(this.options.keys=!1);for(p=0;p<g;p++)w=k+p,h?(r=(new e).init(this,[c[p]].concat(ia(d[p]))),r.dataGroup=this.groupMap[b+p],r.dataGroup.options&&(r.options=r.dataGroup.options,
f(r,r.dataGroup.options),delete r.dataLabels)):(r=t[w])||"undefined"===typeof a[w]||(t[w]=r=(new e).init(this,a[w],c[p])),r&&(r.index=h?b+p:w,m[p]=r);this.options.keys=l;if(t&&(g!==(q=t.length)||h))for(p=0;p<q;p++)p!==k||h||(p+=g),t[p]&&(t[p].destroyElements(),t[p].plotX=void 0);this.data=t;this.points=m;n(this,"afterGeneratePoints")}getXExtremes(b){return{min:F(b),max:x(b)}}getExtremes(b,a){const c=this.xAxis;var d=this.yAxis;const f=this.processedXData||this.xData,e=[],g=this.requireSorting?this.cropShoulder:
0;d=d?d.positiveValuesOnly:!1;let k,h=0,l=0,m=0;b=b||this.stackedYData||this.processedYData||[];const q=b.length;if(c){var p=c.getExtremes();h=p.min;l=p.max}for(k=0;k<q;k++){var r=f[k];p=b[k];var t=(T(p)||X(p))&&(p.length||0<p||!d);r=a||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!c||(f[k+g]||r)>=h&&(f[k-g]||r)<=l;if(t&&r)if(t=p.length)for(;t--;)T(p[t])&&(e[m++]=p[t]);else e[m++]=p}b={activeYData:e,dataMin:F(e),dataMax:x(e)};n(this,"afterGetExtremes",{dataExtremes:b});
return b}applyExtremes(){const b=this.getExtremes();this.dataMin=b.dataMin;this.dataMax=b.dataMax;return b}getFirstValidPoint(b){const a=b.length;let c=0,d=null;for(;null===d&&c<a;)d=b[c],c++;return d}translate(){var b;this.processedXData||this.processData();this.generatePoints();var a=this.options;const c=a.stacking,f=this.xAxis,e=f.categories,g=this.enabledDataSorting,h=this.yAxis,l=this.points,m=l.length,q=this.pointPlacementToXValue(),p=!!q,t=a.threshold;a=a.startFromThreshold?t:0;let w,v,u,x,
D=Number.MAX_VALUE;for(w=0;w<m;w++){const n=l[w],m=n.x;let J,Q,R=n.y,O=n.low;const E=c&&(null===(b=h.stacking)||void 0===b?void 0:b.stacks[(this.negStacks&&R<(a?0:t)?"-":"")+this.stackKey]);v=f.translate(m,!1,!1,!1,!0,q);n.plotX=T(v)?k(d(v,-1E5,1E5)):void 0;c&&this.visible&&E&&E[m]&&(x=this.getStackIndicator(x,m,this.index),!n.isNull&&x.key&&(J=E[m],Q=J.points[x.key]),J&&X(Q)&&(O=Q[0],R=Q[1],O===a&&x.key===E[m].base&&(O=A(T(t)?t:h.min)),h.positiveValuesOnly&&r(O)&&0>=O&&(O=void 0),n.total=n.stackTotal=
A(J.total),n.percentage=r(n.y)&&J.total?n.y/J.total*100:void 0,n.stackY=R,this.irregularWidths||J.setOffset(this.pointXOffset||0,this.barW||0,void 0,void 0,void 0,this.xAxis)));n.yBottom=r(O)?d(h.translate(O,!1,!0,!1,!0),-1E5,1E5):void 0;this.dataModify&&(R=this.dataModify.modifyValue(R,w));let N;T(R)&&void 0!==n.plotX&&(N=h.translate(R,!1,!0,!1,!0),N=T(N)?d(N,-1E5,1E5):void 0);n.plotY=N;n.isInside=this.isPointInside(n);n.clientX=p?k(f.translate(m,!1,!1,!1,!0,q)):v;n.negative=(n.y||0)<(t||0);n.category=
A(e&&e[n.x],n.x);n.isNull||!1===n.visible||("undefined"!==typeof u&&(D=Math.min(D,Math.abs(v-u))),u=v);n.zone=this.zones.length?n.getZone():void 0;!n.graphic&&this.group&&g&&(n.isNew=!0)}this.closestPointRangePx=D;n(this,"afterTranslate")}getValidPoints(b,a,c){const d=this.chart;return(b||this.points||[]).filter(function(b){const {plotX:f,plotY:e}=b;return!c&&(b.isNull||!T(e))||a&&!d.isInsidePlot(f,e,{inverted:d.inverted})?!1:!1!==b.visible})}getClipBox(){const {chart:b,xAxis:a,yAxis:c}=this,d=V(b.clipBox);
a&&a.len!==b.plotSizeX&&(d.width=a.len);c&&c.len!==b.plotSizeY&&(d.height=c.len);return d}getSharedClipKey(){return this.sharedClipKey=(this.options.xAxis||0)+","+(this.options.yAxis||0)}setClip(){const {chart:b,group:a,markerGroup:c}=this,d=b.sharedClips,f=b.renderer,e=this.getClipBox(),g=this.getSharedClipKey();let k=d[g];k?k.animate(e):d[g]=k=f.clipRect(e);a&&a.clip(!1===this.options.clip?void 0:k);c&&c.clip()}animate(b){const {chart:a,group:c,markerGroup:d}=this,f=a.inverted;var e=l(this.options.animation),
g=[this.getSharedClipKey(),e.duration,e.easing,e.defer].join();let k=a.sharedClips[g],n=a.sharedClips[g+"m"];if(b&&c)e=this.getClipBox(),k?k.attr("height",e.height):(e.width=0,f&&(e.x=a.plotHeight),k=a.renderer.clipRect(e),a.sharedClips[g]=k,n=a.renderer.clipRect({x:-99,y:-99,width:f?a.plotWidth+199:99,height:f?99:a.plotHeight+199}),a.sharedClips[g+"m"]=n),c.clip(k),d&&d.clip(n);else if(k&&!k.hasClass("highcharts-animating")){g=this.getClipBox();const b=e.step;d&&d.element.childNodes.length&&(e.step=
function(a,c){b&&b.apply(c,arguments);"width"===c.prop&&n&&n.element&&n.attr(f?"height":"width",a+99)});k.addClass("highcharts-animating").animate(g,e)}}afterAnimate(){this.setClip();Y(this.chart.sharedClips,(b,a,c)=>{b&&!this.chart.container.querySelector(`[clip-path="url(#${b.id})"]`)&&(b.destroy(),delete c[a])});this.finishedAnimating=!0;n(this,"afterAnimate")}drawPoints(b=this.points){const a=this.chart,c=a.styledMode,{colorAxis:d,options:f}=this,e=f.marker,g=this[this.specialGroup||"markerGroup"],
k=this.xAxis,n=A(e.enabled,!k||k.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);let h,l,m,q;let p,r;if(!1!==e.enabled||this._hasPointMarkers)for(h=0;h<b.length;h++){l=b[h];q=(m=l.graphic)?"animate":"attr";var t=l.marker||{};p=!!l.marker;if((n&&"undefined"===typeof t.enabled||t.enabled)&&!l.isNull&&!1!==l.visible){const b=A(t.symbol,this.symbol,"rect");r=this.markerAttribs(l,l.selected&&"select");this.enabledDataSorting&&(l.startXPos=k.reversed?-(r.width||0):k.width);const f=
!1!==l.isInside;!m&&f&&(0<(r.width||0)||l.hasImage)&&(l.graphic=m=a.renderer.symbol(b,r.x,r.y,r.width,r.height,p?t:e).add(g),this.enabledDataSorting&&a.hasRendered&&(m.attr({x:l.startXPos}),q="animate"));m&&"animate"===q&&m[f?"show":"hide"](f).animate(r);if(m)if(t=this.pointAttribs(l,c||!l.selected?void 0:"select"),c)d&&m.css({fill:t.fill});else m[q](t);m&&m.addClass(l.getClassName(),!0)}else m&&(l.graphic=m.destroy())}}markerAttribs(b,a){const c=this.options;var d=c.marker;const f=b.marker||{},e=
f.symbol||d.symbol,g={};let k=A(f.radius,d&&d.radius);a&&(d=d.states[a],a=f.states&&f.states[a],k=A(a&&a.radius,d&&d.radius,k&&k+(d&&d.radiusPlus||0)));b.hasImage=e&&0===e.indexOf("url");b.hasImage&&(k=0);b=b.pos();T(k)&&b&&(g.x=b[0]-k,g.y=b[1]-k,c.crisp&&(g.x=Math.floor(g.x)));k&&(g.width=g.height=2*k);return g}pointAttribs(b,a){var c=this.options.marker,d=b&&b.options;const f=d&&d.marker||{};var e=d&&d.color,g=b&&b.color;const k=b&&b.zone&&b.zone.color;let n=this.color;b=A(f.lineWidth,c.lineWidth);
d=1;n=e||k||g||n;e=f.fillColor||c.fillColor||n;g=f.lineColor||c.lineColor||n;a=a||"normal";c=c.states[a]||{};a=f.states&&f.states[a]||{};b=A(a.lineWidth,c.lineWidth,b+A(a.lineWidthPlus,c.lineWidthPlus,0));e=a.fillColor||c.fillColor||e;g=a.lineColor||c.lineColor||g;d=A(a.opacity,c.opacity,d);return{stroke:g,"stroke-width":b,fill:e,opacity:d}}destroy(b){const a=this,c=a.chart,d=/AppleWebKit\/533/.test(e.navigator.userAgent),f=a.data||[];let g,k,h,l;n(a,"destroy",{keepEventsForUpdate:b});this.removeEvents(b);
(a.axisTypes||[]).forEach(function(b){(l=a[b])&&l.series&&(G(l.series,a),l.isDirty=l.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(k=f.length;k--;)(h=f[k])&&h.destroy&&h.destroy();a.clips&&a.clips.forEach(b=>b.destroy());v.clearTimeout(a.animationTimeout);Y(a,function(b,a){b instanceof u&&!b.survive&&(g=d&&"group"===a?"hide":"destroy",b[g]())});c.hoverSeries===a&&(c.hoverSeries=void 0);G(c.series,a);c.orderItems("series");Y(a,function(c,d){b&&"hcEvents"===d||delete a[d]})}applyZones(){const b=
this,a=this.chart,c=a.renderer,f=this.zones,e=this.clips||[],g=this.graph,k=this.area,n=Math.max(a.plotWidth,a.plotHeight),h=this[(this.zoneAxis||"y")+"Axis"],l=a.inverted;let m,q,p,r,t,w,v,u,x,D,E,G=!1;f.length&&(g||k)&&h&&"undefined"!==typeof h.min?(t=h.reversed,w=h.horiz,g&&!this.showLine&&g.hide(),k&&k.hide(),r=h.getExtremes(),f.forEach(function(f,Q){m=t?w?a.plotWidth:0:w?0:h.toPixels(r.min)||0;m=d(A(q,m),0,n);q=d(Math.round(h.toPixels(A(f.value,r.max),!0)||0),0,n);G&&(m=q=h.toPixels(r.max));
v=Math.abs(m-q);u=Math.min(m,q);x=Math.max(m,q);h.isXAxis?(p={x:l?x:u,y:0,width:v,height:n},w||(p.x=a.plotHeight-p.x)):(p={x:0,y:l?x:u,width:n,height:v},w&&(p.y=a.plotWidth-p.y));e[Q]?e[Q].animate(p):e[Q]=c.clipRect(p);D=b["zone-area-"+Q];E=b["zone-graph-"+Q];g&&E&&E.clip(e[Q]);k&&D&&D.clip(e[Q]);G=f.value>r.max;b.resetZones&&0===q&&(q=void 0)}),this.clips=e):b.visible&&(g&&g.show(),k&&k.show())}plotGroup(b,a,c,d,f){let e=this[b];const g=!e;c={visibility:c,zIndex:d||.1};"undefined"===typeof this.opacity||
this.chart.styledMode||"inactive"===this.state||(c.opacity=this.opacity);g&&(this[b]=e=this.chart.renderer.g().add(f));e.addClass("highcharts-"+a+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(r(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr(c)[g?"attr":"animate"](this.getPlotBox(a));return e}getPlotBox(b){let a=this.xAxis,c=this.yAxis;const d=this.chart;b=d.inverted&&
!d.polar&&a&&!1!==this.invertible&&"series"===b;d.inverted&&(a=c,c=this.xAxis);return{translateX:a?a.left:d.plotLeft,translateY:c?c.top:d.plotTop,rotation:b?90:0,rotationOriginX:b?(a.len-c.len)/2:0,rotationOriginY:b?(a.len+c.len)/2:0,scaleX:b?-1:1,scaleY:1}}removeEvents(b){b||M(this);this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(b){b()}),this.eventsToUnbind.length=0)}render(){const b=this;var a=b.chart;const c=b.options,d=l(c.animation),f=b.visible?"inherit":"hidden",e=c.zIndex,
g=b.hasRendered;a=a.seriesGroup;let k=b.finishedAnimating?0:d.duration;n(this,"render");b.plotGroup("group","series",f,e,a);b.markerGroup=b.plotGroup("markerGroup","markers",f,e,a);!1!==c.clip&&b.setClip();b.animate&&k&&b.animate(!0);b.drawGraph&&(b.drawGraph(),b.applyZones());b.visible&&b.drawPoints();b.drawDataLabels&&b.drawDataLabels();b.redrawPoints&&b.redrawPoints();b.drawTracker&&c.enableMouseTracking&&b.drawTracker();b.animate&&k&&b.animate();g||(k&&d.defer&&(k+=d.defer),b.animationTimeout=
ba(function(){b.afterAnimate()},k||0));b.isDirty=!1;b.hasRendered=!0;n(b,"afterRender")}redraw(){const b=this.isDirty||this.isDirtyData;this.translate();this.render();b&&delete this.kdTree}searchPoint(b,a){const c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-b.chartY+c.pos:b.chartX-c.pos,plotY:f?d.len-b.chartX+d.pos:b.chartY-d.pos},a,b)}buildKDTree(b){function a(b,d,f){var e=b&&b.length;let g;if(e)return g=c.kdAxisArray[d%f],b.sort(function(b,a){return b[g]-
a[g]}),e=Math.floor(e/2),{point:b[e],left:a(b.slice(0,e),d+1,f),right:a(b.slice(e+1),d+1,f)}}this.buildingKdTree=!0;const c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;ba(function(){c.kdTree=a(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||b&&"touchstart"===b.type?0:1)}searchKDTree(b,a,c){function d(b,a,c,n){const h=a.point;var l=f.kdAxisArray[c%n];let m=h;var q=r(b[e])&&r(h[e])?Math.pow(b[e]-h[e],2):null;var p=r(b[g])&&r(h[g])?Math.pow(b[g]-
h[g],2):null;p=(q||0)+(p||0);h.dist=r(p)?Math.sqrt(p):Number.MAX_VALUE;h.distX=r(q)?Math.sqrt(q):Number.MAX_VALUE;l=b[l]-h[l];p=0>l?"left":"right";q=0>l?"right":"left";a[p]&&(p=d(b,a[p],c+1,n),m=p[k]<m[k]?p:h);a[q]&&Math.sqrt(l*l)<m[k]&&(b=d(b,a[q],c+1,n),m=b[k]<m[k]?b:m);return m}const f=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],k=a?"distX":"dist";a=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(b,this.kdTree,
a,a)}pointPlacementToXValue(){const {options:{pointPlacement:b,pointRange:a},xAxis:c}=this;let d=b;"between"===d&&(d=c.reversed?-.5:.5);return T(d)?d*(a||c.pointRange):0}isPointInside(b){const {chart:a,xAxis:c,yAxis:d}=this;return"undefined"!==typeof b.plotY&&"undefined"!==typeof b.plotX&&0<=b.plotY&&b.plotY<=(d?d.len:a.plotHeight)&&0<=b.plotX&&b.plotX<=(c?c.len:a.plotWidth)}drawTracker(){const b=this,a=b.options,c=a.trackByArea,d=[].concat(c?b.areaPath:b.graphPath),f=b.chart,e=f.pointer,k=f.renderer,
l=f.options.tooltip.snap,m=b.tracker,q=function(c){if(a.enableMouseTracking&&f.hoverSeries!==b)b.onMouseOver()},p="rgba(192,192,192,"+(g?.0001:.002)+")";m?m.attr({d}):b.graph&&(b.tracker=k.path(d).attr({visibility:b.visible?"inherit":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(b.group),f.styledMode||b.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:p,fill:c?p:"none","stroke-width":b.graph.strokeWidth()+(c?0:2*l)}),[b.tracker,b.markerGroup,
b.dataLabelsGroup].forEach(function(b){if(b&&(b.addClass("highcharts-tracker").on("mouseover",q).on("mouseout",function(b){e.onTrackerMouseOut(b)}),a.cursor&&!f.styledMode&&b.css({cursor:a.cursor}),h))b.on("touchstart",q)}));n(this,"afterDrawTracker")}addPoint(b,a,c,d,f){const e=this.options,g=this.data,k=this.chart;var h=this.xAxis;h=h&&h.hasNames&&h.names;const l=e.data,m=this.xData;let q,p;a=A(a,!0);const r={series:this};this.pointClass.prototype.applyOptions.apply(r,[b]);const t=r.x;p=m.length;
if(this.requireSorting&&t<m[p-1])for(q=!0;p&&m[p-1]>t;)p--;this.updateParallelArrays(r,"splice",[p,0,0]);this.updateParallelArrays(r,p);h&&r.name&&(h[t]=r.name);l.splice(p,0,b);if(q||this.processedData)this.data.splice(p,0,null),this.processData();"point"===e.legendType&&this.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),this.updateParallelArrays(r,"shift"),l.shift()));!1!==f&&n(this,"addPoint",{point:r});this.isDirtyData=this.isDirty=!0;a&&k.redraw(d)}removePoint(b,a,c){const d=
this,f=d.data,e=f[b],g=d.points,k=d.chart,h=function(){g&&g.length===f.length&&g.splice(b,1);f.splice(b,1);d.options.data.splice(b,1);d.updateParallelArrays(e||{series:d},"splice",[b,1]);e&&e.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&k.redraw()};p(c,k);a=A(a,!0);e?e.firePointEvent("remove",null,h):h()}remove(b,a,c,d){function f(){e.destroy(d);g.isDirtyLegend=g.isDirtyBox=!0;g.linkSeries(d);A(b,!0)&&g.redraw(a)}const e=this,g=e.chart;!1!==c?n(e,"remove",null,f):f()}update(a,c){a=q(a,this.userOptions);
n(this,"update",{options:a});const d=this,e=d.chart;var g=d.userOptions;const k=d.initialType||d.type;var h=e.options.plotOptions;const l=w[k].prototype;var m=d.finishedAnimating&&{animation:!1};const p={};let r,t=["colorIndex","eventOptions","navigatorSeries","symbolIndex","baseSeries"],v=a.type||g.type||e.options.chart.type;const u=!(this.hasDerivedData||v&&v!==this.type||"undefined"!==typeof a.pointStart||"undefined"!==typeof a.pointInterval||"undefined"!==typeof a.relativeXValue||a.joinBy||a.mapData||
d.hasOptionChanged("dataGrouping")||d.hasOptionChanged("pointStart")||d.hasOptionChanged("pointInterval")||d.hasOptionChanged("pointIntervalUnit")||d.hasOptionChanged("keys"));v=v||k;u&&(t.push("data","isDirtyData","points","processedData","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","clips","nodes","layout","level","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&t.push("area","graph"),d.parallelArrays.forEach(function(b){t.push(b+"Data")}),
a.data&&(a.dataSorting&&f(d.options.dataSorting,a.dataSorting),this.setData(a.data,!1)));a=V(g,m,{index:"undefined"===typeof g.index?d.index:g.index,pointStart:A(h&&h.series&&h.series.pointStart,g.pointStart,d.xData[0])},!u&&{data:d.options.data},a);u&&a.data&&(a.data=d.options.data);t=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(t);t.forEach(function(b){t[b]=d[b];delete d[b]});h=!1;if(w[v]){if(h=v!==d.type,d.remove(!1,!1,!1,!0),h)if(Object.setPrototypeOf)Object.setPrototypeOf(d,
w[v].prototype);else{m=Object.hasOwnProperty.call(d,"hcEvents")&&d.hcEvents;for(r in l)d[r]=void 0;f(d,w[v].prototype);m?d.hcEvents=m:delete d.hcEvents}}else b(17,!0,e,{missingModuleFor:v});t.forEach(function(b){d[b]=t[b]});d.init(e,a);if(u&&this.points){a=d.options;if(!1===a.visible)p.graphic=1,p.dataLabel=1;else if(!d._hasPointLabels){const {marker:b,dataLabels:c}=a;g=g.marker||{};!b||!1!==b.enabled&&g.symbol===b.symbol&&g.height===b.height&&g.width===b.width||(p.graphic=1);c&&!1===c.enabled&&(p.dataLabel=
1)}for(const b of this.points)b&&b.series&&(b.resolveColor(),Object.keys(p).length&&b.destroyElements(p),!1===a.showInLegend&&b.legendItem&&e.legend.destroyItem(b))}d.initialType=k;e.linkSeries();h&&d.linkedSeries.length&&(d.isDirtyData=!0);n(this,"afterUpdate");A(c,!0)&&e.redraw(u?void 0:!1)}setName(b){this.name=this.options.name=this.userOptions.name=b;this.chart.isDirtyLegend=!0}hasOptionChanged(b){const a=this.options[b],c=this.chart.options.plotOptions,d=this.userOptions[b];return d?a!==d:a!==
A(c&&c[this.type]&&c[this.type][b],c&&c.series&&c.series[b],a)}onMouseOver(){const b=this.chart,a=b.hoverSeries;b.pointer.setHoverChartIndex();if(a&&a!==this)a.onMouseOut();this.options.events.mouseOver&&n(this,"mouseOver");this.setState("hover");b.hoverSeries=this}onMouseOut(){const b=this.options,a=this.chart,c=a.tooltip,d=a.hoverPoint;a.hoverSeries=null;if(d)d.onMouseOut();this&&b.events.mouseOut&&n(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();a.series.forEach(function(b){b.setState("",
!0)})}setState(b,a){const c=this;var d=c.options;const f=c.graph,e=d.inactiveOtherPoints,g=d.states,k=A(g[b||"normal"]&&g[b||"normal"].animation,c.chart.options.chart.animation);let h=d.lineWidth,n=0,l=d.opacity;b=b||"";if(c.state!==b&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(a){a&&(c.state&&a.removeClass("highcharts-series-"+c.state),b&&a.addClass("highcharts-series-"+b))}),c.state=b,!c.chart.styledMode)){if(g[b]&&!1===g[b].enabled)return;b&&(h=g[b].lineWidth||h+(g[b].lineWidthPlus||
0),l=A(g[b].opacity,l));if(f&&!f.dashstyle&&T(h))for(d={"stroke-width":h},f.animate(d,k);c["zone-graph-"+n];)c["zone-graph-"+n].animate(d,k),n+=1;e||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(b){b&&b.animate({opacity:l},k)})}a&&e&&c.points&&c.setAllPointsToState(b||void 0)}setAllPointsToState(b){this.points.forEach(function(a){a.setState&&a.setState(b)})}setVisible(b,a){const c=this,d=c.chart,f=d.options.chart.ignoreHiddenSeries,e=c.visible,g=(c.visible=b=c.options.visible=
c.userOptions.visible="undefined"===typeof b?!e:b)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(b){if(c[b])c[b][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();c.legendItem&&d.legend.colorizeItem(c,b);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(b){b.options.stacking&&b.visible&&(b.isDirty=!0)});c.linkedSeries.forEach(function(a){a.setVisible(b,!1)});f&&(d.isDirtyBox=!0);n(c,g);!1!==a&&d.redraw()}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}select(b){this.selected=
b=this.options.selected="undefined"===typeof b?!this.selected:b;this.checkbox&&(this.checkbox.checked=b);n(this,b?"select":"unselect")}shouldShowTooltip(b,a,c={}){c.series=this;c.visiblePlotOnly=!0;return this.chart.isInsidePlot(b,a,c)}drawLegendSymbol(b,a){var c;null===(c=C[this.options.legendSymbol||"rectangle"])||void 0===c?void 0:c.call(this,b,a)}}aa.defaultOptions=H;aa.types=B.seriesTypes;aa.registerType=B.registerSeriesType;f(aa.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,
cropShoulder:1,directTouch:!1,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:z,requireSorting:!0,sorted:!0});B.series=aa;"";"";return aa});M(a,"Core/Chart/Chart.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/Axis.js"],a["Core/Defaults.js"],a["Core/Templating.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Time.js"],
a["Core/Utilities.js"],a["Core/Renderer/HTML/AST.js"]],function(a,y,I,L,C,z,H,B,u,v,l,p,t){const {animate:m,animObject:h,setAnimation:g}=a,{defaultOptions:e,defaultTime:w}=I,{numberFormat:x}=L,{registerEventOptions:F}=C,{charts:d,doc:k,marginNames:r,svg:q,win:G}=z,{seriesTypes:b}=u,{addEvent:f,attr:c,createElement:n,css:P,defined:D,diffObjects:K,discardElement:X,erase:T,error:Z,extend:V,find:Y,fireEvent:A,getStyle:M,isArray:ia,isNumber:ba,isObject:aa,isString:J,merge:N,objectEach:O,pick:S,pInt:W,
relativeLength:ha,removeEvent:da,splat:fa,syncTimeout:ka,uniqueKey:ca}=p;class ea{static chart(b,a,c){return new ea(b,a,c)}constructor(b,a,c){this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.labelCollectors=this.isResizing=this.index=this.eventOptions=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=
this.axes=void 0;this.sharedClips={};this.zooming=this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=void 0;this.getArgs(b,a,c)}getArgs(b,a,c){J(b)||b.nodeName?(this.renderTo=b,this.init(a,c)):this.init(b,a)}setZoomOptions(){const b=this.options.chart,a=b.zooming;this.zooming=Object.assign(Object.assign({},a),{type:S(b.zoomType,a.type),key:S(b.zoomKey,a.key),pinchType:S(b.pinchType,a.pinchType),singleTouch:S(b.zoomBySingleTouch,a.singleTouch,
!1),resetButton:N(a.resetButton,b.resetZoomButton)})}init(b,a){A(this,"init",{args:arguments},function(){const c=N(e,b),f=c.chart;this.userOptions=V({},b);this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=a;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new l(b.time):z.time;this.numberFormatter=f.numberFormatter||x;this.styledMode=f.styledMode;this.hasCartesianSeries=f.showAxes;this.index=d.length;
d.push(this);z.chartCount++;F(this,f);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.setZoomOptions();A(this,"afterInit");this.firstRender()})}initSeries(a){var c=this.options.chart;c=a.type||c.type;const d=b[c];d||Z(17,!0,this,{missingModuleFor:c});c=new d;"function"===typeof c.init&&c.init(this,a);return c}setSeriesData(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})}getSeriesOrderByLinks(){return this.series.concat().sort(function(b,
a){return b.linkedSeries.length||a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:0})}orderItems(b,a=0){const c=this[b],d=this.options[b]=fa(this.options[b]).slice();b=this.userOptions[b]=this.userOptions[b]?fa(this.userOptions[b]).slice():[];this.hasRendered&&(d.splice(a),b.splice(a));if(c)for(let f=a,e=c.length;f<e;++f)if(a=c[f])a.index=f,a instanceof B&&(a.name=a.getName()),a.options.isInternal||(d[f]=a.options,b[f]=a.userOptions)}isInsidePlot(b,a,c={}){const {inverted:d,plotBox:f,
plotLeft:e,plotTop:g,scrollablePlotBox:k}=this;var h=0;let n=0;c.visiblePlotOnly&&this.scrollingContainer&&({scrollLeft:h,scrollTop:n}=this.scrollingContainer);const l=c.series,m=c.visiblePlotOnly&&k||f;var q=c.inverted?a:b;a=c.inverted?b:a;b={x:q,y:a,isInsidePlot:!0,options:c};if(!c.ignoreX){const a=l&&(d&&!this.polar?l.yAxis:l.xAxis)||{pos:e,len:Infinity};q=c.paneCoordinates?a.pos+q:e+q;q>=Math.max(h+e,a.pos)&&q<=Math.min(h+e+m.width,a.pos+a.len)||(b.isInsidePlot=!1)}!c.ignoreY&&b.isInsidePlot&&
(h=!d&&c.axis&&!c.axis.isXAxis&&c.axis||l&&(d?l.xAxis:l.yAxis)||{pos:g,len:Infinity},c=c.paneCoordinates?h.pos+a:g+a,c>=Math.max(n+g,h.pos)&&c<=Math.min(n+g+m.height,h.pos+h.len)||(b.isInsidePlot=!1));A(this,"afterIsInsidePlot",b);return b.isInsidePlot}redraw(b){A(this,"beforeRedraw");const a=this.hasCartesianSeries?this.axes:this.colorAxis||[],c=this.series,d=this.pointer,f=this.legend,e=this.userOptions.legend,k=this.renderer,h=k.isHidden(),n=[];let l,m,q=this.isDirtyBox,p=this.isDirtyLegend,r;
k.rootFontSize=k.boxWrapper.getStyle("font-size");this.setResponsive&&this.setResponsive(!1);g(this.hasRendered?b:!1,this);h&&this.temporaryDisplay();this.layOutTitles(!1);for(b=c.length;b--;)if(r=c[b],r.options.stacking||r.options.centerInCategory)if(m=!0,r.isDirty){l=!0;break}if(l)for(b=c.length;b--;)r=c[b],r.options.stacking&&(r.isDirty=!0);c.forEach(function(b){b.isDirty&&("point"===b.options.legendType?("function"===typeof b.updateTotals&&b.updateTotals(),p=!0):e&&(e.labelFormatter||e.labelFormat)&&
(p=!0));b.isDirtyData&&A(b,"updatedData")});p&&f&&f.options.enabled&&(f.render(),this.isDirtyLegend=!1);m&&this.getStacks();a.forEach(function(b){b.updateNames();b.setScale()});this.getMargins();a.forEach(function(b){b.isDirty&&(q=!0)});a.forEach(function(b){const a=b.min+","+b.max;b.extKey!==a&&(b.extKey=a,n.push(function(){A(b,"afterSetExtremes",V(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(q||m)&&b.redraw()});q&&this.drawChartBox();A(this,"predraw");c.forEach(function(b){(q||b.isDirty)&&
b.visible&&b.redraw();b.isDirtyData=!1});d&&d.reset(!0);k.draw();A(this,"redraw");A(this,"render");h&&this.temporaryDisplay(!0);n.forEach(function(b){b.call()})}get(b){function a(a){return a.id===b||a.options&&a.options.id===b}const c=this.series;let d=Y(this.axes,a)||Y(this.series,a);for(let b=0;!d&&b<c.length;b++)d=Y(c[b].points||[],a);return d}getAxes(){const b=this.options;A(this,"getAxes");for(const a of["xAxis","yAxis"]){const c=b[a]=fa(b[a]||{});for(const b of c)new y(this,b,a)}A(this,"afterGetAxes")}getSelectedPoints(){return this.series.reduce((b,
a)=>{a.getPointsCollection().forEach(a=>{S(a.selectedStaging,a.selected)&&b.push(a)});return b},[])}getSelectedSeries(){return this.series.filter(function(b){return b.selected})}setTitle(b,a,c){this.applyDescription("title",b);this.applyDescription("subtitle",a);this.applyDescription("caption",void 0);this.layOutTitles(c)}applyDescription(b,a){const c=this,d=this.options[b]=N(this.options[b],a);let f=this[b];f&&a&&(this[b]=f=f.destroy());d&&!f&&(f=this.renderer.text(d.text,0,0,d.useHTML).attr({align:d.align,
"class":"highcharts-"+b,zIndex:d.zIndex||4}).add(),f.update=function(a,d){c.applyDescription(b,a);c.layOutTitles(d)},this.styledMode||f.css(V("title"===b?{fontSize:this.options.isStock?"1em":"1.2em"}:{},d.style)),this[b]=f)}layOutTitles(b=!0){const a=[0,0,0],c=this.renderer,d=this.spacingBox;["title","subtitle","caption"].forEach(function(b){const f=this[b],e=this.options[b],g=e.verticalAlign||"top";b="title"===b?"top"===g?-3:0:"top"===g?a[0]+2:0;if(f){f.css({width:(e.width||d.width+(e.widthAdjust||
0))+"px"});const k=c.fontMetrics(f).b,h=Math.round(f.getBBox(e.useHTML).height);f.align(V({y:"bottom"===g?k:b+k,height:h},e),!1,"spacingBox");e.floating||("top"===g?a[0]=Math.ceil(a[0]+h):"bottom"===g&&(a[2]=Math.ceil(a[2]+h)))}},this);a[0]&&"top"===(this.options.title.verticalAlign||"top")&&(a[0]+=this.options.title.margin);a[2]&&"bottom"===this.options.caption.verticalAlign&&(a[2]+=this.options.caption.margin);const f=!this.titleOffset||this.titleOffset.join(",")!==a.join(",");this.titleOffset=
a;A(this,"afterLayOutTitles");!this.isDirtyBox&&f&&(this.isDirtyBox=this.isDirtyLegend=f,this.hasRendered&&b&&this.isDirtyBox&&this.redraw())}getContainerBox(){return{width:M(this.renderTo,"width",!0)||0,height:M(this.renderTo,"height",!0)||0}}getChartSize(){var b=this.options.chart;const a=b.width;b=b.height;const c=this.getContainerBox();this.chartWidth=Math.max(0,a||c.width||600);this.chartHeight=Math.max(0,ha(b,this.chartWidth)||(1<c.height?c.height:400));this.containerBox=c}temporaryDisplay(b){let a=
this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(P(a,a.hcOrigStyle),delete a.hcOrigStyle),a.hcOrigDetached&&(k.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){k.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,k.body.appendChild(a));if("none"===M(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),P(a,b),a.offsetWidth||a.style.setProperty("display",
"block","important");a=a.parentNode;if(a===k.body)break}}setClassName(b){this.container.className="highcharts-container "+(b||"")}getContainer(){const b=this.options,a=b.chart;var f=ca();let e,h=this.renderTo;h||(this.renderTo=h=a.renderTo);J(h)&&(this.renderTo=h=k.getElementById(h));h||Z(13,!0,this);var l=W(c(h,"data-highcharts-chart"));ba(l)&&d[l]&&d[l].hasRendered&&d[l].destroy();c(h,"data-highcharts-chart",this.index);h.innerHTML=t.emptyHTML;a.skipClone||h.offsetWidth||this.temporaryDisplay();
this.getChartSize();l=this.chartWidth;const m=this.chartHeight;P(h,{overflow:"hidden"});this.styledMode||(e=V({position:"relative",overflow:"hidden",width:l+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},a.style||{}));this.container=f=n("div",{id:f},e,h);this._cursor=f.style.cursor;this.renderer=new (a.renderer||!q?H.getRendererType(a.renderer):v)(f,l,m,void 0,a.forExport,
b.exporting&&b.exporting.allowHTML,this.styledMode);this.containerBox=this.getContainerBox();g(void 0,this);this.setClassName(a.className);if(this.styledMode)for(const a in b.defs)this.renderer.definition(b.defs[a]);else this.renderer.setStyle(a.style);this.renderer.chartIndex=this.index;A(this,"afterGetContainer")}getMargins(b){const {spacing:a,margin:c,titleOffset:d}=this;this.resetMargins();d[0]&&!D(c[0])&&(this.plotTop=Math.max(this.plotTop,d[0]+a[0]));d[2]&&!D(c[2])&&(this.marginBottom=Math.max(this.marginBottom,
d[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,a);A(this,"getMargins");b||this.getAxisMargins()}getAxisMargins(){const b=this,a=b.axisOffset=[0,0,0,0],c=b.colorAxis,d=b.margin,f=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?f(b.axes):c&&c.length&&f(c);r.forEach(function(c,f){D(d[f])||(b[c]+=a[f])});b.setChartSize()}getOptions(){return K(this.userOptions,e)}reflow(b){const a=this;var c=a.options.chart;c=D(c.width)&&D(c.height);const d=
a.containerBox,f=a.getContainerBox();delete a.pointer.chartPosition;if(!c&&!a.isPrinting&&d&&f.width){if(f.width!==d.width||f.height!==d.height)p.clearTimeout(a.reflowTimeout),a.reflowTimeout=ka(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerBox=f}}setReflow(){const b=this;var a=a=>{var c;(null===(c=b.options)||void 0===c?0:c.chart.reflow)&&b.hasLoaded&&b.reflow(a)};"function"===typeof ResizeObserver?(new ResizeObserver(a)).observe(b.renderTo):(a=f(G,"resize",a),f(this,"destroy",
a))}setSize(b,a,c){const d=this,f=d.renderer;d.isResizing+=1;g(c,d);c=f.globalAnimation;d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;"undefined"!==typeof b&&(d.options.chart.width=b);"undefined"!==typeof a&&(d.options.chart.height=a);d.getChartSize();d.styledMode||(c?m:P)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},c);d.setChartSize(!0);f.setSize(d.chartWidth,d.chartHeight,c);d.axes.forEach(function(b){b.isDirty=!0;b.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=
!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;A(d,"resize");ka(function(){d&&A(d,"endResize",null,function(){--d.isResizing})},h(c).duration)}setChartSize(b){var a=this.inverted;const c=this.renderer;var d=this.chartWidth,f=this.chartHeight;const e=this.options.chart,g=this.spacing,k=this.clipOffset;let h,n,l,m;this.plotLeft=h=Math.round(this.plotLeft);this.plotTop=n=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(d-h-this.marginRight));this.plotHeight=m=Math.max(0,
Math.round(f-n-this.marginBottom));this.plotSizeX=a?m:l;this.plotSizeY=a?l:m;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:f-g[0]-g[2]};this.plotBox=c.plotBox={x:h,y:n,width:l,height:m};a=2*Math.floor(this.plotBorderWidth/2);d=Math.ceil(Math.max(a,k[3])/2);f=Math.ceil(Math.max(a,k[0])/2);this.clipBox={x:d,y:f,width:Math.floor(this.plotSizeX-Math.max(a,k[1])/2-d),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(a,k[2])/2-f))};b||
(this.axes.forEach(function(b){b.setAxisSize();b.setAxisTranslation()}),c.alignElements());A(this,"afterSetChartSize",{skipAxes:b})}resetMargins(){A(this,"resetMargins");const b=this,a=b.options.chart;["margin","spacing"].forEach(function(c){const d=a[c],f=aa(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(d,e){b[c][e]=S(a[c+d],f[e])})});r.forEach(function(a,c){b[a]=S(b.margin[c],b.spacing[c])});b.axisOffset=[0,0,0,0];b.clipOffset=[0,0,0,0]}drawChartBox(){const b=this.options.chart,
a=this.renderer,c=this.chartWidth,d=this.chartHeight,f=this.styledMode,e=this.plotBGImage;var g=b.backgroundColor;const k=b.plotBackgroundColor,h=b.plotBackgroundImage,n=this.plotLeft,l=this.plotTop,m=this.plotWidth,q=this.plotHeight,p=this.plotBox,r=this.clipRect,t=this.clipBox;let w=this.chartBackground,v=this.plotBackground,u=this.plotBorder,x,D,E="animate";w||(this.chartBackground=w=a.rect().addClass("highcharts-background").add(),E="attr");if(f)x=D=w.strokeWidth();else{x=b.borderWidth||0;D=x+
(b.shadow?8:0);g={fill:g||"none"};if(x||w["stroke-width"])g.stroke=b.borderColor,g["stroke-width"]=x;w.attr(g).shadow(b.shadow)}w[E]({x:D/2,y:D/2,width:c-D-x%2,height:d-D-x%2,r:b.borderRadius});E="animate";v||(E="attr",this.plotBackground=v=a.rect().addClass("highcharts-plot-background").add());v[E](p);f||(v.attr({fill:k||"none"}).shadow(b.plotShadow),h&&(e?(h!==e.attr("href")&&e.attr("href",h),e.animate(p)):this.plotBGImage=a.image(h,n,l,m,q).add()));r?r.animate({width:t.width,height:t.height}):
this.clipRect=a.clipRect(t);E="animate";u||(E="attr",this.plotBorder=u=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());f||u.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});u[E](u.crisp({x:n,y:l,width:m,height:q},-u.strokeWidth()));this.isDirtyBox=!1;A(this,"afterDrawChartBox")}propFromSeries(){const a=this,c=a.options.chart,d=a.options.series;let f,e,g;["inverted","angular","polar"].forEach(function(k){e=b[c.type];g=c[k]||e&&e.prototype[k];for(f=
d&&d.length;!g&&f--;)(e=b[d[f].type])&&e.prototype[k]&&(g=!0);a[k]=g})}linkSeries(b){const a=this,c=a.series;c.forEach(function(b){b.linkedSeries.length=0});c.forEach(function(b){let c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,c.enabledDataSorting&&b.setDataSortingOptions(),b.visible=S(b.options.visible,c.options.visible,b.visible))});A(this,"afterLinkSeries",{isUpdating:b})}renderSeries(){this.series.forEach(function(b){b.translate();
b.render()})}render(){const b=this.axes,a=this.colorAxis,c=this.renderer,d=function(b){b.forEach(function(b){b.visible&&b.render()})};let f=0;this.setTitle();A(this,"beforeMargins");this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();const e=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return f=21,!0});const g=this.plotHeight=Math.max(this.plotHeight-f,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();const k=1.1<
e/this.plotWidth,h=1.05<g/this.plotHeight;if(k||h)b.forEach(function(b){(b.horiz&&k||!b.horiz&&h)&&b.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?d(b):a&&a.length&&d(a);this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).shadow(this.options.chart.seriesGroupShadow).add());this.renderSeries();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0}addCredits(b){const a=this,c=N(!0,this.options.credits,b);c.enabled&&
!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(G.location.href=c.href)}).attr({align:c.position.align,zIndex:8}),a.styledMode||this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})}destroy(){const b=this,a=b.axes,c=b.series,f=b.container,e=f&&f.parentNode;let g;A(b,"destroy");b.renderer.forExport?T(d,b):d[b.index]=
void 0;z.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");da(b);for(g=a.length;g--;)a[g]=a[g].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(g=c.length;g--;)c[g]=c[g].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){const c=b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML=t.emptyHTML,da(f),e&&X(f));
O(b,function(a,c){delete b[c]})}firstRender(){const b=this,a=b.options;b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();const c=ia(a.series)?a.series:[];a.series=[];c.forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();A(b,"beforeRender");b.render();b.pointer.getChartPosition();if(!b.renderer.imgCount&&!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}onload(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&
b.apply(this,[this])},this);A(this,"load");A(this,"render");D(this.index)&&this.setReflow();this.warnIfA11yModuleNotLoaded();this.hasLoaded=!0}warnIfA11yModuleNotLoaded(){const {options:b,title:a}=this;b&&!this.accessibility&&(this.renderer.boxWrapper.attr({role:"img","aria-label":(a&&a.element.textContent||"").replace(/</g,"&lt;")}),b.accessibility&&!1===b.accessibility.enabled||Z('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
!1,this))}addSeries(b,a,c){const d=this;let f;b&&(a=S(a,!0),A(d,"addSeries",{options:b},function(){f=d.initSeries(b);d.isDirtyLegend=!0;d.linkSeries();f.enabledDataSorting&&f.setData(b.data,!1);A(d,"afterAddSeries",{series:f});a&&d.redraw(c)}));return f}addAxis(b,a,c,d){return this.createAxis(a?"xAxis":"yAxis",{axis:b,redraw:c,animation:d})}addColorAxis(b,a,c){return this.createAxis("colorAxis",{axis:b,redraw:a,animation:c})}createAxis(b,a){b=new y(this,a.axis,b);S(a.redraw,!0)&&this.redraw(a.animation);
return b}showLoading(b){const a=this,c=a.options,d=c.loading,e=function(){g&&P(g,{left:a.plotLeft+"px",top:a.plotTop+"px",width:a.plotWidth+"px",height:a.plotHeight+"px"})};let g=a.loadingDiv,k=a.loadingSpan;g||(a.loadingDiv=g=n("div",{className:"highcharts-loading highcharts-loading-hidden"},null,a.container));k||(a.loadingSpan=k=n("span",{className:"highcharts-loading-inner"},null,g),f(a,"redraw",e));g.className="highcharts-loading";t.setElementHTML(k,S(b,c.lang.loading,""));a.styledMode||(P(g,
V(d.style,{zIndex:10})),P(k,d.labelStyle),a.loadingShown||(P(g,{opacity:0,display:""}),m(g,{opacity:d.style.opacity||.5},{duration:d.showDuration||0})));a.loadingShown=!0;e()}hideLoading(){const b=this.options,a=this.loadingDiv;a&&(a.className="highcharts-loading highcharts-loading-hidden",this.styledMode||m(a,{opacity:0},{duration:b.loading.hideDuration||100,complete:function(){P(a,{display:"none"})}}));this.loadingShown=!1}update(b,a,c,d){const f=this,e={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",
caption:"setCaption"},g=b.isResponsiveOptions,k=[];let h,n;A(f,"update",{options:b});g||f.setResponsive(!1,!0);b=K(b,f.options);f.userOptions=N(f.userOptions,b);var m=b.chart;if(m){N(!0,f.options.chart,m);this.setZoomOptions();"className"in m&&f.setClassName(m.className);if("inverted"in m||"polar"in m||"type"in m){f.propFromSeries();var q=!0}"alignTicks"in m&&(q=!0);"events"in m&&F(this,m);O(m,function(b,a){-1!==f.propsRequireUpdateSeries.indexOf("chart."+a)&&(h=!0);-1!==f.propsRequireDirtyBox.indexOf(a)&&
(f.isDirtyBox=!0);-1!==f.propsRequireReflow.indexOf(a)&&(g?f.isDirtyBox=!0:n=!0)});!f.styledMode&&m.style&&f.renderer.setStyle(f.options.chart.style||{})}!f.styledMode&&b.colors&&(this.options.colors=b.colors);b.time&&(this.time===w&&(this.time=new l(b.time)),N(!0,f.options.time,b.time));O(b,function(a,c){if(f[c]&&"function"===typeof f[c].update)f[c].update(a,!1);else if("function"===typeof f[e[c]])f[e[c]](a);else"colors"!==c&&-1===f.collectionsWithUpdate.indexOf(c)&&N(!0,f.options[c],b[c]);"chart"!==
c&&-1!==f.propsRequireUpdateSeries.indexOf(c)&&(h=!0)});this.collectionsWithUpdate.forEach(function(a){b[a]&&(fa(b[a]).forEach(function(b,d){const e=D(b.id);let g;e&&(g=f.get(b.id));!g&&f[a]&&(g=f[a][S(b.index,d)])&&(e&&D(g.options.id)||g.options.isInternal)&&(g=void 0);g&&g.coll===a&&(g.update(b,!1),c&&(g.touched=!0));!g&&c&&f.collectionsWithInit[a]&&(f.collectionsWithInit[a][0].apply(f,[b].concat(f.collectionsWithInit[a][1]||[]).concat([!1])).touched=!0)}),c&&f[a].forEach(function(b){b.touched||
b.options.isInternal?delete b.touched:k.push(b)}))});k.forEach(function(b){b.chart&&b.remove&&b.remove(!1)});q&&f.axes.forEach(function(b){b.update({},!1)});h&&f.getSeriesOrderByLinks().forEach(function(b){b.chart&&b.update({},!1)},this);q=m&&m.width;m=m&&(J(m.height)?ha(m.height,q||f.chartWidth):m.height);n||ba(q)&&q!==f.chartWidth||ba(m)&&m!==f.chartHeight?f.setSize(q,m,d):S(a,!0)&&f.redraw(d);A(f,"afterUpdate",{options:b,redraw:a,animation:d})}setSubtitle(b,a){this.applyDescription("subtitle",
b);this.layOutTitles(a)}setCaption(b,a){this.applyDescription("caption",b);this.layOutTitles(a)}showResetZoom(){function b(){a.zoomOut()}const a=this,c=e.lang,d=a.zooming.resetButton,f=d.theme,g="chart"===d.relativeTo||"spacingBox"===d.relativeTo?null:"scrollablePlotBox";A(this,"beforeShowResetZoom",null,function(){a.resetZoomButton=a.renderer.button(c.resetZoom,null,null,b,f).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,g)});A(this,
"afterShowResetZoom")}zoomOut(){A(this,"selection",{resetSelection:!0},this.zoom)}zoom(b){const a=this,c=a.pointer;let d=!1,f;!b||b.resetSelection?(a.axes.forEach(function(b){f=b.zoom()}),c.initiated=!1):b.xAxis.concat(b.yAxis).forEach(function(b){const e=b.axis;if(c[e.isXAxis?"zoomX":"zoomY"]&&D(c.mouseDownX)&&D(c.mouseDownY)&&a.isInsidePlot(c.mouseDownX-a.plotLeft,c.mouseDownY-a.plotTop,{axis:e})||!D(a.inverted?c.mouseDownX:c.mouseDownY))f=e.zoom(b.min,b.max),e.displayBtn&&(d=!0)});const e=a.resetZoomButton;
d&&!e?a.showResetZoom():!d&&aa(e)&&(a.resetZoomButton=e.destroy());f&&a.redraw(S(a.options.chart.animation,b&&b.animation,100>a.pointCount))}pan(b,a){const c=this,d=c.hoverPoints;a="object"===typeof a?a:{enabled:a,type:"x"};const f=c.options.chart;f&&f.panning&&(f.panning=a);const e=a.type;let g;A(this,"pan",{originalEvent:b},function(){d&&d.forEach(function(b){b.setState()});let a=c.xAxis;"xy"===e?a=a.concat(c.yAxis):"y"===e&&(a=c.yAxis);const f={};a.forEach(function(a){if(a.options.panningEnabled&&
!a.options.isInternal){var d=a.horiz,k=b[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var h=c[d],n=a.minPointOffset||0,l=a.reversed&&!c.inverted||!a.reversed&&c.inverted?-1:1,m=a.getExtremes(),q=a.toValue(h-k,!0)+n*l,p=a.toValue(h+a.len-k,!0)-(n*l||a.isXAxis&&a.pointRangePadding||0),r=p<q;l=a.hasVerticalPanning();h=r?p:q;q=r?q:p;var t=a.panningState;!l||a.isXAxis||t&&!t.isDirty||a.series.forEach(function(b){var a=b.getProcessedData(!0);a=b.getExtremes(a.yData,!0);t||(t={startMin:Number.MAX_VALUE,
startMax:-Number.MAX_VALUE});ba(a.dataMin)&&ba(a.dataMax)&&(t.startMin=Math.min(S(b.options.threshold,Infinity),a.dataMin,t.startMin),t.startMax=Math.max(S(b.options.threshold,-Infinity),a.dataMax,t.startMax))});l=Math.min(S(t&&t.startMin,m.dataMin),n?m.min:a.toValue(a.toPixels(m.min)-a.minPixelPadding));p=Math.max(S(t&&t.startMax,m.dataMax),n?m.max:a.toValue(a.toPixels(m.max)+a.minPixelPadding));a.panningState=t;a.isOrdinal||(n=l-h,0<n&&(q+=n,h=l),n=q-p,0<n&&(q=p,h-=n),a.series.length&&h!==m.min&&
q!==m.max&&h>=l&&q<=p&&(a.setExtremes(h,q,!1,!1,{trigger:"pan"}),!c.resetZoomButton&&h!==l&&q!==p&&e.match("y")&&(c.showResetZoom(),a.displayBtn=!1),g=!0),f[d]=k)}});O(f,(b,a)=>{c[a]=b});g&&c.redraw(!1);P(c.container,{cursor:"move"})})}}V(ea.prototype,{callbacks:[],collectionsWithInit:{xAxis:[ea.prototype.addAxis,[!0]],yAxis:[ea.prototype.addAxis,[!1]],series:[ea.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")});"";return ea});M(a,"Extensions/ScrollablePlotArea.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/Axis.js"],a["Core/Chart/Chart.js"],a["Core/Series/Series.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],
function(a,y,I,L,C,z){const {stop:x}=a,{addEvent:B,createElement:u,defined:v,merge:l,pick:p}=z;B(I,"afterSetChartSize",function(a){var m=this.options.chart.scrollablePlotArea,h=m&&m.minWidth;m=m&&m.minHeight;let g;if(!this.renderer.forExport){if(h){if(this.scrollablePixelsX=h=Math.max(0,h-this.chartWidth))this.scrollablePlotBox=this.renderer.scrollablePlotBox=l(this.plotBox),this.plotBox.width=this.plotWidth+=h,this.inverted?this.clipBox.height+=h:this.clipBox.width+=h,g={1:{name:"right",value:h}}}else m&&
(this.scrollablePixelsY=h=Math.max(0,m-this.chartHeight),v(h)&&(this.scrollablePlotBox=this.renderer.scrollablePlotBox=l(this.plotBox),this.plotBox.height=this.plotHeight+=h,this.inverted?this.clipBox.width+=h:this.clipBox.height+=h,g={2:{name:"bottom",value:h}}));g&&!a.skipAxes&&this.axes.forEach(function(a){g[a.side]?a.getPlotLinePath=function(){let e=g[a.side].name,h=this[e],l;this[e]=h-g[a.side].value;l=y.prototype.getPlotLinePath.apply(this,arguments);this[e]=h;return l}:(a.setAxisSize(),a.setAxisTranslation())})}});
B(I,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});I.prototype.setUpScrolling=function(){const a={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(a.overflowX="auto");this.scrollablePixelsY&&(a.overflowY="auto");this.scrollingParent=u("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo);this.scrollingContainer=
u("div",{className:"highcharts-scrolling"},a,this.scrollingParent);let l;B(this.scrollingContainer,"scroll",()=>{this.pointer&&(delete this.pointer.chartPosition,this.hoverPoint&&(l=this.hoverPoint),this.pointer.runPointActions(void 0,l,!0))});this.innerContainer=u("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};I.prototype.moveFixedElements=function(){let a=this.container,l=this.fixedRenderer,h=
".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),g;this.scrollablePixelsX&&!this.inverted?g=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&
!this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(g=".highcharts-yaxis");g&&h.push(`${g}:not(.highcharts-radial-axis)`,`${g}-labels:not(.highcharts-radial-axis-labels)`);h.forEach(function(e){[].forEach.call(a.querySelectorAll(e),function(a){(a.namespaceURI===l.SVG_NS?l.box:l.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})})};I.prototype.applyFixed=function(){var a=!this.fixedDiv,l=this.options.chart,h=l.scrollablePlotArea,g=C.getRendererType();a?(this.fixedDiv=
u("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(l.style&&l.style.zIndex||0)+2,top:0},null,!0),this.scrollingContainer&&this.scrollingContainer.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=l=new g(this.fixedDiv,this.chartWidth,this.chartHeight,this.options.chart.style),this.scrollableMask=l.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":p(h.opacity,
.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),B(this,"afterShowResetZoom",this.moveFixedElements),B(this,"afterApplyDrilldown",this.moveFixedElements),B(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);if(this.scrollableDirty||a)this.scrollableDirty=!1,this.moveFixedElements();l=this.chartWidth+(this.scrollablePixelsX||0);g=this.chartHeight+(this.scrollablePixelsY||0);x(this.container);this.container.style.width=l+"px";
this.container.style.height=g+"px";this.renderer.boxWrapper.attr({width:l,height:g,viewBox:[0,0,l,g].join(" ")});this.chartBackground.attr({width:l,height:g});this.scrollingContainer.style.height=this.chartHeight+"px";a&&(h.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*h.scrollPositionX),h.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*h.scrollPositionY));g=this.axisOffset;a=this.plotTop-g[0]-1;h=this.plotLeft-g[3]-1;l=this.plotTop+this.plotHeight+
g[2]+1;g=this.plotLeft+this.plotWidth+g[1]+1;let e=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),w=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);a=this.scrollablePixelsX?[["M",0,a],["L",this.plotLeft-1,a],["L",this.plotLeft-1,l],["L",0,l],["Z"],["M",e,a],["L",this.chartWidth,a],["L",this.chartWidth,l],["L",e,l],["Z"]]:this.scrollablePixelsY?[["M",h,0],["L",h,this.plotTop-1],["L",g,this.plotTop-1],["L",g,0],["Z"],["M",h,w],["L",h,this.chartHeight],["L",g,this.chartHeight],["L",
g,w],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:a})};B(y,"afterInit",function(){this.chart.scrollableDirty=!0});B(L,"show",function(){this.chart.scrollableDirty=!0});""});M(a,"Core/Axis/Stacking/StackItem.js",[a["Core/Templating.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I){const {format:x}=a,{series:C}=y,{destroyObjectProperties:z,fireEvent:H,isNumber:B,pick:u}=I;class v{constructor(a,p,t,m,h){const g=a.chart.inverted,e=a.reversed;
this.axis=a;a=this.isNegative=!!t!==!!e;this.options=p=p||{};this.x=m;this.cumulative=this.total=null;this.points={};this.hasValidPoints=!1;this.stack=h;this.rightCliff=this.leftCliff=0;this.alignOptions={align:p.align||(g?a?"left":"right":"center"),verticalAlign:p.verticalAlign||(g?"middle":a?"bottom":"top"),y:p.y,x:p.x};this.textAlign=p.textAlign||(g?a?"right":"left":"center")}destroy(){z(this,this.axis)}render(a){const l=this.axis.chart,t=this.options;var m=t.format;m=m?x(m,this,l):t.formatter.call(this);
this.label?this.label.attr({text:m,visibility:"hidden"}):(this.label=l.renderer.label(m,null,void 0,t.shape,void 0,void 0,t.useHTML,!1,"stack-labels"),m={r:t.borderRadius||0,text:m,padding:u(t.padding,5),visibility:"hidden"},l.styledMode||(m.fill=t.backgroundColor,m.stroke=t.borderColor,m["stroke-width"]=t.borderWidth,this.label.css(t.style||{})),this.label.attr(m),this.label.added||this.label.add(a));this.label.labelrank=l.plotSizeY;H(this,"afterRender")}setOffset(a,p,t,m,h,g){const {alignOptions:e,
axis:l,label:v,options:x,textAlign:d}=this,k=l.chart;t=this.getStackBox({xOffset:a,width:p,boxBottom:t,boxTop:m,defaultX:h,xAxis:g});var {verticalAlign:r}=e;if(v&&t){m=v.getBBox();h=v.padding;g="justify"===u(x.overflow,"justify");e.x=x.x||0;e.y=x.y||0;const {x:a,y:p}=this.adjustStackPosition({labelBox:m,verticalAlign:r,textAlign:d});t.x-=a;t.y-=p;v.align(e,!1,t);(r=k.isInsidePlot(v.alignAttr.x+e.x+a,v.alignAttr.y+e.y+p))||(g=!1);g&&C.prototype.justifyDataLabel.call(l,v,e,v.alignAttr,m,t);v.attr({x:v.alignAttr.x,
y:v.alignAttr.y,rotation:x.rotation,rotationOriginX:m.width/2,rotationOriginY:m.height/2});u(!g&&x.crop,!0)&&(r=B(v.x)&&B(v.y)&&k.isInsidePlot(v.x-h+v.width,v.y)&&k.isInsidePlot(v.x+h,v.y));v[r?"show":"hide"]()}H(this,"afterSetOffset",{xOffset:a,width:p})}adjustStackPosition({labelBox:a,verticalAlign:p,textAlign:t}){const l={bottom:0,middle:1,top:2,right:1,center:0,left:-1};return{x:a.width/2+a.width/2*l[t],y:a.height/2*l[p]}}getStackBox(a){var l=this.axis;const t=l.chart,{boxTop:m,defaultX:h,xOffset:g,
width:e,boxBottom:w}=a;var v=l.stacking.usePercentage?100:u(m,this.total,0);v=l.toPixels(v);a=a.xAxis||t.xAxis[0];const x=u(h,a.translate(this.x))+g;l=l.toPixels(w||B(l.min)&&l.logarithmic&&l.logarithmic.lin2log(l.min)||0);l=Math.abs(v-l);const d=this.isNegative;return t.inverted?{x:(d?v:v-l)-t.plotLeft,y:a.height-x-e,width:l,height:e}:{x:x+a.transB-t.plotLeft,y:(d?v-l:v)-t.plotTop,width:e,height:l}}}"";return v});M(a,"Core/Axis/Stacking/StackingAxis.js",[a["Core/Animation/AnimationUtilities.js"],
a["Core/Axis/Axis.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Axis/Stacking/StackItem.js"],a["Core/Utilities.js"]],function(a,y,I,L,C){function x(){const b=this,a=b.inverted;b.yAxis.forEach(b=>{b.stacking&&b.stacking.stacks&&b.hasVisibleSeries&&(b.stacking.oldStacks=b.stacking.stacks)});b.series.forEach(c=>{const d=c.xAxis&&c.xAxis.options||{};!c.options.stacking||!0!==c.visible&&!1!==b.options.chart.ignoreHiddenSeries||(c.stackKey=[c.type,q(c.options.stack,""),a?d.top:d.left,a?d.height:d.width].join())})}
function H(){const b=this.stacking;if(b){var a=b.stacks;r(a,function(b,c){E(b);a[c]=null});b&&b.stackTotalGroup&&b.stackTotalGroup.destroy()}}function B(){"yAxis"!==this.coll||this.stacking||(this.stacking=new G(this))}function u(b,a,d,e){!w(b)||b.x!==a||e&&b.stackKey!==e?b={x:a,index:0,key:e,stackKey:e}:b.index++;b.key=[d,a,b.index].join();return b}function v(){const b=this,a=b.stackKey,d=b.yAxis.stacking.stacks,e=b.processedXData,g=b[b.options.stacking+"Stacker"];let k;g&&[a,"-"+a].forEach(a=>{let c=
e.length;let f;for(;c--;){var h=e[c];k=b.getStackIndicator(k,h,b.index,a);(f=(h=d[a]&&d[a][h])&&h.points[k.key])&&g.call(b,f,h,c)}})}function l(b,a,d){a=a.total?100/a.total:0;b[0]=e(b[0]*a);b[1]=e(b[1]*a);this.stackedYData[d]=b[1]}function p(){const b=this.yAxis.stacking;this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length?h.setStackedPoints.call(this,"group"):b&&r(b.stacks,(a,d)=>{"group"===d.slice(-5)&&(r(a,b=>b.destroy()),
delete b.stacks[d])})}function t(b){var a=this.chart;const f=b||this.options.stacking;if(f&&(!0===this.visible||!1===a.options.chart.ignoreHiddenSeries)){var g=this.processedXData,k=this.processedYData,h=[],l=k.length,m=this.options,p=m.threshold,r=q(m.startFromThreshold&&p,0);m=m.stack;b=b?`${this.type},${f}`:this.stackKey;var t="-"+b,v=this.negStacks;a="group"===f?a.yAxis[0]:this.yAxis;var u=a.stacking.stacks,x=a.stacking.oldStacks,E,G;a.stacking.stacksTouched+=1;for(G=0;G<l;G++){var F=g[G];var B=
k[G];var y=this.getStackIndicator(y,F,this.index);var C=y.key;var z=(E=v&&B<(r?0:p))?t:b;u[z]||(u[z]={});u[z][F]||(x[z]&&x[z][F]?(u[z][F]=x[z][F],u[z][F].total=null):u[z][F]=new L(a,a.options.stackLabels,!!E,F,m));z=u[z][F];null!==B?(z.points[C]=z.points[this.index]=[q(z.cumulative,r)],w(z.cumulative)||(z.base=C),z.touched=a.stacking.stacksTouched,0<y.index&&!1===this.singleStacks&&(z.points[C][0]=z.points[this.index+","+F+",0"][0])):z.points[C]=z.points[this.index]=null;"percent"===f?(E=E?b:t,v&&
u[E]&&u[E][F]?(E=u[E][F],z.total=E.total=Math.max(E.total,z.total)+Math.abs(B)||0):z.total=e(z.total+(Math.abs(B)||0))):"group"===f?(d(B)&&(B=B[0]),null!==B&&(z.total=(z.total||0)+1)):z.total=e(z.total+(B||0));z.cumulative="group"===f?(z.total||1)-1:e(q(z.cumulative,r)+(B||0));null!==B&&(z.points[C].push(z.cumulative),h[G]=z.cumulative,z.hasValidPoints=!0)}"percent"===f&&(a.stacking.usePercentage=!0);"group"!==f&&(this.stackedYData=h);a.stacking.oldStacks={}}}const {getDeferredAnimation:m}=a,{series:{prototype:h}}=
I,{addEvent:g,correctFloat:e,defined:w,destroyObjectProperties:E,fireEvent:F,isArray:d,isNumber:k,objectEach:r,pick:q}=C;class G{constructor(b){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=b}buildStacks(){const b=this.axis,a=b.series,d=b.options.reversedStacks,e=a.length;let g,k;this.usePercentage=!1;for(k=e;k--;)g=a[d?k:e-k-1],g.setStackedPoints(),g.setGroupedPoints();for(k=0;k<e;k++)a[k].modifyStacks();F(b,"afterBuildStacks")}cleanStacks(){let b;this.oldStacks&&(b=this.stacks=
this.oldStacks);r(b,function(b){r(b,function(b){b.cumulative=b.total})})}resetStacks(){r(this.stacks,b=>{r(b,(a,d)=>{k(a.touched)&&a.touched<this.stacksTouched?(a.destroy(),delete b[d]):(a.total=null,a.cumulative=null)})})}renderStackTotals(){var b=this.axis;const a=b.chart,d=a.renderer,e=this.stacks;b=m(a,b.options.stackLabels&&b.options.stackLabels.animation||!1);const g=this.stackTotalGroup=this.stackTotalGroup||d.g("stack-labels").attr({zIndex:6,opacity:0}).add();g.translate(a.plotLeft,a.plotTop);
r(e,function(b){r(b,function(b){b.render(g)})});g.animate({opacity:1},b)}}var b;(function(b){const a=[];b.compose=function(b,c,d){C.pushUnique(a,b)&&(g(b,"init",B),g(b,"destroy",H));C.pushUnique(a,c)&&(c.prototype.getStacks=x);C.pushUnique(a,d)&&(b=d.prototype,b.getStackIndicator=u,b.modifyStacks=v,b.percentStacker=l,b.setGroupedPoints=p,b.setStackedPoints=t)}})(b||(b={}));return b});M(a,"Series/Line/LineSeries.js",[a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,y,I){const {defined:x,merge:C}=I;class z extends a{constructor(){super(...arguments);this.points=this.options=this.data=void 0}drawGraph(){const a=this,x=this.options,u=(this.gappedPath||this.getGraphPath).call(this),v=this.chart.styledMode;let l=[["graph","highcharts-graph"]];v||l[0].push(x.lineColor||this.color||"#cccccc",x.dashStyle);l=a.getZonesGraphs(l);l.forEach(function(l,t){var m=l[0];let h=a[m];const g=h?"animate":"attr";h?(h.endX=a.preventGraphAnimation?null:u.xMap,h.animate({d:u})):
u.length&&(a[m]=h=a.chart.renderer.path(u).addClass(l[1]).attr({zIndex:1}).add(a.group));h&&!v&&(m={stroke:l[2],"stroke-width":x.lineWidth||0,fill:a.fillGraph&&a.color||"none"},l[3]?m.dashstyle=l[3]:"square"!==x.linecap&&(m["stroke-linecap"]=m["stroke-linejoin"]="round"),h[g](m).shadow(2>t&&x.shadow));h&&(h.startX=u.xMap,h.isArea=u.isArea)})}getGraphPath(a,B,u){const v=this,l=v.options,p=[],t=[];let m,h=l.step;a=a||v.points;const g=a.reversed;g&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&g&&(h=
4-h);a=this.getValidPoints(a,!1,!(l.connectNulls&&!B&&!u));a.forEach(function(e,g){const w=e.plotX,F=e.plotY,d=a[g-1],k=e.isNull||"number"!==typeof F;(e.leftCliff||d&&d.rightCliff)&&!u&&(m=!0);k&&!x(B)&&0<g?m=!l.connectNulls:k&&!B?m=!0:(0===g||m?g=[["M",e.plotX,e.plotY]]:v.getPointSpline?g=[v.getPointSpline(a,e,g)]:h?(g=1===h?[["L",d.plotX,F]]:2===h?[["L",(d.plotX+w)/2,d.plotY],["L",(d.plotX+w)/2,F]]:[["L",w,d.plotY]],g.push(["L",w,F])):g=[["L",w,F]],t.push(e.x),h&&(t.push(e.x),2===h&&t.push(e.x)),
p.push.apply(p,g),m=!1)});p.xMap=t;return v.graphPath=p}getZonesGraphs(a){this.zones.forEach(function(x,u){u=["zone-graph-"+u,"highcharts-graph highcharts-zone-graph-"+u+" "+(x.className||"")];this.chart.styledMode||u.push(x.color||this.color,x.dashStyle||this.options.dashStyle);a.push(u)},this);return a}}z.defaultOptions=C(a.defaultOptions,{legendSymbol:"lineMarker"});y.registerSeriesType("line",z);"";return z});M(a,"Series/Area/AreaSeries.js",[a["Core/Color/Color.js"],a["Core/Series/SeriesRegistry.js"],
a["Core/Utilities.js"]],function(a,y,I){const {seriesTypes:{line:x}}=y,{extend:C,merge:z,objectEach:H,pick:B}=I;class u extends x{constructor(){super(...arguments);this.points=this.options=this.data=void 0}drawGraph(){this.areaPath=[];super.drawGraph.apply(this);const a=this,l=this.areaPath,p=this.options,t=[["area","highcharts-area",this.color,p.fillColor]];this.zones.forEach(function(l,h){t.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+l.className,l.color||a.color,l.fillColor||
p.fillColor])});t.forEach(function(m){const h=m[0],g={};let e=a[h];const t=e?"animate":"attr";e?(e.endX=a.preventGraphAnimation?null:l.xMap,e.animate({d:l})):(g.zIndex=0,e=a[h]=a.chart.renderer.path(l).addClass(m[1]).add(a.group),e.isArea=!0);a.chart.styledMode||(m[3]?g.fill=m[3]:(g.fill=m[2],g["fill-opacity"]=B(p.fillOpacity,.75)));e[t](g);e.startX=l.xMap;e.shiftUnit=p.step?2:1})}getGraphPath(a){var l=x.prototype.getGraphPath,p=this.options;const t=p.stacking,m=this.yAxis,h=[],g=[],e=this.index,
w=m.stacking.stacks[this.stackKey],v=p.threshold,u=Math.round(m.getThreshold(p.threshold));p=B(p.connectNulls,"percent"===t);var d=function(d,b,f){var c=a[d];d=t&&w[c.x].points[e];const n=c[f+"Null"]||0;f=c[f+"Cliff"]||0;let l,q;c=!0;f||n?(l=(n?d[0]:d[1])+f,q=d[0]+f,c=!!n):!t&&a[b]&&a[b].isNull&&(l=q=v);"undefined"!==typeof l&&(g.push({plotX:k,plotY:null===l?u:m.getThreshold(l),isNull:c,isCliff:!0}),h.push({plotX:k,plotY:null===q?u:m.getThreshold(q),doCurve:!1}))};let k;a=a||this.points;t&&(a=this.getStackPoints(a));
for(let e=0,b=a.length;e<b;++e){t||(a[e].leftCliff=a[e].rightCliff=a[e].leftNull=a[e].rightNull=void 0);var r=a[e].isNull;k=B(a[e].rectPlotX,a[e].plotX);var q=t?B(a[e].yBottom,u):u;if(!r||p)p||d(e,e-1,"left"),r&&!t&&p||(g.push(a[e]),h.push({x:e,plotX:k,plotY:q})),p||d(e,e+1,"right")}d=l.call(this,g,!0,!0);h.reversed=!0;r=l.call(this,h,!0,!0);(q=r[0])&&"M"===q[0]&&(r[0]=["L",q[1],q[2]]);r=d.concat(r);r.length&&r.push(["Z"]);l=l.call(this,g,!1,p);r.xMap=d.xMap;this.areaPath=r;return l}getStackPoints(a){const l=
this,p=[],t=[],m=this.xAxis,h=this.yAxis,g=h.stacking.stacks[this.stackKey],e={},w=h.series,v=w.length,u=h.options.reversedStacks?1:-1,d=w.indexOf(l);a=a||this.points;if(this.options.stacking){for(let d=0;d<a.length;d++)a[d].leftNull=a[d].rightNull=void 0,e[a[d].x]=a[d];H(g,function(a,d){null!==a.total&&t.push(d)});t.sort(function(a,d){return a-d});const k=w.map(a=>a.visible);t.forEach(function(a,q){let r=0,b,f;if(e[a]&&!e[a].isNull)p.push(e[a]),[-1,1].forEach(function(c){const h=1===c?"rightNull":
"leftNull",m=g[t[q+c]];let p=0;if(m){let c=d;for(;0<=c&&c<v;){const d=w[c].index;b=m.points[d];b||(d===l.index?e[a][h]=!0:k[c]&&(f=g[a].points[d])&&(p-=f[1]-f[0]));c+=u}}e[a][1===c?"rightCliff":"leftCliff"]=p});else{let c=d;for(;0<=c&&c<v;){if(b=g[a].points[w[c].index]){r=b[1];break}c+=u}r=B(r,0);r=h.translate(r,0,1,0,1);p.push({isNull:!0,plotX:m.translate(a,0,0,0,1),x:a,plotY:r,yBottom:r})}})}return p}}u.defaultOptions=z(x.defaultOptions,{threshold:0,legendSymbol:"rectangle"});C(u.prototype,{singleStacks:!1});
y.registerSeriesType("area",u);"";return u});M(a,"Series/Spline/SplineSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y){const {line:x}=a.seriesTypes,{merge:L,pick:C}=y;class z extends x{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getPointSpline(a,x,u){const v=x.plotX||0,l=x.plotY||0,p=a[u-1];u=a[u+1];let t,m;let h;if(p&&!p.isNull&&!1!==p.doCurve&&!x.isCliff&&u&&!u.isNull&&!1!==u.doCurve&&!x.isCliff){a=p.plotY||0;var g=u.plotX||0;u=
u.plotY||0;let e=0;t=(1.5*v+(p.plotX||0))/2.5;m=(1.5*l+a)/2.5;g=(1.5*v+g)/2.5;h=(1.5*l+u)/2.5;g!==t&&(e=(h-m)*(g-v)/(g-t)+l-h);m+=e;h+=e;m>a&&m>l?(m=Math.max(a,l),h=2*l-m):m<a&&m<l&&(m=Math.min(a,l),h=2*l-m);h>u&&h>l?(h=Math.max(u,l),m=2*l-h):h<u&&h<l&&(h=Math.min(u,l),m=2*l-h);x.rightContX=g;x.rightContY=h}x=["C",C(p.rightContX,p.plotX,0),C(p.rightContY,p.plotY,0),C(t,v,0),C(m,l,0),v,l];p.rightContX=p.rightContY=void 0;return x}}z.defaultOptions=L(x.defaultOptions);a.registerSeriesType("spline",
z);"";return z});M(a,"Series/AreaSpline/AreaSplineSeries.js",[a["Series/Spline/SplineSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I){const {area:x,area:{prototype:C}}=y.seriesTypes,{extend:z,merge:H}=I;class B extends a{constructor(){super(...arguments);this.options=this.points=this.data=void 0}}B.defaultOptions=H(a.defaultOptions,x.defaultOptions);z(B.prototype,{getGraphPath:C.getGraphPath,getStackPoints:C.getStackPoints,drawGraph:C.drawGraph});y.registerSeriesType("areaspline",
B);"";return B});M(a,"Series/Column/ColumnSeriesDefaults.js",[],function(){"";return{borderRadius:3,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"}});M(a,"Series/Column/ColumnSeries.js",[a["Core/Animation/AnimationUtilities.js"],
a["Core/Color/Color.js"],a["Series/Column/ColumnSeriesDefaults.js"],a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z,H){const {animObject:x}=a,{parse:u}=y,{hasTouch:v,noop:l}=L,{clamp:p,defined:t,extend:m,fireEvent:h,isArray:g,isNumber:e,merge:w,pick:E,objectEach:F}=H;class d extends C{constructor(){super(...arguments);this.points=this.options=this.group=this.data=this.borderWidth=void 0}animate(a){const d=this,e=this.yAxis,
g=e.pos,b=d.options,f=this.chart.inverted,c={},k=f?"translateX":"translateY";let h;a?(c.scaleY=.001,a=p(e.toPixels(b.threshold),g,g+e.len),f?c.translateX=a-e.len:c.translateY=a,d.clipBox&&d.setClip(),d.group.attr(c)):(h=Number(d.group.attr(k)),d.group.animate({scaleY:1},m(x(d.options.animation),{step:function(b,a){d.group&&(c[k]=h+a.pos*(g-h),d.group.attr(c))}})))}init(a,d){super.init.apply(this,arguments);const e=this;a=e.chart;a.hasRendered&&a.series.forEach(function(a){a.type===e.type&&(a.isDirty=
!0)})}getColumnMetrics(){const a=this;var d=a.options;const e=a.xAxis,g=a.yAxis;var b=e.options.reversedStacks;b=e.reversed&&!b||!e.reversed&&b;const f={};let c,h=0;!1===d.grouping?h=1:a.chart.series.forEach(function(b){const d=b.yAxis,e=b.options;let k;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||g.len!==d.len||g.pos!==d.pos||(e.stacking&&"group"!==e.stacking?(c=b.stackKey,"undefined"===typeof f[c]&&(f[c]=h++),k=f[c]):!1!==e.grouping&&(k=h++),b.columnIndex=k)});const l=
Math.min(Math.abs(e.transA)*(e.ordinal&&e.ordinal.slope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),m=l*d.groupPadding,p=(l-2*m)/(h||1);d=Math.min(d.maxPointWidth||e.len,E(d.pointWidth,p*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(p-d)/2+(m+((a.columnIndex||0)+(b?1:0))*p-l/2)*(b?-1:1),paddedWidth:p,columnCount:h};return a.columnMetrics}crispCol(a,d,e,g){var b=this.borderWidth,f=-(b%2?.5:0);b=b%2?.5:1;this.options.crisp&&(e=Math.round(a+e)+f,a=Math.round(a)+f,e-=a);g=
Math.round(d+g)+b;f=.5>=Math.abs(d)&&.5<g;d=Math.round(d)+b;g-=d;f&&g&&(--d,g+=1);return{x:a,y:d,width:e,height:g}}adjustForMissingColumns(a,d,e,h){const b=this.options.stacking;if(!e.isNull&&1<h.columnCount){const f=this.yAxis.options.reversedStacks;let c=0,k=f?0:-h.columnCount;F(this.yAxis.stacking&&this.yAxis.stacking.stacks,a=>{if("number"===typeof e.x){const d=a[e.x.toString()];d&&(a=d.points[this.index],b?(a&&(c=k),d.hasValidPoints&&(f?k++:k--)):g(a)&&(a=Object.keys(d.points).filter(b=>!b.match(",")&&
d.points[b]&&1<d.points[b].length).map(parseFloat).sort((b,a)=>a-b),c=a.indexOf(this.index),k=a.length))}});a=(e.plotX||0)+((k-1)*h.paddedWidth+d)/2-d-c*h.paddedWidth}return a}translate(){const a=this,d=a.chart,g=a.options;var l=a.dense=2>a.closestPointRange*a.xAxis.transA;l=a.borderWidth=E(g.borderWidth,l?0:1);const b=a.xAxis,f=a.yAxis,c=g.threshold,n=E(g.minPointLength,5),m=a.getColumnMetrics(),w=m.width,v=a.pointXOffset=m.offset,u=a.dataMin,x=a.dataMax;let F=a.barW=Math.max(w,1+2*l),y=a.translatedThreshold=
f.getThreshold(c);d.inverted&&(y-=.5);g.pointPadding&&(F=Math.ceil(F));C.prototype.translate.apply(a);a.points.forEach(function(k){const h=E(k.yBottom,y);var l=999+Math.abs(h),q=k.plotX||0;l=p(k.plotY,-l,f.len+l);let r=Math.min(l,h),D=Math.max(l,h)-r,z=w,B=q+v,G=F;n&&Math.abs(D)<n&&(D=n,q=!f.reversed&&!k.negative||f.reversed&&k.negative,e(c)&&e(x)&&k.y===c&&x<=c&&(f.min||0)<c&&(u!==x||(f.max||0)<=c)&&(q=!q,k.negative=!k.negative),r=Math.abs(r-y)>n?h-n:y-(q?n:0));t(k.options.pointWidth)&&(z=G=Math.ceil(k.options.pointWidth),
B-=Math.round((z-w)/2));g.centerInCategory&&(B=a.adjustForMissingColumns(B,z,k,m));k.barX=B;k.pointWidth=z;k.tooltipPos=d.inverted?[p(f.len+f.pos-d.plotLeft-l,f.pos-d.plotLeft,f.len+f.pos-d.plotLeft),b.len+b.pos-d.plotTop-B-G/2,D]:[b.left-d.plotLeft+B+G/2,p(l+f.pos-d.plotTop,f.pos-d.plotTop,f.len+f.pos-d.plotTop),D];k.shapeType=a.pointClass.prototype.shapeType||"roundedRect";k.shapeArgs=a.crispCol(B,k.isNull?y:r,G,k.isNull?0:D)});h(this,"afterColumnTranslate")}drawGraph(){this.group[this.dense?"addClass":
"removeClass"]("highcharts-dense-data")}pointAttribs(a,d){const e=this.options;var g=this.pointAttrToOptions||{},b=g.stroke||"borderColor";const f=g["stroke-width"]||"borderWidth";let c,k=a&&a.color||this.color,h=a&&a[b]||e[b]||k;g=a&&a.options.dashStyle||e.dashStyle;let l=a&&a[f]||e[f]||this[f]||0,m=E(a&&a.opacity,e.opacity,1);a&&this.zones.length&&(c=a.getZone(),k=a.options.color||c&&(c.color||a.nonZonedColor)||this.color,c&&(h=c.borderColor||h,g=c.dashStyle||g,l=c.borderWidth||l));d&&a&&(a=w(e.states[d],
a.options.states&&a.options.states[d]||{}),d=a.brightness,k=a.color||"undefined"!==typeof d&&u(k).brighten(a.brightness).get()||k,h=a[b]||h,l=a[f]||l,g=a.dashStyle||g,m=E(a.opacity,m));b={fill:k,stroke:h,"stroke-width":l,opacity:m};g&&(b.dashstyle=g);return b}drawPoints(a=this.points){const d=this,g=this.chart,k=d.options,b=g.renderer,f=k.animationLimit||250;let c;a.forEach(function(a){let h=a.graphic,l=!!h,n=h&&g.pointCount<f?"animate":"attr";if(e(a.plotY)&&null!==a.y){c=a.shapeArgs;h&&a.hasNewShapeType()&&
(h=h.destroy());d.enabledDataSorting&&(a.startXPos=d.xAxis.reversed?-(c?c.width||0:0):d.xAxis.width);h||(a.graphic=h=b[a.shapeType](c).add(a.group||d.group))&&d.enabledDataSorting&&g.hasRendered&&g.pointCount<f&&(h.attr({x:a.startXPos}),l=!0,n="animate");if(h&&l)h[n](w(c));g.styledMode||h[n](d.pointAttribs(a,a.selected&&"select")).shadow(!1!==a.allowShadow&&k.shadow);h&&(h.addClass(a.getClassName(),!0),h.attr({visibility:a.visible?"inherit":"hidden"}))}else h&&(a.graphic=h.destroy())})}drawTracker(a=
this.points){const d=this,e=d.chart,k=e.pointer,b=function(a){const b=k.getPointFromEvent(a);"undefined"!==typeof b&&d.options.enableMouseTracking&&(k.isDirectTouch=!0,b.onMouseOver(a))};let f;a.forEach(function(a){f=g(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);f.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});d._hasTracking||(d.trackerGroups.forEach(function(a){if(d[a]){d[a].addClass("highcharts-tracker").on("mouseover",b).on("mouseout",
function(a){k.onTrackerMouseOut(a)});if(v)d[a].on("touchstart",b);!e.styledMode&&d.options.cursor&&d[a].css({cursor:d.options.cursor})}}),d._hasTracking=!0);h(this,"afterDrawTracker")}remove(){const a=this,d=a.chart;d.hasRendered&&d.series.forEach(function(d){d.type===a.type&&(d.isDirty=!0)});C.prototype.remove.apply(a,arguments)}}d.defaultOptions=w(C.defaultOptions,I);m(d.prototype,{cropShoulder:0,directTouch:!0,getSymbol:l,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]});z.registerSeriesType("column",
d);"";return d});M(a,"Core/Series/DataLabel.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Templating.js"],a["Core/Utilities.js"]],function(a,y,I){const {getDeferredAnimation:x}=a,{format:C}=y,{defined:z,extend:H,fireEvent:B,isArray:u,isString:v,merge:l,objectEach:p,pick:t,splat:m}=I;var h;(function(a){function e(a,d,c,e,g){const b=this.chart;var f=this.isCartesian&&b.inverted;const k=this.enabledDataSorting;var h=a.plotX,l=a.plotY;const n=c.rotation;var m=c.align;l=z(h)&&z(l)&&b.isInsidePlot(h,
Math.round(l),{inverted:f,paneCoordinates:!0,series:this});let p="justify"===t(c.overflow,k?"none":"justify");f=this.visible&&!1!==a.visible&&z(h)&&(a.series.forceDL||k&&!p||l||t(c.inside,!!this.options.stacking)&&e&&b.isInsidePlot(h,f?e.x+1:e.y+e.height-1,{inverted:f,paneCoordinates:!0,series:this}));h=a.pos();if(f&&h){n&&d.attr({align:m});m=d.getBBox(!0);var q=[0,0];var r=b.renderer.fontMetrics(d).b;e=H({x:h[0],y:Math.round(h[1]),width:0,height:0},e);H(c,{width:m.width,height:m.height});n?(p=!1,
q=b.renderer.rotCorr(r,n),r={x:e.x+(c.x||0)+e.width/2+q.x,y:e.y+(c.y||0)+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},q=[m.x-Number(d.attr("x")),m.y-Number(d.attr("y"))],k&&this.xAxis&&!p&&this.setDataLabelStartPos(a,d,g,l,r),d[g?"attr":"animate"](r)):(k&&this.xAxis&&!p&&this.setDataLabelStartPos(a,d,g,l,e),d.align(c,void 0,e),r=d.alignAttr);if(p&&0<=e.height)this.justifyDataLabel(d,c,r,m,e,g);else if(t(c.crop,!0)){let {x:a,y:c}=r;a+=q[0];c+=q[1];f=b.isInsidePlot(a,c,{paneCoordinates:!0,
series:this})&&b.isInsidePlot(a+m.width,c+m.height,{paneCoordinates:!0,series:this})}if(c.shape&&!n)d[g?"attr":"animate"]({anchorX:h[0],anchorY:h[1]})}g&&k&&(d.placed=!1);f||k&&!p?d.show():(d.hide(),d.placed=!1)}function g(a,d){var b=d.filter;return b?(d=b.operator,a=a[b.property],b=b.value,">"===d&&a>b||"<"===d&&a<b||">="===d&&a>=b||"<="===d&&a<=b||"=="===d&&a==b||"==="===d&&a===b?!0:!1):!0}function h(){return this.plotGroup("dataLabelsGroup","data-labels",this.hasRendered?"inherit":"hidden",this.options.dataLabels.zIndex||
6)}function F(a){const b=this.hasRendered||0,c=this.initDataLabelsGroup().attr({opacity:+b});!b&&c&&(this.visible&&c.show(),this.options.animation?c.animate({opacity:1},a):c.attr({opacity:1}));return c}function d(a=this.points){var b,c;const d=this,e=d.chart,k=d.options,h=e.renderer,{backgroundColor:l,plotBackgroundColor:q}=e.options.chart,w=e.options.plotOptions,E=h.getContrast(v(q)&&q||v(l)&&l||"#000000");let F=k.dataLabels,A,y;var G=m(F)[0];const H=G.animation;G=G.defer?x(e,H,d):{defer:0,duration:0};
F=r(r(null===(b=null===w||void 0===w?void 0:w.series)||void 0===b?void 0:b.dataLabels,null===(c=null===w||void 0===w?void 0:w[d.type])||void 0===c?void 0:c.dataLabels),F);B(this,"drawDataLabels");if(u(F)||F.enabled||d._hasPointLabels)y=this.initDataLabels(G),a.forEach(a=>{var b;const c=a.dataLabels||[];A=m(r(F,a.dlOptions||(null===(b=a.options)||void 0===b?void 0:b.dataLabels)));A.forEach((b,f)=>{var l,m=b.enabled&&(!a.isNull||a.dataLabelOnNull)&&g(a,b);const n=a.connectors?a.connectors[f]:a.connector,
q=b.style||{};let r={},w=c[f],u=!w;const x=t(b.distance,a.labelDistance);if(m){var A=t(b[a.formatPrefix+"Format"],b.format);var F=a.getLabelConfig();F=z(A)?C(A,F,e):(b[a.formatPrefix+"Formatter"]||b.formatter).call(F,b);A=b.rotation;e.styledMode||(q.color=t(b.color,q.color,v(d.color)?d.color:void 0,"#000000"),"contrast"===q.color?(a.contrastColor=h.getContrast(a.color||d.color),q.color=!z(x)&&b.inside||0>(x||0)||k.stacking?a.contrastColor:E):delete a.contrastColor,k.cursor&&(q.cursor=k.cursor));r=
{r:b.borderRadius||0,rotation:A,padding:b.padding,zIndex:1};if(!e.styledMode){const {backgroundColor:c,borderColor:d}=b;r.fill="auto"===c?a.color:c;r.stroke="auto"===d?a.color:d;r["stroke-width"]=b.borderWidth}p(r,(a,b)=>{"undefined"===typeof a&&delete r[b]})}!w||m&&z(F)&&!!w.div===!!b.useHTML&&(w.rotation&&b.rotation||w.rotation===b.rotation)||(w=void 0,u=!0,n&&a.connector&&(a.connector=a.connector.destroy(),a.connectors&&(1===a.connectors.length?delete a.connectors:delete a.connectors[f])));m&&
z(F)&&(w?r.text=F:(w=A?h.text(F,0,0,b.useHTML).addClass("highcharts-data-label"):h.label(F,0,0,b.shape,void 0,void 0,b.useHTML,void 0,"data-label"))&&w.addClass(" highcharts-data-label-color-"+a.colorIndex+" "+(b.className||"")+(b.useHTML?" highcharts-tracker":"")),w&&(w.options=b,w.attr(r),e.styledMode||w.css(q).shadow(b.shadow),(m=b[a.formatPrefix+"TextPath"]||b.textPath)&&!b.useHTML&&(w.setTextPath((null===(l=a.getDataLabelPath)||void 0===l?void 0:l.call(a,w))||a.graphic,m),a.dataLabelPath&&!m.enabled&&
(a.dataLabelPath=a.dataLabelPath.destroy())),w.added||w.add(y),d.alignDataLabel(a,w,b,void 0,u),w.isActive=!0,c[f]&&c[f]!==w&&c[f].destroy(),c[f]=w))});for(b=c.length;b--;)c[b].isActive?c[b].isActive=!1:(c[b].destroy(),c.splice(b,1));a.dataLabel=c[0];a.dataLabels=c});B(this,"afterDrawDataLabels")}function k(a,d,c,e,g,k){const b=this.chart,f=d.align,h=d.verticalAlign,l=a.box?0:a.padding||0;let {x:m=0,y:n=0}=d,p,q;p=(c.x||0)+l;0>p&&("right"===f&&0<=m?(d.align="left",d.inside=!0):m-=p,q=!0);p=(c.x||
0)+e.width-l;p>b.plotWidth&&("left"===f&&0>=m?(d.align="right",d.inside=!0):m+=b.plotWidth-p,q=!0);p=c.y+l;0>p&&("bottom"===h&&0<=n?(d.verticalAlign="top",d.inside=!0):n-=p,q=!0);p=(c.y||0)+e.height-l;p>b.plotHeight&&("top"===h&&0>=n?(d.verticalAlign="bottom",d.inside=!0):n+=b.plotHeight-p,q=!0);q&&(d.x=m,d.y=n,a.placed=!k,a.align(d,void 0,g));return q}function r(a,d){let b=[],f;if(u(a)&&!u(d))b=a.map(function(a){return l(a,d)});else if(u(d)&&!u(a))b=d.map(function(b){return l(a,b)});else if(!u(a)&&
!u(d))b=l(a,d);else if(u(a)&&u(d))for(f=Math.max(a.length,d.length);f--;)b[f]=l(a[f],d[f]);return b}function q(a,d,c,e,g){const b=this.chart,f=b.inverted,k=this.xAxis,h=k.reversed,l=f?d.height/2:d.width/2;a=(a=a.pointWidth)?a/2:0;d.startXPos=f?g.x:h?-l-a:k.width-l+a;d.startYPos=f?h?this.yAxis.height-l+a:-l-a:g.y;e?"hidden"===d.visibility&&(d.show(),d.attr({opacity:0}).animate({opacity:1})):d.attr({opacity:1}).animate({opacity:0},void 0,d.hide);b.hasRendered&&(c&&d.attr({x:d.startXPos,y:d.startYPos}),
d.placed=!0)}const y=[];a.compose=function(a){I.pushUnique(y,a)&&(a=a.prototype,a.initDataLabelsGroup=h,a.initDataLabels=F,a.alignDataLabel=e,a.drawDataLabels=d,a.justifyDataLabel=k,a.setDataLabelStartPos=q)}})(h||(h={}));"";return h});M(a,"Series/Column/ColumnDataLabel.js",[a["Core/Series/DataLabel.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I){const {series:x}=y,{merge:C,pick:z}=I;var H;(function(y){function u(a,p,t,m,h){let g=this.chart.inverted;var e=a.series;
let l=(e.xAxis?e.xAxis.len:this.chart.plotSizeX)||0;e=(e.yAxis?e.yAxis.len:this.chart.plotSizeY)||0;var v=a.dlBox||a.shapeArgs;let u=z(a.below,a.plotY>z(this.translatedThreshold,e)),d=z(t.inside,!!this.options.stacking);v&&(m=C(v),0>m.y&&(m.height+=m.y,m.y=0),v=m.y+m.height-e,0<v&&v<m.height&&(m.height-=v),g&&(m={x:e-m.y-m.height,y:l-m.x-m.width,width:m.height,height:m.width}),d||(g?(m.x+=u?0:m.width,m.width=0):(m.y+=u?m.height:0,m.height=0)));t.align=z(t.align,!g||d?"center":u?"right":"left");t.verticalAlign=
z(t.verticalAlign,g||d?"middle":u?"top":"bottom");x.prototype.alignDataLabel.call(this,a,p,t,m,h);t.inside&&a.contrastColor&&p.css({color:a.contrastColor})}const v=[];y.compose=function(l){a.compose(x);I.pushUnique(v,l)&&(l.prototype.alignDataLabel=u)}})(H||(H={}));return H});M(a,"Series/Bar/BarSeries.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I){const {extend:x,merge:C}=I;class z extends a{constructor(){super(...arguments);this.points=
this.options=this.data=void 0}}z.defaultOptions=C(a.defaultOptions,{});x(z.prototype,{inverted:!0});y.registerSeriesType("bar",z);"";return z});M(a,"Series/Scatter/ScatterSeriesDefaults.js",[],function(){"";return{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}}});M(a,"Series/Scatter/ScatterSeries.js",
[a["Series/Scatter/ScatterSeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I){const {column:x,line:C}=y.seriesTypes,{addEvent:z,extend:H,merge:B}=I;class u extends C{constructor(){super(...arguments);this.points=this.options=this.data=void 0}applyJitter(){const a=this,l=this.options.jitter,p=this.points.length;l&&this.points.forEach(function(t,m){["x","y"].forEach(function(h,g){let e="plot"+h.toUpperCase(),w,v;if(l[h]&&!t.isNull){var u=a[h+"Axis"];v=l[h]*
u.transA;u&&!u.isLog&&(w=Math.max(0,t[e]-v),u=Math.min(u.len,t[e]+v),g=1E4*Math.sin(m+g*p),g-=Math.floor(g),t[e]=w+(u-w)*g,"x"===h&&(t.clientX=t.plotX))}})})}drawGraph(){this.options.lineWidth?super.drawGraph():this.graph&&(this.graph=this.graph.destroy())}}u.defaultOptions=B(C.defaultOptions,a);H(u.prototype,{drawTracker:x.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1});z(u,"afterTranslate",function(){this.applyJitter()});
y.registerSeriesType("scatter",u);return u});M(a,"Series/CenteredUtilities.js",[a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,y,I){const {deg2rad:x}=a,{fireEvent:C,isNumber:z,pick:H,relativeLength:B}=I;var u;(function(a){a.getCenter=function(){var a=this.options,p=this.chart;const t=2*(a.slicedOffset||0),m=p.plotWidth-2*t,h=p.plotHeight-2*t;var g=a.center;const e=Math.min(m,h),w=a.thickness;var v=a.size;let u=a.innerSize||0;"string"===typeof v&&(v=parseFloat(v));
"string"===typeof u&&(u=parseFloat(u));a=[H(g[0],"50%"),H(g[1],"50%"),H(v&&0>v?void 0:a.size,"100%"),H(u&&0>u?void 0:a.innerSize||0,"0%")];!p.angular||this instanceof y||(a[3]=0);for(g=0;4>g;++g)v=a[g],p=2>g||2===g&&/%$/.test(v),a[g]=B(v,[m,h,e,a[2]][g])+(p?t:0);a[3]>a[2]&&(a[3]=a[2]);z(w)&&2*w<a[2]&&0<w&&(a[3]=a[2]-2*w);C(this,"afterGetCenter",{positions:a});return a};a.getStartAndEndRadians=function(a,p){a=z(a)?a:0;p=z(p)&&p>a&&360>p-a?p:a+360;return{start:x*(a+-90),end:x*(p+-90)}}})(u||(u={}));
"";return u});M(a,"Series/Pie/PiePoint.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,y,I){const {setAnimation:x}=a,{addEvent:C,defined:z,extend:H,isNumber:B,pick:u,relativeLength:v}=I;class l extends y{constructor(){super(...arguments);this.series=this.options=this.labelDistance=void 0}getConnectorPath(){const a=this.labelPosition,l=this.series.options.dataLabels,m=this.connectorShapes;let h=l.connectorShape;m[h]&&(h=m[h]);return h.call(this,
{x:a.computed.x,y:a.computed.y,alignment:a.alignment},a.connectorPosition,l)}getTranslate(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}}haloPath(a){const l=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(l.x,l.y,l.r+a,l.r+a,{innerR:l.r-1,start:l.start,end:l.end,borderRadius:l.borderRadius})}init(){super.init.apply(this,arguments);this.name=u(this.name,"Slice");const a=a=>{this.slice("select"===a.type)};C(this,"select",a);C(this,
"unselect",a);return this}isValid(){return B(this.y)&&0<=this.y}setVisible(a,l){const m=this.series,h=m.chart,g=m.options.ignoreHiddenPoint;l=u(l,g);a!==this.visible&&(this.visible=this.options.visible=a="undefined"===typeof a?!this.visible:a,m.options.data[m.data.indexOf(this)]=this.options,["graphic","dataLabel","connector"].forEach(e=>{if(this[e])this[e][a?"show":"hide"](a)}),this.legendItem&&h.legend.colorizeItem(this,a),a||"hover"!==this.state||this.setState(""),g&&(m.isDirty=!0),l&&h.redraw())}slice(a,
l,m){const h=this.series;x(m,h.chart);u(l,!0);this.sliced=this.options.sliced=z(a)?a:!this.sliced;h.options.data[h.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate())}}H(l.prototype,{connectorShapes:{fixedOffset:function(a,l,m){const h=l.breakAt;l=l.touchingSliceAt;return[["M",a.x,a.y],m.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*h.x-l.x,2*h.y-l.y,h.x,h.y]:["L",h.x,h.y],["L",l.x,l.y]]},straight:function(a,l){l=l.touchingSliceAt;return[["M",a.x,a.y],
["L",l.x,l.y]]},crookedLine:function(a,l,m){const {breakAt:h,touchingSliceAt:g}=l;({series:l}=this);const [e,p,t]=l.center,u=t/2,d=l.chart.plotWidth,k=l.chart.plotLeft;l="left"===a.alignment;const {x:r,y:q}=a;m.crookDistance?(a=v(m.crookDistance,1),a=l?e+u+(d+k-e-u)*(1-a):k+(e-u)*a):a=e+(p-q)*Math.tan((this.angle||0)-Math.PI/2);m=[["M",r,q]];(l?a<=r&&a>=h.x:a>=r&&a<=h.x)&&m.push(["L",a,q]);m.push(["L",h.x,h.y],["L",g.x,g.y]);return m}}});return l});M(a,"Series/Pie/PieSeriesDefaults.js",[],function(){"";
return{borderRadius:3,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"crookedLine",crookDistance:void 0,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,
states:{hover:{brightness:.1}}}});M(a,"Series/Pie/PieSeries.js",[a["Series/CenteredUtilities.js"],a["Series/Column/ColumnSeries.js"],a["Core/Globals.js"],a["Series/Pie/PiePoint.js"],a["Series/Pie/PieSeriesDefaults.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/Symbols.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z,H,B,u){const {getStartAndEndRadians:v}=a;({noop:I}=I);const {clamp:l,extend:p,fireEvent:t,merge:m,pick:h,relativeLength:g}=u;class e extends z{constructor(){super(...arguments);
this.points=this.options=this.maxLabelDistance=this.data=this.center=void 0}animate(a){const e=this,g=e.points,d=e.startAngleRad;a||g.forEach(function(a){const g=a.graphic,k=a.shapeArgs;g&&k&&(g.attr({r:h(a.startR,e.center&&e.center[3]/2),start:d,end:d}),g.animate({r:k.r,start:k.start,end:k.end},e.options.animation))})}drawEmpty(){const a=this.startAngleRad,e=this.endAngleRad,g=this.options;let d,k;0===this.total&&this.center?(d=this.center[0],k=this.center[1],this.graph||(this.graph=this.chart.renderer.arc(d,
k,this.center[1]/2,0,a,e).addClass("highcharts-empty-series").add(this.group)),this.graph.attr({d:B.arc(d,k,this.center[2]/2,0,{start:a,end:e,innerR:this.center[3]/2})}),this.chart.styledMode||this.graph.attr({"stroke-width":g.borderWidth,fill:g.fillColor||"none",stroke:g.color||"#cccccc"})):this.graph&&(this.graph=this.graph.destroy())}drawPoints(){const a=this.chart.renderer;this.points.forEach(function(e){e.graphic&&e.hasNewShapeType()&&(e.graphic=e.graphic.destroy());e.graphic||(e.graphic=a[e.shapeType](e.shapeArgs).add(e.series.group),
e.delayedRendering=!0)})}generatePoints(){super.generatePoints();this.updateTotals()}getX(a,e,g){const d=this.center,k=this.radii?this.radii[g.index]||0:d[2]/2;a=Math.asin(l((a-d[1])/(k+g.labelDistance),-1,1));return d[0]+(e?-1:1)*Math.cos(a)*(k+g.labelDistance)+(0<g.labelDistance?(e?-1:1)*this.options.dataLabels.padding:0)}hasData(){return!!this.processedXData.length}redrawPoints(){const a=this,e=a.chart;let g,d,k,h;this.drawEmpty();a.group&&!e.styledMode&&a.group.shadow(a.options.shadow);a.points.forEach(function(l){const q=
{};d=l.graphic;!l.isNull&&d?(h=l.shapeArgs,g=l.getTranslate(),e.styledMode||(k=a.pointAttribs(l,l.selected&&"select")),l.delayedRendering?(d.setRadialReference(a.center).attr(h).attr(g),e.styledMode||d.attr(k).attr({"stroke-linejoin":"round"}),l.delayedRendering=!1):(d.setRadialReference(a.center),e.styledMode||m(!0,q,k),m(!0,q,h,g),d.animate(q)),d.attr({visibility:l.visible?"inherit":"hidden"}),d.addClass(l.getClassName(),!0)):d&&(l.graphic=d.destroy())})}sortByAngle(a,e){a.sort(function(a,d){return"undefined"!==
typeof a.angle&&(d.angle-a.angle)*e})}translate(a){t(this,"translate");this.generatePoints();var e=this.options;const l=e.slicedOffset,d=l+(e.borderWidth||0);var k=v(e.startAngle,e.endAngle);const m=this.startAngleRad=k.start;k=(this.endAngleRad=k.end)-m;const q=this.points,p=e.dataLabels.distance;e=e.ignoreHiddenPoint;const b=q.length;let f,c,n,w=0;a||(this.center=a=this.getCenter());for(c=0;c<b;c++){n=q[c];var u=m+w*k;!n.isValid()||e&&!n.visible||(w+=n.percentage/100);var x=m+w*k;var y={x:a[0],
y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*u)/1E3,end:Math.round(1E3*x)/1E3};n.shapeType="arc";n.shapeArgs=y;n.labelDistance=h(n.options.dataLabels&&n.options.dataLabels.distance,p);n.labelDistance=g(n.labelDistance,y.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,n.labelDistance);x=(x+u)/2;x>1.5*Math.PI?x-=2*Math.PI:x<-Math.PI/2&&(x+=2*Math.PI);n.slicedTranslation={translateX:Math.round(Math.cos(x)*l),translateY:Math.round(Math.sin(x)*l)};y=Math.cos(x)*a[2]/2;f=Math.sin(x)*a[2]/
2;n.tooltipPos=[a[0]+.7*y,a[1]+.7*f];n.half=x<-Math.PI/2||x>Math.PI/2?1:0;n.angle=x;u=Math.min(d,n.labelDistance/5);n.labelPosition={natural:{x:a[0]+y+Math.cos(x)*n.labelDistance,y:a[1]+f+Math.sin(x)*n.labelDistance},computed:{},alignment:0>n.labelDistance?"center":n.half?"right":"left",connectorPosition:{breakAt:{x:a[0]+y+Math.cos(x)*u,y:a[1]+f+Math.sin(x)*u},touchingSliceAt:{x:a[0]+y,y:a[1]+f}}}}t(this,"afterTranslate")}updateTotals(){const a=this.points,e=a.length,g=this.options.ignoreHiddenPoint;
let d,k,h=0;for(d=0;d<e;d++)k=a[d],!k.isValid()||g&&!k.visible||(h+=k.y);this.total=h;for(d=0;d<e;d++)k=a[d],k.percentage=0<h&&(k.visible||!g)?k.y/h*100:0,k.total=h}}e.defaultOptions=m(z.defaultOptions,C);p(e.prototype,{axisTypes:[],directTouch:!0,drawGraph:void 0,drawTracker:y.prototype.drawTracker,getCenter:a.getCenter,getSymbol:I,isCartesian:!1,noSharedTooltip:!0,pointAttribs:y.prototype.pointAttribs,pointClass:L,requireSorting:!1,searchPoint:I,trackerGroups:["group","dataLabelsGroup"]});H.registerSeriesType("pie",
e);return e});M(a,"Series/Pie/PieDataLabel.js",[a["Core/Series/DataLabel.js"],a["Core/Globals.js"],a["Core/Renderer/RendererUtilities.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,y,I,L,C){const {noop:x}=y,{distribute:H}=I,{series:B}=L,{arrayMax:u,clamp:v,defined:l,merge:p,pick:t,relativeLength:m}=C;var h;(function(g){function e(){const a=this,d=a.data,e=a.chart,g=a.options.dataLabels||{},b=g.connectorPadding,f=e.plotWidth,c=e.plotHeight,h=e.plotLeft,m=Math.round(e.chartWidth/
3),w=a.center,v=w[2]/2,x=w[1],y=[[],[]],z=[0,0,0,0],F=a.dataLabelPositioners;let C,A,E,I,L,M,J,N,O,S,W,U;a.visible&&(g.enabled||a._hasPointLabels)&&(d.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),B.prototype.drawDataLabels.apply(a),d.forEach(function(a){a.dataLabel&&(a.visible?(y[a.half].push(a),a.dataLabel._pos=null,!l(g.style.width)&&!l(a.options.dataLabels&&a.options.dataLabels.style&&
a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>m&&(a.dataLabel.css({width:Math.round(.7*m)+"px"}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),y.forEach((d,k)=>{const m=d.length,n=[];let q,p=0;if(m){a.sortByAngle(d,k-.5);if(0<a.maxLabelDistance){var r=Math.max(0,x-v-a.maxLabelDistance);q=Math.min(x+v+a.maxLabelDistance,e.plotHeight);d.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,
x-v-a.labelDistance),a.bottom=Math.min(x+v+a.labelDistance,e.plotHeight),p=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+p/2,size:p,rank:a.y},n.push(a.distributeBox))});r=q+p-r;H(n,r,r/5)}for(W=0;W<m;W++){C=d[W];M=C.labelPosition;I=C.dataLabel;S=!1===C.visible?"hidden":"inherit";O=r=M.natural.y;n&&l(C.distributeBox)&&("undefined"===typeof C.distributeBox.pos?S="hidden":(J=C.distributeBox.size,O=F.radialDistributionY(C)));delete C.positionIndex;if(g.justify)N=
F.justify(C,v,w);else switch(g.alignTo){case "connectors":N=F.alignToConnectors(d,k,f,h);break;case "plotEdges":N=F.alignToPlotEdges(I,k,f,h);break;default:N=F.radialDistributionX(a,C,O,r)}I._attr={visibility:S,align:M.alignment};U=C.options.dataLabels||{};I._pos={x:N+t(U.x,g.x)+({left:b,right:-b}[M.alignment]||0),y:O+t(U.y,g.y)-I.getBBox().height/2};M&&(M.computed.x=N,M.computed.y=O);t(g.crop,!0)&&(L=I.getBBox().width,r=null,N-L<b&&1===k?(r=Math.round(L-N+b),z[3]=Math.max(r,z[3])):N+L>f-b&&0===k&&
(r=Math.round(N+L-f+b),z[1]=Math.max(r,z[1])),0>O-J/2?z[0]=Math.max(Math.round(-O+J/2),z[0]):O+J/2>c&&(z[2]=Math.max(Math.round(O+J/2-c),z[2])),I.sideOverflow=r)}}}),0===u(z)||this.verifyDataLabelOverflow(z))&&(this.placeDataLabels(),this.points.forEach(function(b){U=p(g,b.options.dataLabels);if(A=t(U.connectorWidth,1)){let c;E=b.connector;if((I=b.dataLabel)&&I._pos&&b.visible&&0<b.labelDistance){S=I._attr.visibility;if(c=!E)b.connector=E=e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+
b.colorIndex+(b.className?" "+b.className:"")).add(a.dataLabelsGroup),e.styledMode||E.attr({"stroke-width":A,stroke:U.connectorColor||b.color||"#666666"});E[c?"attr":"animate"]({d:b.getConnectorPath()});E.attr("visibility",S)}else E&&(b.connector=E.destroy())}}))}function h(){this.points.forEach(function(a){let d=a.dataLabel,e;d&&a.visible&&((e=d._pos)?(d.sideOverflow&&(d._attr.width=Math.max(d.getBBox().width-d.sideOverflow,0),d.css({width:d._attr.width+"px",textOverflow:(this.options.dataLabels.style||
{}).textOverflow||"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?"animate":"attr"](e),d.moved=!0):d&&d.attr({y:-9999}));delete a.distributeBox},this)}function y(a){let d=this.center,e=this.options,g=e.center,b=e.minSize||80,f,c=null!==e.size;c||(null!==g[0]?f=Math.max(d[2]-Math.max(a[1],a[3]),b):(f=Math.max(d[2]-a[1]-a[3],b),d[0]+=(a[3]-a[1])/2),null!==g[1]?f=v(f,b,d[2]-Math.max(a[0],a[2])):(f=v(f,b,d[2]-a[0]-a[2]),d[1]+=(a[0]-a[2])/2),f<d[2]?(d[2]=f,d[3]=Math.min(e.thickness?Math.max(0,f-
2*e.thickness):Math.max(0,m(e.innerSize||0,f)),f),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):c=!0);return c}const z=[],d={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,d,e,g){return a.getX(e<d.top+2||e>d.bottom-2?g:e,d.half,d)},justify:function(a,d,e){return e[0]+(a.half?-1:1)*(d+a.labelDistance)},alignToPlotEdges:function(a,d,e,g){a=a.getBBox().width;return d?a+g:e-a-g},alignToConnectors:function(a,d,e,g){let b=0,f;a.forEach(function(a){f=
a.dataLabel.getBBox().width;f>b&&(b=f)});return d?b+g:e-b-g}};g.compose=function(g){a.compose(B);C.pushUnique(z,g)&&(g=g.prototype,g.dataLabelPositioners=d,g.alignDataLabel=x,g.drawDataLabels=e,g.placeDataLabels=h,g.verifyDataLabelOverflow=y)}})(h||(h={}));return h});M(a,"Extensions/OverlappingDataLabels.js",[a["Core/Chart/Chart.js"],a["Core/Utilities.js"]],function(a,y){function x(a,l){let p,t=!1;a&&(p=a.newOpacity,a.oldOpacity!==p&&(a.alignAttr&&a.placed?(a[p?"removeClass":"addClass"]("highcharts-data-label-hidden"),
t=!0,a.alignAttr.opacity=p,a[a.isOld?"animate":"attr"](a.alignAttr,null,function(){l.styledMode||a.css({pointerEvents:p?"auto":"none"})}),C(l,"afterHideOverlappingLabel")):a.attr({opacity:p})),a.isOld=!0);return t}const {addEvent:L,fireEvent:C,isArray:z,isNumber:H,objectEach:B,pick:u}=y;L(a,"render",function(){let a=this,l=[];(this.labelCollectors||[]).forEach(function(a){l=l.concat(a())});(this.yAxis||[]).forEach(function(a){a.stacking&&a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&
B(a.stacking.stacks,function(a){B(a,function(a){a.label&&l.push(a.label)})})});(this.series||[]).forEach(function(p){var t=p.options.dataLabels;p.visible&&(!1!==t.enabled||p._hasPointLabels)&&(t=m=>m.forEach(h=>{h.visible&&(z(h.dataLabels)?h.dataLabels:h.dataLabel?[h.dataLabel]:[]).forEach(function(g){const e=g.options;g.labelrank=u(e.labelrank,h.labelrank,h.shapeArgs&&h.shapeArgs.height);e.allowOverlap?(g.oldOpacity=g.opacity,g.newOpacity=1,x(g,a)):l.push(g)})}),t(p.nodes||[]),t(p.points))});this.hideOverlappingLabels(l)});
a.prototype.hideOverlappingLabels=function(a){let l=this,p=a.length,t=l.renderer;var m;let h;let g,e,w,u=!1;var v=function(a){let d,e;var g;let h=a.box?0:a.padding||0,b=g=0,f,c;if(a&&(!a.alignAttr||a.placed))return d=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},e=a.parentGroup,a.width||(g=a.getBBox(),a.width=g.width,a.height=g.height,g=t.fontMetrics(a.element).h),f=a.width-2*h,(c={left:"0",center:"0.5",right:"1"}[a.alignValue])?b=+c*f:H(a.x)&&Math.round(a.x)!==a.translateX&&(b=a.x-a.translateX),{x:d.x+
(e.translateX||0)+h-(b||0),y:d.y+(e.translateY||0)+h-g,width:a.width-2*h,height:a.height-2*h}};for(h=0;h<p;h++)if(m=a[h])m.oldOpacity=m.opacity,m.newOpacity=1,m.absoluteBox=v(m);a.sort(function(a,e){return(e.labelrank||0)-(a.labelrank||0)});for(h=0;h<p;h++)for(e=(v=a[h])&&v.absoluteBox,m=h+1;m<p;++m)w=(g=a[m])&&g.absoluteBox,!e||!w||v===g||0===v.newOpacity||0===g.newOpacity||"hidden"===v.visibility||"hidden"===g.visibility||w.x>=e.x+e.width||w.x+w.width<=e.x||w.y>=e.y+e.height||w.y+w.height<=e.y||
((v.labelrank<g.labelrank?v:g).newOpacity=0);a.forEach(function(a){x(a,l)&&(u=!0)});u&&C(l,"afterHideAllOverlappingLabels")}});M(a,"Extensions/BorderRadius.js",[a["Core/Defaults.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(a,y,I,L,C,z){const {defaultOptions:x}=a;({seriesTypes:a}=I);const {addEvent:B,extend:u,isObject:v,merge:l,relativeLength:p}=z,t={radius:0,scope:"stack",
where:void 0},m=(a,g)=>{v(a)||(a={radius:a||0});return l(t,g,a)};if(-1===L.symbolCustomAttribs.indexOf("borderRadius")){L.symbolCustomAttribs.push("borderRadius","brBoxHeight","brBoxY");const h=C.prototype.symbols.arc;C.prototype.symbols.arc=function(a,g,l,m,d={}){a=h(a,g,l,m,d);const {innerR:e=0,r=l,start:q=0,end:t=0}=d;if(d.open||!d.borderRadius)return a;l=t-q;g=Math.sin(l/2);d=Math.max(Math.min(p(d.borderRadius||0,r-e),(r-e)/2,r*g/(1+g)),0);l=Math.min(d,l/Math.PI*2*e);for(g=a.length-1;g--;){{let e=
void 0,h=void 0,k=void 0;m=a;var b=g,f=1<g?l:d,c=m[b],n=m[b+1];"Z"===n[0]&&(n=m[0]);"M"!==c[0]&&"L"!==c[0]||"A"!==n[0]?"A"!==c[0]||"M"!==n[0]&&"L"!==n[0]||(k=n,h=c):(k=c,h=n,e=!0);if(k&&h&&h.params){c=h[1];var w=h[5];n=h.params;const {start:a,end:d,cx:g,cy:l}=n;var u=w?c-f:c+f;const p=u?Math.asin(f/u):0;w=w?p:-p;u*=Math.cos(p);e?(n.start=a+w,k[1]=g+u*Math.cos(a),k[2]=l+u*Math.sin(a),m.splice(b+1,0,["A",f,f,0,0,1,g+c*Math.cos(n.start),l+c*Math.sin(n.start)])):(n.end=d-w,h[6]=g+c*Math.cos(n.end),h[7]=
l+c*Math.sin(n.end),m.splice(b+1,0,["A",f,f,0,0,1,g+u*Math.cos(d),l+u*Math.sin(d)]));h[4]=Math.abs(n.end-n.start)<Math.PI?0:1}}}return a};const g=C.prototype.symbols.roundedRect;C.prototype.symbols.roundedRect=function(a,h,l,m,d={}){const e=g(a,h,l,m,d),{r:p=0,brBoxHeight:q=m,brBoxY:t=h}=d;var b=h-t,f=t+q-(h+m);d=-.1<b-p?0:p;const c=-.1<f-p?0:p;var n=Math.max(d&&b,0);const u=Math.max(c&&f,0);f=[a+d,h];b=[a+l-d,h];const w=[a+l,h+d],v=[a+l,h+m-c],x=[a+l-c,h+m],y=[a+c,h+m],z=[a,h+m-c],B=[a,h+d];if(n){const a=
Math.sqrt(Math.pow(d,2)-Math.pow(d-n,2));f[0]-=a;b[0]+=a;w[1]=B[1]=h+d-n}m<d-n&&(n=Math.sqrt(Math.pow(d,2)-Math.pow(d-n-m,2)),w[0]=v[0]=a+l-d+n,x[0]=Math.min(w[0],x[0]),y[0]=Math.max(v[0],y[0]),z[0]=B[0]=a+d-n,w[1]=B[1]=h+m);u&&(n=Math.sqrt(Math.pow(c,2)-Math.pow(c-u,2)),x[0]+=n,y[0]-=n,v[1]=z[1]=h+m-c+u);m<c-u&&(m=Math.sqrt(Math.pow(c,2)-Math.pow(c-u-m,2)),w[0]=v[0]=a+l-c+m,b[0]=Math.min(w[0],b[0]),f[0]=Math.max(v[0],f[0]),z[0]=B[0]=a+c-m,v[1]=z[1]=h);e.length=0;e.push(["M",...f],["L",...b],["A",
d,d,0,0,1,...w],["L",...v],["A",c,c,0,0,1,...x],["L",...y],["A",c,c,0,0,1,...z],["L",...B],["A",d,d,0,0,1,...f],["Z"]);return e};B(a.pie,"afterTranslate",function(){const a=m(this.options.borderRadius);for(const e of this.points){const g=e.shapeArgs;g&&(g.borderRadius=p(a.radius,(g.r||0)-(g.innerR||0)))}});B(y,"afterColumnTranslate",function(){var a,g;if(this.options.borderRadius&&(!this.chart.is3d||!this.chart.is3d())){const {options:e,yAxis:r}=this,q="percent"===e.stacking;var h=null===(g=null===
(a=x.plotOptions)||void 0===a?void 0:a[this.type])||void 0===g?void 0:g.borderRadius;a=m(e.borderRadius,v(h)?h:{});g=r.options.reversed;for(const k of this.points)if({shapeArgs:h}=k,"roundedRect"===k.shapeType&&h){const {width:b=0,height:f=0,y:c=0}=h;var l=c,d=f;"stack"===a.scope&&k.stackTotal&&(l=r.translate(q?100:k.stackTotal,!1,!0,!1,!0),d=r.translate(e.threshold||0,!1,!0,!1,!0),d=this.crispCol(0,Math.min(l,d),0,Math.abs(l-d)),l=d.y,d=d.height);const m=-1===(k.negative?-1:1)*(g?-1:1);let t=a.where;
!t&&this.is("waterfall")&&Math.abs((k.yBottom||0)-(this.translatedThreshold||0))>this.borderWidth&&(t="all");t||(t="end");const v=Math.min(p(a.radius,b),b/2,"all"===t?f/2:Infinity)||0;"end"===t&&(m&&(l-=v),d+=v);u(h,{brBoxHeight:d,brBoxY:l,r:v})}}},{order:9})}y={optionsToObject:m};"";return y});M(a,"Core/Responsive.js",[a["Core/Utilities.js"]],function(a){const {diffObjects:x,extend:I,find:L,merge:C,pick:z,uniqueKey:H}=a;var B;(function(u){function v(a,l){const h=a.condition;(h.callback||function(){return this.chartWidth<=
z(h.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=z(h.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=z(h.minWidth,0)&&this.chartHeight>=z(h.minHeight,0)}).call(this)&&l.push(a._id)}function l(a,l){const h=this.options.responsive;var g=this.currentResponsive;let e=[];!l&&h&&h.rules&&h.rules.forEach(a=>{"undefined"===typeof a._id&&(a._id=H());this.matchResponsiveRule(a,e)},this);l=C(...e.map(a=>L((h||{}).rules||[],e=>e._id===a)).map(a=>a&&a.chartOptions));l.isResponsiveOptions=!0;e=e.toString()||void 0;
e!==(g&&g.ruleIds)&&(g&&this.update(g.undoOptions,a,!0),e?(g=x(l,this.options,!0,this.collectionsWithUpdate),g.isResponsiveOptions=!0,this.currentResponsive={ruleIds:e,mergedOptions:l,undoOptions:g},this.update(l,a,!0)):this.currentResponsive=void 0)}const p=[];u.compose=function(t){a.pushUnique(p,t)&&I(t.prototype,{matchResponsiveRule:v,setResponsive:l});return t}})(B||(B={}));"";"";return B});M(a,"masters/highcharts.src.js",[a["Core/Globals.js"],a["Core/Utilities.js"],a["Core/Defaults.js"],a["Core/Animation/Fx.js"],
a["Core/Animation/AnimationUtilities.js"],a["Core/Renderer/HTML/AST.js"],a["Core/Templating.js"],a["Core/Renderer/RendererUtilities.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Renderer/HTML/HTMLElement.js"],a["Core/Renderer/HTML/HTMLRenderer.js"],a["Core/Axis/Axis.js"],a["Core/Axis/DateTimeAxis.js"],a["Core/Axis/LogarithmicAxis.js"],a["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],a["Core/Axis/Tick.js"],a["Core/Tooltip.js"],a["Core/Series/Point.js"],a["Core/Pointer.js"],
a["Core/Legend/Legend.js"],a["Core/Chart/Chart.js"],a["Core/Axis/Stacking/StackingAxis.js"],a["Core/Axis/Stacking/StackItem.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Column/ColumnSeries.js"],a["Series/Column/ColumnDataLabel.js"],a["Series/Pie/PieSeries.js"],a["Series/Pie/PieDataLabel.js"],a["Core/Series/DataLabel.js"],a["Core/Responsive.js"],a["Core/Color/Color.js"],a["Core/Time.js"]],function(a,y,I,L,C,z,H,B,u,v,l,p,t,m,h,g,e,w,E,F,d,k,r,q,G,b,f,c,n,M,D,K,U,T){a.animate=
C.animate;a.animObject=C.animObject;a.getDeferredAnimation=C.getDeferredAnimation;a.setAnimation=C.setAnimation;a.stop=C.stop;a.timers=L.timers;a.AST=z;a.Axis=t;a.Chart=k;a.chart=k.chart;a.Fx=L;a.Legend=d;a.PlotLineOrBand=g;a.Point=E;a.Pointer=F;a.Series=G;a.StackItem=q;a.SVGElement=u;a.SVGRenderer=v;a.Templating=H;a.Tick=e;a.Time=T;a.Tooltip=w;a.Color=U;a.color=U.parse;p.compose(v);l.compose(u);F.compose(k);d.compose(k);a.defaultOptions=I.defaultOptions;a.getOptions=I.getOptions;a.time=I.defaultTime;
a.setOptions=I.setOptions;a.dateFormat=H.dateFormat;a.format=H.format;a.numberFormat=H.numberFormat;a.addEvent=y.addEvent;a.arrayMax=y.arrayMax;a.arrayMin=y.arrayMin;a.attr=y.attr;a.clearTimeout=y.clearTimeout;a.correctFloat=y.correctFloat;a.createElement=y.createElement;a.css=y.css;a.defined=y.defined;a.destroyObjectProperties=y.destroyObjectProperties;a.discardElement=y.discardElement;a.distribute=B.distribute;a.erase=y.erase;a.error=y.error;a.extend=y.extend;a.extendClass=y.extendClass;a.find=
y.find;a.fireEvent=y.fireEvent;a.getMagnitude=y.getMagnitude;a.getStyle=y.getStyle;a.inArray=y.inArray;a.isArray=y.isArray;a.isClass=y.isClass;a.isDOMElement=y.isDOMElement;a.isFunction=y.isFunction;a.isNumber=y.isNumber;a.isObject=y.isObject;a.isString=y.isString;a.keys=y.keys;a.merge=y.merge;a.normalizeTickInterval=y.normalizeTickInterval;a.objectEach=y.objectEach;a.offset=y.offset;a.pad=y.pad;a.pick=y.pick;a.pInt=y.pInt;a.relativeLength=y.relativeLength;a.removeEvent=y.removeEvent;a.seriesType=
b.seriesType;a.splat=y.splat;a.stableSort=y.stableSort;a.syncTimeout=y.syncTimeout;a.timeUnits=y.timeUnits;a.uniqueKey=y.uniqueKey;a.useSerialIds=y.useSerialIds;a.wrap=y.wrap;c.compose(f);D.compose(G);m.compose(t);h.compose(t);M.compose(n);g.compose(t);K.compose(k);r.compose(t,k,G);w.compose(F);return a});a["masters/highcharts.src.js"]._modules=a;return a["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "./node_modules/highcharts/modules/exporting.js":
/*!******************************************************!*\
  !*** ./node_modules/highcharts/modules/exporting.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v11.1.0 (2023-06-05)

 Exporting module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){ true&&module.exports?(a["default"]=a,module.exports=a): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){a(e);a.Highcharts=e;return a}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(a){function e(a,l,y,F){a.hasOwnProperty(l)||(a[l]=F.apply(null,y),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:a[l]}})))}a=a?a._modules:
{};e(a,"Core/Chart/ChartNavigationComposition.js",[],function(){var a;(function(a){a.compose=function(a){a.navigation||(a.navigation=new b(a));return a};class b{constructor(a){this.updates=[];this.chart=a}addUpdate(a){this.chart.navigation.updates.push(a)}update(a,b){this.updates.forEach(A=>{A.call(this.chart,a,b)})}}a.Additions=b})(a||(a={}));return a});e(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],function(a){({isTouchDevice:a}=a);return{exporting:{allowTableSorting:!0,
type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},
printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",
exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:14.5,symbolY:13.5,align:"right",buttonSpacing:3,height:28,verticalAlign:"top",width:28,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"none",borderRadius:"3px",
background:"#ffffff",padding:"0.5em"},menuItemStyle:{background:"none",borderRadius:"3px",color:"#333333",padding:"0.5em",fontSize:a?"0.9em":"0.8em",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#f2f2f2"}}}});e(a,"Extensions/Exporting/ExportingSymbols.js",[],function(){var a;(function(a){function b(a,b,g,c){return[["M",a,b+2.5],["L",a+g,b+2.5],["M",a,b+c/2+.5],["L",a+g,b+c/2+.5],["M",a,b+c-1.5],["L",a+g,b+c-1.5]]}function l(a,b,g,c){a=c/3-2;c=[];return c=c.concat(this.circle(g-
a,b,a,a),this.circle(g-a,b+a+4,a,a),this.circle(g-a,b+2*(a+4),a,a))}const p=[];a.compose=function(a){-1===p.indexOf(a)&&(p.push(a),a=a.prototype.symbols,a.menu=b,a.menuball=l.bind(a))}})(a||(a={}));return a});e(a,"Extensions/Exporting/Fullscreen.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],function(a,l){function b(){this.fullscreen=new B(this)}const {addEvent:e,fireEvent:p}=l,A=[];class B{static compose(a){l.pushUnique(A,a)&&e(a,"beforeRender",b)}constructor(a){this.chart=a;this.isOpen=
!1;a=a.renderTo;this.browserProps||("function"===typeof a.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:a.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:a.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:
a.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}close(){const a=this,c=a.chart,b=c.options.chart;p(c,"fullscreenClose",null,function(){if(a.isOpen&&a.browserProps&&c.container.ownerDocument instanceof Document)c.container.ownerDocument[a.browserProps.exitFullscreen]();a.unbindFullscreenEvent&&(a.unbindFullscreenEvent=a.unbindFullscreenEvent());c.setSize(a.origWidth,a.origHeight,!1);a.origWidth=
void 0;a.origHeight=void 0;b.width=a.origWidthOption;b.height=a.origHeightOption;a.origWidthOption=void 0;a.origHeightOption=void 0;a.isOpen=!1;a.setButtonText()})}open(){const a=this,c=a.chart,b=c.options.chart;p(c,"fullscreenOpen",null,function(){b&&(a.origWidthOption=b.width,a.origHeightOption=b.height);a.origWidth=c.chartWidth;a.origHeight=c.chartHeight;if(a.browserProps){const b=e(c.container.ownerDocument,a.browserProps.fullscreenChange,function(){a.isOpen?(a.isOpen=!1,a.close()):(c.setSize(null,
null,!1),a.isOpen=!0,a.setButtonText())}),g=e(c,"destroy",b);a.unbindFullscreenEvent=()=>{b();g()};const m=c.renderTo[a.browserProps.requestFullscreen]();if(m)m["catch"](function(){alert("Full screen is not supported inside a frame.")})}})}setButtonText(){var b=this.chart,c=b.exportDivElements;const m=b.options.exporting,M=m&&m.buttons&&m.buttons.contextButton.menuItems;b=b.options.lang;m&&m.menuItemDefinitions&&b&&b.exitFullscreen&&b.viewFullscreen&&M&&c&&(c=c[M.indexOf("viewFullscreen")])&&a.setElementHTML(c,
this.isOpen?b.exitFullscreen:m.menuItemDefinitions.viewFullscreen.text||b.viewFullscreen)}toggle(){this.isOpen?this.close():this.open()}}"";"";return B});e(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,e){const {doc:b}=a,{createElement:l,discardElement:p,merge:A,objectEach:B}=e,g={ajax:function(a){const b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},c=new XMLHttpRequest;if(!a.url)return!1;c.open((a.type||"get").toUpperCase(),
a.url,!0);a.headers&&a.headers["Content-Type"]||c.setRequestHeader("Content-Type",b[a.dataType||"json"]||b.text);B(a.headers,function(a,b){c.setRequestHeader(b,a)});a.responseType&&(c.responseType=a.responseType);c.onreadystatechange=function(){let b;if(4===c.readyState){if(200===c.status){if("blob"!==a.responseType&&(b=c.responseText,"json"===a.dataType))try{b=JSON.parse(b)}catch(z){if(z instanceof Error){a.error&&a.error(c,z);return}}return a.success&&a.success(b,c)}a.error&&a.error(c,c.responseText)}};
a.data&&"string"!==typeof a.data&&(a.data=JSON.stringify(a.data));c.send(a.data)},getJSON:function(a,b){g.ajax({url:a,success:b,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,g,e){const c=l("form",A({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},b.body);B(g,function(a,b){l("input",{type:"hidden",name:b,value:a},void 0,c)});c.submit();p(c)}};"";return g});e(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],
a["Core/Chart/ChartNavigationComposition.js"],a["Core/Defaults.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Extensions/Exporting/Fullscreen.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],function(a,e,y,F,p,A,B,g,c,m){const {defaultOptions:b,setOptions:l}=F,{doc:z,SVG_NS:R,win:D}=g,{addEvent:C,css:w,createElement:G,discardElement:N,extend:H,find:S,fireEvent:I,isObject:T,merge:k,objectEach:U,pick:q,removeEvent:V,uniqueKey:W}=
m;var J;(function(e){function F(a){const f=this,d=f.renderer,b=k(f.options.navigation.buttonOptions,a),c=b.onclick,E=b.menuItems,n=b.symbolSize||12;let x;f.btnCount||(f.btnCount=0);f.exportDivElements||(f.exportDivElements=[],f.exportSVGElements=[]);if(!1!==b.enabled&&b.theme){var v=b.theme,e;f.styledMode||(v.fill=q(v.fill,"#ffffff"),v.stroke=q(v.stroke,"none"));c?e=function(a){a&&a.stopPropagation();c.call(f,a)}:E&&(e=function(a){a&&a.stopPropagation();f.contextMenu(r.menuClassName,E,r.translateX,
r.translateY,r.width,r.height,r);r.setState(2)});b.text&&b.symbol?v.paddingLeft=q(v.paddingLeft,30):b.text||H(v,{width:b.width,height:b.height,padding:0});f.styledMode||(v["stroke-linecap"]="round",v.fill=q(v.fill,"#ffffff"),v.stroke=q(v.stroke,"none"));var r=d.button(b.text,0,0,e,v,void 0,void 0,void 0,void 0,b.useHTML).addClass(a.className).attr({title:q(f.options.lang[b._titleKey||b.titleKey],"")});r.menuClassName=a.menuClassName||"highcharts-menu-"+f.btnCount++;b.symbol&&(x=d.symbol(b.symbol,
b.symbolX-n/2,b.symbolY-n/2,n,n,{width:n,height:n}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(r),f.styledMode||x.attr({stroke:b.symbolStroke,fill:b.symbolFill,"stroke-width":b.symbolStrokeWidth||1}));r.add(f.exportingGroup).align(H(b,{width:r.width,x:q(b.x,f.buttonOffset)}),!0,"spacingBox");f.buttonOffset+=(r.width+b.buttonSpacing)*("right"===b.align?-1:1);f.exportSVGElements.push(r,x)}}function J(){if(this.printReverseInfo){var {childNodes:a,origDisplay:f,resetParams:b}=this.printReverseInfo;
this.moveContainers(this.renderTo);[].forEach.call(a,function(a,b){1===a.nodeType&&(a.style.display=f[b]||"")});this.isPrinting=!1;b&&this.setSize.apply(this,b);delete this.printReverseInfo;L=void 0;I(this,"afterPrint")}}function M(){const a=z.body,b=this.options.exporting.printMaxWidth,c={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0;this.pointer.reset(null,0);I(this,"beforePrint");b&&this.chartWidth>b&&(c.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,
void 0,!1));[].forEach.call(c.childNodes,function(a,b){1===a.nodeType&&(c.origDisplay[b]=a.style.display,a.style.display="none")});this.moveContainers(a);this.printReverseInfo=c}function X(a){a.renderExporting();C(a,"redraw",a.renderExporting);C(a,"destroy",a.destroyExport)}function Y(b,f,c,e,g,E,n){const d=this,t=d.options.navigation,O=d.chartWidth,r=d.chartHeight,l="cache-"+b,K=Math.max(g,E);let u,h=d[l];h||(d.exportContextMenu=d[l]=h=G("div",{className:b},{position:"absolute",zIndex:1E3,padding:K+
"px",pointerEvents:"auto"},d.fixedDiv||d.container),u=G("ul",{className:"highcharts-menu"},d.styledMode?{}:{listStyle:"none",margin:0,padding:0},h),d.styledMode||w(u,H({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},t.menuStyle)),h.hideMenu=function(){w(h,{display:"none"});n&&n.setState(0);d.openMenu=!1;w(d.renderTo,{overflow:"hidden"});w(d.container,{overflow:"hidden"});m.clearTimeout(h.hideTimer);I(d,"exportMenuHidden")},d.exportEvents.push(C(h,
"mouseleave",function(){h.hideTimer=D.setTimeout(h.hideMenu,500)}),C(h,"mouseenter",function(){m.clearTimeout(h.hideTimer)}),C(z,"mouseup",function(a){d.pointer.inClass(a.target,b)||h.hideMenu()}),C(h,"click",function(){d.openMenu&&h.hideMenu()})),f.forEach(function(b){"string"===typeof b&&(b=d.options.exporting.menuItemDefinitions[b]);if(T(b,!0)){let f;b.separator?f=G("hr",void 0,void 0,u):("viewData"===b.textKey&&d.isDataTableVisible&&(b.textKey="hideData"),f=G("li",{className:"highcharts-menu-item",
onclick:function(a){a&&a.stopPropagation();h.hideMenu();b.onclick&&b.onclick.apply(d,arguments)}},void 0,u),a.setElementHTML(f,b.text||d.options.lang[b.textKey]),d.styledMode||(f.onmouseover=function(){w(this,t.menuItemHoverStyle)},f.onmouseout=function(){w(this,t.menuItemStyle)},w(f,H({cursor:"pointer"},t.menuItemStyle||{}))));d.exportDivElements.push(f)}}),d.exportDivElements.push(u,h),d.exportMenuWidth=h.offsetWidth,d.exportMenuHeight=h.offsetHeight);f={display:"block"};c+d.exportMenuWidth>O?f.right=
O-c-g-K+"px":f.left=c-K+"px";e+E+d.exportMenuHeight>r&&"top"!==n.alignOptions.verticalAlign?f.bottom=r-e-K+"px":f.top=e+E-K+"px";w(h,f);w(d.renderTo,{overflow:""});w(d.container,{overflow:""});d.openMenu=!0;I(d,"exportMenuShown")}function Z(a){const b=a?a.target:this,d=b.exportSVGElements,c=b.exportDivElements;a=b.exportEvents;let e;d&&(d.forEach((a,f)=>{a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,b[e]&&delete b[e],d[f]=a.destroy())}),d.length=0);b.exportingGroup&&(b.exportingGroup.destroy(),
delete b.exportingGroup);c&&(c.forEach(function(a,b){a&&(m.clearTimeout(a.hideTimer),V(a,"mouseleave"),c[b]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,N(a))}),c.length=0);a&&(a.forEach(function(a){a()}),a.length=0)}function aa(a,b){b=this.getSVGForExport(a,b);a=k(this.options.exporting,a);c.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width,scale:a.scale,svg:b},a.formAttributes)}function ba(){this.styledMode&&this.inlineStyles();
return this.container.innerHTML}function ca(){const a=this.userOptions.title&&this.userOptions.title.text;let b=this.options.exporting.filename;if(b)return b.replace(/\//g,"-");"string"===typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,""));if(!b||5>b.length)b="chart";return b}function da(a){let b,d=k(this.options,a);d.plotOptions=k(this.userOptions.plotOptions,a&&
a.plotOptions);d.time=k(this.userOptions.time,a&&a.time);const c=G("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},z.body);var e=this.renderTo.style.width;var g=this.renderTo.style.height;e=d.exporting.sourceWidth||d.chart.width||/px$/.test(e)&&parseInt(e,10)||(d.isGantt?800:600);g=d.exporting.sourceHeight||d.chart.height||/px$/.test(g)&&parseInt(g,10)||400;H(d.chart,{animation:!1,renderTo:c,forExport:!0,renderer:"SVGRenderer",width:e,height:g});
d.exporting.enabled=!1;delete d.data;d.series=[];this.series.forEach(function(a){b=k(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});b.isInternal||d.series.push(b)});const n={};this.axes.forEach(function(a){a.userOptions.internalKey||(a.userOptions.internalKey=W());a.options.isInternal||(n[a.coll]||(n[a.coll]=!0,d[a.coll]=[]),d[a.coll].push(k(a.userOptions,{visible:a.visible})))});const x=new this.constructor(d,this.callback);a&&["xAxis","yAxis","series"].forEach(function(b){const d=
{};a[b]&&(d[b]=a[b],x.update(d))});this.axes.forEach(function(a){const b=S(x.axes,function(b){return b.options.internalKey===a.userOptions.internalKey});var d=a.getExtremes();const f=d.userMin;d=d.userMax;b&&("undefined"!==typeof f&&f!==b.min||"undefined"!==typeof d&&d!==b.max)&&b.setExtremes(f,d,!0,!1)});g=x.getChartHTML();I(this,"getSVG",{chartCopy:x});g=this.sanitizeSVG(g,d);d=null;x.destroy();N(c);return g}function ea(a,b){const d=this.options.exporting;return this.getSVG(k({chart:{borderRadius:0}},
d.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||d.sourceWidth,sourceHeight:a&&a.sourceHeight||d.sourceHeight}}))}function fa(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()})}function ha(){function a(d){const f={};let e,k;if(n&&1===d.nodeType&&-1===ia.indexOf(d.nodeName)){e=D.getComputedStyle(d,null);k="svg"===d.nodeName?{}:D.getComputedStyle(d.parentNode,null);if(!l[d.nodeName]){m=n.getElementsByTagName("svg")[0];var t=n.createElementNS(d.namespaceURI,d.nodeName);
m.appendChild(t);var p=D.getComputedStyle(t,null);var u={};for(var h in p)"string"!==typeof p[h]||/^[0-9]+$/.test(h)||(u[h]=p[h]);l[d.nodeName]=u;"text"===d.nodeName&&delete l.text.fill;m.removeChild(t)}for(const a in e)if(g.isFirefox||g.isMS||g.isSafari||Object.hasOwnProperty.call(e,a)){h=e[a];var q=a;t=p=!1;if(c.length){for(u=c.length;u--&&!p;)p=c[u].test(q);t=!p}"transform"===q&&"none"===h&&(t=!0);for(u=b.length;u--&&!t;)t=b[u].test(q)||"function"===typeof h;t||k[q]===h&&"svg"!==d.nodeName||l[d.nodeName][q]===
h||(P&&-1===P.indexOf(q)?f[q]=h:h&&d.setAttribute(fa(q),h))}w(d,f);"svg"===d.nodeName&&d.setAttribute("stroke-width","1px");"text"!==d.nodeName&&[].forEach.call(d.children||d.childNodes,a)}}const b=ja,c=e.inlineAllowlist,l={};let m;const k=z.createElement("iframe");w(k,{width:"1px",height:"1px",visibility:"hidden"});z.body.appendChild(k);const n=k.contentWindow&&k.contentWindow.document;n&&n.body.appendChild(n.createElementNS(R,"svg"));a(this.container.querySelector("svg"));m.parentNode.removeChild(m);
k.parentNode.removeChild(k)}function ka(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach(function(b){a.appendChild(b)})}function la(){const a=this;a.exporting={update:function(b,d){a.isDirtyExporting=!0;k(!0,a.options.exporting,b);q(d,!0)&&a.redraw()}};y.compose(a).navigation.addUpdate((b,d)=>{a.isDirtyExporting=!0;k(!0,a.options.navigation,b);q(d,!0)&&a.redraw()})}function ma(){const a=this;a.isPrinting||(L=a,g.isSafari||a.beforePrint(),setTimeout(()=>{D.focus();
D.print();g.isSafari||setTimeout(()=>{a.afterPrint()},1E3)},1))}function na(){const a=this,b=a.options.exporting,c=b.buttons,e=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();e&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),U(c,function(b){a.addButton(b)}),a.isDirtyExporting=!1)}function oa(a,b){const d=a.indexOf("</svg>")+6;let c=a.substr(d);a=a.substr(0,d);b&&b.exporting&&
b.exporting.allowHTML&&c&&(c='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+c.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",c+"</svg>"));return a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g,
" xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad")}const Q=[],ja=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/^parentRule$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/,/^[0-9]+$/],P="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");e.inlineAllowlist=[];const ia=["clipPath","defs",
"desc"];let L;e.compose=function(a,c){A.compose(c);B.compose(a);m.pushUnique(Q,a)&&(c=a.prototype,c.afterPrint=J,c.exportChart=aa,c.inlineStyles=ha,c.print=ma,c.sanitizeSVG=oa,c.getChartHTML=ba,c.getSVG=da,c.getSVGForExport=ea,c.getFilename=ca,c.moveContainers=ka,c.beforePrint=M,c.contextMenu=Y,c.addButton=F,c.destroyExport=Z,c.renderExporting=na,c.callbacks.push(X),C(a,"init",la),g.isSafari&&g.win.matchMedia("print").addListener(function(a){L&&(a.matches?L.beforePrint():L.afterPrint())}));m.pushUnique(Q,
l)&&(b.exporting=k(p.exporting,b.exporting),b.lang=k(p.lang,b.lang),b.navigation=k(p.navigation,b.navigation))}})(J||(J={}));"";"";return J});e(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],function(a,e,y){a.HttpUtilities=y;a.ajax=y.ajax;a.getJSON=y.getJSON;a.post=y.post;e.compose(a.Chart,a.Renderer)})});
//# sourceMappingURL=exporting.js.map

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./src/vue/components/App.vue":
/*!************************************!*\
  !*** ./src/vue/components/App.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_0e4c836c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0e4c836c */ "./src/vue/components/App.vue?vue&type=template&id=0e4c836c");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./src/vue/components/App.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alexmonaghan_My_sites_d10_1_web_themes_sakt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alexmonaghan_My_sites_d10_1_web_themes_sakt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_0e4c836c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/App.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/vue/components/App.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/App.vue?vue&type=template&id=0e4c836c":
/*!******************************************************************!*\
  !*** ./src/vue/components/App.vue?vue&type=template&id=0e4c836c ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_0e4c836c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_0e4c836c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=0e4c836c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/App.vue?vue&type=template&id=0e4c836c");


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   Fragment: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   KeepAlive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   Suspense: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   Teleport: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   Text: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   Transition: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   TransitionGroup: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   VueElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   assertNumber: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   cloneVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   compatUtils: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   compile: () => (/* binding */ compileToFunction),
/* harmony export */   computed: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   createBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   createCommentVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   createElementBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   createElementVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   createHydrationRenderer: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   createSSRApp: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   createSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   createStaticVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   createTextVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   createVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   defineCustomElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   defineEmits: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   defineExpose: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   defineModel: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineModel),
/* harmony export */   defineOptions: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineOptions),
/* harmony export */   defineProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   defineSSRCustomElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   defineSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSlots),
/* harmony export */   devtools: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   h: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   handleError: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   hasInjectionContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext),
/* harmony export */   hydrate: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   initCustomFormatter: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   initDirectivesForSSR: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   inject: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isMemoSame: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   mergeModels: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeModels),
/* harmony export */   mergeProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   nextTick: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   onActivated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   openBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   popScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   provide: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   render: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   renderList: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   renderSlot: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   resolveComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   resolveDirective: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   ssrUtils: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   useCssVars: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   useModel: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useModel),
/* harmony export */   useSSRContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   useSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   useTransitionState: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   vModelCheckbox: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   vModelDynamic: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   vModelRadio: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   vModelSelect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   vModelText: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   vShow: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   version: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   watch: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   withCtx: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   withDefaults: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   withDirectives: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   withKeys: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   withMemo: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   withModifiers: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   withScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
}

if (true) {
  initDev();
}
const compileCache = /* @__PURE__ */ Object.create(null);
function compileToFunction(template, options) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.isString)(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(`invalid template option: `, template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_2__.NOOP;
    }
  }
  const key = template;
  const cached = compileCache[key];
  if (cached) {
    return cached;
  }
  if (template[0] === "#") {
    const el = document.querySelector(template);
    if ( true && !el) {
      (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(`Template element not found or is empty: ${template}`);
    }
    template = el ? el.innerHTML : ``;
  }
  const opts = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.extend)(
    {
      hoistStatic: true,
      onError:  true ? onError : 0,
      onWarn:  true ? (e) => onError(e, true) : 0
    },
    options
  );
  if (!opts.isCustomElement && typeof customElements !== "undefined") {
    opts.isCustomElement = (tag) => !!customElements.get(tag);
  }
  const { code } = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, opts);
  function onError(err, asWarning = false) {
    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
    const codeFrame = err.loc && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_2__.generateCodeFrame)(
      template,
      err.loc.start.offset,
      err.loc.end.offset
    );
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(codeFrame ? `${message}
${codeFrame}` : message);
  }
  const render = new Function("Vue", code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}
(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.registerRuntimeCompiler)(compileToFunction);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/vue/vueHigh.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App.vue */ "./src/vue/components/App.vue");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_2__);



(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  components: {
    App: _components_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).use((highcharts_vue__WEBPACK_IMPORTED_MODULE_2___default())).mount('#app');
})();

/******/ })()
;