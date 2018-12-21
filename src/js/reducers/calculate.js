let total = 0;
let index = 0;
let numbers = [];
let isAddNumber = false;
let defaultState = {
    calculate: '',
    total: ''
}

const calculate = (state, action) => {
    switch(action.type){
        case 'ADD_NUMBER':
            isAddNumber = true;
            numbers[index] = numbers[index] ? numbers[index] + action.number : '' + action.number;
            defaultState['calculate'] = numbers.map((value) => {
                return isNaN(value) ? value : parseFloat(value).toLocaleString()
            }).join('');
            return Object.assign({}, defaultState)
        
        case 'ADD_OPRATOR':
            if(isAddNumber){
                index += 2;
                numbers.push(action.oprator);
                defaultState['calculate'] = numbers.map((value) => {
                    return isNaN(value) ? value : value.toLocaleString()
                }).join('');
                isAddNumber = false;
            }else if(action.oprator === '-'){
                numbers[index] = action.oprator;
            }
            return Object.assign({}, defaultState)

        case 'CALCULATE_TOTAL':
            let calculate = numbers.map((value) => {return value}).join('');
            defaultState['total'] = ''
            defaultState['calculate'] = eval(calculate).toLocaleString();
            numbers = [defaultState['calculate']];
            return Object.assign({}, defaultState)

        default:
            return defaultState
    }
}

export default calculate