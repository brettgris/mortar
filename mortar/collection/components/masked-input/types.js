import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';
export default {
    'Date': {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
        guide: true,
        keepCharPositions: true,
        showMask: false
    },
    'Phone': {
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Money': {
        mask: createNumberMask({
            allowDecimal: true
        }),
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Percent': {
        mask: createNumberMask({
            integerLimit: 3,
            prefix: '',
            suffix: '%'
        }),
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Email': {
        mask: emailMask,
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Zipcode': {
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
        guide: false,
        keepCharPositions: false,
        showMask: false
    },
    'CreditCard': {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        guide: false,
        keepCharPositions: false,
        showMask: false
    }
};
