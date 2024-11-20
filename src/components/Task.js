export default function Task(content, checked, id) {
  const label = document.createElement("label");
  label.id = id;
  label.className =
    "label cursor-pointer " + (checked && " bg-red-100 rounded");

  const span = document.createElement("span");
  span.className = `label-text`;
  span.textContent = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-primary";

  label.appendChild(span);
  label.appendChild(input);

  return label;
}
