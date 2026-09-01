// Shared Framer/motion variants — DESIGN spec's reusable "upgradeFade" scroll reveal,
// used by every client:visible section so animation stays consistent without
// re-declaring the same variant in every component.
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function staggerContainer(staggerChildren = 0.08) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren } },
  };
}
