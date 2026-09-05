export function Button(
    text,
    options = {}
) {

    const {
        id = "",
        className = "primary-btn"
    } = options;

    return `
        <button
            type="button"
            ${id ? `id="${id}"` : ""}
            class="${className}"
        >
            ${text}
        </button>
    `;
}