// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function praise(adj = "special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`;

    }
    
}