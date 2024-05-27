
export function generateDate(timestamp: string) {
    const date = new Date(timestamp);

    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}