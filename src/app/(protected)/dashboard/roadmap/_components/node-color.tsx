export function nodeColor(node: any) {
  switch (node.type) {
    case "rectangle":
      return "#3b82f6";
    case "parallelogram":
      return "#fb923c";
    case "circle":
      return "#4ade80";
    case "ellipse":
      return "#c084fc";
    default:
      return "#ff0072";
  }
}
