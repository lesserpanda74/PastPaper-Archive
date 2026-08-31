export function Button(
    text,
    {
        id = "",
        className = "primary-btn",
        type = "button"
    } = {}
) {

    return `
        <button
            type="${type}"
            ${id ? `id="${id}"` : ""}
            class="${className}"
        >
            ${text}
        </button>
    `;
}