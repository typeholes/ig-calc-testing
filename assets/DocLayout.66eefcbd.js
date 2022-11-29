import { i as QBtn } from "./QBtn.f303d055.js";
import { n as QLayout, j as QToolbar, o as QToolbarTitle, p as QHeader, q as QDrawer, r as QPage, t as QPageContainer, v as QFooter } from "./QLayout.4d2c4661.js";
import { a4 as defineComponent, cA as createDocChannel, ay as openBlock, W as createElementBlock, a2 as createVNode, X as createBaseVNode, I as Fragment, aE as renderList, D as toDisplayString, cB as mkAction, bF as defined, cC as sendActions, k as ref, U as createBlock, b1 as withCtx, x as unref } from "./index.0bf009a8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "docs here", -1);
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row items-start" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocView",
  setup(__props) {
    const docChannel = createDocChannel();
    let childWindow = void 0;
    function open() {
      var _a;
      childWindow = (_a = window.open(
        window.location.origin + window.location.pathname + "?docDriven=true",
        "DocTarget",
        "left=400"
      )) != null ? _a : void 0;
      sendTopic();
    }
    const steps = [
      {
        text: "goto new expression button",
        action: mkAction("goto", { delay: 0.3, args: { elementId: "NewExprBtn" } })
      },
      {
        text: "click it",
        action: mkAction("click", {
          delay: 0.5,
          args: { elementId: "NewExprBtn" }
        })
      },
      {
        text: "goto new expression name input",
        action: mkAction("goto", {
          delay: 0.5,
          args: { elementId: "newExprInput" }
        })
      },
      {
        text: "enter a name",
        action: mkAction("type", {
          delay: 0.5,
          args: { elementId: "newExprInput", value: "RickRoll" }
        })
      },
      {
        text: "type a few more characters",
        action: mkAction("type", {
          delay: 0.5,
          args: { elementId: "newExprInput", value: "abcdefghilmnop" }
        })
      }
    ];
    function sendTopic() {
      docChannel.postMessage({ topic: "test topic" });
    }
    function doSteps(until) {
      const stopAt = Math.min(until, steps.length);
      const isOpen = defined(childWindow);
      if (isOpen) {
        childWindow.close();
      }
      open();
      if (defined(childWindow)) {
        childWindow.onload = () => {
          sendTopic();
          sendActions(docChannel, steps.slice(0, stopAt + 1));
        };
        return;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(QBtn, {
          label: "open",
          onClick: open
        }),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(steps, (step, idx) => {
            return createBaseVNode("div", { key: idx }, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", null, toDisplayString(step.text), 1),
                createBaseVNode("div", null, [
                  createVNode(QBtn, {
                    dense: "",
                    label: "showMe",
                    onClick: ($event) => doSteps(idx)
                  }, null, 8, ["onClick"])
                ])
              ])
            ]);
          }), 64))
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocLayout",
  setup(__props) {
    const leftDrawerOpen = ref(false);
    const leftDrawerMini = ref(false);
    const width = Math.max(window.innerWidth * 0.25, 300);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = true;
      leftDrawerMini.value = !leftDrawerMini.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "hHh lpR lFr" }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            elevated: "",
            class: "bg-transparent text-primary",
            "height-hint": "98"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-transparent" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    dense: "",
                    flat: "",
                    round: "",
                    icon: "menu",
                    onClick: toggleLeftDrawer
                  }),
                  createVNode(QToolbarTitle, {
                    class: "bg-transparent",
                    title: "Docs"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDrawer, {
            "show-if-above": "",
            modelValue: leftDrawerOpen.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leftDrawerOpen.value = $event),
            mini: leftDrawerMini.value,
            side: "left",
            elevated: "",
            width: unref(width),
            "mini-width": 120,
            behavior: "desktop"
          }, null, 8, ["modelValue", "mini", "width"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QFooter, {
            elevated: "",
            class: "bg-grey-8 text-white"
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
