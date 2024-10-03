const monthMap: { [key: string]: string } = {
    january: '01',
    february: '02',
    march: '03',
    april: '04',
    may: '05',
    june: '06',
    july: '07',
    august: '08',
    september: '09',
    october: '10',
    november: '11',
    december: '12',
}

export const convertMonth = (month: string) => {
    month = month.toLowerCase()
    return monthMap[month] || ''
}

export const monthSelect = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
