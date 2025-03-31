export const SALE_VALUE = 30;
export const DISPLAY_SALE_VALUE = 70;
// export const SALE_DATE_VALUE = '31 марта';

function getNextTuesday(): string {
    const today = new Date();
    let nextTuesday = new Date(today);

    // Если сегодня вторник, берем следующий вторник
    let daysToAdd = today.getDay() === 2 ? 7 : (9 - today.getDay()) % 7;
    
    nextTuesday.setDate(today.getDate() + daysToAdd);

    // Опции для форматирования даты (указываем тип для TypeScript)
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
    return nextTuesday.toLocaleDateString("ru-RU", options);
}

export const SALE_DATE_VALUE: string = getNextTuesday();