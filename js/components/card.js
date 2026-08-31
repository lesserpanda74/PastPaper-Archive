export function Card(content, className = "") {

    return `
        <div class="card ${className}">
            ${content}
        </div>
    `;
}