/**
 * Portal target for popups on pages wrapped in an html-in-canvas effect.
 *
 * Popups portaled to `document.body` sit outside the `<canvas layoutsubtree>`
 * subtree, so the effect never captures them and they float, unaffected, above
 * the page. Rendering them inside the captured content element keeps them part
 * of the picture. The lookup is lazy (read on open), because the effect
 * wrapper flips between its native and fallback DOM after hydration.
 */
export const EFFECT_PORTAL_CONTAINER: React.RefObject<HTMLElement | null> = {
  get current() {
    if (typeof document === "undefined") return null;
    return document.querySelector<HTMLElement>("canvas[layoutsubtree] > div");
  },
};
