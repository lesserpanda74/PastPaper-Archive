export function Progress(
    current,
    total
) {

    const percentage =
        total > 0
            ? (current / total) * 100
            : 0;

    return `
        <div class="progress">

            <span>
                ${current} / ${total}
            </span>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${percentage}%"
                ></div>

            </div>

        </div>
    `;
}