export function capitalizeFirstLetter(string: string) {
    return string
        .split('-')
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')
}
