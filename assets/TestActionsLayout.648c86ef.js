import { i as QBtn } from "./QBtn.f303d055.js";
import { n as QLayout, j as QToolbar, o as QToolbarTitle, p as QHeader, q as QDrawer, r as QPage, t as QPageContainer, v as QFooter } from "./QLayout.4d2c4661.js";
import { Q as QSelect } from "./QSelect.08a7fb2c.js";
import { a4 as defineComponent, cA as createDocChannel, k as ref, ay as openBlock, W as createElementBlock, a2 as createVNode, X as createBaseVNode, bF as defined, cD as unique, cE as sendAction, U as createBlock, b1 as withCtx, x as unref } from "./index.0bf009a8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "docs here", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestActions",
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
    const tgtIds = ref([]);
    function getTgtIds() {
      if (!defined(childWindow)) {
        return [];
      }
      const ids = Array.from(childWindow.document.querySelectorAll("[id]")).map(
        (el) => el.id
      );
      tgtIds.value = unique(ids);
    }
    const tgtId = ref("");
    function sendTopic() {
      docChannel.postMessage({ topic: "test topic" });
    }
    function goto() {
      sendAction(docChannel, "goto", {
        delay: 0,
        args: { elementId: tgtId.value }
      });
    }
    function sendClick() {
      sendAction(docChannel, "click", {
        delay: 0,
        args: { elementId: tgtId.value }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(QBtn, {
          label: "open",
          onClick: open
        }),
        createVNode(QBtn, {
          label: "set topic",
          onClick: sendTopic
        }),
        createVNode(QSelect, {
          modelValue: tgtId.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => tgtId.value = $event),
            goto
          ],
          options: tgtIds.value
        }, null, 8, ["modelValue", "options"]),
        createVNode(QBtn, {
          label: "get ids",
          onClick: getTgtIds
        }),
        createVNode(QBtn, {
          label: "click",
          onClick: sendClick
        })
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestActionsLayout",
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
