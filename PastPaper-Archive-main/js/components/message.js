export function Message(
    text = "",
    type = ""
) {

    return `
        <p class="message ${type}">
            ${text}
        </p>
    `;
}